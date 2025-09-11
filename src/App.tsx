import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CreateArticle from './pages/CreateArticlePage';
import EditArticle from './pages/EditArticlePage';
import ArticleDetails from './pages/ArticleDetailsPage';

function App() {
  return (
      <Router>
        <div className="App font-sans">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/article/:id" element={<ArticleDetails />} />
            <Route path='/create' element={<CreateArticle/>}/>
            <Route path="/edit/article/:id" element={<EditArticle />} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;

