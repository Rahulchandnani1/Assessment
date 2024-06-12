import "./Navbar.css";
import im1 from "./assets/im1.png";
import icon from "./assets/ham.jpg";
import { useState } from "react";
import robo from "./assets/person.png";
function Navbar() {
  const [login, setlogin] = useState(false);

  return (
    <div className="navdiv">
      <div className="div1">
        <img src={im1} />
        <select>
          <option>Courses</option>
          <option>course1</option>
          <option>course2</option>
        </select>
      </div>
      <div className="div2">
        <input type="text" placeholder="Search for a course or category" />
        {!login ? <><button onClick={() => { alert("User logedin Successfully"); setlogin(true); }} className="btn1">Login</button>
          <button onClick={() => { alert("User Registered Successfully"); setlogin(true); }} className="btn2">Register</button>
        </> : <img className="usericon" src={robo} />}
        <button className="menuicon" style={{ borderRadius: "0px" }}><img src={icon} /></button>
      </div>
    </div>
  );
}

export default Navbar;
