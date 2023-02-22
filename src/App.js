import './App.css';
import { Routes, Route } from 'react-router-dom'
import About from './components/About.jsx'
import Home from './components/Home.jsx'
import Navbar from "./components/Navbar.jsx";
import OrderSummary from "./components/OrderSummary.jsx";
import ErrorPage from "./components/ErrorPage.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='order-summary' element={<OrderSummary />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
