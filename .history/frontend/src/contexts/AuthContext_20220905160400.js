import React, {useContext, useEffect, useState} from 'react'
import {auth} from "../firebase"

const AuthContext = React.createContext()

export function useAuth() useContext(AuthContext)

export default function AuthProvider() {
  return (
    <div>AuthContext</div>
  )
}
