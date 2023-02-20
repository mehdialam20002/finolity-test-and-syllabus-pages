import React from 'react'
import { Link } from 'react-router-dom'
import './TakeTest.css'
import '../Test'
export default function TakeTest() {
  return (
    <div>
    
    <div className='taketest_container'>

        <div className='left_container'>

        
            <div className='header_buttons'>

<Link to="/test" style={{marginRight:"12px",fontSize:"20px",textDecoration:"none"}} className='up2' >&#8592;</Link>




<Link style={{marginRight:"12px",textDecoration:"none"}} className='up'>Plus</Link>
<Link style={{textDecoration:"none"}} className='up'>Scholarship Test</Link>
            </div>
<div className='second_button'>
    <Link className='btn btn-success'>FREE</Link>
    <Link style={{marginLeft:"12px"}}>Test</Link>
</div>

<h3 className='title_test'>Scholarship Test</h3>

<div className='question_time'>
<div className='fifteen'>
<div>
    <img alt='oo' className='img15' src='https://static.uacdn.net/production/_next/static/images/quiz/sheet.svg?q=75&w=32'></img>
</div>
<div style={{display:"flex",flexDirection:"column",paddingLeft:"7px"}}>
    <div className='bt'>15 min</div>
    <div style={{fontSize:"13px"}}>15 Q’s · 60 marks</div>
    </div>
    </div>
    <div className='fifteen'> 
    <div>
    <img alt='oo' className='img15' src='https://static.uacdn.net/production/_next/static/images/quiz/language.svg?q=75&w=32'></img>
</div> 

<div style={{display:"flex",flexDirection:"column",paddingLeft:"7px"}}>
    <div  className='bt'>Language </div>
    
    <div style={{fontSize:"13px"}}>English</div>
    </div>
    </div>
</div>


<div className='last_buttons'>
    <Link style={{marginRight:"32px"}} className='btn btn-success'>TakeTest</Link>
    <Link>Instructions</Link>
</div>



        </div>



        <div className='right_container'>
            <div>
                <img alt='oo' src='https://static.uacdn.net/production/_next/static/images/quiz/default-empty.svg?q=75&w=384'>

                </img>
            </div>
        </div>
    </div>

    </div>
  )
}
