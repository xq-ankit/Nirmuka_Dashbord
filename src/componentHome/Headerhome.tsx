import Navbarhome from "./Navbarhome"
import { Link } from "react-router-dom"

const Headerhome = () => {
  return (
    <div id='main'>
        <Navbarhome/>
        <div className="name">
            <h1>Government Substance Abuse Recovery Database</h1>
            <p className="details"> 
The "Recovery Program Management System" is a government web application designed to efficiently oversee and administer substance abuse recovery initiatives.</p>
            <div className="header-btns">
            <Link to="/login" className="cv-btn">Get started</Link>
            <Link to="/download-app" className="cv-btn1">Download App</Link>
            </div>
        </div>
    </div>
  )
}

export default Headerhome