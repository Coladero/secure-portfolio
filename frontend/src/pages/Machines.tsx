import { useEffect, useState } from 'react';
import { machines as machinesData, Machine } from '../data/machinesData';

const Machines = () => {
  const [machines, setMachines] = useState<Machine[]>([]);

  useEffect(() => {
    setMachines(machinesData);
  }, []);

  return (
    <main className="min-h-screen text-terminal-green px-4 py-12 font-mono">
      <h2 className="text-3xl font-bold mb-6 text-center border-b pb-2 border-terminal-green">
        ➜ Machines
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {machines.map((machine) => (
          <div
            key={machine.id}
            className="bg-gray-800 border border-terminal-green text-green-400 p-4 rounded-xl shadow hover:shadow-[0_0_14px_#00FF00] transition-transform hover:scale-[1.01]"
          >
            <h2 className="text-lg font-bold mb-2 text-white">
              {machine.url ? (
                <a
                  href={machine.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-terminal-green"
                >
                  {machine.title}
                </a>
              ) : (
                machine.title
              )}
            </h2>
            <p>
              Platform: <span className="text-white">{machine.platform}</span>
            </p>
            <p>
              Difficulty: <span className="text-white">{machine.difficulty}</span>
            </p>
            <p>
              Status: <span className="text-white">{machine.status}</span>
            </p>
            {machine.completedAt && (
              <p>
                Completed At: <span className="text-white">{machine.completedAt}</span>
              </p>
            )}
            {machine.description && (
              <p>
                Description: <span className="text-white">{machine.description}</span>
              </p>
              )}
          </div>
        ))}
      </div>
    </main>
  );
};

export default Machines;