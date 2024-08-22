import "./navbar.scss";
import { Link } from "react-router-dom";
import { LiaSearchLocationSolid } from "react-icons/lia";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="logo.svg" alt="Nirmukta Logo" />
        <span>Nirmukta</span>
      </div>
      <div className="icons">
        <Link to="/search" className="button-with-image">
          <LiaSearchLocationSolid className="search-icon" />
        </Link>
        <div className="user">
          <img
            src="https://images.pexels.com/photos/11038549/pexels-photo-11038549.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
            alt="User"
          />
          <span>Ankit Gupta</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
