import { getYabaiDisplaysNotAsync } from "./utils/utils";
import { Space } from "./utils/interfaces";
import { ShowSpaceList } from "./components/ShowSpaceList";
import RenameSpaceForm from "./components/RenameSpaceForm";

export default function Command() {
  const items = getYabaiDisplaysNotAsync();

  return <ShowSpaceList spaceList={items} target={(space: Space) => <RenameSpaceForm space={space} />}></ShowSpaceList>;
}
