declare global {
  interface Window {
    getCorrupters: () => CorruptionMode[];
    addCorrupter: (corrupter: CorruptionMode) => void;
  }
}

export interface EmojiDetail {
  u: string;
  x: number;
  y: number;
}

export interface EmojiInfo {
  n: string[];
  u: EmojiDetail;
  v?: EmojiDetail[];
  r?: EmojiDetail;
}

export interface EmojiGroup {
  emojis: EmojiInfo[];
  key: string;
  title: string;
  u: string;
  y?: number;
}

export interface CorruptionMode {
  id: string;
  name: string;
  active: boolean;
  description: string;
  random?: boolean;
  function: (
    pathData: string,
    search: RegExp,
    value: string,
    node: SVGElement,
  ) => string;
}
