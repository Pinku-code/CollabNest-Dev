import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Docs from './pages/Docs';
import Plans from './pages/Plans';
import Login from './pages/Login';
import Register from './pages/Register';
import ContactForm from './pages/ContactForm';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div>
      <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/docs' element={<Docs />} />
        <Route path='/plans' element={<Plans />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/contact' element={<ContactForm />} />
      </Routes>
    </Router>
    <Toaster
        position="top-center"
        toastOptions={{
          duration: 3000,
          className: `
            bg-white text-black shadow-md
            dark:bg-gray-900 dark:text-white
            border border-gray-200 dark:border-gray-700
            rounded-md px-4 py-2 text-sm
            transition-all duration-300 ease-in-out
          `,
        }}
      />
    </div>
    
    
  );
}

export default App;