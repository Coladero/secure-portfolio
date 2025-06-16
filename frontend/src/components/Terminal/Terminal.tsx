import { useState, useRef, useEffect } from 'react';

const Terminal = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState<string[]>([
    'Bienvenido a mi portfolio terminal. Escribe "help" para ver los comandos disponibles.',
    ' '
  ]);
  const [currentFolder, setCurrentFolder] = useState('~');
  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const commands: Record<string, string> = {
    help: 'Comandos disponibles: about, skills, projects, contact, dashboard, ls, cat, whoami, date, echo, neofetch, clear',
    about: 'Desarrollador Full-Stack | Pentester en formación | CompTIA Security+',
    skills: 'React, TypeScript, Node.js, Express, MongoDB, Ethical Hacking',
    projects: 'GitHub: https://github.com/tuusuario',
    contact: 'Email: contacto@ejemplo.com | LinkedIn: linkedin.com/in/tuperfil',
    sudo: 'Error: Permiso denegado. Este comando requiere privilegios de superusuario.',
    ls: 'index /about  /projects  /dashboard',
    cat: 'Uso: cat [archivo] - Intenta con "cat skills"',
    'cat skills': '{"lenguajes": ["JavaScript", "Python"], "frameworks": ["React", "Express"], "ciberseguridad": ["OWASP Top 10", "Burp Suite", "Nmap"]}',
    whoami: 'Coladero',
    date: new Date().toLocaleString(),
    echo: 'Repitiendo: ',
    neofetch: `
        root@portfolio-terminal ~
        -------------------------------
        SO: Secure Portfolio v1.0
        Shell: bash 5.1.16
        Lenguajes: JavaScript
        Frameworks: React, Express
        Library: Tailwindcss
        Ciberseguridad: Pentesting, Security+
    `,
    clear: ' '
  };

  const handleCommand = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== 'Enter') return;

    const newOutput = [...output, `$ ${input}`];
    let response = commands[input] || `Comando no encontrado: ${input}. Escribe "help" para ver comandos disponibles.`;

    // Comandos especiales
    if (input === 'clear') {
      setOutput([commands.clear]);
      setInput('');
      setCurrentFolder('~');
      return;
    }

    if (input === 'about' || input === 'dashboard') {
      setCurrentFolder(input);
    }

    newOutput.push(response);
    setOutput(newOutput);
    setInput('');
  };

  // Auto-scroll al final de la terminal
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [output]);

  // Enfocar el input al hacer clic en cualquier parte de la terminal
  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className="h-full flex flex-col">
      {/* Marco exterior con efecto biselado y sombra */}
      <div className=" h-full flex flex-col bg-gray-800 border-2 rounded-[10px]  border-gray-700 p-1 shadow-2xl">
        {/* Bisel interior */}
        <div className="h-full flex flex-col border-gray-600 rounded-lg">
          {/* Contenedor de la pantalla con efecto CRT */}
          <div 
            className="flex-grow flex flex-col bg-gray-900 overflow-hidden crt-screen"
            onClick={focusInput}
          >
            {/* Barra de título con bisel */}
            <div className="flex items-center justify-between bg-gradient-to-b from-gray-800 to-gray-900 px-4 py-2 border-b border-gray-700">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full cursor-pointer"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full cursor-pointer"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full cursor-pointer"></div>
              </div>
              <div className="text-gray-300 text-sm font-mono">
                Coladero@terminal-portfolio
              </div>
              <div className="w-12"></div>
            </div>
            
            {/* Contenido de la terminal */}
            <div 
              ref={terminalRef}
              className="flex-grow p-4 overflow-y-auto font-mono text-sm text-green-300 glow-text"
            >
              {output.map((line, index) => (
                <div key={index} className="whitespace-pre-wrap">{line}</div>
              ))}
              
              {/* Línea de comandos */}
            <div className="text-gray-300 text-sm font-mono">
                Coladero@terminal-portfolio{currentFolder === "~" ? ' ~' : ` /${currentFolder}`}
            </div>
              <div className="flex items-center mt-2">
                <span className="text-green-400 mr-2 font-bold">$</span>
                <div className="relative flex-grow">
                  <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleCommand}
                    className="bg-transparent border-none outline-none w-full text-green-300 caret-transparent"
                    autoFocus
                    placeholder="Escribe un comando..."
                  />
                  {/* Cursor parpadeante */}
                  {input === '' ? (
                    <div className="absolute top-0 left-0 h-5 w-2 bg-green-400 blink"></div>
                  ) : (
                    <div 
                      className="absolute top-0 left-0 h-5 w-2 bg-green-400 blink"
                      style={{ left: `${input.length * 8.5}px` }}
                    ></div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terminal;