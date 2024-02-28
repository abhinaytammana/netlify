import React from 'react'
import machine from "../Asserts/machine.png";

export default function Machine() {
  return (
    <div>
      <div>
          <img
           src={machine}
           alt=""
           className='img-fluid'
            />
        </div>
        <p
         style={{textAlign:"center", fontSize:"10px"}}
        >
          Valves - Pumps - Pipes - IoT Drives|Controllers - Wires|Cables - Solar Systems - Motors
        </p>
    </div>
  )
}
