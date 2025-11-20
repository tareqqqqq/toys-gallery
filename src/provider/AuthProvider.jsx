import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";


import { auth } from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";


const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  console.log(auth);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const updateProfileFunc = (updateData) => {
    return updateProfile(auth.currentUser, updateData);
  };

 

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  

  const signout = () => {
    setLoading(true);
    return signOut(auth);
  };
  const sendPassReset = (email) => {
    setLoading(true);
    return sendPasswordResetEmail(auth, email);
  };

  const authInfo = {
    user,
    setUser,
    createUser,
    signInUser,
    signInWithGoogle,
    
    signout,
    sendPassReset,
   
    updateProfileFunc,
    loading,
    setLoading,
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currUser) => {
      console.log(currUser);
      setUser(currUser);
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);
    return  <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;