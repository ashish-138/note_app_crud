import "./feed.css"
import {Delete, Edit} from "@mui/icons-material"

export default function Feed() {
  return (
    <div className="feed">
        <div className="feedtop">
            <div className="title">
                <span className="feedtitle">Note 1 dfghi dfghi idhgihdfg idfhgidfhg ihgidfigyidg dfhgidfg</span>
            </div>
            <div className="icons">
                <Edit className="icon" id="icon1"/>
                <Delete className="icon" id="icon2" />
            </div>
        </div>
        <div className="feedbottom">
                <span className="fbtext"> hello guys whats going on Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nihil exercitationem obcaecati ut error! Dolor delectus nesciunt voluptatibus laudantium, corrupti dolores error debitis. Minima, fugiat odio repudiandae iure sint perspiciatis, reprehenderit voluptate hic nesciunt culpa itaque consectetur doloremque ullam quidem unde tempore provident incidunt, qui earum. Consequatur consequuntur modi facere. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, debitis. Nobis expedita itaque ipsa reiciendis deleniti </span>
        </div>
    </div>
  )
}
