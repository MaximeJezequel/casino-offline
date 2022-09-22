import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth"
import { createContext, useContext, useEffect, useState } from "react"
import { auth } from "../services/auth-firebase"

const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
  // States
  const [user, setUser] = useState({})

  // Sign Up
  const signUpWithEmail = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  // Sign In
  const logInWithEmail = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  // Sign Out
  const logOut = () => {
    return signOut(auth)
  }

  // Send ResetPasswordEmail
  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser)
      setUser(currentUser)
    })

    return () => {
      unsubscribe()
    }
  }, [])

  return (
    <AuthContext.Provider
      value={{
        user,
        signUpWithEmail,
        logInWithEmail,
        logOut,
        resetPassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const UserAuth = () => {
  return useContext(AuthContext)
}
