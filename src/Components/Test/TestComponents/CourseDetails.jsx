import React from 'react'
import { Link, useParams } from 'react-router-dom'
import './CourseDetail.css'
// import Cdata from './Cdata'
export default function CourseDetails( props) {
  return (
  
    <div>
<Link to={`/test/qp/${props.title}` } className='card_detail'>
    <div className='course_title'>
    <div className='title'>
        
    {props.title}
    </div> 
    <a  style={{backgroundColor:"#6749c6" ,borderRadius:"5px",color:"white" }} className='live'>{props.status}</a>
    </div>
    <div className='dates'>{props.date}</div>
</Link>
    </div>
  )
}
