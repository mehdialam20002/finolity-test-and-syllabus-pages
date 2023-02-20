import React from 'react'
import '../Syllabus.css'
import '../Sdata/physicsdata'
export default function SyllabusComponent(props) {
  return (
    <div>
    <div className='syllabus_container'>

<div className='all_syllabus'>

<div className='syy' > {props.chapter}</div>

</div>

    </div>
    </div>
  )
}
