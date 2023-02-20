import React from 'react'
import { Link } from 'react-router-dom'
import './TestDiscount.css'
export default function TestDiscount() {
  return (
    <div>
    

    <div className='discount_container'>
<div className='left_discount'>
<h4 className='title_disount'>
Get upto 50% discount with our scholarship test

</h4>


<div className='subtitles_discount'>
    <div className='first'> <img style={{marginRight:"8px"}} src='https://static.uacdn.net/production/_next/static/images/dst/bullet-point-1.svg?q=75&w=32' ></img> 15 quick questions</div>
    <div className='second'><img style={{marginRight:"8px"}} src='https://static.uacdn.net/production/_next/static/images/dst/bullet-point-2.svg?q=75&w=32' ></img>15 minutes to attempt</div>
    <div className='third'><img style={{marginRight:"8px"}} src='https://static.uacdn.net/production/_next/static/images/dst/bullet-point-3.svg?q=75&w=32' ></img>
Scholarship leaderboard after the test</div>
</div>

<Link style={{textDecoration:"none"}} to="taketest/ "  className='button_discount'>Take Test</Link>

    </div>
<img src='https://static.uacdn.net/production/_next/static/images/dst/trophy.svg?q=75&w=384' className='right_discount'></img>


    
    </div>
    </div>
  )
}
