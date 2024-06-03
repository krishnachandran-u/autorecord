from flask import Flask, request, send_file
import os
from shutil import rmtree
import json

app = Flask(__name__)
save_dir = './../.appdata/'
app.config['SAVE_DIR'] = save_dir

@app.route('/api/save', methods=['POST'])
def save_project():
    try:
        data = request.get_json()
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

@app.route('/api/load/<code>', methods=['GET'])
def load_project(code):
    try:
        dir = f"{app.config['SAVE_DIR']}/{code}"
        filename = code + '.json'
        json_path = os.path.join(dir, filename)

        data = {}

        with open(json_path, 'r') as f:
            data['content'] = json.load(f)

        images = []
        for image in os.listdir(dir):
            image_path = os.path.join(dir, image)
            if os.path.isfile(image_path) and image.lower.endswith(('.png', '.jpg', '.jpeg')):
                images.append({
                    "name" : image,
                    "data" : send_file(image_path, send_as_attachment=True)
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