import { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  onAuthStateChanged,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.init";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  //   Get Auth from Firebase.
  const auth = getAuth(app);
  //   Google Provider!
  const GoogleProvider = new GoogleAuthProvider();

  //   Create User with Email & Password!
  const createUserWithEmail = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   Sign In With Email & Password!
  const signInwithEmail = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  //   Google Login!
  const signInWithGoogle = () => {
    return signInWithPopup(auth, GoogleProvider);
  };
  //   Reset Password!
  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };
  // Sign-Out
  const logOut = () => {
    return signOut(auth);
  };
  //User Observer!
  useEffect(() => {
    const Unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log(currentUser);
      setLoading(false);
    });
    return () => Unsubscribe();
  }, [auth]);

  // Update User Profile
  const profileUpdate = (profileInfo) => {
    console.log("info", profileInfo);
    return updateProfile(auth.currentUser, profileInfo);
  };
  // Context Value!
  const AuthInfo = {
    loading,
    createUserWithEmail,
    signInwithEmail,
    signInWithGoogle,
    resetPassword,
    profileUpdate,
    user,
    logOut,
  };
  return (
    <div>
      <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
