import React from 'react'
// import Sidebar from '../Sidebar/Sidebar'
// import Competitive from '../Test/TestComponents/Competitive'
import TestDiscount from '../Test/TestComponents/TestDiscount'
// import TestHeader from '../Test/TestComponents/TestHeader'
import SyllabusComponent from './SyllabusComponent/SyllabusComponent'
// import '../Syllabus/Sdata/data'
import chemistrydata from './Sdata/ChemistrySyllabusdata'
import physicsdata from './Sdata/physicsdata'
import mathsdata from './Sdata/Mathsdata'
import Physicsheading from './SyllabusComponent/Physicsheading'
import Che from './SyllabusComponent/Che'
import MathsHeading from './SyllabusComponent/MathsHeading'
import SyllabusHeader from './SyllabusComponent/SyllabusHeader'
import Sidebar from '../Sidebar/Sidebar'
import Footer from '../Footer/Footer'
function card(vall){
 
  return(
    
      <SyllabusComponent
     
      chapter={vall.chapter}
  />
  )
}
function ccard(valc){
 
  return(
    
      <SyllabusComponent
     
      chapter={valc.chapter}
  />
  )
}
function mcard(valm){
 
  return(
    
      <SyllabusComponent
     
      chapter={valm.chapter}
  />
  )
}
const Syllabus = () => {
  return (
    
    
    <div className='App'>
<Sidebar/>
    <SyllabusHeader/>
    <TestDiscount/>


<Physicsheading/>



<div className='data'>
    {physicsdata.map(card)}
    </div>


   <Che/>

   <div className='data'>
    {chemistrydata.map(ccard)} 
    </div>
<MathsHeading/>
    <div className='data'>
    {mathsdata.map(mcard)} 
 
    </div>

    <Footer/>
</div>
   
  )
}

export default Syllabus