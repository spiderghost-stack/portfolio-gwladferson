import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';
import DesignDetail from './pages/DesignDetail';
import BackgroundPattern from './components/BackgroundPattern';

function App() {
  return (
    <Router>
      <div className="relative min-h-screen">
        <BackgroundPattern />
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
