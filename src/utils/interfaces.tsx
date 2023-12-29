
export interface Space {
    id: number,
    uuid: string,
    index: number,
    label: string,
    type: string,
    display: number,
    windows: number[],
    "first-window": number,
    "last-window": number,
    "has-focus": boolean,
    "is-visible": boolean,
    "is-native-fullscreen": boolean
}

export interface FormValue {
    newLabel: string;
}

// TODO: Add interface for Window