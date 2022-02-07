import React, { useState } from 'react';
import {BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import AddMember from './screens/members/AddMember';
import Login from './screens/login/login';

toast.configure()
const routes = [
  { path: '/add-members', name: 'AddMembers', Component: AddMember },
  { path: '/login', name: 'Login', Component: Login },
]

function App() {
  const [user, setToken] = useState();

  // if(!user) {
  //   return <Login setToken={setToken} />
  // }
  return (
    <div className="App">
      <Router>
        {/* <Navigate path="/" to={route} /> */}
        <Routes>
          {routes.map(({ path, Component }) => (
            <Route key={path} exact path={path} element={<Component />}>
            </Route>
          ))}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
