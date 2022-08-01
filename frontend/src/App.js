import React, { useState } from 'react';
import Layout from "./layout/Layout";
import Error404 from './errors/Error404';
import Navbar from "./layout/navbar/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [inactive, setInactive] = useState(true);
  
  return (
  <div className="App">

    <Navbar inactive={inactive} setInactive={setInactive}/>

    <div className={`mainscreen ${inactive ? "inactive" : ""}`}>
      <Router>
        <Routes>

          <Route path="/" element={<Layout/>} />
          
          <Route path="*" element={<Error404 />} />

        </Routes>
      </Router>
    </div>
  </div>
  );
};

export default App;

// comment