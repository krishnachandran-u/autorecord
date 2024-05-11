# AutoRecord - Generate lab records with a single click

This is an open-source project. The authors provide this tool without any warranty and are not responsible for any academic consequences resulting from its use. Users are responsible for ensuring that generated records are accurate, complete, and comply with their institution's academic integrity policies.

## How to run

1. Clone the repository:
   ```
   git clone https://github.com/krishnachandran-u/autorecord.git && cd autorecord
   ```
2. Run 
    ```
    ./main.py
    ```

## Directory Structure

### Complete Record/Cycle Report

```
subject-name
├── 1 (cycle)
│   ├── 1 experiment-name
│   │   ├── 1 problem-name
│   │   │   ├── date.txt
│   │   │   ├── aim.txt
│   │   │   ├── algorithm.txt
│   │   │   ├── program.c
│   │   │   ├── output.png
│   │   │   └── result.txt
│   │   └── 2 another-problem-name
│   │       ├── date.txt
│   │       ├── aim.txt
│   │       ├── algorithm.txt
│   │       ├── program.c
│   │       ├── output.png
│   │       └── result.txt
│   └── 2 another-experiment-name
│       ├── date.txt
│       ├── aim.txt
│       ├── algorithm.txt
│       ├── program.c
│       ├── output.png
│       └── result.txt
└── 2 (cycle)
    ├── 1 experiment-name
    │   ├── date.txt
    │   ├── aim.txt
    │   ├── algorithm.txt
    │   ├── program.c
    │   ├── output.png
    │   └── result.txt
```
 - Replace `subject-name` with the required subject name. For example, `Operating Systems Lab`.
 - Replace `2` with the required cycle name. For example, `2 Sorting Algorithms`.
 - For multiple output images, create a folder `output` and add all images `1.png`, `2.png`, `3.png`... in the order in which they should be placed in the record.
 - Open `date.txt` and write the required date in it. For example, `1-1-2023`. It will be neglected if empty.

### Experiment Report

```
1-experiment-name
├── date.txt
├── aim.txt
├── algorithm.txt
├── program.c
├── output.png
└── result.txt

or

1 experiment-name
├── 1 problem-name
│   ├── date.txt
│   ├── aim.txt
│   ├── algorithm.txt
│   ├── program.c
│   ├── output.png
│   └── result.txt
└── 2 another-problem-name
    ├── date.txt
    ├── aim.txt
    ├── algorithm.txt
    ├── program.c
    ├── output.png
    └── result.txt
```
 - Replace `1` in `1-experiment-name` with the required experiment number. For example, `13-Binary Search Tree`.
 - For multiple output images, create a folder `output` and add all images `1.png`, `2.png`, `3.png`... in the order in which they should be placed in the record.
 - Open `date.txt` and write the required date in it. For example, `1-1-2023`. It will be neglected if empty.

### Experiment Output

```
1-experiment-name
├── date.txt
└── output.png

or

1-experiment-name
├── 1-problem-name
│   ├── date.txt
│   └── output.png
└── 2-another-problem-name
    ├── date.txt
    └── output.png
```
 - Replace `1` in `1-experiment-name` with the required experiment number. For example, `15-Merge Sort`.
 - For multiple output images, create a folder `output` and add all images `1.png`, `2.png`, `3.png`... in the order in which they should be placed in the record.
 - Open `date.txt` and write the required date in it. For example, `1-1-2023`. It will be neglected if empty.