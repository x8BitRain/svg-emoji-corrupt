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
