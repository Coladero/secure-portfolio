import Terminal from '../components/Terminal/Terminal';
import Dashboard from '../components/Dashboard/Dashboard';

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-2 sm:px-4">
      <div className="flex flex-col lg:flex-row gap-6 w-full max-w-10xl">
        {/* Terminal */}
        <div className="w-full lg:w-2/4">
          <Terminal />
        </div>
        {/* Dashboard */}
        <div className="w-full lg:w-2/4">
          <Dashboard />
        </div>
      </div>
    </div>
  );
};

export default Home;