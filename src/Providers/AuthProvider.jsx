import React, { createContext } from "react";
import { getAuth } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthCon = createContext(null);
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const user = null;
  const authInfo = { user };
  return <AuthCon.Provider value={authInfo}>{children}</AuthCon.Provider>;
};

export default AuthProvider;
