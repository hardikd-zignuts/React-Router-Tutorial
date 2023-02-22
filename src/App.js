import './App.css';
import React from 'react'
import { Routes, Route } from 'react-router-dom'
// import About from './components/About.jsx'
import Home from './components/Home.jsx'
import Navbar from "./components/Navbar.jsx";
import OrderSummary from "./components/OrderSummary.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import Product from "./components/Product.jsx";
import FeaturedProduct from "./components/FeaturedProduct";
import NewProduct from "./components/NewProduct";
import Users from "./components/Users";
import IsAuthorized from "./components/Auth/IsAuthorized.jsx";
import Admin from "./components/Admin";
import Profile from "./components/Auth/Profile.jsx";
import Login from "./components/Auth/Login.jsx";
import UserDetails from "./components/UserDetails";
const LazyAbout = React.lazy(() => import('./components/About.jsx'))

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={
          <React.Suspense fallback="loading.....">
            <LazyAbout />
          </React.Suspense>
        } />
        <Route path='order-summary' element={<OrderSummary />} />
        <Route path='profile' element={
          <IsAuthorized><Profile /></IsAuthorized>
        } />
        <Route path='login' element={<Login />} />
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
