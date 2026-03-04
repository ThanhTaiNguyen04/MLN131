import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Learn from './pages/Learn.jsx';
import Quiz from './pages/Quiz.jsx';

function Navigation() {
  const location = useLocation();
  
  const navItems = [
    { path: '/', label: 'Trang Chủ' },
    { path: '/learn', label: 'Bài Học' },
    { path: '/quiz', label: 'Trò Chơi Quiz' },
  ];

  return (
    <nav className="bg-gradient-to-r from-red-600 via-red-500 to-yellow-500 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-white font-bold text-xl">Kinh Tế Việt Nam</span>
          </Link>
          
          <div className="flex space-x-1 sm:space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                  location.pathname === item.path
                    ? 'bg-white text-red-600 shadow-md transform scale-105'
                    : 'text-white hover:bg-red-700 hover:scale-105'
                }`}
              >
                <span>{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-lg font-semibold mb-2">
            Nền Kinh Tế Thị Trường Định Hướng Xã Hội Chủ Nghĩa ở Việt Nam
          </p>
          <p className="text-gray-400 text-sm">
            © 2026 - Website Học Tập Tương Tác
          </p>
        </div>
      </div>
    </footer>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Navigation />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/learn" element={<Learn />} />
            <Route path="/quiz" element={<Quiz />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
