import TopBar from '../components/TopBar';
import articlesData from '../../services/articles.json';
import { Link, useParams } from 'react-router-dom';

const ArticleDetails = () => {
  const { id } = useParams();
  const article = articlesData.find(article => article.id === parseInt(id || '0'));


  return (
    <div className="min-h-screen bg-gray-50">
      <TopBar />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
       
        <article className="overflow-hidden">
          <div className="p-8">
            <div className="flex">
              <h1 className="text-3xl font-bold text-gray-900 mb-6 mr-6">
                {article?.title}
              </h1>

              <div className="flex flex-wrap gap-2 mb-6 items-center">
                <span className="px-3 py-1 text-gray-700 text-sm rounded-full" style={{ backgroundColor: '#edf2e8' }}>
                  {article?.tag1}
                </span>
              </div>
            </div>

            <div className="mb-4" style={{color:'#758269'}}>
              Publicado por {article?.author}
            </div>
            
            <div className="prose max-w-none">
              <p className="text-gray-700 text-lg leading-relaxed">
                {article?.content}
              </p>
            </div>

            <div className="mt-6">
              <span className="block mb-2 text-base font-semibold text-gray-900 leading-6">Comentários</span>

              <textarea
                placeholder="Escreva um comentário..."
                className="w-full px-4 py-4 text-lg text-gray-700 border border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-gray-400 min-h-32"
                style={{ backgroundColor: '#edf2e8' }}
              />
            </div>

            <div>
                <button 
                  className="px-4 py-2 mt-4 text-white rounded-xl hover:opacity-90 transition-opacity duration-200 font-medium"
                  style={{ backgroundColor: '#67A22d' }}
                >
                  Comentar
                </button>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default ArticleDetails;