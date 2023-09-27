import { Close } from "@mui/icons-material"
import "./addnote.css"
import { useEffect, useRef, useState } from "react"
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Addnote({noteId}) {
    const title = useRef()
    const note = useRef()
    const [notedata, setNotedata] = useState();
    const [data,setData] = useState()
    const [tvalue,setTvalue] = useState()
    const [dvalue, setDvalue] = useState();
    const history = useNavigate();
    useEffect(()=>{
        setData(noteId)
        const getData = async()=>{
            if(noteId==="true"){
                setData(null);
            }else{
            try{
                const res = await axios.get("http://127.0.0.1:8000/api/home?noteId="+noteId)
                setTvalue(res.data.title)
                setDvalue(res.data.note)
            }catch(err){
                console.log(err)
            }
        }
    }
    getData();
    },[])

    const closeHandle= async()=>{
        await localStorage.removeItem("click")
        history("/login")
    }

    const submitHandle=async()=>{
        if(noteId==="true"){
            const userId = localStorage.getItem("noteapp");
            const dataSave = {
                    title:title.current.value,
                    note:note.current.value,
                    userId:userId,
            }
            try{
                const res = await axios.post("http://127.0.0.1:8000/api/home",dataSave);
                alert(res.data)
                localStorage.removeItem("click");
                history("/login");
            }catch(err){
                console.log(err)
            }
        }else{
            const userId = localStorage.getItem("noteapp");
            const dataId = localStorage.getItem("click")
            const dataSave = {
                    title:tvalue,
                    note:dvalue,
                    userId:userId,
            }
            try{
                const res = await axios.put("http://127.0.0.1:8000/api/home/"+dataId,dataSave);
                alert(res.data)
                localStorage.removeItem("click");
                history("/login");
            }catch(err){
                console.log(err)
            }

        }
    }


  return (
    <div className="addnote">
        <div className="wrapper">
            <div className="addtopbar">
                <Close className="closeBtn" onClick={closeHandle} />
            </div>
            {data?
            <div className="addcenter">
                <input type="text" className="addtitle" placeholder="Enter title here..." value={tvalue} onChange={(e)=>setTvalue(e.target.value)} />
                <textarea className="addText" placeholder="Enter your notes here..." value={dvalue} onChange={(e)=>setDvalue(e.target.value)}  />
            </div>:
            <div className="addcenter">
            <input type="text" className="addtitle" placeholder="Enter title here..." ref={title} required />
            <textarea className="addText" placeholder="Enter your notes here..." ref={note} required />
            </div>
            }
            <div className="addbottom">
                <button className="addButton" onClick={submitHandle}>Submit</button>
            </div>
        </div>
    </div>
  )
}
