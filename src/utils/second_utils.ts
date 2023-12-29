import { showToast, getPreferenceValues } from "@raycast/api";
import { exec, ExecException } from 'node:child_process'
import { Preferences } from "./interfaces";

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