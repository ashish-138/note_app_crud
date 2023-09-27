import { useNavigate } from "react-router-dom"
import "./feed.css"
import {Delete, Edit} from "@mui/icons-material"
import axios from "axios";

export default function Feed({note}) {
  const history = useNavigate();


const deleteHandle = async (e)=>{
  // e.preventDefault()
  try{
    const res = await axios.delete("http://127.0.0.1:8000/api/home/"+note._id)
    alert(res.data);
    
  }catch(err){
    console.log(err)
  }
}

const editHandle = async(e)=>{
await localStorage.setItem("click",note._id);
history("/login")
}


  return (
    <>
    {
      note?
    <div className="feed">
        <div className="feedtop">
            <div className="title">
                <span className="feedtitle">{note.title}</span>
            </div>
            <div className="icons">
                <Edit className="icon" id="icon1" onClick={editHandle} />
                <Delete className="icon" id="icon2" onClick={deleteHandle} />
            </div>
        </div>
        <div className="feedbottom">
                <span className="fbtext">{note.note}</span>
        </div>
    </div>:""
    }
    </>
  )
}
