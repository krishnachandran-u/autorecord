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
### Single Experiment Report

```
1-experiment_name
├── aim.txt
├── algorithm.txt
├── program.c
├── output.png
└── result.txt
```

### Output
```
1-experiment_name
└── output.png
```

## Additional Notes
- Ensure you have all necessary dependencies installed before building the project.
- Modify the `Makefile` if you need to customize the build process or compiler options.
- For troubleshooting and detailed build instructions, refer to the project documentation.
