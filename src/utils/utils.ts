import { Space, Preferences } from "./interfaces";
import { exec, ExecException } from 'node:child_process'
import { useEffect, useState } from "react";
import { getPreferenceValues, showToast } from "@raycast/api";

export async function runCommandVoid(command: string): Promise<void> {
    const preferences = getPreferenceValues<Preferences>();
    return new Promise((resolve, reject) => {
        const options = {
            env: {USER: `${preferences.userEnv}`}
        }
        exec(command, options, (error: ExecException | null, stdout: string, stderr: string) => {
            if (error) {
                console.error(`Error executing command: ${error.message}`);
                showToast({title: "Error executing command", message: `${error.message}`});
                reject(error)
                return;
              }
              if (stderr) {
                console.error(`Command had some errors: ${stderr}`);
                showToast({title: "Command had some errors", message: `${stderr}`});
                reject(error);
                return;
              }
            resolve();
        })
    })
}


export async function getYabaiDisplays(): Promise<Space[]> {
    const preferences = getPreferenceValues<Preferences>();
    return new Promise((resolve, reject) => {
        const command = 'yabai -m query --spaces';
        const options = {
            env: {USER: preferences.userEnv}
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
    const preferences = getPreferenceValues<Preferences>();
    return new Promise((resolve, reject) => {
        const command = `yabai -m space ${index} --label ${newLabel}`;
        const options = {
            env: {USER: preferences.userEnv}
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

export async function switchYabaiSpace(index: number): Promise<string> {
    const preferences = getPreferenceValues<Preferences>();
    return new Promise((resolve, reject) => {
        const command = `yabai -m space --focus ${index}`;
        const options = {
            env: {USER: preferences.userEnv}
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
