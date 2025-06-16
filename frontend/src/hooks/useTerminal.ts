// /hooks/useTerminal.ts
import { useState } from "react";
import { COMMANDS } from "../utils/commands";

export const useTerminal = () => {
  const [history, setHistory] = useState<string[]>([]);

  const executeCommand = (input: string) => {
    const trimmed = input.trim().toLowerCase();
    if (trimmed === "clear") {
      setHistory([]);
      return;
    }

    const output = COMMANDS[trimmed]?.() || `Command not found: ${trimmed}`;
    setHistory((prev) => [...prev, `> ${input}`, output]);
  };

  return {
    history,
    executeCommand,
  };
};
