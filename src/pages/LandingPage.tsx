import { Link } from 'react-router-dom';
import TopBar from '../components/TopBar';

const LandingPage = () => {
  return (
    <div>
      <TopBar/>
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-6xl md:text-7xl font-bold text-gray-900">
            Insights & Learning
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 font-sans">
            Explorando tendências Tech,<br className="md:hidden" /> um post por vez
          </p>
          <Link to="/home">
            <button
              className="px-5 py-3 text-white rounded-2xl hover:opacity-90 transition-opacity duration-200 font-medium mt-3"
              style={{ backgroundColor: '#67A22d' }}
              >
                Começar a ler
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;