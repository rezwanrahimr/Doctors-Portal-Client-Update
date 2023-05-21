import { createContext } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import app from "../firebase/firebase.init";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
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
  // Context Value!
  const AuthInfo = {
    createUserWithEmail,
    signInwithEmail,
    signInWithGoogle,
    resetPassword,
  };
  return (
    <div>
      <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
