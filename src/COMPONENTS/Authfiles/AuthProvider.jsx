import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "./firebase.config";
export  const AuthContext=createContext(null)
const auth=getAuth(app)
const googleProvider=new GoogleAuthProvider()
const AuthProvider = ({children}) => {
  const [ user,setuser]=useState(null)
const createUser=(email,password)=>
{
  return createUserWithEmailAndPassword( auth,email,password)
}


const googleSignin=()=>{
  return signInWithPopup(auth,googleProvider)
}


const logout=()=>
{
  return signOut(auth)
}
useEffect(()=>{
 const unSubscribe=  onAuthStateChanged(auth,
  
  
  currentUser=>{

    console.log('user auth',currentUser)
    setuser(currentUser)

  })
return ()=>{
  unSubscribe()
}
},[])
const Singnin=(email,password)=>{
  return signInWithEmailAndPassword(auth,email,password)
}



  const AuthInfo={
    createUser,
    logout,
     user,
     Singnin,
     googleSignin
  }
  return (
    <AuthContext.Provider value={AuthInfo}>
    {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;