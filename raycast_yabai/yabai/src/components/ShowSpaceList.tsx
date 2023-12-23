import { List, Action, ActionPanel } from "@raycast/api"
import { Space } from "../utils/interfaces"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function ShowSpaceList(props: {spaceList: Space[], target: (space: Space) => any}) {
    /**
     * Display the list of spaces in order of <label> | <index>
     * 
     * @param props: All Params are in props; look below for content in props
     * @param { Space[] } spaceList: all the spaces queried from Yabai
     * @param { (space: Space) => Any } target: Function to run on which space
     */
    return (
        <List>
        {props.spaceList.map((space) => (
          <List.Item
            title={`${space.label} | ${space.index}`} 
            key={space.index}
            actions={
                <ActionPanel title="Rename Space">
                    <Action.Push title="Select Space" target={props.target(space)}></Action.Push>
                </ActionPanel>
            }>
         </List.Item>
        ))}
      </List>
    );
}
