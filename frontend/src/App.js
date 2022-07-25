import React from 'react';
import Layout from "./layout/Layout";
import Error404 from './errors/Error404';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
  <div>
    <Router>
      <Routes>

        <Route path="/" element={<Layout/>} />
        
        <Route path="*" element={<Error404 />} />

      </Routes>
    </Router>
  </div>
  );
};

export default App;