import React from 'react'
import './TestHeader.css'

import { Link } from 'react-router-dom';


export default function TestHeader() {
  return (
    <>


<div className='header_container'>

<div className='header_button'>
    <Link to="/"  className='up2' style={{fontSize:"17px",textDecoration:"none"}}>&#8592;</Link>
<button className='up' >IIT JEE</button>
<button className='up'>Plus</button>
</div>
<h1 className='heading_test_series'>
Test Series for IIT JEE
</h1>
<div className='test_series_description'>
    Attempt IIT JEE free mock tests & test series curated by our educators to boost your preparation.
</div>
</div>



    </>
  )
}
