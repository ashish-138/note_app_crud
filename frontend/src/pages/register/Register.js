import { useEffect, useRef } from "react"
import Topbar from "../../components/topbar/Topbar"
import "./register.css"
import axios from "axios"
import { useNavigate,Link } from "react-router-dom";

export default function Register() {

    const fname = useRef();
    const lname = useRef();
    const email = useRef();
    const password = useRef();
    const cnfPassword= useRef();
    const history = useNavigate();


    useEffect(()=>{
        const auth= localStorage.getItem("noteapp");
        if (auth){
                history("/");
        }
    })

    const clickHandle = async(e)=>{
        e.preventDefault();
            if(cnfPassword.current.value !== password.current.value){
                cnfPassword.current.setCustomValidity("Password don't match")
            }else{
                const user = {
                    fname:fname.current.value,
                    lname:lname.current.value,
                    email:email.current.value,
                    password:password.current.value
                }
                try{
                    await axios.post("/register",user);
                    alert("User register succefully!");
                    history("/login")
                }catch(err){
                    console.clear()
                    if(err.response.data.code == 11000){
                        alert(email.current.value+" is already registered!")

                    }
                }
            }
        }
    

    const loginHandle =(e)=>{
        e.preventDefault();
        history("/login");
    }




  return (
    <div className="signUpp">
        <div className="signUptop">
            <Topbar/>
        </div>
        <div className="signUpbtm">
            <form className="signupwrapper" onSubmit={clickHandle}>
            <span className="signuplogo">Note App</span>
                <div className="signupname">
                    <input type="text" ref={fname} className="fname" placeholder="First Name" minLength={3} required />
                    <input type="text" ref={lname} className="lname" placeholder="Last Name" minLength={3} required />
                </div>
                <input type="email" ref={email} className="signupEmail" placeholder="Enter your Email" required />
                <input type="password" ref={password} className="signupPwd" placeholder="Enter your password" minLength={6} required />
                <input type="password" ref={cnfPassword} className="cnfPwd" placeholder="Confirm password" minLength={6} required />
                <button className="signUp" type="submit">signUp</button>
                <button className="Sup-login" onClick={loginHandle}>Log In  </button>
            </form>
        </div>

    </div>
  )
}
