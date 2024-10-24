import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MarkdownPreviewer from './pages/MarkdownPreviewer';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/markdown-previewer" element={<MarkdownPreviewer />} />
    </Routes>
  );
}

export default App;
