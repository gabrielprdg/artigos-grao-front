import { Link } from 'react-router-dom';

const TopBar = () => {
  return (
    <nav className="bg-white text-gray-900 border-b border-gray-200">
      <div className="max-w-7xl mx-auto pl-1 pr-4 sm:pl-1 sm:pr-6 lg:pl-2 lg:pr-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/">
              <h1 className="text-xl font-bold text-black hover:text-gray-700 transition-colors">
                TechBlog
              </h1>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopBar;