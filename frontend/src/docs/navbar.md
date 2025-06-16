# 🧭 Navbar Component Documentation

## ✅ Overview

The `Navbar` component provides a responsive, accessible navigation bar for the web application. It is styled using Tailwind CSS and handles routing via `react-router-dom`. The component features a mobile-friendly hamburger menu and a desktop view with centered navigation links, all in a terminal-inspired aesthetic.

---

## 📌 Key Features

- **Responsive layout:** Adapts to all screen sizes using Tailwind breakpoints.
- **Centered desktop menu:** Navigation links are centered on medium screens and up.
- **Mobile dropdown:** Hamburger menu toggles a dropdown on small screens.
- **Active route highlighting:** Uses `NavLink` for automatic active link styling.
- **Accessible:** Toggle button includes `aria-label` for screen readers.
- **Custom styling:** Terminal-style look with `terminal-green` and monospaced font.

---

## 🧩 Props

_No props are required._  
Navigation items are defined in a local `navItems` array within the component.

---

## 🧪 Component State

| State    | Type    | Description                                 |
|----------|---------|---------------------------------------------|
| `isOpen` | boolean | Controls visibility of the mobile menu.     |

---

## ⚙️ Usage

```tsx
import Navbar from './components/Navbar';

function App() {
  return (
    <Navbar />
  );
}
```

---

## 🛠️ Customization

- **Navigation Items:**  
  Edit the `navItems` array at the top of the component to add, remove, or change navigation links.

- **Colors & Styles:**  
  Adjust Tailwind classes or update your `tailwind.config.js` for custom colors.

---

## ♿ Accessibility

- The hamburger menu button uses `aria-label="Toggle menu"` for screen readers.
- Navigation links use semantic `<nav>` and `<a>` elements.

---

## 🧱 Structure

```tsx
<nav>
  <div>
    <div>
      {/* [Left] Logo */}
      {/* [Center] Desktop menu (md and up) */}
      {/* [Right] Mobile menu toggle */}
    </div>
    {isOpen && (
      <div>
        {/* Mobile dropdown menu */}
      </div>
    )}
  </div>
</nav>
```

---

## ⌨️ Keyboard Navigation Support

- **Tab navigation:**  
  All navigation links and the hamburger menu button are focusable and can be accessed using the `Tab` key.
- **Enter/Space activation:**  
  The hamburger menu button can be toggled using `Enter` or `Space` when focused.
- **Focus styles:**  
  Tailwind’s default focus ring is applied. You can further enhance visibility by adding or customizing `focus:outline-none focus:ring-2 focus:ring-terminal-green` to interactive elements.
- **Skip to content (optional best practice):**  
  For even better accessibility, consider adding a "Skip to main content" link at the top of your layout.

**Example for enhanced focus style on the toggle button:**
```tsx
<button
  onClick={toggleMenu}
  aria-label="Toggle menu"
  className="text-terminal-green focus:outline-none focus:ring-2 focus:ring-terminal-green"
>
  {isOpen ? <X /> : <Menu />}
</button>
```


---

## 📝 Notes

- The component assumes a logo image at `/logo.png`.
- Ensure Tailwind CSS and `react-router-dom` are properly configured in your project.


---

## 🛠️ Troubleshooting

- **Navbar not displaying correctly on desktop or mobile:**
  - Ensure Tailwind CSS is properly installed and imported in your main CSS file.
  - Check that your browser window is wide enough to trigger the desktop menu (`md` breakpoint is 768px by default).
  - Make sure you are using the correct Tailwind classes (`hidden md:flex` for desktop menu, `md:hidden` for mobile burger).

- **Custom colors (e.g., `terminal-green`) not working:**
  - Verify that your `tailwind.config.js` defines custom colors at the root of the `colors` object.
  - Restart your dev server after changing the Tailwind config.

- **Hamburger menu does not open/close:**
  - Confirm that the `isOpen` state is being toggled correctly in the component.
  - Ensure the toggle button is visible only on mobile (`md:hidden`).

- **Active link highlighting not working:**
  - Make sure you are using `NavLink` from `react-router-dom` and the `className` callback for active state.

- **Logo not showing:**
  - Check that `/logo.png` exists in your `public` directory or update the path accordingly.

- **Tailwind classes not applying:**
  - Ensure your build setup uses compatible versions of Tailwind, PostCSS, and Autoprefixer.
  - Restart your dev server after any dependency or config changes.

---