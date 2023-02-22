import './App.css';
import { Routes, Route } from 'react-router-dom'
import About from './components/About.jsx'
import Home from './components/Home.jsx'
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
      </Routes>
    </>
  );
}

export default App;
