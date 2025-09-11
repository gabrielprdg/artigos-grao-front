import TopBar from '../components/TopBar';

const EditArticle = () => {

  return (
    <div className="min-h-screen bg-gray-50">
      <TopBar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div >
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-4xl font-bold text-gray-900">
              Editar artigo
            </h1>
          </div>
          <div className="mb-8 space-y-8">
            <div>
              <label 
                htmlFor="" 
                className="block mb-2 text-base font-semibold text-gray-900 leading-6"
                style={{ fontFamily: 'Newsreader', fontWeight: 600, fontSize: '16px', lineHeight: '24px' }}
              >
                Título do artigo *
              </label>
              <input
                type="text"
                placeholder="Título"
                className="w-full px-6 py-2 text-lg text-gray-700 border border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-gray-400"
                style={{ backgroundColor: '#edf2e8' }}
              />
            </div>

            <div>
              <label 
                htmlFor="" 
                className="block mb-2 text-base font-semibold text-gray-900 leading-6"
                style={{ fontFamily: 'Newsreader', fontWeight: 600, fontSize: '16px', lineHeight: '24px' }}
              >
                Imagem do artigo *
              </label>
              <input
                type="text"
                placeholder="Url da imagem"
                className="w-full px-6 py-2 text-lg text-gray-700 border border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-gray-400"
                style={{ backgroundColor: '#edf2e8' }}
              />
            </div>

            <div>
              <label 
                htmlFor="" 
                className="block mb-2 text-base font-semibold text-gray-900 leading-6"
                style={{ fontFamily: 'Newsreader', fontWeight: 600, fontSize: '16px', lineHeight: '24px' }}
              >
                Tags *
              </label>
              <div className="flex gap-3 mb-4">
                <button className="px-4 py-2 text-sm text-gray-700 rounded-xl hover:opacity-80 transition-opacity" style={{ backgroundColor: '#edf2e8' }}>
                  Grão Direto
                </button>
                <button className="px-4 py-2 text-sm text-gray-700 rounded-xl hover:opacity-80 transition-opacity" style={{ backgroundColor: '#edf2e8' }}>
                  tecnologia
                </button>
                <button className="px-4 py-2 text-sm text-gray-700 rounded-xl hover:opacity-80 transition-opacity" style={{ backgroundColor: '#edf2e8' }}>
                  agronegócio
                </button>
                <button className="px-4 py-2 text-sm text-gray-700 rounded-xl hover:opacity-80 transition-opacity" style={{ backgroundColor: '#edf2e8' }}>
                  DevOps
                </button>
                <button className="px-4 py-2 text-sm text-gray-700 rounded-xl hover:opacity-80 transition-opacity" style={{ backgroundColor: '#edf2e8' }}>
                  React
                </button>
              </div>
            </div>

            <div>
              <label 
                htmlFor="" 
                className="block mb-2 text-base font-semibold text-gray-900 leading-6"
                style={{ fontFamily: 'Newsreader', fontWeight: 600, fontSize: '16px', lineHeight: '24px' }}
              >
                Conteúdo *
              </label>
              <textarea
                placeholder="Escreva aqui seu artigo"
                className="w-full px-6 py-4 text-lg text-gray-700 border border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-gray-400 min-h-32"
                style={{ backgroundColor: '#edf2e8' }}
              />
            </div>

            <button 
              className="w-full text-white font-semibold py-4 px-6 rounded-lg transition-opacity duration-200 hover:opacity-80 focus:outline-none text-lg"
              style={{ backgroundColor: '#67A22d' }}
            >
              Salvar
            </button>
          </div>
          

        </div>
      </div>
    </div>
  );
};

export default EditArticle;