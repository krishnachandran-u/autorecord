from flask import Flask, request
import os
from shutil import rmtree
import json

app = Flask(__name__)
save_dir = './../.appdata/'
app.config['SAVE_DIR'] = save_dir

@app.route('/api/save', methods=['POST'])
def save_json():
    try:
        data = request.get_json()
        dir = f"{app.config['SAVE_DIR']}/{data['code']}"
        filename = data['code'] + '.json'
        content = json.dumps(data, indent=4)  # Prettify the JSON
        
        if not os.path.exists(dir):
            os.makedirs(dir)
        
        with open(os.path.join(dir, filename), 'w') as f:
            f.write(content)

        return 'OK'
    except Exception as e:
        return str(e)

@app.route('/api/load/<code>', methods=['GET'])
def load_json(code):
    try:
        dir = f"{app.config['SAVE_DIR']}/{code}"
        filename = code + '.json'

        with open(os.path.join(dir, filename), 'r') as f:
            content = f.read()

        return content
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