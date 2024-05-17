import sample1 from "../../public/sample1.png"
import sample2 from "../../public/sample2.png"

export const dummyProjectData = {
    "name": "Binary Search",
    "cycles" : [
        {
            "name": "Cycle 1",
            "experiments": [
                {
                    "name": "Experiment 1",
                    "hasSubProblems": true,
                    "src": {
                        "aim": "Aim",
                        "algorithm": "Algorithm",
                        "program": "Program",
                        "output": [
                            sample1,
                            sample2
                        ],
                        "result": "Result"
                    },
                    "problems" : [
                        {
                            "name": "Problem 1",
                            "src": {
                                "aim": "Aim",
                                "algorithm": "Algorithm",
                                "program": "Program",
                                "output": [
                                    sample1,
                                    sample2
                                ],
                                "result": "Result"
                            },
                        },
                        {
                            "name": "Problem 2",
                            "src": {
                                "aim": "Aim",
                                "algorithm": "Algorithm",
                                "program": "Program",
                                "output": [
                                    sample1,
                                    sample2
                                ],
                                "result": "Result"
                            },
                            "problems" : []
                        }
                    ],
                },
                {
                    "name": "Experiment 2",
                    "hasSubProblems": false,
                    "src": {
                        "aim": "Aim",
                        "algorithm": "Algorithm",
                        "program": "Program",
                        "output": [
                            sample1,
                            sample2
                        ],
                        "result": "Result"
                    },
                    "problems" : []
                }
            ]
        },
        {
            "name": "Cycle 2",
            "experiments": [
                {
                    "name": "Experiment 3",
                    "hasSubProblems": false,
                    "src": {
                        "aim": "Aim",
                        "algorithm": "Algorithm",
                        "program": "Program",
                        "output": [
                            sample1,
                            sample2
                        ],
                        "result": "Result"
                    },
                    "problems" : []
                },
                {
                    "name": "Experiment 4",
                    "hasSubProblems": false,
                    "src": {
                        "aim": "Aim",
                        "algorithm": "Algorithm",
                        "program": "Program",
                        "output": [
                            sample1,
                            sample2
                        ],
                        "result": "Result"
                    },
                    "problems" : []
                }
            ]
        },
        {
            "name": "Cycle 3",
            "experiments": [
                {
                    "name": "Experiment 1",
                    "hasSubProblems": true,
                    "src": {
                        "aim": "Aim",
                        "algorithm": "Algorithm",
                        "program": "Program",
                        "output": [
                            sample1,
                            sample2
                        ],
                        "result": "Result"
                    },
                    "problems" : [
                        {
                            "name": "Problem 1",
                            "src": {
                                "aim": "Aim",
                                "algorithm": "Algorithm",
                                "program": "Program",
                                "output": [
                                    sample1,
                                    sample2
                                ],
                                "result": "Result"
                            },
                        },
                        {
                            "name": "Problem 2",
                            "src": {
                                "aim": "Aim",
                                "algorithm": "Algorithm",
                                "program": "Program",
                                "output": [
                                    sample1,
                                    sample2
                                ],
                                "result": "Result"
                            },
                            "problems" : []
                        }
                    ],
                },
                {
                    "name": "Experiment 4",
                    "hasSubProblems": false,
                    "src": {
                        "aim": "Aim",
                        "algorithm": "Algorithm",
                        "program": "Program",
                        "output": [
                            sample1,
                            sample2
                        ],
                        "result": "Result"
                    },
                    "problems" : []
                }
            ]
        }
    ]
}
