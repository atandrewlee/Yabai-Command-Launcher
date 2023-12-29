import { runCommandVoid } from "./utils/utils";
import { closeMainWindow, getPreferenceValues } from "@raycast/api";
import { Preferences } from "./utils/interfaces";

export default async function Command() {
    const preferences = getPreferenceValues<Preferences>();
    const command = `yabai -m space --create && index="$(yabai -m query --displays --display | ${preferences.jqLocation} '.spaces[-1]')"` +  "&& yabai -m space --focus \"${index}\""
    await runCommandVoid(command)
    await closeMainWindow();
}