//import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/login';
import Signup from './pages/signup';
import Dashboad from './pages/dashboad';

const App = () => {
  return (
    <Router>
      <div>
        {/*<h1 className="text-center text-3xl font-bold my-4">Welcome to My React App</h1>
        <nav className="flex justify-center space-x-4 mb-8">
          <Link to="/login" className="text-blue-500 hover:underline">Login</Link>
          <Link to="/signup" className="text-blue-500 hover:underline">Signup</Link>
  </nav>*/}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboad" element={< Dashboad/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;



