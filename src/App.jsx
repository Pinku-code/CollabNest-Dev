import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Docs from './pages/Docs';
import Plans from './pages/Plans';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import ContactForm from './components/ContactForm';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/docs' element={<Docs />} />
        <Route path='/plans' element={<Plans />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/contact' element={<ContactForm/>}/>
      </Routes>
    </Router>
  );
}

export default App;