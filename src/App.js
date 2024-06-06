import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import BackToTopButton from './components/BackToTopButton';
import Home from './pages/Home';
import About from './pages/About';
import Importance from './pages/Importance';
import HowToHelp from './pages/HowToHelp';
import Contact from './pages/Contact';
import './styles.css';

const App = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/importance" element={<Importance />} />
                <Route path="/how-to-help" element={<HowToHelp />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <BackToTopButton />
            <Footer />
        </Router>
    );
};

export default App;
