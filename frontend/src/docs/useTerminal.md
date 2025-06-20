# 🪝 useTerminal Hook Documentation

## ✅ Overview

The `useTerminal` custom hook manages the state and command execution logic for the interactive terminal component. It handles user input, maintains command history, and processes available commands, enabling a dynamic CLI experience within the portfolio.

---

## 📌 Key Features

- **Command execution:** Processes user input and executes predefined commands.
- **Command history:** Maintains an array of previous commands and their outputs.
- **Clear functionality:** Supports the `clear` command to reset terminal history.
- **Extensible:** Easily add new commands by updating the `COMMANDS` object.
- **Separation of concerns:** Keeps terminal logic reusable and independent from UI.

---

## 🧩 Hook API

_No props are required._  
All logic and state are managed internally by the hook.

---

## 🧪 Hook State & Return

| Name             | Type         | Description                                               |
|------------------|--------------|-----------------------------------------------------------|
| `history`        | `string[]`   | Array of terminal output lines (commands and responses).   |
| `executeCommand` | `(input: string) => void` | Function to process and execute a command.      |

---

## ⚙️ Usage

```tsx
import { useTerminal } from '../hooks/useTerminal';

const { history, executeCommand } = useTerminal();

<form onSubmit={(e) => {
  e.preventDefault();
  executeCommand(input);
}}>
  {/* ... */}
</form>
```

---

## 🛠️ Customization

- **Add/Edit Commands:**  
  Update the `COMMANDS` object in `src/utils/commands.ts` to add or modify available commands and their responses.

- **Change Output Format:**  
  Adjust how history is updated or displayed in your terminal component for custom output formatting.

- **Integrate with UI:**  
  Use the returned `history` and `executeCommand` in any CLI-style component for a consistent experience.

---

## ⌨️ Keyboard & Accessibility

- The hook is UI-agnostic and can be integrated with any accessible input component.
- Ensure your terminal input is focusable and supports keyboard navigation for best accessibility.

---

## 📝 Notes

- The hook is designed for use with the `Terminal` component but can be reused in other interactive CLI-style components.
- Unknown commands will display a "Command not found" message.
- The `clear` command resets the terminal history.
- For a full list of supported commands, see [commands.md](./commands.md).

---

## 🛠️ Troubleshooting

- **Commands not executing:**  
  Ensure the command exists in the `COMMANDS` object and is spelled correctly.

- **History not updating:**  
  Check that you are using the returned `history` value from the hook in your component.

---