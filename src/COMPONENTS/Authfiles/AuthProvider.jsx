import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "./firebase.config";
export  const AuthContext=createContext(null)
const auth=getAuth(app)
const AuthProvider = ({children}) => {
  const [ user,setuser]=useState(null)
const createUser=(email,password)=>
{
  return createUserWithEmailAndPassword( auth,email,password)
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
     Singnin
  }
  return (
    <AuthContext.Provider value={AuthInfo}>
    {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;