
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from "./components/Footer";
import Home from './pages/Home';
import Certification from './pages/Certification';
import BoardMembers from './pages/BoardMembers';
import About from './pages/About';
import Contact from './pages/Contact';
import Upload from './pages/Upload';

function App() {
  return (
    <>
      <Navigation />
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/certification" element={<Certification />} />
          <Route path="/board-members" element={<BoardMembers />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/upload" element={<Upload />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;

