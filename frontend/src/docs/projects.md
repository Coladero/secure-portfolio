# 🗂️ Projects Page Documentation

## ✅ Overview

The `Projects` page displays both featured (static) and two random (dynamic) projects from your GitHub account. It uses Tailwind CSS for styling, Framer Motion for animation, and is designed to be responsive and accessible with a terminal-inspired look.

---

## 📌 Key Features

- **Featured projects:** Curated static projects with custom icons and descriptions.
- **Dynamic GitHub projects:** Fetches and displays two random, non-pinned, non-forked repositories from your GitHub account.
- **Type safety:** Uses TypeScript interfaces for both local and fetched project data.
- **Error and loading states:** User-friendly messages if GitHub fetch fails or is loading.
- **No duplicates:** Ensures dynamic projects do not duplicate featured ones.
- **Accessible links:** All project links are keyboard accessible and include `aria-label` attributes.
- **Responsive grid:** Two-column layout on desktop, stacked on mobile.
- **Animated appearance:** Projects fade in and slide up using Framer Motion.
- **Terminal-inspired styling:** Custom colors and monospaced font.

---

## 🧩 Props

_No props are required._  
All data is managed internally or fetched from the GitHub API.

---

## 🧪 Component State

| State          | Type         | Description                                         |
|----------------|--------------|-----------------------------------------------------|
| `extraProjects`| ProjectData[]| Randomly selected GitHub projects                   |
| `loading`      | boolean      | Indicates if GitHub projects are being loaded       |
| `error`        | string/null  | Error message if GitHub fetch fails                 |

---

## ⚙️ Usage

```tsx
import Projects from './pages/Projects';

function App() {
  return (
    <Projects />
  );
}
```

---

## 🛠️ Customization

- **Add or edit featured projects:**  
  Edit the `localProjects` array to update your static projects.

- **Change GitHub username:**  
  Update the `GITHUB_USERNAME` constant to fetch your own repositories.

- **Customize icons:**  
  Adjust the `iconType` property and the `getIcon` function for different visuals.

- **Styling:**  
  Change Tailwind classes or update your `tailwind.config.js` for custom colors and effects.

---

## ⌨️ Accessibility

- All project links are keyboard accessible and include descriptive `aria-label`s.
- Semantic headings and grid layout for screen readers.

---

## 📝 Notes

- The GitHub API is rate-limited for unauthenticated requests. If you see errors, try again later or use authentication for higher limits.
- Only public, non-forked, and non-pinned repositories with descriptions are shown as dynamic projects.
- The component ensures no duplicate projects between static and dynamic lists.
- You can further enhance the page by adding filtering, search, or more advanced animations.

---

## 🛠️ Troubleshooting

- **No extra projects shown:**  
  Ensure your GitHub account has public repositories with descriptions that are not pinned or forks.

- **Error message displayed:**  
  Check your internet connection or GitHub API rate limits.

- **Styling not applied:**  
  Verify Tailwind CSS is properly configured and imported.

---