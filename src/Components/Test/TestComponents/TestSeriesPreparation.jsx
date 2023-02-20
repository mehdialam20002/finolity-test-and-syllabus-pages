import React from 'react'
import './TestSeriesPreparation.css'
import { Link } from 'react-router-dom'

export default function TestSeriesPreparation() {
  return (
    <div>
    
    <div className='test_series_preparation'>
        <div className='iit_heading'>
            <h4 className='iit'>IIT JEE Test series</h4>
            <Link style={{color:"#6749c6"}} className='see_all'>SEE ALL</Link>
        </div>

        <div className='subtitle_preparation'>
        Evaluate your exam preparation with test series for JEE Main and Advanced Preparation
        </div>
        
    </div>

  <button style={{marginTop:"40px", marginLeft:"30px", backgroundColor:"white",border:"1px solid #6749c6"}} type="button  btn_series" class="bt btn  dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Ongoing
  </button>
  <div class="dropdown-menu dropdown-menu-right">
    <button class="dropdown-item" type="button">Ongoing</button>
    <button class="dropdown-item" type="button">Upcoming</button>
    <button class="dropdown-item" type="button">All</button>
  </div>
    
    </div>
  )
}
