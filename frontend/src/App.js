import React, { useState } from 'react';
import Layout from "./layout/Layout";
import GenrePage from './layout/genrePage/GenrePage';
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
          <Route path="/action" element={<GenrePage title="Action" genre="Action" />} />
          <Route path="/drama" element={<GenrePage title="Dramas" genre="Drama" />} />
          <Route path="/comedy" element={<GenrePage title="Comedies" genre="Comedy" />} />
          <Route path="/family" element={<GenrePage title={`Kids & Family`} genre="Family" />} />
          <Route path="/musical" element={<GenrePage title={`Music & Musicals`} genre="Musical" />} />
          
          <Route path="*" element={<Error404 />} />

        </Routes>
      </Router>
    </div>
  </div>
  );
};

export default App;