import TopBar from '../components/TopBar';
import { api } from '../../services/api';
import { Link } from 'react-router-dom';
import { PencilSquareIcon } from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';

interface Article {
  id: number;
  title: string;
  content: string;
  tags: string[];
  author: string;
}

const HomePage = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [filteredArticles, setFilteredArticles] = useState<Article[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState<string>('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await api.get('/article');
        setArticles(response.data);
        setFilteredArticles(response.data);
      } catch (error) {
        console.error('Error fetching articles:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  useEffect(() => {
    let filtered = articles;

    // Filter by search term
    if (searchTerm.trim()) {
      filtered = filtered.filter(article =>
        article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.author.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by selected tag
    if (selectedTag) {
      filtered = filtered.filter(article =>
        article.tags?.includes(selectedTag)
      );
    }

    setFilteredArticles(filtered);
  }, [searchTerm, selectedTag, articles]);

  // Extract all unique tags from articles
  const getAllTags = () => {
    const tagSet = new Set<string>();
    articles.forEach(article => {
      article.tags?.forEach(tag => tagSet.add(tag));
    });
    return Array.from(tagSet).sort();
  };

  const handleTagClick = (tag: string) => {
    setSelectedTag(selectedTag === tag ? '' : tag);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <TopBar />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">Carregando artigos...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <TopBar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div >
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-4xl font-bold text-gray-900">
              Todos os artigos
            </h1>
            <Link to="/create" className="text-gray-600 hover:text-gray-900 transition-colors">
               <button 
                className="px-4 py-2 text-white rounded-2xl hover:opacity-90 transition-opacity duration-200 font-medium"
                style={{ backgroundColor: '#67A22d' }}
              >
                Criar artigo
              </button>
            </Link>
          </div>
          <div className="mb-8">
            <div className="flex gap-3 mb-4 overflow-x-auto scrollbar-hide pb-2">
              {getAllTags().map((tag) => (
                <button
                  key={tag}
                  onClick={() => handleTagClick(tag)}
                  className={`px-4 py-2 text-sm rounded-xl hover:opacity-80 transition-opacity whitespace-nowrap flex-shrink-0 ${
                    selectedTag === tag
                      ? 'text-white'
                      : 'text-gray-700'
                  }`}
                  style={{
                    backgroundColor: selectedTag === tag ? '#67A22d' : '#edf2e8'
                  }}
                >
                  {tag}
                </button>
              ))}
            </div>
            <input
              type="text"
              placeholder="Buscar artigos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-6 py-4 text-lg text-gray-700 border border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-gray-400"
              style={{ backgroundColor: '#edf2e8' }}
            />
          </div>
          
          {/* Articles List */}
          <div className="space-y-6">
            {filteredArticles.map((article) => (
              <Link key={article.id} to={`/article/${article.id}`} className="block">
                <article
                  className="bg-white rounded-lg overflow-hidden cursor-pointer"
                >
                <div className="p-4">
                  <div className="flex justify-between items-center gap-4">
                    <div className="flex-1 min-w-0">
                      <h2 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
                        {article.title}
                      </h2>
                      <p className="text-gray-700 mb-3 truncate">
                        {article.content}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {article.tags?.map((tag, index) => (
                          <span key={index} className="px-3 py-1 text-gray-700 text-xs rounded-full" style={{ backgroundColor: '#edf2e8' }}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex-shrink-0">
                      <button
                        className="text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors grid place-items-center"
                        title="Editar artigo"
                        onClick={(e) => {
                          e.preventDefault();
                          window.location.href = `/edit/article/${article.id}`;
                        }}
                      >
                        <PencilSquareIcon className="h-6 w-6" />
                      </button>
                    </div>
                  </div>
                </div>
              </article>
              </Link>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default HomePage;