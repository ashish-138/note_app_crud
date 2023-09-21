import Topbar from "../../components/topbar/Topbar"
import "./login.css"

export default function Login() {
  return (
    <div className="login">
        <div className="logintop">
        <Topbar/>
        </div>
        <div className="loginbottom">
            <form className="loginwrapper">
                <span className="loginlogo">Note App</span>
                <input type="email" className="loginEmail" placeholder="Enter your Email..." required />
                <input type="password" className="loginPwd" placeholder="Enter your password..." required />
                <button className="loginBtn">Log in</button>
                <span className="fg-pwd" >Forgot Password</span>
                <button className="l-signup">Sign Up  </button>
            </form>
        </div>        
        
    </div>
  )
}
