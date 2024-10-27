import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MarkdownPreviewer from './pages/MarkdownPreviewer';
import DrumMachine from './pages/DrumMachine';
import TwentyFiveFiveClock from './pages/TwentyFiveFiveClock';
import Calculator from './pages/Calculator';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/markdown-previewer" element={<MarkdownPreviewer />} />
      <Route path="/drum-machine" element={<DrumMachine />} />
      <Route path="/25-5-clock" element={<TwentyFiveFiveClock />} />
      <Route path="/calculator" element={<Calculator />} />
    </Routes>
  );
}

export default App;
