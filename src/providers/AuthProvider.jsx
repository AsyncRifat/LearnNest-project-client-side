import React, { useEffect, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { auth } from '../firebase/firebase.init';

import { AuthContext } from '../context/AuthContext';

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // create user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // login user
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Google login
  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // user's profile
  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  // logout
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  // reset password by email
  const forgotPassword = email => {
    setLoading(true);
    return sendPasswordResetEmail(auth, email);
  };

  // observer
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, user => {
      setUser(user);
      setLoading(false);

      console.log('user in the state change -->', user?.email);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    signInWithGoogle,
    updateUserProfile,
    signInUser,
    logOut,
    forgotPassword,
  };

  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
