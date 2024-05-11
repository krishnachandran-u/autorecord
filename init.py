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
    # inquirer.Text("subject", message = "input the subject name"),
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
        subject = input("input the subject name: ")
        os.mkdir(f"./src/{answers['subject']}") 
        cycles = input("number of cycles: ")

        for i in range(int(cycles)):
            os.mkdir(f"./src/{answers['subject']}/{str(i + 1)}")
            exps = input("number of experiments in cycle " + str(i + 1) + ": ")

            for j in range(int(exps)):
                expName = input("name of experiment " + str(j + 1) + ": ")
                os.mkdir(f"./src/{answers['subject']}/{str(i + 1)}/{str(j + 1)} {expName}")

                problems = input("number of problems in experiment " + str(j + 1) + ": ")

                if(int(problems) == 0):
                    for file in completeRecordFiles:
                        with open(f"./src/{answers['subject']}/{str(i + 1)}/{str(j + 1)} {expName}/{file}.txt", "w") as f:
                            pass
                else: 
                    for k in range(int(problems)):
                        problemName = input("name of problem " + str(k + 1) + ": ")
                        os.mkdir(f"./src/{answers['subject']}/{str(i + 1)}/{str(j + 1)} {expName}/{str(k + 1)} {problemName}")

                        for file in completeRecordFiles:
                            with open(f"./src/{answers['subject']}/{str(i + 1)}/{str(j + 1)} {expName}/{str(k + 1)} {problemName}/{file}.txt", "w") as f:
                                pass
    elif answers["type"] == "experiment report":
        expNo = input("serial number of experiment: ")
        expName = input("name of experiment: ")
        os.mkdir(f"./src/{answers['subject']}/{expNo} {expName}")

        problems = input("number of problems in experiment: ")

        if(int(problems) == 0):
            for file in completeRecordFiles:
                with open(f"./src/{answers['subject']}/{expNo} {expName}/{file}.txt", "w") as f:
                    pass
        else:
            for i in range(int(problems)):
                problemName = input("name of problem " + str(i + 1) + ": ")
                os.mkdir(f"./src/{answers['subject']}/{expNo} {expName}/{str(i + 1)} {problemName}")

                for file in completeRecordFiles:
                    with open(f"./src/{answers['subject']}/{expNo} {expName}/{str(i + 1)} {problemName}/{file}.txt", "w") as f:
                        pass

    elif answers["type"] == "experiment output":
        expNo = input("serial number of experiment: ")
        expName = input("name of experiment: ")
        os.mkdir(f"./src/{answers['subject']}/{expNo} {expName}")

        problems = input("number of problems in experiment: ")

        if(int(problems) == 0):
            with open(f"./src/{answers['subject']}/{expNo} {expName}/date.txt", "w") as f:
                pass
        else:
            for i in range(int(problems)):
                problemName = input("name of problem " + str(i + 1) + ": ")
                os.mkdir(f"./src/{answers['subject']}/{expNo} {expName}/{str(i + 1)} {problemName}")

                with open(f"./src/{answers['subject']}/{expNo} {expName}/{str(i + 1)} {problemName}/date.txt", "w") as f:
                    pass


                
                

