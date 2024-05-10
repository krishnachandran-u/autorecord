# AutoRecord - Generate lab records with a single click

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
│   │   ├── aim.txt
│   │   ├── algorithm.txt
│   │   ├── program.c
│   │   ├── output.png
│   │   └── result.txt
│   └── 2-another_experiment
│       ├── aim.txt
│       ├── algorithm.txt
│       ├── program.c
│       ├── output.png
│       └── result.txt
└── 2-cycle_name
    ├── 1-experiment_name
    │   ├── aim.txt
    │   ├── algorithm.txt
    │   ├── program.c
    │   ├── output.png
    │   └── result.txt
```
 - Replace `subject-name` with the required subject name. For example, `Operating Systems Lab`.
 - Replace `2-cycle_name` with the required cycle name. For example, `1-Cycle 1`.
 - For multiple output images, create a folder `output` and add all images `1.png`, `2.png`, `3.png`... in the order in which they should be placed in the record.

### Single Experiment Report

```
1-experiment_name
├── aim.txt
├── algorithm.txt
├── program.c
├── output.png
└── result.txt
```
 - Replace `1` in `1-experiment-name` with the required experiment number. For example, `13-Binary Search Tree`.
 - For multiple output images, create a folder `output` and add all images `1.png`, `2.png`, `3.png`... in the order in which they should be placed in the record.

### Output

```
1-experiment_name
└── output.png
```
 - Replace `1` in `1-experiment-name` with the required experiment number. For example, `15-Merge Sort`.
 - For multiple output images, create a folder `output` and add all images `1.png`, `2.png`, `3.png`... in the order in which they should be placed in the record.

## Additional Notes
- Ensure you have all necessary dependencies installed before building the project.
- Modify the `Makefile` if you need to customize the build process or compiler options.
- For troubleshooting and detailed build instructions, refer to the project documentation.
