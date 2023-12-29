import { runCommandVoid } from "./utils/second_utils";
import { closeMainWindow } from "@raycast/api";

export default async function Command() {
    const command = "yabai -m space --destroy"
    console.log(command)
    await runCommandVoid(command)
    await closeMainWindow();
}