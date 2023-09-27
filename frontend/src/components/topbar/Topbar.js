import { useEffect, useState } from "react"
import "./topbar.css"
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Topbar() {
  const [auth,setAuth] = useState()
  const [user,setUser] = useState(null)
  const history = useNavigate()


  useEffect(()=>{
    const data = localStorage.getItem("noteapp")
    setAuth(data)
      const userName = async()=>{
        try{
          const res = await axios.get("http://127.0.0.1:8000/api/user/"+data)
          setUser(res.data)
        }catch(err){
          console.log(err)
        }
      }
      userName()
  },[])

  const clickHandle=async(e)=>{
    e.preventDefault();
    await localStorage.removeItem("noteapp");
    history("/login");

  }



  return (
    
    <div className="topbar">
      <div className="tbleft">
      <span className="tbleftspan">Note App</span>
      </div>
    
      <div className="tbcenter">
      <span className="tbcenterspan">{user?"Hi "+user.fname+" "+user.lname: " "}</span>
      </div>
      <div className="tbright">
        {user?
      <button className="btn" onClick={clickHandle}>Logout</button>:""}
      </div>
    
      </div>
   )
}
