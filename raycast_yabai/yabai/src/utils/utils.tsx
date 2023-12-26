import { closeMainWindow } from "@raycast/api";
import { Space, Window } from "./interfaces";
import { exec, ExecException } from "node:child_process";
import { useEffect, useState } from "react";

export async function getYabaiDisplays(): Promise<Space[]> {
  return new Promise((resolve, reject) => {
    const command = "yabai -m query --spaces";
    const options = {
      env: { USER: "andrewlee" },
    };
    exec(command, options, (error: ExecException | null, stdout: string, stderr: string) => {
      if (error) {
        console.error(`Error executing command: ${error.message}`);
        reject(error);
        return;
      }

      if (stderr) {
        console.error(`Command had some errors: ${stderr}`);
        reject(error);
        return;
      }
      const out: Space[] = JSON.parse(stdout);
      resolve(out);
    });
  });
}

export function getYabaiDisplaysNotAsync(): Space[] {
  const [state, setState] = useState<Space[]>([]);

  useEffect(() => {
    getYabaiDisplays()
      .then((output) => {
        setState(output);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return state;
}

export async function renameYabaiSpace(newLabel: string, index: number): Promise<string> {
  return new Promise((resolve, reject) => {
    const command = `yabai -m space ${index} --label ${newLabel}`;
    const options = {
      env: { USER: "andrewlee" },
    };
    exec(command, options, (error: ExecException | null, stdout: string, stderr: string) => {
      if (error) {
        console.error(`Error executing command: ${error.message}`);
        reject(error);
        return;
      }

      if (stderr) {
        console.error(`Command had some errors: ${stderr}`);
        reject(error);
        return;
      }
      resolve(stdout);
    });
  });
}

export function renameYabaiSpaceNotAsync(newLabel: string, index: number): void {
  renameYabaiSpace(newLabel, index)
    .then((output) => {
      console.log(output);
    })
    .catch((error) => {
      console.error(error);
    });
}

export async function switchYabaiSpace(index: number): Promise<string> {
  await closeMainWindow();
  return new Promise((resolve, reject) => {
    const command = `yabai -m space --focus ${index}`;
    const options = {
      env: { USER: "andrewlee" },
    };
    exec(command, options, (error: ExecException | null, stdout: string, stderr: string) => {
      if (error) {
        console.error(`Error executing command: ${error.message}`);
        reject(error);
        return;
      }

      if (stderr) {
        console.error(`Command had some errors: ${stderr}`);
        reject(error);
        return;
      }
      resolve(stdout);
    });
  });
}

export function switchYabaiSpaceNotAsync(index: number): void {
  switchYabaiSpace(index)
    .then((output) => {
      console.log(output);
    })
    .catch((error) => {
      console.error(error);
    });
}

export async function queryWindow(id: number): Promise<Window> {
  return new Promise((resolve, reject) => {
    const command = `yabai -m query --windows --window ${id}`;
    const options = {
      env: { USER: "andrewlee" },
    };
    exec(command, options, (error: ExecException | null, stdout: string, stderr: string) => {
      if (error) {
        console.error(`Error executing command: ${error.message}`);
        reject(error);
        return;
      }

      if (stderr) {
        console.error(`Command had some errors: ${stderr}`);
        reject(error);
        return;
      }
      const out: Window = JSON.parse(stdout);
      resolve(out);
    });
  });
}

export function listWindowsInSpace(space: Space) {
  return space.windows.map((windowId) => {
    queryWindow(windowId)
      .then((output) => {
        return `${output.app} | ${output.title}`;
      })
      .catch((error) => {
        console.error(error);
      });
  });
}

const exampleSpace: Space = {
    "id":230,
    "uuid":"C01FAC9F-4D17-485B-83F0-240B47FECA0F",
    "index":1,
    "label":"code",
    "type":"bsp",
    "display":1,
    "windows":[33893, 68526, 136891],
    "first-window":68526,
    "last-window":33893,
    "has-focus":true,
    "is-visible":true,
    "is-native-fullscreen":false
}

// listWindowsInSpace(exampleSpace);
