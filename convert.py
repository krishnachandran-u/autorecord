import inquirer
import os
from pprint import pprint

global answers
answers = {}

def list_folders(path):
    return [item for item in os.listdir(path) if os.path.isdir(os.path.join(path, item))]

questions = [
    inquirer.List("type", message="What do you want to do?", choices=["complete record", "experiment report", "experiment output"]),
    inquirer.List("src", message="Choose the source directory", choices=list_folders("./src")),
]

if __name__ == "__main__":
    answers = inquirer.prompt(questions)
    pprint(answers)