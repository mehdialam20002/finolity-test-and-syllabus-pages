import React from 'react'
import { Link } from 'react-router-dom'
import './Competitve.css'

import './TestDiscount.css'
export default function Competitive() {
  return (
    <>
    <div>
    <div className='iitjee '>
    <h4 className='iit_jee'>IIT JEE Combat</h4>
    <div className='complete'>Compete live with your peers to earn scholarships</div>
</div>



<div className='unacademy_cambat_container'>


<div  className='left_container'>
<div>
<img alt='i' src='https://static.uacdn.net/production/_next/static/images/combat/logo.svg?q=75&w=256'></img>
</div>
<h4 className='the_most'>The most competitive, gamified IIT JEE battle till date</h4>
<div className='description_leftcont'>Compete with thousands of learners in the weekly scholarship test</div>

<Link className='btn_leftc btn btn-info'>Learn More</Link>

</div>

<div  className='right_container'>
<div>
<img alt='i' className='im' style={{width:"300px"}} src='https://static.uacdn.net/production/_next/static/images/combat/listing-banner.svg?q=75&w=640'></img>
</div>

</div>







</div>

    </div>
    </>
  )
}
