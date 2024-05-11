import inquirer
import json
import os
from pprint import pprint

global answers
answers = {}

def list_folders(path):
    return [item for item in os.listdir(path) if os.path.isdir(os.path.join(path, item))]

questions = [
    inquirer.List("src", message="Choose the source directory", choices=list_folders("./src")),
]

if __name__ == "__main__":
    answers = inquirer.prompt(questions)

    options = {}

    with open(f"./src/{answers['src']}/options.json", "r") as json_file:
        options = json.load(json_file)
    
    if(options["type"] == "complete record"):
        print("complete record")
    if(options["type"] == "experiment report"):
        print("experiment report")
    if(options["type"] == "experiment output"):
        print("experiment output")