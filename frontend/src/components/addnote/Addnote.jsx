import { Close } from "@mui/icons-material"
import "./addnote.css"

export default function Addnote() {
  return (
    <div className="addnote">
        <div className="wrapper">
            <div className="addtopbar">
                <Close className="closeBtn"/>
            </div>
            <div className="addcenter">
                <input type="text" className="addtitle" placeholder="Enter title here..."/>
                <textarea className="addText" placeholder="Enter your notes here..."></textarea>
            </div>
            <div className="addbottom">
                <button className="addButton">Submit</button>
            </div>
        </div>
    </div>
  )
}
