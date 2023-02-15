import React, { useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from '../app/hooks';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import {
  loginAsync,regAsync,selectuserRegisterd,logout,selectlogged
} from '../features/login/loginSlice';
import { Link } from 'react-router-dom';



export function Login() {
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

    const [remember, setremember] = useState(setRemember())//JSON.parse( localStorage.getItem("remember")|| "false"))
    useEffect(() => {
        console.log( localStorage.getItem("remember"))
        if(registerd){
        console.log(registerd)
        notify()
        }
        else{
            console.log("not registerd")
        }
    }, [registerd])
    
    useEffect(() => {
     localStorage.setItem("remember",JSON.stringify( remember))
    }, [remember])
    
  return (
    <div>
      
      <div style={pad}>
      {logged?<button onClick={()=>dispatch(logout())}>Sign out</button>:""}
        <ToastContainer theme="dark"/>
          User Name:  <input onChange={(e)=>setuserName(e.target.value)}/><br/>
          Password:  <input onChange={(e)=>setpassword(e.target.value)}/><br/>
          <button onClick={()=>dispatch(loginAsync({password,username}))}>Sign in</button>
          Remember me<input onChange={(e)=>setremember(e.target.checked)}  type={'checkbox'}></input><br/>
          New Here? <Link className='btn btn-light' to="/register"> Sign up</Link>{" "}
         
      </div>
      
    </div>
  );
}