import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "./firebase.config";
export  const AuthContext=createContext(null)
const auth=getAuth(app)
const googleProvider=new GoogleAuthProvider()
const AuthProvider = ({children}) => {
  const  [loading,setloadin]=useState(true)
  const [ user,setuser]=useState(null)
const createUser=(email,password)=>
{
  setloadin(true)
  return createUserWithEmailAndPassword( auth,email,password)
}


const googleSignin=()=>{
  setloadin(true)
  return signInWithPopup(auth,googleProvider)
}


const logout=()=>
{
  setloadin(true)
  return signOut(auth)
}
useEffect(()=>{
 const unSubscribe=  onAuthStateChanged(auth,
  
  
  currentUser=>{

    console.log('user auth',currentUser)
    setuser(currentUser)
    setloadin(false)

  })
return ()=>{
  unSubscribe()
}
},[])
const Singnin=(email,password)=>{
  setloadin(true)
  return signInWithEmailAndPassword(auth,email,password)
}



  const AuthInfo={
    createUser,
    logout,
     user,
     Singnin,
     googleSignin,
     loading
  }
  return (
    <AuthContext.Provider value={AuthInfo}>
    {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;