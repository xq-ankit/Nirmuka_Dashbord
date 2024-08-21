import { Link } from "react-router-dom";
import logo from "../images/logo1.png";

const Navbarhome = () => {
  return (
    <div>
        <nav>
            <Link to='main' className='logo2'>
                <img src={logo} alt='logo'/>
            </Link>
            <input className='menu-btn' type='checkbox' id='menu-btn'/>
            <label className="menu-icon" htmlFor='menu-btn'>
                <span className='nav-icon'></span>
            </label>
        </nav>
    </div>
  )
}

export default Navbarhome