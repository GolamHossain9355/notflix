import React, { useContext, useEffect, useState } from "react";
import { auth } from "../firebase";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export default function AuthProvider() {
  return (
    <AuthContext.Provider>
      
    </AuthContext.Provider>
  )
}
