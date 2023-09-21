import Topbar from "../../components/topbar/Topbar"
import "./register.css"

export default function Register() {
  return (
    <div className="signUpp">
        <div className="signUptop">
            <Topbar/>
        </div>
        <div className="signUpbtm">
            <form className="signupwrapper">
            <span className="signuplogo">Note App</span>
                <div className="signupname">
                    <input type="text" className="fname" placeholder="First Name" minLength={3} required />
                    <input type="text" className="lname" placeholder="Last Name" minLength={3} required />
                </div>
                <input type="email" className="signupEmail" placeholder="Enter your Email" required />
                <input type="password" className="signupPwd" placeholder="Enter your password" minLength={6} required />
                <input type="password" className="cnfPwd" placeholder="Confirm password" minLength={6} required />
                <button className="signUp">signUp</button>
                <button className="Sup-login">Log In  </button>
            </form>
        </div>

    </div>
  )
}
