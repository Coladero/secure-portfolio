// src/components/Terminal.tsx
import { useState } from "react";
import { useTerminal } from "../../hooks/useTerminal";
import { CommandOutput } from "../CommandOutput";

export const Terminal = () => {
  const [input, setInput] = useState("");
  const { history, executeCommand } = useTerminal();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      executeCommand(input);
      setInput("");
    }
  };

  return (
    <div className="bg-gray-800 border border-gray-700 text-green-400 p-4 rounded-xl shadow-xl font-mono max-w-2xl mx-auto">
      <div className="flex gap-2 mb-2">
        <div className="w-3 h-3 bg-red-500 rounded-full" />
        <div className="w-3 h-3 bg-yellow-500 rounded-full" />
        <div className="w-3 h-3 bg-green-500 rounded-full" />
      </div>

      <div className="mb-4 h-[400px] overflow-y-auto space-y-2 text-sm">
        {history.map((line) => (
          <CommandOutput key={typeof line === "string" ? line : JSON.stringify(line)} line={line} />
        ))}
      </div>

      <form onSubmit={handleSubmit}>
        <span className="text-green-500">guest@portfolio:~$</span>{" "}
        <input
          autoFocus
          value={input}
          type="text"
          placeholder='Type "help" to see available commands.'
          onChange={(e) => setInput(e.target.value)}
          className="bg-gray-800 border-gray-600 text-gray-400 border-none outline-none w-full"
        />
      </form>
    </div>
  );
};

export default Terminal;