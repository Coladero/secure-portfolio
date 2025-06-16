// /types/index.ts

export type CommandFunction = () => string;
export type Commands = Record<string, CommandFunction>
