import { Space } from "./interfaces";
import { exec, ExecException } from 'node:child_process'
import { useEffect, useState } from "react";

export async function getYabaiDisplays(): Promise<Space[]> {
    return new Promise((resolve, reject) => {
        const command = 'yabai -m query --spaces';
        const options = {
            env: {USER: 'andrewlee'}
        }
        exec(command, options, (error: ExecException | null, stdout: string, stderr: string) => {
            if (error) {
                console.error(`Error executing command: ${error.message}`);
                reject(error)
                return;
              }
            
              if (stderr) {
                console.error(`Command had some errors: ${stderr}`);
                reject(error);
                return;
              }
            const out: Space[] = JSON.parse(stdout) 
            resolve(out);
        })
    })
}

export function getYabaiDisplaysNotAsync(): Space[] {
    const [state, setState] = useState<Space[]>([])

    useEffect(() => {
        getYabaiDisplays().then((output) => {
            setState(output)
        }).catch((error) => {
            console.error(error);
        }); 
    }, []);
    return state;
}

export async function renameYabaiSpace(newLabel: string, index: number): Promise<string> {
    return new Promise((resolve, reject) => {
        const command = `yabai -m space ${index} --label ${newLabel}`;
        const options = {
            env: {USER: 'andrewlee'}
        }
        exec(command, options, (error: ExecException | null, stdout: string, stderr: string) => {
            if (error) {
                console.error(`Error executing command: ${error.message}`);
                reject(error)
                return;
              }
            
              if (stderr) {
                console.error(`Command had some errors: ${stderr}`);
                reject(error);
                return;
              }
            resolve(stdout);
        })
    })
}

export function renameYabaiSpaceNotAsync(newLabel: string, index: number): void {
    
    renameYabaiSpace(newLabel, index).then((output) => {
        console.log(output)
    }).catch((error) => {
        console.error(error)
    });
}

// console.log(renameYabaiSpaceNotAsync('ashley', 1))