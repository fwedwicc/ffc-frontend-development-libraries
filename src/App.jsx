import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MarkdownPreviewer from './pages/MarkdownPreviewer';
import DrumMachine from './pages/DrumMachine';
import TwentyFiveFiveClock from './pages/TwentyFiveFiveClock';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/markdown-previewer" element={<MarkdownPreviewer />} />
      <Route path="/drum-machine" element={<DrumMachine />} />
      <Route path="/25-5-clock" element={<TwentyFiveFiveClock />} />
    </Routes>
  );
}

export default App;
