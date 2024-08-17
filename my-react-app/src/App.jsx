import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import User from '../components/User';
import Admin from "../components/Admin";

import './App.css'
function App() {
  // const [items, setItems] = useState([])
  // useEffect(() => {
  //   const fetchdata = async () => {
  //     const res = await fetch('http://localhost:3000')
  //     const data = await res.json();
  //     setItems(data)
  //   }
  //   fetchdata();
  // }, [])
  {/* {items.map(i => (
      <p>{i._id}, {i.name}, {i.email}</p>
    ))} */}
  return (
    <Router>
      <Routes>
        <Route path="/user" element={<User />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router >
  );
}

export default App;
