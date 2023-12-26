import { Space } from "../src/utils/interfaces";
import { listWindowsInSpace } from "../src/utils/utils";



test('Given a space, return a list of the names of the windows that are open', () => {
    // Random Query for Example
    const exampleSpace: Space = {
        "id":230,
        "uuid":"C01FAC9F-4D17-485B-83F0-240B47FECA0F",
        "index":1,
        "label":"code",
        "type":"bsp",
        "display":1,
        "windows":[33893, 68526, 136891],
        "first-window":68526,
        "last-window":33893,
        "has-focus":true,
        "is-visible":true,
        "is-native-fullscreen":false
    }

});