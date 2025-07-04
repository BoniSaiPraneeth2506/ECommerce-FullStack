import React, { useState} from 'react'
import { Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import Collection from './pages/Collection';
import Contact from './pages/Contact';
import About from './pages/About';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Orders from './pages/Orders';
import PlaceOrder from './pages/PlaceOrder';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';
import { ToastContainer, toast } from 'react-toastify';
import Verify from './pages/Verify';


const App = () => {
 
 
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <ToastContainer />
      <NavBar/>
      <SearchBar/>
      
      <Routes>
         
        <Route path='/' element={<Home/>}/>
        <Route path='/collection' element={<Collection/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/product/:productId' element={<Product/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/orders' element={<Orders/>}/>
        <Route path='/placeorder' element={<PlaceOrder/>}/>
        <Route path='/verify' element={<Verify/>}/>

         
        
      </Routes>
      <Footer/>
    </div>
  )
}

export default App;