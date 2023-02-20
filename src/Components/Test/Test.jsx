
import CourseDetails from './TestComponents/CourseDetails';
import TestDiscount from './TestComponents/TestDiscount';
import TestHeader from './TestComponents/TestHeader';
import Cdata from './TestComponents/Cdata';
import TestSeriesPreparation from './TestComponents/TestSeriesPreparation';
import Competitive from './TestComponents/Competitive';
import Button1 from '../Button/Button1';
import CourseUpcoming from './TestComponents/CourseUpcoming';
// import Sidebar from '../Sidebar/Sidebar';
import './Test.css'
import { MockTest } from './TestComponents/MockTest';
import Sidebar from '../Sidebar/Sidebar';
import Footer from '../Footer/Footer';
function ncard(val){
  return(
      <CourseDetails
      title={val.title}
      status={val.status}
      date={val.date}
  />
  )
}
function Test() {
  return (
   
    <div >
    <div  className="App">
    <Sidebar/>
     <TestHeader/>
     <TestDiscount/>
     <TestSeriesPreparation/>
     <div className='course_detail_container'>
    {Cdata.map(ncard)}
    </div>
<Competitive/>
<Button1/>
<CourseUpcoming/>

<MockTest/>
<Footer/>
    </div> 
</div>
  );
}

export default Test;
