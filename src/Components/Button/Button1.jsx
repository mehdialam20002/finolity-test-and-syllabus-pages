import React from 'react'
import './Button1.css'
export default function Button1() {
  return (
    <div>
    
    <div className='bbb'>
    <div className='container1'>
    <button style={{backgroundColor:"white",border:"1px solid #6749c6"}} type="button  " class="btn  dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Ongoing
  </button>
  <div class="dropdown-menu dropdown-menu-right">
    <button class="dropdown-item" type="button">Ongoing</button>
    <button class="dropdown-item" type="button">Upcoming</button>
    <button class="dropdown-item" type="button">All</button>
  </div>
    

</div>

<div className='container2'>
 
  <button style={{backgroundColor:"white",border:"1px solid #6749c6"}} type="button  " class="btn  dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Ongoing
  </button>
  <div class="dropdown-menu dropdown-menu-right">
    <button class="dropdown-item" type="button">Ongoing</button>
    <button class="dropdown-item" type="button">Upcoming</button>
    <button class="dropdown-item" type="button">All</button>
  </div>
  </div>
</div>
    </div>
  )
}
