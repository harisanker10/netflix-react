import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import auth from "../firebase";

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState(undefined);

  async function signUp(email, password) {
    await createUserWithEmailAndPassword(auth, email, password);
  }

  async function logIn(email, password) {
      await signInWithEmailAndPassword(auth, email, password);
  }

  async function logOut() {
      await signOut(auth);
  }

  useEffect(() => {
     onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

  return (
    <AuthContext.Provider value={{ signUp, logIn, logOut, user }}>
      {children}
    </AuthContext.Provider>
  );
}

export function UserAuth() {
  return useContext(AuthContext);
}
