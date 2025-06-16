# 🖥️ Terminal Component Documentation

## ✅ Overview

The `Terminal` component simulates a command-line interface (CLI) within the portfolio. It allows users to type commands and receive responses, mimicking a real terminal experience. The component is styled with Tailwind CSS and includes CRT and glow effects for a retro look.

---

## 📌 Key Features

- **Interactive CLI:** Users can type and execute predefined commands.
- **Command history output:** Displays previous commands and their responses.
- **Customizable commands:** Easily extend or modify available commands.
- **Auto-scroll:** Terminal view auto-scrolls to the latest output.
- **Focus management:** Clicking anywhere in the terminal focuses the input.
- **CRT/glow effects:** Retro terminal look with custom CSS.
- **Responsive design:** Fits flexibly in layouts and resizes with its container.
- **Accessible:** Input is focusable and uses semantic HTML.

---

## 🧩 Props

_No props are required._  
All logic and state are managed internally.

---

## 🧪 Component State

| State           | Type       | Description                                               |
|-----------------|------------|-----------------------------------------------------------|
| `input`         | string     | Current value of the command input field.                 |
| `output`        | string[]   | Array of previous commands and their responses.           |
| `currentFolder` | string     | Simulated current folder (e.g., `~`, `about`, `dashboard`).|

---

## ⚙️ Usage

```tsx
import Terminal from './components/Terminal/Terminal';

function Home() {
  return (
    <div className="h-full">
      <Terminal />
    </div>
  );
}
```

---

## 🛠️ Customization

- **Add/Edit Commands:**  
  Modify the `commands` object inside the component to add or change available commands and their responses.

- **Change Appearance:**  
  Adjust Tailwind classes or the custom CSS (e.g., CRT/glow effects) for a different look.

- **Initial Output:**  
  Change the initial `output` array to customize the welcome message.

---

## ⌨️ Keyboard & Accessibility

- **Input is always focusable** and can be focused by clicking anywhere in the terminal area.
- **Enter** executes the command.
- **Tab** navigation is supported for accessibility.
- **Blinking cursor** visually indicates input focus.

---

## 📝 Notes

- The component is self-contained and does not require external props.
- For best results, place the component in a flex or grid container to control its size.
- You can further enhance the experience by adding command history navigation (up/down arrows) or autocomplete.

---

## 🛠️ Troubleshooting

- **Input not focused:**  
  Click anywhere inside the terminal area to focus the input.
- **Commands not recognized:**  
  Ensure the command exists in the `commands` object or update the error message for unknown commands.
- **CRT/glow effects not visible:**  
  Check that the required CSS classes (e.g., `.crt-screen`, `.glow-text`, `.blink`) are present in your global styles.

---