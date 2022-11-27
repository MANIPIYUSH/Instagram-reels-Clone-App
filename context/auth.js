import {onAuthStateChanged,signInWithEmailAndPassword } from 'firebase/auth'
import React,{useState,useEffect} from 'react'
import {auth} from "../firebase"
export const AuthContext =React.createContext()

 
function AuthWrapper({children}) {

    const [user,setUser] = React.useState('');
    const [loading,setLoading]=React.useState(true)
    useEffect(() => {
        onAuthStateChanged(auth,(user)=>{
            if(user){
                setUser(user)
            }
        })
        setLoading(false)
    }, []); 

    function login(email,password){
        return signInWithEmailAndPassword(auth, email, password)
    }
 
    const store={
        login,user
    }
  return (
    <AuthContext.Provider value={store}>
      {!loading && children}
    </AuthContext.Provider>
  )
}

export default AuthWrapper
