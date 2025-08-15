import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects'; // Make sure this import is here
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
    return (
        <div className="App">
            <Header />
            <main>
                <Home />
                <About />
                <Experience />
                <Projects /> {/* Correctly added the Projects section */}
                <Skills />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}

export default App;