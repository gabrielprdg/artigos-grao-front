import TopBar from '../components/TopBar';
import articlesData from '../../services/articles.json';

const HomePage = () => {

  return (
    <div className="min-h-screen bg-gray-50">
      <TopBar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div >
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-4xl font-bold text-gray-900">
              Todos os artigos
            </h1>
            <button 
              className="px-4 py-2 text-white rounded-2xl hover:opacity-90 transition-opacity duration-200 font-medium"
              style={{ backgroundColor: '#67A22d' }}
            >
              Criar artigo
            </button>
          </div>
          <div className="mb-8">
            <input
              type="text"
              placeholder="Buscar artigos..."
              className="w-full px-6 py-4 text-lg text-gray-700 border border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-gray-400"
              style={{ backgroundColor: '#edf2e8' }}
            />
          </div>
          
          {/* Articles List */}
          <div className="space-y-6">
            {articlesData.map((article) => (
              <article
                key={article.id}
                className="bg-white rounded-lg overflow-hidden"
              >
                <div className="p-4">
                  <h2 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
                    {article.title}
                  </h2>
                  <p className="text-gray-700 mb-3 truncate">
                    {article.content}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 text-gray-700 text-xs rounded-full" style={{ backgroundColor: '#edf2e8' }}>
                      {article.tag1}
                    </span>
                    <span className="px-3 py-1 text-gray-700 text-xs rounded-full" style={{ backgroundColor: '#edf2e8' }}>
                      {article.tag2}
                    </span>
                    <span className="px-3 py-1 text-gray-700 text-xs rounded-full" style={{ backgroundColor: '#edf2e8' }}>
                      {article.tag3}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default HomePage;