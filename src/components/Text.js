import React from 'react';
import img2 from "../Asserts/img2.png";

function Text() {
  return (
    <div className="text">
      <p className='' style={{fontSize:"10px",fontWeight:"bold"}}>
                C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.
              </p>
              <div style={{fontSize:"10px",justifyContent:"left"}}>
              ● C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy. <br />
              </div>
              <div  style={{fontSize:"10px",justifyContent:"left"}}>
              ● C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel. 
              </div>
              <div className="">
                <img src={img2}
                 alt="award " 
                 className="img-fluid"
              />
            </div>
            <p style={{fontSize:"10px"}}>
            Government of India has awarded the <span className='' style={{fontWeight:"bold"}}>"National Energy Conservation Award 2018"</span>. Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha|Shri. Raj Kumar Singh, Honorable Minister of State.
            </p>      
    </div>
  );
}

export default Text;
