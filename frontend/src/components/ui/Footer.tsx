
const Footer = () => {
  return (
    <footer className="bg-black p-4 border-t border-terminal-green text-center text-terminal-green font-mono">
      © {new Date().getFullYear()} - Made with React + TypeScript + Tailwind
    </footer>
  );
};

export default Footer;