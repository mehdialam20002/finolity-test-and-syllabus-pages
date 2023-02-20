import React from 'react'
import './SyllabusHeader.css'
import { Link } from 'react-router-dom'
export default function SyllabusHeader() {
  return (
    <div>

<div className='header_container'>

<div className='header_button'>
    <Link to="/"  className='up2' style={{fontSize:"17px"}}>&#8592;</Link>
<button className='up' >IIT JEE</button>
<button className='up'>Plus</button>
</div>
<h3 className='heading_test_series'>
Syllabus
</h3>

</div>


    
    </div>
  )
}
