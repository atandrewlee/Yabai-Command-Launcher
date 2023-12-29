import { runCommandVoid } from "./utils/utils";
import { closeMainWindow } from "@raycast/api";

export default async function Command() {
    const command = "yabai -m space --destroy"
    await runCommandVoid(command)
    await closeMainWindow();
}