import './App.css';
import { Routes, Route } from 'react-router-dom'
import About from './components/About.jsx'
import Home from './components/Home.jsx'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
      </Routes>
    </>
  );
}

export default App;
