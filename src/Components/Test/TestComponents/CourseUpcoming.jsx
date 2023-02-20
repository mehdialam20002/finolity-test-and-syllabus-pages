import React from 'react'
import './CourseUpcoming.css'
export default function CourseUpcoming() {
  return (
    <div>
    
    <div className='upcoming_course_container'>
    <div><img style={{width:"100px" }} src='https://static.uacdn.net/production/_next/static/images/combat/empty.svg?q=75&w=128'></img></div>
    <h5 className='no_upcoming'>No upcoming combats</h5>
    <div className='show'>Upcoming combats will show up here</div>
    </div>
    </div>
  )
}
