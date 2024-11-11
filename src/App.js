// src/App.js
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Posts from './pages/Posts';
import PostDetail from './pages/PostDetail';
import { auth } from './firebaseConfig';
import { useAuthState } from 'react-firebase-hooks/auth'; // Firebase hook for auth state

function App() {
  const [user] = useAuthState(auth); // Check if user is logged in

  return (
    <Router>
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/signup" className="nav-link">Signup</Link>
          <Link to="/login" className="nav-link">Login</Link>
          {user && <Link to="/posts" className="nav-link">Posts</Link>}
        </div>
      </nav>

      <div className="container">
        <div className="page-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/posts"
              element={user ? <Posts /> : <Navigate to="/login" />}
            />
            <Route
              path="/posts/:postID"
              element={user ? <PostDetail /> : <Navigate to="/login" />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
