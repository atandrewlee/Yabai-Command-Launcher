import { Space } from "./interfaces";
import { exec, ExecException } from 'node:child_process'
import { useEffect, useState } from "react";

export async function getYabaiDisplays(): Promise<Space[]> {
    return new Promise((resolve, reject) => {
        const command = 'yabai -m query --spaces';
        const options = {
            env: {USER: 'andrewlee'}
        }
        exec(command, options, (error: ExecException | null, stdout: string, stderr: string) => {
            if (error) {
                console.error(`Error executing command: ${error.message}`);
                reject(error)
                return;
              }
            
              if (stderr) {
                console.error(`Command had some errors: ${stderr}`);
                reject(error);
                return;
              }
            const out: Space[] = JSON.parse(stdout) 
            resolve(out);
        })
    })
}

export function getYabaiDisplaysNotAsync(): Space[] {
    const [state, setState] = useState<Space[]>([])

    useEffect(() => {
        getYabaiDisplays().then((output) => {
            setState(output)
        }).catch((error) => {
            console.error(error);
        }); 
    }, []);
    return state;
}



// function test() {
//     getYabaiDisplays().then((output) => {
//         console.log(output)
//     }).catch((error) => {
//         console.error(error);
//     });
// }
// test()

// function test() {
//     const hi = `[{
//         "id":230,
//         "uuid":"C01FAC9F-4D17-485B-83F0-240B47FECA0F",
//         "index":1,
//         "label":"",
//         "type":"bsp",
//         "display":1,
//         "windows":[24206],
//         "first-window":24206,
//         "last-window":24206,
//         "has-focus":false,
//         "is-visible":false,
//         "is-native-fullscreen":false
//     },{
//         "id":82,
//         "uuid":"A0E3C978-F229-478C-975B-865E171B5D1B",
//         "index":2,
//         "label":"",
//         "type":"bsp",
//         "display":1,
//         "windows":[],
//         "first-window":0,
//         "last-window":0,
//         "has-focus":false,
//         "is-visible":false,
//         "is-native-fullscreen":false
//     },{
//         "id":5,
//         "uuid":"FE30CA0D-9824-479F-AD3B-9822A37BBB52",
//         "index":3,
//         "label":"",
//         "type":"bsp",
//         "display":1,
//         "windows":[26572, 29924],
//         "first-window":26572,
//         "last-window":29924,
//         "has-focus":false,
//         "is-visible":false,
//         "is-native-fullscreen":false
//     },{
//         "id":381,
//         "uuid":"AD24A070-6C8F-4B1E-845E-1B6821A44749",
//         "index":4,
//         "label":"project",
//         "type":"bsp",
//         "display":1,
//         "windows":[92055, 33893, 68526],
//         "first-window":68526,
//         "last-window":33893,
//         "has-focus":true,
//         "is-visible":true,
//         "is-native-fullscreen":false
//     },{
//         "id":323,
//         "uuid":"BDC9A7E1-4AD3-4DCD-8A24-72337D3F0F1C",
//         "index":5,
//         "label":"",
//         "type":"bsp",
//         "display":1,
//         "windows":[62772, 91009, 77815],
//         "first-window":77815,
//         "last-window":62772,
//         "has-focus":false,
//         "is-visible":false,
//         "is-native-fullscreen":false
//     }]`

//     const out: Space[] = JSON.parse(hi)
//     out.map((item, index) => {
//         console.log(item)
//         console.log(item.id)
//         console.log(item.windows)
//         console.log(item["first-window"])
//         console.log("\n")
//     })
//     console.log(typeof out)
// }

// test()