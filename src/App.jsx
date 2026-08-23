import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';
import DesignDetail from './pages/DesignDetail';

function App() {
  return (
    <Router>
      <div className="relative min-h-screen">
        <canvas id="bg-canvas" className="fixed inset-0 z-0 pointer-events-none"></canvas>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
          <Route path="/design/:id" element={<DesignDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
