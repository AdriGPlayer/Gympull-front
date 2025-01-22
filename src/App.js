import React from 'react';
import './App.css';
import Nav from './components/navbar/Nav';
import Main from './components/content/Main';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import About from './components/content/About';
import Gallery from './components/content/Gallery';
import Pricing from './components/content/Pricing';
import Contact from './components/content/Contact';
import Footer from './components/footer/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import Shop from './components/content/shop/Shop';
import Login from './components/content/login/Login';

import ProfilePage from './components/content/user/ProfilePage';
import ConfirmCart from './components/content/shop/form/ConfirmCart';
import ChatComponent from './components/content/chat/ChatComponent';

function AnimatedRoutes() {
  const location = useLocation();
  const defaultUserId = 'default-id'; // Define el ID de usuario por defecto aquí
  return (
    <AnimatePresence>
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<Main />} />
          <Route path='/about' element={<About />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/pricing' element={<Pricing />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/shop' element={<Shop userId={defaultUserId} />} />
          <Route path='/shop/:id' element={<Shop/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/user/:email' element={<ProfilePage/>}/>
          <Route path='/confirm' element={<ConfirmCart />} />
          <Route path='/chat' element={<ChatComponent/>}/>
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

function App() {

  return (
    <div className='bg-dark text-light min-vh-100'>
      <Router>
        <Nav />
        <AnimatedRoutes />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
