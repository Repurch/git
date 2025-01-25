import React from "react";
import "./section.css";

const Section = () => {
  

    return (
      <>
      <div className="container">
         
          <div className="square">

                <div className="write-up">
                  <h3>Hi There</h3><br/>
                  <h1><span>I'm</span>STELLA ONYINYECHI </h1><br />
                  <h4>A professional Web Developer and UI/UX Designer.</h4><br /><br /><br />
                  <div className="butt">
                      <button>Download resume</button>
                      <a href="#"> My Portfolio</a>
                  </div>
                  <ul>
                      <li>Linkedin</li>
                      <li>Instagram</li>
                      <li>Twitter</li>
                      <li>Facebook</li>
                  </ul>
                </div>
                <div className="circle-div">

                      <div className="circle"></div>
                      <img className="person-image"
                          src="https://mack-html.netlify.app/assets/img/banner/v2/profile-1.png" alt="Person"
                          
                      />

              </div>
                
            </div>

        

        </div>
      
      </>
    );
  };
  
  export default Section;