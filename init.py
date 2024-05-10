import inquirer
from pprint import pprint

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
    inquirer.Confirm("hasMonospace", message = "use monospace font for code blocks"),
    inquirer.Confirm("hasLineNumber", message = "use line numbers for code blocks")
]

answers = []

if __name__ == "__main__":
    answers = inquirer.prompt(questions)
    print(answers)

