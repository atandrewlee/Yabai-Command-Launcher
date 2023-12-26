import { Form, Action, useNavigation, ActionPanel } from "@raycast/api";
import { Space, FormValue } from "../utils/interfaces";
import { renameYabaiSpace } from "../utils/utils";
import { closeMainWindow } from "@raycast/api";

export default function RenameSpaceForm(props: { space: Space }) {
  /**
   * Form to rename a space; triggers Action to rename space when run
   *
   * @param { Space } params: The space to rename
   *
   */
  const { pop } = useNavigation();

  async function renameSpace(noteProps: FormValue, index: number) {
    await renameYabaiSpace(noteProps.newLabel, index);
    pop();
    await closeMainWindow();
  }

  return (
    <Form
      actions={
        <ActionPanel>
          <Action.SubmitForm title="Change Space" onSubmit={(p: FormValue) => renameSpace(p, props.space.index)} />
        </ActionPanel>
      }
    >
      <Form.TextField id="newLabel" title="New Space Label" placeholder="New space label"></Form.TextField>
    </Form>
  );
}
