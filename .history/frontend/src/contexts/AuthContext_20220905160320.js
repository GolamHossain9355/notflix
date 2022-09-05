import React, {useContext, useEffect, useState} from 'react'
import {auth} from "../firebase"

const AuthContext = React.createContext()

export default function AuthProvider() {
  return (
    <div>AuthContext</div>
  )
}
