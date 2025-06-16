import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, InteractionMode } from 'chart.js';
import { useEffect, useState } from 'react';

ChartJS.register(ArcElement, Tooltip, Legend);

const Dashboard = () => {
  const [stats, setStats] = useState({ 
    projects: 3, 
    courses: 5, 
    labs: 1
  });

  // Simular carga de datos desde API
  useEffect(() => {
    setTimeout(() => {
      setStats({
        projects: 5,
        courses: 1,
        labs: 25
      });
    }, 500);
  }, []);

  // Datos para el gráfico de dona
  const doughnutData = {
    labels: ['Proyectos', 'Cursos', 'Laboratorios'],
    datasets: [{
      data: [stats.projects, stats.courses, stats.labs],
      backgroundColor: [
        'rgba(74, 222, 128, 0.7)', // Verde
        'rgba(245, 158, 11, 0.7)',  // Naranja
        'rgba(96, 165, 250, 0.7)'   // Azul
      ],
      borderColor: [
        'rgba(74, 222, 128, 1)',
        'rgba(245, 158, 11, 1)',
        'rgba(96, 165, 250, 1)'
      ],
      borderWidth: 0,
    }],
  };

  // Configuración corregida para TypeScript
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    // Corrección: Usar un valor válido para interaction.mode
    interaction: {
      mode: 'index' as InteractionMode, // Valor válido: 'index', 'dataset', 'point', 'nearest', 'x', 'y'
      intersect: false
    },
    // Desactivar efectos hover
    hover: {
      mode: null as unknown as InteractionMode, // Solución para desactivar hover
    },
    plugins: {
      legend: {
        labels: {
          color: '#4AF626',
          font: {
            family: "'Fira Code', monospace",
            size: 12
          }
        }
      },
      tooltip: {
        enabled: true // Desactivar tooltips
      }
    },
    cutout: '65%'
  };

  return (
    <div className="h-full flex flex-col bg-gray-800 border-gray-600 rounded-lg shadow-xl overflow-hidden">
      {/* Barra de título del dashboard */}
      <div className="flex flex-col items-center bg-gray-900 px-6 border-gray-700">
      <div className='flex'>Dashboard</div>
      </div>
      
      {/* Contenido del dashboard - Solo el gráfico de donut */}
      <div className="flex-grow flex items-center justify-center p-6">
        <div className="w-full max-w-md h-full relative">
          <Doughnut data={doughnutData} options={options} />
          
          {/* Texto centrado en el donut */}
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;