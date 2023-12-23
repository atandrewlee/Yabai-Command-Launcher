import { Form, Action } from "@raycast/api";
import { Space, FormValue } from "../utils/interfaces";

export default function RenameSpaceForm(props: {space: Space}) {

    async function renameSpace(noteProps: FormValue, index: number) {
        await 
    }


    return (
        <Form
            actions={
                <Action.SubmitForm title="Change Space" onSubmit={(p: FormValue) => renameSpace(p, props.space.index)} />
            }
        >
            <Form.TextField
                id="newLabel"
                title="New Space Label"
                placeholder="New space label">
            </Form.TextField>
        </Form>
    )
}