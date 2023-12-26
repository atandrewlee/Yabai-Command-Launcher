export interface Space {
  id: number;
  uuid: string;
  index: number;
  label: string;
  type: string;
  display: number;
  windows: number[];
  "first-window": number;
  "last-window": number;
  "has-focus": boolean;
  "is-visible": boolean;
  "is-native-fullscreen": boolean;
}

export interface Window {
  id: number;
  pid: number;
  app: string;
  title: string;
  frame: Frame;
  role: string;
  subrole: string;
  display: number;
  space: number;
  level: number;
  layer: string;
  opacity: number;
  "split-type": string;
  "split-child": string;
  "stack-index": number;
  "can-move": boolean;
  "can-resize": boolean;
  "has-focus": boolean;
  "has-shadow": boolean;
  "has-parent-zoom": boolean;
  "has-fullscreen-zoom": boolean;
  "is-native-fullscreen": boolean;
  "is-visible": boolean;
  "is-minimized": boolean;
  "is-hidden": boolean;
  "is-floating": boolean;
  "is-sticky": boolean;
  "is-grabbed": boolean;
}

interface Frame {
  x: number;
  y: number;
  w: number;
  h: number;
}

export interface FormValue {
  newLabel: string;
}

// TODO: Add interface for Window
