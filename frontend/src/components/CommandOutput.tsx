// /components/CommandOutput.tsx
interface Props {
  line: string;
}

// CommandOutput component to display individual command output lines

export const CommandOutput = ({ line }: Props) => (
  <div className="text-green-400 font-mono">{line}</div>
);
