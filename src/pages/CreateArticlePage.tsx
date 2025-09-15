import TopBar from '../components/TopBar';
import { useState } from 'react';
import { api } from '../../services/api';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CreateArticle = () => {
  const [title, setTitle] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [content, setContent] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const availableTags = ['Grão Direto', 'tecnologia', 'agronegócio', 'DevOps', 'React'];

  const toggleTag = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!title.trim() || !content.trim() || selectedTags.length === 0) {
      toast.error('Por favor, preencha o título, conteúdo e selecione pelo menos uma tag.');
      return;
    }

    setLoading(true);

    try {
      const articleData = {
        title: title.trim(),
        content: content.trim(),
        tags: selectedTags,
        author: 'Gabriel Rodrigues'
      };

      await api.post('/article', articleData);
      toast.success('Artigo criado com sucesso!');
      setTimeout(() => navigate('/'), 1500);
    } catch (error) {
      console.error('Error creating article:', error);
      toast.error('Erro ao criar artigo. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <TopBar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <form onSubmit={handleSubmit}>
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-4xl font-bold text-gray-900">
              Novo artigo
            </h1>
          </div>
          <div className="mb-8 space-y-8">
            <div>
              <label
                htmlFor="title"
                className="block mb-2 text-base font-semibold text-gray-900 leading-6"
                style={{ fontFamily: 'Newsreader', fontWeight: 600, fontSize: '16px', lineHeight: '24px' }}
              >
                Título do artigo *
              </label>
              <input
                id="title"
                type="text"
                placeholder="Título"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-6 py-2 text-lg text-gray-700 border border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-gray-400"
                style={{ backgroundColor: '#edf2e8' }}
                required
              />
            </div>

            <div>
              <label
                htmlFor="imageUrl"
                className="block mb-2 text-base font-semibold text-gray-900 leading-6"
                style={{ fontFamily: 'Newsreader', fontWeight: 600, fontSize: '16px', lineHeight: '24px' }}
              >
                Imagem do artigo (opcional)
              </label>
              <input
                id="imageUrl"
                type="text"
                placeholder="Url da imagem"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                className="w-full px-6 py-2 text-lg text-gray-700 border border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-gray-400"
                style={{ backgroundColor: '#edf2e8' }}
              />
            </div>

            <div>
              <label
                className="block mb-2 text-base font-semibold text-gray-900 leading-6"
                style={{ fontFamily: 'Newsreader', fontWeight: 600, fontSize: '16px', lineHeight: '24px' }}
              >
                Tags *
              </label>
              <div className="flex gap-3 mb-4 overflow-x-auto scrollbar-hide pb-2">
                {availableTags.map((tag) => (
                  <button
                    key={tag}
                    type="button"
                    onClick={() => toggleTag(tag)}
                    className={`px-4 py-2 text-sm rounded-xl transition-opacity whitespace-nowrap flex-shrink-0 ${
                      selectedTags.includes(tag)
                        ? 'text-white'
                        : 'text-gray-700 hover:opacity-80'
                    }`}
                    style={{
                      backgroundColor: selectedTags.includes(tag) ? '#67A22d' : '#edf2e8'
                    }}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label
                htmlFor="content"
                className="block mb-2 text-base font-semibold text-gray-900 leading-6"
                style={{ fontFamily: 'Newsreader', fontWeight: 600, fontSize: '16px', lineHeight: '24px' }}
              >
                Conteúdo *
              </label>
              <textarea
                id="content"
                placeholder="Escreva aqui seu artigo"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="w-full px-6 py-4 text-lg text-gray-700 border border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-gray-400 min-h-32"
                style={{ backgroundColor: '#edf2e8' }}
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full text-white font-semibold py-4 px-6 rounded-lg transition-opacity duration-200 focus:outline-none text-lg ${
                loading ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-80'
              }`}
              style={{ backgroundColor: '#67A22d' }}
            >
              {loading ? 'Criando...' : 'Criar Artigo'}
            </button>
          </div>
        </form>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default CreateArticle;