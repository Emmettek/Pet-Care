
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './component/Navbar';
import Home from './page/Home';
import About from './page/About';
import ContactUs from './page/ContactUs';

function App() {
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Contact Us', href: '/contact-us' },

  ];

  return (
    <>
      <Router>

        <Navbar links={navLinks} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact-us' element={<ContactUs />} />

        </Routes>
      </Router>





    </>
  );
}

export default App;
