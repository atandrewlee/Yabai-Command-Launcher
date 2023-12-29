import { runCommandVoid } from "./utils/second_utils";
import { closeMainWindow } from "@raycast/api";

export default async function Command() {
    const command = "yabai -m space --create && index=\"$(yabai -m query --displays --display | /opt/homebrew/bin/jq '.spaces[-1]')\" && yabai -m space --focus \"${index}\""
    console.log(command)
    await runCommandVoid(command)
    await closeMainWindow();
}