import React, { useState } from 'react';
import Layout from "./layout/Layout";
import GenrePage from './layout/genrePage/GenrePage';
import MediaPage from './layout/mediaPage/MediaPage';
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

          <Route path="/genre/:genre" element={<GenrePage/>} />

          <Route path="/media/:mediaId" element={<MediaPage/>} />
          

          
          <Route path="*" element={<Error404 />} />

        </Routes>
      </Router>
    </div>
  </div>
  );
};

export default App;