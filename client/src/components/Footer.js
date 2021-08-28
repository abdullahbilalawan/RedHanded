import React from 'react'
import "./Footer.css"
export default function Footer() {
    return (
       <div>
      <footer className="footer">
        <div className="footer__addr">
          <h1 className="footer__logo">RED HANDED</h1>
              
          <h2>Contact</h2>
          
          <address>
          Somewhere In The World +92xxxxxxxxxx<br></br>
                
            <a className="footer__btn" href="addbilaleo@gmail.com">Email Us</a>
          </address>
        </div>
        
        <ul className="footer__nav">
          <li className="nav__item">
            <h2 className="nav__title">About us</h2>
      
            <div className="nav__div">
           
                <p>Online Inspection</p>
                <p>AI invigilation</p>
            </div>
          </li>
          
         
          
          {/*<li style={{marginLeft:"-50px"}}  className="nav__item">
            <h2 className="nav__title">Legal</h2>
            
            <ul className="nav__ul">
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              
              <li>
                <a href="#">Terms of Use</a>
              </li>
              
              <li>
                <a href="#">Sitemap</a>
              </li>
            </ul>
    </li>*/}
        </ul>
        
        <div className="legal">
          <p>&copy; Red Handed. All rights reserved.</p>
          
          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="social-icons">
              <li><a className="facebook" href="#" target="_blank"></a></li>
              <li><a className="instagram" href="#" target="_blank"></a></li>
              <li><a className="linkedin" href="#" target="_blank"></a></li>
              <li><a className="youtube" href="#" target="_blank"></a></li>   
            </ul>
          </div>
        </div>
      </footer>
      </div>
    )
}
