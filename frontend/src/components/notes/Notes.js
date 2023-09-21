import Addnote from "../addnote/Addnote"
import Feed from "../feed/Feed"
import "./notes.css"

export default function Notes() {
  return (
    <div className="mainnote">
        <div className="note">
        <div className="notes">
        <Feed/>
        <Feed/>
        <Feed/>
        <Feed/>
        <Feed/>
        
        </div>
        <div className="add">
            <span className="addBtn">+</span>
        </div>
        </div>
        <div className="add-note">
            <Addnote/>
        </div>
    </div>
  )
}
