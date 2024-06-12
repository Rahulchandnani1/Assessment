import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Footer from "./Footer";
import { useState, useEffect } from 'react';
import person from "./assets/person.png";
import hat from "./assets/hat.png";
import p1 from "./assets/p1.png";
import p2 from "./assets/p2.png";
import p3 from "./assets/p3.png";
import b from "./assets/b.png";
import robo from "./assets/art.svg";
import c1 from "./assets/c1.png";
import c2 from "./assets/c2.png";
import c3 from "./assets/c3.png";
import c4 from "./assets/c4.png";
import c5 from "./assets/c5.png";
import pencil from "./assets/pencil.svg";
import star from "./assets/star.svg";
import im1 from "./assets/im11.png";
import im2 from "./assets/im2.png";
import im3 from "./assets/im3.png";
import im4 from "./assets/im4.jpg";
import im5 from "./assets/im5.png";
import im6 from "./assets/im6.jpg";
import rect1 from "./assets/rect1.png";
import rect2 from "./assets/rect2.png";
import rect3 from "./assets/rect3.png";
import comma from "./assets/comma.png";
import eng from "./assets/eng.png";
import ar1 from "./assets/ar1.png";
import ar2 from "./assets/ar2.png";
import ar3 from "./assets/ar3.png";
import ar4 from "./assets/ar4.png";
import cicon from "./assets/repo.png";
import qdiv from "./assets/sub.svg";
import icy from "./assets/icy.png";
import colabicon from "./assets/colabicon.png";
function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollPosition, setScrollPosition] = useState(0);
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const getTransformStyle = (speed) => {
    const range = 20; // Max movement range in pixels
    const offsetX = ((mousePosition.x / window.innerWidth) - 0.5) * 2 * range * speed;
    const offsetY = ((mousePosition.y / window.innerHeight) - 0.5) * 2 * range * speed;
    const scrollOffset = scrollPosition * speed;

    return { transform: `translate(${offsetX}px, ${offsetY + scrollOffset}px)` };
  };

  return (
    <div className="App">
      <Navbar />
      <div className='careerdiv'>
        <div className='div5'>
          <p className='t3'>
            Skyrocket your <span><b>career towards excellence</b></span>

          </p>
          <p className='t4'><img src={p1} />Flexible Learning</p>
          <p className='t4'><img src={p2} />Interactive Learning Experience</p>
          <p className='t4'><img src={p3} />Career Opportunities</p>
          <img className='brief' style={getTransformStyle(0.05)} src={b} />
          <img className="im5" src={hat} />

        </div>
        <div className='div6'>
          <img className='im3' src={person} />
          <img className="im4" style={getTransformStyle(0.1)} src={hat} />
        </div>
      </div>
      <div className='tcdiv'><div className='topcourse'>
        <div className='course'>
          <div className='cname'>
            <p className='ct1'>Top Selling Courses</p>
            <p className='ct2'><img src={im4} />Bitcoin Technology and Application</p>
            <hr />
            <p className='ct3'><span><img src={im5} />Bitcoin Technology and Application</span>
              <div className='cdesc1'>
                <p className='cdt1'>View All Courses<img src={ar3} /></p>
                <p className='cdt2'>Discover the essentials of computing with our 'Course on Computer Concepts. From hardware to programming languages, delve into the fundamentals and unlock the keys to navigating the digital world confidently.</p>
                <p className='cdt2'>Teacher: Mrs. Bhawna</p>
                <p className='cdt2'><img src={star} />4.5 by 1,724 students</p>
                <p className='cdt4'>₹599 <span>(inclusive of taxes)</span></p>
                <div className='co'>
                  <p className='cdt3'>View Details<img src={ar3} /></p>
                  <p className='cdt3'>Wishlist Course<img src={ar3} /></p>
                </div></div>
            </p>
            <p className='ct4'><img src={im6} />Data Analytics & Machine Learning (Python)</p>
          </div>
          <div className='cdesc'>
            <p className='cdt1'>View All Courses<img src={ar3} /></p>
            <p className='cdt2'>Discover the essentials of computing with our 'Course on Computer Concepts. From hardware to programming languages, delve into the fundamentals and unlock the keys to navigating the digital world confidently.</p>
            <p className='cdt2'>Teacher: Mrs. Bhawna</p>
            <p className='cdt2'><img src={star} />4.5 by 1,724 students</p>
            <p className='cdt4'>₹599 <span>(inclusive of taxes)</span></p>
            <div className='co'>
              <p className='cdt3'>View Details<img src={ar3} /></p>
              <p className='cdt3'>Wishlist Course<img src={ar3} /></p>
            </div></div>

        </div>
        <img className='cicon' style={getTransformStyle(0.2)} src={cicon} />
        <div className='quizdiv'>
          <img className='sticon' src={qdiv} />
          <p className='qt1'><b>Take a practice Quiz designed to sharpen your skills</b></p>
          <button>Take Quiz<img src={ar4} /> </button>
          <img className='icyicon' style={getTransformStyle(0.05)} src={icy} />
        </div>
      </div>
      </div>
      <div>
        <div className='contdiv'>
          <div>
            <p className='t5'>Browse by Categories</p>
            <p className='t6'>Select the topics below to view corresponding courses.</p>
          </div>
          <img src={robo} />
        </div>
        <div className='scrollable'>
          <div className='btndiv1' >
            <div>Java Script</div>
            <div>Web Development</div>
            <div>Nodejs</div>
            <div>Html&Css</div>
          </div>
          <div className='btndiv2'>
            <div>Product Design</div>
            <div>React Js</div>
            <div>Unreal Engine</div>
            <div>Design Theory</div>
          </div>
        </div>
      </div>
      <div className='blend1'>
        <div className='blendbtn1'>
          <p className='t11'><b>Top Selling in Technology</b></p>
          <div><button><img src={ar1} /></button><button><img src={ar2} /></button></div>
        </div>
        <div className='upd'>
          <div className='carddiv1'>
            <div className='card1'>
              <img className='rect2' src={im1} />
              <div>
                <p className='t13'>Internet of Things and its Applications - Self Paced</p>
                <p className='t14'><img src={star} />4.0 by 615 students</p>
                <p className='t14'>Teacher: Mrs.Anbumalar Pandian</p>
                <p className='t15'>₹399<img src={ar2} /></p>
              </div>
            </div>

            <div className='card1'>
              <img className='rect2' src={im2} />
              <div>
                <p className='t13'>Certificate course in Electric Vehicle Design</p>
                <p className='t14'><img src={star} />4.0 by 615 students</p>
                <p className='t14'>Teacher: Mrs.Anbumalar Pandian</p>
                <p className='t15'>₹399 <img src={ar2} /></p>
              </div>
            </div>
            <div className='card1'>
              <img className='rect2' src={im3} />
              <div>
                <p className='t13'>Web Designing and Publishing - (Self Paced)</p>
                <p className='t14'><img src={star} />3.9 by 917 students</p>
                <p className='t14'>Teacher: Mahalaskhmi P</p>
                <p className='t16'>₹399  <img src={ar2} /></p>
              </div>
            </div>
          </div>
        </div>
        <div className='dotdiv1'>
          <div className='dot1'></div>
          <div className='dot2'></div>
          <div className='dot3'></div>
        </div>
      </div>
      <div className='colborationdiv'>
        <div className='div7'>
          <p className='t7'><b>Our Collaborations</b></p>
          <p className='t8'>We've partnered with industry leaders to deliver courses that not only educate but also immerse you in real-world scenarios, fostering your career growth</p>
        </div>

        <div className='div8'>
          <img src={c1} />
          <img src={c2} />
          <img src={c3} />
          <img src={c4} />
          <img src={c5} />
        </div>
        <img className='colabicon' src={colabicon} />
      </div>
      <div className='blend'>
        <div className='blendbtn'>
          <p className='t11'><b>Blended Courses</b></p>
          <div><a className='t12'>View All Courses</a><button><img src={ar1} /></button><button><img src={ar2} /></button></div>
        </div>
        <div className='carddiv'>
          <div className='card'>
            <img className='rect1' src={rect1} />
            <p className='t13'>PG Program in Data
              Engineering</p>
            <p className='t14'><img src={star} />4.5 by 1,724 students</p>
            <p className='t14'>Teacher: Mr. Balamurugan N & Harish R</p>
            <p className='t15'>₹499<img src={ar2} /></p>
          </div>

          <div className='card'>
            <img className='rect1' src={rect2} />
            <p className='t13'>Certificate Course in AWS</p>
            <p className='t14'><img src={star} />4.0 by 615 students</p>
            <p className='t14'>Teacher: Mr. Yatish Kumar Appu RP (Cloud Computing)</p>
            <p className='t15'>₹499 <img src={ar2} /></p>
          </div>
          <div className='card'>
            <img className='rect1' src={rect3} />
            <p className='t13'>Certified Full Stack Web Developer Feb 2024 Summary</p>
            <p className='t14'><img src={star} />3.9 by 917 students</p>
            <p className='t14'>Teacher: Mahalaskhmi P</p>
            <p className='t16'>₹699  <img src={ar2} /></p>
          </div>
        </div><div className='dotdiv1'>
          <div className='dot1'></div>
          <div className='dot2'></div>
          <div className='dot3'></div>
        </div>
      </div>
      <div className='testimonial'>
        <div className='desc'>
          <p className='t9'>Testimonials</p>
          <img src={star} />
          <p className='t10'>4.5 by 1,724 users</p>
        </div>
        <div className='desc1'>
          <div className='test1'>
            <img src={comma} />
            <p>Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliq ua ut enim ad minim veniam</p>
            <p><img src={eng} />Simran Kalra</p>
          </div>
          <div className='test2'>
            <img src={comma} />
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo</p>
            <p><img src={eng} />Suhani Jain</p>
          </div>
        </div>
        <div className='dotdiv'>
          <div className='dot1'></div>
          <div className='dot2'></div>
        </div>
        <img className='pencil' src={pencil} />
      </div>

      <Footer />
    </div>
  );
}

export default App;
