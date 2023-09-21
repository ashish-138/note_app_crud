import "./topbar.css"

export default function Topbar() {
  return (
    <div className="topbar">
        <div className="tbleft">
            <span className="tbleftspan">Note App</span>
        </div>
        <div className="tbcenter">
            <span className="tbcenterspan">Hi Ashish</span>
        </div>
        <div className="tbright">
            <button className="btn">Logout</button>
        </div>
    </div>
  )
}
