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

### Complete Record

```
subject_name
├── 1-cycle_name
│   ├── 1-experiment_name
│   │   ├── date.txt
│   │   ├── aim.txt
│   │   ├── algorithm.txt
│   │   ├── program.c
│   │   ├── output.png
│   │   └── result.txt
│   └── 2-another_experiment
│   │   ├── date.txt
│       ├── aim.txt
│       ├── algorithm.txt
│       ├── program.c
│       ├── output.png
│       └── result.txt
└── 2-cycle_name
    ├── 1-experiment_name
│   │   ├── date.txt
    │   ├── aim.txt
    │   ├── algorithm.txt
    │   ├── program.c
    │   ├── output.png
    │   └── result.txt
```
 - Replace `subject-name` with the required subject name. For example, `Operating Systems Lab`.
 - Replace `2-cycle_name` with the required cycle name. For example, `1-Cycle 1`.
 - For multiple output images, create a folder `output` and add all images `1.png`, `2.png`, `3.png`... in the order in which they should be placed in the record.
 - Open `date.txt` and write the required date in it. For example, `1-1-2023`. It will be neglected if empty.

### Single Experiment Report

```
1-experiment_name
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

### Output

```
1-experiment_name
├── date.txt
└── output.png
```
 - Replace `1` in `1-experiment-name` with the required experiment number. For example, `15-Merge Sort`.
 - For multiple output images, create a folder `output` and add all images `1.png`, `2.png`, `3.png`... in the order in which they should be placed in the record.
 - Open `date.txt` and write the required date in it. For example, `1-1-2023`. It will be neglected if empty.