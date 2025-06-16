import Terminal from '../components/Terminal/Terminal';
import Dashboard from '../components/Dashboard/Dashboard';

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      {/* Responsive flex: column on mobile, row on desktop */}
      <div className="flex flex-col lg:flex-row gap-6 w-full h-[calc(100vh-3rem)] px-2 sm:px-4">
        {/* Terminal - Left on desktop, Top on mobile */}
        <div className="w-full lg:w-3/5 h-1/2 lg:h-4/5">
          <Terminal />
        </div>
        {/* Dashboard - Right on desktop, Bottom on mobile */}
        <div className="w-full lg:w-3/5 h-1/2 lg:h-4/5">
          <Dashboard />
        </div>
      </div>
    </div>
  );
};

export default Home;