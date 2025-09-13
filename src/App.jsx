import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './pages/hero.jsx';
import Dashboard from './pages/dashboard.jsx'; // Ensure this is the correct path

function App() {
  return (
    <Router>
      <div className="relative">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
