import React from 'react'
import { Link } from 'react-router-dom'
import './TestSeriesQP.css'

import {useParams} from 'react-router-dom'


  export default function TestSeriesQP(props) {
    const params = useParams();
    console.log("useparams hook",params)
  return (
    
    <div >
<div className='qp_container Appp'>
    <div className='left_container'>
    <div className='syllabus'>Full syllabus test</div>
        <h2 className='title_'>{params.title}</h2>
        <div style={{marginBottom:"28px"}} className='test_schedule'>
            <h6 style={{fontSize:"14px"}}>Test schedule</h6>
            <div style={{fontSize:"16px"}} className='time'>Started on 18 feb 2023</div>
        </div>
<div className='enroll'>
        <button  className='btn btt '>Enroll</button>
        <Link  className='img'>&#10138;</Link>
        </div>
    </div>
    <div className='right_container'>
        <img alt='s' src='https://static.uacdn.net/web-cms/testseries_banner_2e649f6842.svg?q=75&fm=webp&w=1920'></img>
    </div>
</div>





<div className='about_container Appp'>

<div className='navv'>
    <Link to="#">About</Link>
    <Link to="#">Schedule</Link>
</div>

<h4>Upcoming-20 Feb</h4>
<div className='je'>
<div className='left'>
    <div>
        <img alt='oo' src='https://static.uacdn.net/production/_next/static/images/store/test-series/test-card-icon.svg?q=75&w=48'></img>
    </div>
</div>

<div className='right'>
<h6>JEE Main</h6>
<div className='ni'>9:00 AM</div>

</div></div>


<div className='about_unacademy'>
<h4 >About</h4>
<div className='mocktest'>

<div>
    <div>
        <img alt='oo' src='https://static.uacdn.net/production/_next/static/images/store/test-series/test-card-icon.svg?q=75&w=48'>

        </img>
    </div>
</div>

<div>
    <h6>Mock Test</h6>
    <div className='ni'>123</div>
</div>
</div>
<div className='test_lang mocktest'>
   
<div>
    <div>
        <img alt='oo' src='https://static.uacdn.net/production/_next/static/images/store/test-series/test-card-icon.svg?q=75&w=48'>

        </img>
    </div>
</div>

<div>
    <h6>Test Language</h6>
    <div className='ni'>Hindi & English</div>
</div>
</div>

<div className='unn'>Unacademy brings a test series like never before IIT JEE Previous Year Question Papers 2011-2023. It will be a full-length syllabus-wise test series, that will be covering PYQs from almost the last 13 years date-wise as per the IITJEE/AIEEE pattern where there will be high-weightage topics which will aid you in covering most of the full syllabus for IITJEE. Detailed explanations have been provided for each and every question and learner can augment ...Read more</div>
</div>


<div className='schedulee'>
    <h4>Schedule</h4>
    <div className='sylist'>
        <div>Syllabus to match exam preparation</div>
        <div>Regular tests to access your preparation</div>
        <div>Detailed test analysis for every test</div>
    </div>
   
</div>
 
</div>


<button style={{backgroundColor:"#6949c6"}} className='btnn btn Appp btn-success'>See full schedule</button>




    </div>
  )
}


