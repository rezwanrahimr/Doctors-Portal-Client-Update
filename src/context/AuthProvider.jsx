import { createContext } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
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

  //   Google Login!
  const signInWithGoogle = () => {
    return signInWithPopup(auth, GoogleProvider);
  };
  // Context Value!
  const AuthInfo = { createUserWithEmail, signInWithGoogle };
  return (
    <div>
      <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
