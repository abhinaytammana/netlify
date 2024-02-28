import React from 'react';
import Text from './Text';
import Products from './Products';
import Machine from './Machine';
import Award from './Award';
import People from './People';
import Header from './Header';
import Footer from './Footer';

function Image() {
  return (
   <div className='bgcolor'>
      <div className="container-fluid ">
      <Header/>
      <div className=" row text-center align-items-center">
        <div className=" col-5">
          <Award/>
        </div>
        <div className="col-7 ">
          <Text/>
        </div>
      </div>
      <People/>
      <Machine/>
      <hr
       style={{ 
        color: 'red', 
        backgroundColor: 'red', 
        height: '1px', 
        border: 'none' }}
       />
      <Products/>
      <Footer/>
    </div>
   </div> 
  )
}

export default Image;