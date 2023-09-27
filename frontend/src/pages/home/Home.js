import "./home.css";
import Topbar from "../../components/topbar/Topbar";
import Notes from "../../components/notes/Notes";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";



export default function Home() {

  const [user, setUser] = useState()
  const navigate = useNavigate()

    useEffect(()=>{
      const auth = localStorage.getItem("noteapp")
      if(!auth){
          navigate("/login");
      }
    })

  return (
    <div>
        <Topbar/>
        <Notes/>
    </div>
  )
}
