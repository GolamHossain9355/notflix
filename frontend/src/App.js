import React, { useState } from "react";
import Layout from "./layout/Layout";
import { AuthProvider } from "./contexts/AuthContext";
import {
  GenrePage,
  MediaPage,
  Navbar,
  SignIn,
  SignUp,
  ResetPassword,
  UpdateProfile,
  PrivateRoutes,
} from "./layout";
import Error404 from "./errors/Error404";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [inactive, setInactive] = useState(true);

  return (
    <div className="App">
      <AuthProvider>
        <Navbar inactive={inactive} setInactive={setInactive} />

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
      </AuthProvider>
    </div>
  );
}

export default App;
