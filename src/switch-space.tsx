import { List, ActionPanel, Action } from "@raycast/api"
import { getYabaiDisplaysNotAsync, switchYabaiSpace } from "./utils/utils";


export default function Command() {
    const items = getYabaiDisplaysNotAsync();

    return (
        <List>
        {items.map((space) => (
          <List.Item
            title={`${space.label} | ${space.index}`} 
            key={space.index}
            actions={
                <ActionPanel title="Change Space">
                    <Action title="Select" onAction={() => switchYabaiSpace(space.index)}></Action>
                </ActionPanel>
            }
            >
         </List.Item>
        ))}
      </List>
    )
}