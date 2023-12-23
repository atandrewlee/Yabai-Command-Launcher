import { Form, Action, useNavigation, ActionPanel } from "@raycast/api";
import { Space, FormValue } from "../utils/interfaces";
import { renameYabaiSpace } from "../utils/utils";

export default function RenameSpaceForm(props: {space: Space}) {
    const { pop } = useNavigation()

    async function renameSpace(noteProps: FormValue, index: number) {
        await renameYabaiSpace(noteProps.newLabel, index)
        pop();
    }


    return (
        <Form
            actions={
                <ActionPanel>
                    <Action.SubmitForm title="Change Space" onSubmit={(p: FormValue) => renameSpace(p, props.space.index)} />
                </ActionPanel>
                
            }>
            <Form.TextField
                id="newLabel"
                title="New Space Label"
                placeholder="New space label">
            </Form.TextField>
        </Form>
    )
}