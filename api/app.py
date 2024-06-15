from flask import Flask, request, send_file
from flask_cors import CORS
import os
from shutil import rmtree, copytree, copy
import json
import base64

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

@app.route('/api/download/<code>', methods=['GET'])
def download_project(code):
    try:
        if not os.path.exists(f"{app.config['SAVE_DIR']}/{code}"):
            return 'Project not found'

        dir = f"{app.config['TEMP_DIR']}/{code}" 
        copytree(app.config['TEMPLATE_DIR'], dir)
        for file in os.listdir(f"{app.config['SAVE_DIR']}/{code}"):
            if not file.endswith('.json'):
                file_path = os.path.join(f"{app.config['SAVE_DIR']}/{code}", file)
                if os.path.isfile(file_path):
                    copy(file_path, dir)

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

        return 'OK'
    except Exception as e:
        return str(e)

@app.route('/api/list', methods=['GET'])
def list_json():
    try:
        projects = os.listdir(app.config['SAVE_DIR'])
        
        return json.dumps(projects)
    except Exception as e:
        return str(e)

@app.route('/api/health', methods=['GET'])
def health_check():
    return 'OK'

if __name__ == '__main__':
    app.run(debug=True)