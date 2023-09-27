import { useRef, useEffect } from "react"
import Topbar from "../../components/topbar/Topbar"
import "./login.css"
import { useNavigate } from "react-router-dom";
import axios from "axios";


export default function Login() {

    const email = useRef();
    const password=useRef();
    const history = useNavigate()

    useEffect(()=>{
      const auth= localStorage.getItem('noteapp');
      if (auth){
              history("/");
      }
  })

  const submitHandle = async (e)=>{
    e.preventDefault();
    const user = {
      email:email.current.value,
      password:password.current.value
    }
    try{
        const res = await axios.post("http://127.0.0.1:8000/api/login",user);
        await localStorage.setItem("noteapp",res.data.id);
        history("/");
    }catch(err){
      alert(err.response.data)
      console.log(err.response.data)
    }
  }

  const signupHandle=(e)=>{
    e.preventDefault()
    history("/register");
  }


  return (
    <div className="login">
        <div className="logintop">
        <Topbar/>
        </div>
        <div className="loginbottom">
            <form className="loginwrapper" onSubmit={submitHandle}>
                <span className="loginlogo">Note App</span>
                <input type="email" className="loginEmail" ref={email} placeholder="Enter your Email..." required />
                <input type="password" className="loginPwd" ref={password} placeholder="Enter your password..." required />
                <button className="loginBtn" type="submit">Log in</button>
                <span className="fg-pwd" >Forgot Password</span>
                <button className="l-signup" onClick={signupHandle}>Sign Up  </button>
            </form>
        </div>        
        
    </div>
  )
}
