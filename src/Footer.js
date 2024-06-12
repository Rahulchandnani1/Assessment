import "./Footer.css";
import fb from "./assets/fb1.svg";
import tw from "./assets/tw.svg";
import ai1 from "./assets/ai1.svg";
import ai2 from "./assets/ai2.png";
function Footer() {

  return (
    <footer className="footerdiv">
      <div className="div3">
        <p className="t1">Contact Us</p>
        <p className="t2">Plot No. 12, ABC Pocket, Sector-08, Uttam Nagar,
          New Delhi - 110058</p>
        <p className="t2">(+91) 9876543210</p>
        <p className="t2">contactedu@gmail.com</p>
      </div>
      <div className="div4">
        <div className="iconsdiv">
          <p>Social Media</p>
          <div>
            <img src={fb} />
            <img src={tw} />
          </div>
        </div>

        <img className="im1" src={ai1} />
        <img className="im2" src={ai2} />
        <div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;
