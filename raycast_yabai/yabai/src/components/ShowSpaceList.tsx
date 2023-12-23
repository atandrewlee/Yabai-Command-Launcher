import { List, Action } from "@raycast/api"
import { Space } from "../utils/interfaces"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function ShowSpaceList(props: {items: Space[], target: (space: Space) => any}) {
    return (
        <List>
        {props.items.map((space) => (
          <List.Item
            title={`${space.label} | ${space.index}`}
            key={space.index}
            actions={<Action.Push title="Select Space" target={props.target(space)}></Action.Push>}>
         </List.Item>
        ))}
      </List>
    );
}