import React, { useState } from "react";
import Layout from "./layout/Layout";
import { GenrePage, MediaPage, Navbar, SignIn, SignUp, ResetPassword, UpdateProfile, PrivateRoutes, } from "./layout";
import Error404 from "./errors/Error404";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useAuth } from "./contexts/AuthContext";

function App() {
  const [inactive, setInactive] = useState(true);
  const { currentUser } = useAuth();
  console.log(currentUser);

  return (
    <div className="App">
        { currentUser ? ( <Navbar inactive={inactive} setInactive={setInactive} /> )  : "" }

        <div className={`mainscreen ${inactive ? "inactive" : ""}`}>
          <Router>
            <Routes>
              <Route element={<PrivateRoutes />}>
                <Route path="/" element={<Layout />} />
                <Route path="/genre/:genre" element={<GenrePage />} />
                <Route path="/media/:mediaId" element={<MediaPage />} />
              </Route>

              <Route path="/sign-in" element={<SignIn />} />
              <Route path="/sign-up" element={<SignUp />} />

              <Route path="*" element={<Error404 />} />
            </Routes>
          </Router>
        </div>
    </div>
  );
}

export default App;