import React, {useState, useEffect} from 'react';
import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Contact from './pages/contact';
import Projects from './pages/projects';
import Layout from './component/layout';
import ScrollTop from './component/ScrollTop';
import Spinner from './component/spinner';

function App() {

    const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a network request or some loading delay
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Change this delay as needed
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (

    <Router>
      <ScrollTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
