
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from "./components/Footer"; // Import Footer
import Home from './pages/Home';
import Certification from './pages/Certification';
import BoardMembers from './pages/BoardMembers';
import About from './pages/About';
import Contact from './pages/Contact';
import Upload from './pages/Upload';

function App() {
  return (
    <Router>
      <Navigation />
      <div className="container mx-auto p-4">
        <Routes>
          <Route path= {import.meta.env.BASE_URL + "/"} element={<Home />} />
          <Route path={import.meta.env.BASE_URL + "certification"} element={<Certification />} />
          <Route path={import.meta.env.BASE_URL + "board-members"} element={<BoardMembers />} />
          <Route path={import.meta.env.BASE_URL + "about"}element={<About />} />
          <Route path={import.meta.env.BASE_URL + "contact"} element={<Contact />} />
          <Route path={import.meta.env.BASE_URL + "upload"} element={<Upload />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
      <Footer /> {/* Add Footer component here */}
    </Router>
  );
}

export default App;
