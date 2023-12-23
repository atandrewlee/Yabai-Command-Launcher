import { List, Action, ActionPanel } from "@raycast/api"
import { Space } from "../utils/interfaces"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function ShowSpaceList(props: {items: Space[], target: (space: Space) => any}) {
    return (
        <List>
        {props.items.map((space) => (
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

// actions={}