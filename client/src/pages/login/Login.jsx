import { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom"
import { Context } from "../../context/Context";
import axios from "axios";
import "./login.css"

export default function Login() {
    const userRef = useRef();   //userRef is user reference
    const passwordRef = useRef();  //passwordRef is password reference
    const{user,dispatch,isFetching}  = useContext(Context);
    const [isError, setIsError] = useState(false);
    const [errorMessage, setErrorMessage]= useState("");

    const handleSubmit = async(e)=>{  //e is event
        e.preventDefault();
        dispatch({type:"LOGIN_START"});
        
            console.log("hello");
            const res = await axios.post("/auth/login",{
                username:userRef.current.value,
                password: passwordRef.current.value,
            }).then(res =>{
                dispatch({type:"LOGIN_SUCCESS",payload:res.data});
            }).catch(error=>{
                dispatch({type:"LOGIN_FAILURE"});
                setIsError(true);
                if(error.response){
                    // Request made and server responded
                    setErrorMessage(error.response.data);
                } else if (error.request) {
                    // The request was made but no response was received
                   setErrorMessage(error.request);
                } else {
                    // Something happened in setting up the request that triggered an Error
                   setErrorMessage(error.message);
                }
            });
    };

    //console.log( user);
    console.log( "isFetching: " + isFetching);
    return (
        <div className="login">
            <span className="loginTitle">Login</span>
            <form action="" className="loginForm" onSubmit={handleSubmit}>
                <label>Username</label>
                <input 
                    type="text" 
                    className="loginInput" 
                    placeholder="Enter your username..." 
                    ref={userRef}
                />
                <label>Password</label>
                <input 
                    type="password" 
                    className="loginInput" 
                    placeholder="Enter your password..." 
                    ref={passwordRef}
                />
                <button className="loginButton" type="submit" disabled={isFetching}>Login</button>
            </form>
                <button className="loginRegisterButton">
                    <Link className="link" to="/register">Register</Link>
                </button>
                {isError && <span className="loginError">{errorMessage}</span> }
        </div>
    )
}
