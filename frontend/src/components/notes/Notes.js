import { useEffect, useState } from "react"
import Addnote from "../addnote/Addnote"
import Feed from "../feed/Feed"
import "./notes.css"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export default function Notes() {
  const [notes, setNotes] = useState([])
  const [addNote, setAddNote] = useState(null);
  const history = useNavigate();

  const addHandle = ()=>{
    localStorage.setItem("click","true");
    history("/login")
  }

  useEffect(()=>{
    const add = async()=>{
        const get = await localStorage.getItem("click");
        if(get){
          setAddNote(get);
        }
    }
    add()
  },[])

  useEffect(()=>{
    const userId = localStorage.getItem("noteapp");
    const getNotes = async () =>{
      try{

        const res = await axios.get("http://127.0.0.1:8000/api/home?userId="+userId)
        setNotes(res.data);
        if (res.data.length==0){
          setNotes(false);
        }
      }catch(err){
        console.log(err);
      }
    }
    getNotes();

  },[notes])


  return (
    <div className="mainnote">
        <div className="note">
        <div className="notes">
          {notes?
            notes.map((e)=>(
              <Feed key ={e._id} note={e} />
            )):<div className="noFeed"><h1>Click + to add a Note!</h1></div>
          }
                
        </div>
        <div className="add" onClick={addHandle} >
            <span className="addBtn">+</span>
        </div>
        </div>
        <div className="add-note">
            {addNote? <Addnote noteId={addNote} />:""}
        </div>
    </div>
  )
}
