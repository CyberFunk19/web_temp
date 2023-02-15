import React, { useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from '../app/hooks';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import {
  loginAsync,regAsync,selectuserRegisterd,logout,selectlogged
} from '../features/login/loginSlice';



export function Reg() {
    const logged = useAppSelector(selectlogged);
  const registerd = useAppSelector(selectuserRegisterd);
  const dispatch = useAppDispatch();
    const [password, setpassword] = useState("")
    const [username, setuserName] = useState("")
    const notify = () => toast("Welcome " + username + " !");
    const [email, setemail] = useState("")

    const setRemember=()=>{
        let reme=localStorage.getItem("remember")
        if(reme !== null)
            
            return JSON.parse(reme)

    }

    const pad = {
      color: 'white',
      backgroundColor: 'rgb(30, 30, 30)',
      padding: '20px',
      borderRadius: '5px',
      center: '100px',
      

    }

    
  return (
    <div>
      
      <div style={pad}>
      {logged?<button onClick={()=>dispatch(logout())}>Logout</button>:""}
        <ToastContainer theme="dark"/>
          User Name:  <input onChange={(e)=>setuserName(e.target.value)}/><br/>
          Password:  <input onChange={(e)=>setpassword(e.target.value)}/><br/>
          Email:  <input onChange={(e)=>setemail(e.target.value)}/><br/>
          <button onClick={()=>dispatch(regAsync({password,username,email:email || "e@a.com"}))}>Sign up</button>
         
      </div>
      
    </div>
  );
}

