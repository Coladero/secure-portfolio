# 🖥️ Machines Component Documentation

## ✅ Overview

The `Machines` component displays a grid of cybersecurity training machines you have completed or are currently working on, across platforms such as TryHackMe and HackTheBox. It is styled with Tailwind CSS and fits seamlessly into the terminal-inspired portfolio layout.

---

## 📌 Key Features

- **Platform support:** Showcases machines from TryHackMe, HackTheBox, and more.
- **Progress tracking:** Clearly indicates completion status and difficulty.
- **Direct links:** Optionally includes links to machine details on external platforms.
- **Consistent styling:** Uses terminal color palette and monospaced font.
- **Responsive grid:** Adapts to all screen sizes using Tailwind utilities.

---

## 🧩 Props

_No props are required by default._  
If you extend the component to accept props (e.g., for dynamic data), document them here.

---

## 🧪 Component State

| State     | Type      | Description                                               |
|-----------|-----------|-----------------------------------------------------------|
| machines  | Machine[] | Array of machine objects to display in the grid.          |

---

## ⚙️ Usage

```tsx
import Machines from './components/Machines/Machines';

function Portfolio() {
  return (
    <main>
      <Machines />
    </main>
  );
}
```

---

## 🛠️ Customization

- **Add or update machines:**  
  Edit the data file (e.g., `src/data/machinesData.ts`) to add new machines, update status, or include links.

- **Change appearance:**  
  Adjust Tailwind classes or update your `tailwind.config.js` for custom colors and effects.

- **Integrate APIs:**  
  Replace static data with API calls for automatic updates as you progress.

---

## 🗂️ Machine Data Structure

| Field        | Type     | Description                                                      |
|--------------|----------|------------------------------------------------------------------|
| `id`         | string   | Unique identifier for the machine entry.                         |
| `title`      | string   | Name of the machine.                                             |
| `platform`   | string   | Platform where the machine is hosted (e.g., TryHackMe, HackTheBox). |
| `difficulty` | string   | Difficulty level (e.g., Easy, Medium, Hard).                     |
| `status`     | string   | Progress status ("In Progress" or "Completed").                  |
| `url`        | string   | (Optional) Direct link to the machine.                           |
| `completedAt`| string   | (Optional) Date when the machine was completed.                  |

---

## ⌨️ Accessibility

- All interactive elements (links, buttons) should be keyboard accessible.
- Use semantic HTML for headings and sections.

---

## 📝 Notes

- The component is designed to be used inside a flex or grid container for layout control.
- Keeping your machine list up to date helps showcase your ongoing learning.
- You can further enhance the component by adding filters, search, or notes per machine.

---

## 🛠️ Troubleshooting

- **Machines not displaying:**  
  Ensure your data file is correctly imported and formatted.

- **Layout issues:**  
  Check parent container classes and responsive Tailwind utilities.

- **Colors/styles not applying:**  
  Verify your Tailwind config and restart the dev server after