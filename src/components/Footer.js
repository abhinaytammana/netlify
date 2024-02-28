import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Telephone, Facebook, Globe } from 'react-bootstrap-icons';


function Footer() {
  return (
    <div className='container-fluid footer' style={{backgroundColor:"red",color:"white"}}>
        <div className='row' >
                <p className='col-4' style={{fontSize:"10px"}}>
                    <Telephone color="white" size={15} />
                    Call us at 1800-123-456
                </p>
                <p className='col-4' style={{fontSize:"10px"}}>
                    <Facebook color="white" size={15} />
                    www.facebook.com/cripumps
                </p>
                <p className='col-4' style={{fontSize:"10px"}}>
                    <Globe color="white" size={15} />
                    www.cripumps.com
                </p>
        </div>
    </div>
    );
}

export default Footer;