"use client"
import { ReactNode, createContext } from "react";
import { useState } from "react";
import sample1 from "../../public/sample1.png"
import sample2 from "../../public/sample2.png"
import { useEffect } from "react";

export const ProjectContext = createContext({
    record: {},
    loadRecord: () => {}
});

export const ProjectProvider = ({children}:{children: ReactNode}) => {
    const [record, setRecord] = useState({})

    //{name}:{name: string}
    const loadRecord = () => { 
        setRecord({
            "1100": "Experiment Name",
            "1101": "Implement a menu-driven C program for performing various operations on a linked list, including display, insertion at the beginning, end, and a specified position, as well as deletion from the beginning, end, and a specified position.",
            "1102":
                `
                 Start
                 Input the number of processes and resource types.
                 Input available resources, allocation matrix, and request matrix.
                 Initialize the work matrix.
                 For each process 'i', check if all its allocation entries are zero. If yes, set the corresponding 'finish' entry to 1.
                 Loop through all the processes and check if they can be executed:
                 Print the safe sequence.
                 Stop
                 `,
            "1103": [sample1, sample2],
            "1104": 
                  `#include <stdio.h>
                  
                  int main() {
                      int arr[] = {2, 3, 4, 10, 40};
                      int size = sizeof(arr) / sizeof(arr[0]);
                      int target = 10;
                      int result = binarySearch(arr, size, target);
                  
                      if (result != -1) {
                          printf("Element is present at index %d\\n", result);
                      } else {
                          printf("Element is not present in array\\n");
                      }
                  
                      return 0;
                  }
                  `,
            "1105": "Implement a menu-driven C program for performing various operations on a linked list, including display, insertion at the beginning, end, and a specified position, as well as deletion from the beginning, end, and a specified position."
        });
    }

    return (
        <ProjectContext.Provider 
            value = {{record, loadRecord}}
        >
            {children}
        </ProjectContext.Provider>
    )
}