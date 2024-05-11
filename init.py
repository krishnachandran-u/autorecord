import inquirer
import atexit
import os
from inquirer.themes import GreenPassion
from pprint import pprint
import shutil

questions = [
    inquirer.List("type", message ="choose the type", choices = [
        "complete record", 
        "experiment report", 
        "experiment output"
    ]),
    inquirer.Text("subject", message = "input the subject name"),
    inquirer.List("fontFamily", message = "choose the font family", choices = [
        "default",
        "times",
        "palatino",
        "helvet"
    ]),
    inquirer.Confirm("code", message = "use monospace font and line numbers for code blocks"),
]

global answers
answers = dict()

def exit_handler():
    if "subject" in answers and os.path.exists("./src/" + answers["subject"]):
        shutil.rmtree("./src/" + answers["subject"])
    return

completeRecordFiles = [
    "date",
    "aim",
    "algorithm",
    "program",
    "result"
]

if __name__ == "__main__":
    # atexit.register(exit_handler)

    answers = inquirer.prompt(questions, theme=GreenPassion())
    pprint(answers)

    if answers["type"] == "complete record": 
        os.mkdir(f"./src/{answers['subject']}") 
        cycles = input("number of cycles: ")

        for i in range(int(cycles)):
            os.mkdir(f"./src/{answers['subject']}/{str(i + 1)}")
            exps = input("number of experiments in cycle " + str(i + 1) + ": ")

            for j in range(int(exps)):
                expName = input("name of experiment " + str(j + 1) + ": ")
                os.mkdir(f"./src/{answers['subject']}/{str(i + 1)}/{str(j + 1)} {expName}")

                for file in completeRecordFiles:
                    with open(f"./src/{answers['subject']}/{str(i + 1)}/{str(j + 1)} {expName}/{file}.txt", "w") as f:
                        pass
                
                

