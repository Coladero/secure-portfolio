import { useEffect, useState } from 'react';

// Define the machine structure
interface Machine {
  id: string;
  title: string;
  platform: 'TryHackMe' | 'HackTheBox';
  difficulty: string;
  status: 'In Progress' | 'Completed';
}

const Machines = () => {
  const [machines, setMachines] = useState<Machine[]>([]);

  // Load static data (replace with backend call when available)
  useEffect(() => {
    // In the future, replace with an API call:
    // fetch('/api/machines').then(res => res.json()).then(setMachines);
    setMachines([
      {
        id: '1',
        title: 'Simple CTF',
        platform: 'TryHackMe',
        difficulty: 'Easy',
        status: 'Completed',
      },
      {
        id: '2',
        title: 'Blue',
        platform: 'TryHackMe',
        difficulty: 'Medium',
        status: 'In Progress',
      },
      // Puedes agregar más máquinas aquí
    ]);
  }, []);

  return (
    <main className="min-h-screen p-4 text-terminal-green font-mono">
      <h1 className="text-2xl mb-4 border-b border-green-500 pb-2">
        Machines
      </h1>

      {/* Grid of machine cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {machines.map((machine) => (
          <div
            key={machine.id}
            className="bg-gray-800 border border-terminal-green text-green-400 p-4 rounded-xl shadow hover:shadow-[0_0_14px_#00FF00] transition-transform hover:scale-[1.01]"
          >
            <h2 className="text-lg font-bold mb-2 text-white">{machine.title}</h2>
            <p>
              Platform: <span className="text-white">{machine.platform}</span>
            </p>
            <p>
              Difficulty:{' '}
              <span className="text-white">{machine.difficulty}</span>
            </p>
            <p>
              Status: <span className="text-white">{machine.status}</span>
            </p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Machines;