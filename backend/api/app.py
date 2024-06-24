from flask import Flask, request, send_file
from flask_cors import CORS
import os
from shutil import rmtree, copytree, copy, make_archive
import json
import base64
import datetime

app = Flask(__name__)
CORS(app, support_credentials=True)

save_dir = './../.appdata/'
temp_dir = './../.temp/'
template_dir = './../template/'

app.config['SAVE_DIR'] = save_dir
app.config['TEMP_DIR'] = temp_dir
app.config['TEMPLATE_DIR'] = template_dir

@app.route('/api/save', methods=['POST'])
def save_project():
    try:
        data = json.loads(request.form.get('json_data'))
        images = request.files.getlist('images')

        dir = f"{app.config['SAVE_DIR']}/{data['code']}"
        filename = data['code'] + '.json'
        content = json.dumps(data, indent=4)  # Prettify the JSON
        
        if not os.path.exists(dir):
            os.makedirs(dir)
        
        with open(os.path.join(dir, filename), 'w') as f:
            f.write(content)

        for image in images:
            image_path = os.path.join(dir, image.filename)
            image.save(image_path)

        return 'OK'
    except Exception as e:
        return str(e)

def is_valid_date(date):
    try:
        datetime.datetime.strptime(date, '%Y-%m-%d')
        return True
    except ValueError:
        return False

@app.route('/api/download/<code>', methods=['GET'])
def download_project(code):
    try:
        if not os.path.exists(f"{app.config['SAVE_DIR']}/{code}"):
            return 'Project not found'

        dir = f"{app.config['TEMP_DIR']}/{code}"
        if os.path.exists(dir):
            rmtree(dir)
        copytree(app.config['TEMPLATE_DIR'], dir)
        for file in os.listdir(f"{app.config['SAVE_DIR']}/{code}"):
            if not file.endswith('.json'):
                file_path = os.path.join(f"{app.config['SAVE_DIR']}/{code}", file)
                if os.path.isfile(file_path):
                    copy(file_path, dir)

        json_file = f"{app.config['SAVE_DIR']}/{code}/{code}.json"
        with open(json_file, 'r') as f:
            json_data = json.load(f)
        
        latex_file = f"{dir}/main.tex"
        with open(latex_file, 'r') as f:
            latex_content = f.read()

        if json_data['enforceTimes']:
            first_line, rest_of_content = latex_content.split("\n", 1)
            new_latex_content = first_line + "\n\\usepackage{times}\n" + rest_of_content
            latex_content = new_latex_content 
        
        latex_content = latex_content.replace('subjectName', json_data['name'])
        latex_content = latex_content.replace('studentName', json_data['studentName'])
        latex_content = latex_content.replace('submissionDate', json_data['date'])
        
        with open(latex_file, 'w') as f:
            f.write(latex_content)

        with open(latex_file, 'a') as f:
            for cycleId, cycle in enumerate(json_data['cycles']):
                f.write(
                    f"\\part*{{Cycle {cycleId + 1}}}\n"
                    f"\\addcontentsline{{toc}}{{part}}{{Cycle {cycleId + 1}}}\n"
                )
                for expId, exp in enumerate(cycle['experiments']):
                    f.write(f"\\newpage\n")    
                    if is_valid_date(exp['date']):
                        formatted_date = datetime.datetime.strptime(exp['date'], '%Y-%m-%d').strftime('%d %b %Y')
                        f.write(
                            f"\\ihead{{\\normalfont \\rightmark \\newline {formatted_date}}}\n"
                        )
                    f.write(f"\\chapter{{{exp['name']}}}\n")

                    if(exp['hasSubProblems'] == True):
                        for probId, prob in enumerate(exp['problems']):
                            f.write(f"\\section{{{prob['name']}}}\n")
                            if prob['src']['aim'] != "":
                                prob['src']['aim'] = str(prob['src']['aim']).replace('<', '\\textless').replace('>', '\\textgreater').replace('_', ' ')
                                f.write(
                                    f"\\subsection{{Aim}}"
                                    f"{(prob['src']['aim'])}\n"
                                )

                            if prob['src']['algorithm'] != "":
                                prob['src']['algorithm'] = str(prob['src']['algorithm']).replace('<', '\\textless').replace('>', '\\textgreater').replace('_', ' ')
                                f.write(f"\\subsection{{Algorithm}}")
                                f.write(f"\\begin{{enumerate}}\n")
                                algorithm_components = [component.strip("0123456789.- ").strip() for component in str(prob['src']['algorithm']).split('\n') if component.strip("0123456789.- ").strip()]
                                for component in algorithm_components:
                                    f.write(f"\\item {component}\n")
                                f.write(f"\\end{{enumerate}}\n")
                            
                            if prob['src']['program'] != "":
                                f.write(f"\\subsection{{Program}}\n")
                                if(json_data['monospace']): f.write(f"\\begin{{verbatim}}\n")
                                else: f.write("\\begin{{lstlisting}}")
                                f.write(f"{prob['src']['program']}\n")
                                if(json_data['monospace']): f.write(f"\\end{{verbatim}}\n")
                                else: f.write("\\end{{lstlisting}}")

                            if prob['src']['output']:
                                f.write(f"\\subsection{{Output}}\n")
                                for output in prob['src']['output']:
                                    f.write(
                                        f"\\begin{{figure}}[H]\n"
                                        f"\\centering\n"
                                        f"\\includegraphics[width=0.60\linewidth]{{./{output}}}\n"
                                        f"\\end{{figure}}\n"
                                    )

                            if prob['src']['result'] != "":
                                prob['src']['result'] = str(prob['src']['result']).replace('<', '\\textless').replace('>', '\\textgreater').replace('_', ' ')
                                f.write(
                                    f"\\subsection{{Result}}\n"
                                    f"{prob['src']['result']}\n"
                                )
                    else:
                        f.write(f"\\section{{{exp['name']}}}\n")
                        if exp['src']['aim'] != "":
                            exp['src']['aim'] = str(exp['src']['aim']).replace('<', '\\textless').replace('>', '\\textgreater').replace('_', ' ')
                            f.write(
                                f"\\subsection{{Aim}}"
                                f"{exp['src']['aim']}\n"
                            )
    
                        if exp['src']['algorithm'] != "":
                            exp['src']['algorithm'] = str(exp['src']['algorithm']).replace('<', '\\textless').replace('>', '\\textgreater').replace('_', ' ')
                            f.write(f"\\subsection{{Algorithm}}")
                            f.write(f"\\begin{{enumerate}}\n")
                            algorithm_components = [component.strip("0123456789.- ").strip() for component in str(exp['src']['algorithm']).split('\n') if component.strip("0123456789.- ").strip()]
                            for component in algorithm_components:
                                f.write(f"\\item {component.replace('_', ' ')}\n")
                            f.write(f"\\end{{enumerate}}\n")
    
                        if exp['src']['program'] != "":
                            f.write(f"\\subsection{{Program}}\n")
                            if(json_data['monospace']): f.write(f"\\begin{{verbatim}}\n")
                            else: f.write("\\begin{{lstlisting}}")
                            f.write(f"{exp['src']['program']}\n")
                            if(json_data['monospace']): f.write(f"\\end{{verbatim}}\n")
                            else: f.write("\\end{{lstlisting}}")
    
                        if exp['src']['output']:
                            f.write(f"\\subsection{{Output}}\n")
                            for output in exp['src']['output']:
                                f.write(
                                    f"\\begin{{figure}}[H]\n"
                                    f"\\centering\n"
                                    f"\\includegraphics[width=0.60\linewidth]{{./{output}}}\n"
                                    f"\\end{{figure}}\n"
                                )
    
                        if exp['src']['result'] != "":
                            exp['src']['result'] = str(exp['src']['result']).replace('<', '\\textless').replace('>', '\\textgreater').replace('_', ' ')
                            f.write(
                                f"\\subsection{{Result}}\n"
                                f"{exp['src']['result']}\n"
                            )
            f.write(f"\\end{{document}}")
       
        zip_file = f"{app.config['TEMP_DIR']}/{code}"
        make_archive(zip_file, 'zip', f"{app.config['TEMP_DIR']}/{code}")
        
        print("successfully converted to zip")
        return send_file(f"{zip_file}.zip", as_attachment=True)

    except Exception as e:
        return str(e)

@app.route('/api/clean', methods=['DELETE'])
def clean_temp():
    try:
        rmtree(app.config['TEMP_DIR'])
        return 'OK'
    except Exception as e:
        return str(e)

@app.route('/api/load/<code>', methods=['GET'])
def load_project(code):
    try:
        dir = f"{app.config['SAVE_DIR']}/{code}"
        filename = code + '.json'
        json_path = os.path.join(dir, filename)

        data = {}

        with open(json_path, 'r') as f:
            data['json_data'] = json.load(f)

        images = []
        for image in os.listdir(dir):
            image_path = os.path.join(dir, image)
            if os.path.isfile(image_path) and str(image).lower().endswith(('.png', '.jpg', '.jpeg')):
                with open(image_path, 'rb') as img_file:
                    images.append({
                        "name" : image,
                        "data" : base64.b64encode(img_file.read()).decode('utf-8')
                    })

        data['images'] = images
        return data

    except Exception as e:
        return str(e)

@app.route('/api/delete/<code>', methods=['DELETE'])
def delete_json(code):
    try:
        dir = f"{app.config['SAVE_DIR']}/{code}"

        if os.path.exists(dir):
            rmtree(dir)
        
        print(code)

        return 'OK'
    except Exception as e:
        return str(e)

@app.route('/api/list', methods=['GET'])
def list_json():
    try:
        if os.path.exists(app.config['SAVE_DIR']):
            projects = os.listdir(app.config['SAVE_DIR'])
            return json.dumps(projects)
        else: 
            return json.dumps([])

    except Exception as e:
        return str(e)

@app.route('/api/health', methods=['GET'])
def health_check():
    return 'OK'

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)