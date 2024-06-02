from flask import Flask, request
import os
import json

app = Flask(__name__)
save_dir = './../appdata/'
app.config['SAVE_DIR'] = save_dir

@app.route('/save', methods=['POST'])
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

@app.route('/load/<code>', methods=['GET'])
def load_json(code):
    try:
        dir = f"{app.config['SAVE_DIR']}/{code}"
        filename = code + '.json'

        with open(os.path.join(dir, filename), 'r') as f:
            content = f.read()

        return content
    except Exception as e:
        return str(e)

if __name__ == '__main__':
    app.run(debug=True)