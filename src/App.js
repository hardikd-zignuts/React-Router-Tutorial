import './App.css';
import { Routes, Route } from 'react-router-dom'
import About from './components/About.jsx'
import Home from './components/Home.jsx'
import Navbar from "./components/Navbar.jsx";
import OrderSummary from "./components/OrderSummary.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import Product from "./components/Product.jsx";
import FeaturedProduct from "./components/FeaturedProduct";
import NewProduct from "./components/NewProduct";
import Users from "./components/Users";
import Admin from "./components/Admin";
import UserDetails from "./components/UserDetails";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='order-summary' element={<OrderSummary />} />
        <Route path='product' element={<Product />} >
          <Route index element={<FeaturedProduct />} />
          <Route path="featured" element={<FeaturedProduct />} />
          <Route path="new" element={<NewProduct />} />
        </Route>
        <Route path='users' element={<Users />} >
          <Route path=":userId" element={<UserDetails />} />
          <Route path="admin" element={<Admin />} />
        </Route>
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
