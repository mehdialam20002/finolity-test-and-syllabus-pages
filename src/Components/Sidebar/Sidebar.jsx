import React from 'react'
import { Link } from 'react-router-dom';
import "./Sidebar.css";
const Sidebar = () => {
  return (
    <div className='sidebar side'>
        <Link to="#">Home</Link>
        <Link to="#">Browse</Link>
        <Link to="#">Practise</Link>
        <Link to="/test">Test</Link>
        <Link to="/syllabus">Syllabus</Link>
    </div>
  )
}

export default Sidebar