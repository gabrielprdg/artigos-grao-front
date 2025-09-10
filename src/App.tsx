import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CreateArticle from './pages/CreateArticlePage';

function App() {
  return (
      <Router>
        <div className="App font-sans">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path='/create' element={<CreateArticle/>}/>
          </Routes>
        </div>
      </Router>
  );
}

export default App;

