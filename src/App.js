import './App.css';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import EducatorSection from './Components/EducatorSection';
import Home from "./Components/Home.jsx";
import Browse from "./Components/Browse/Browse.jsx";
import Practise from "./Components/Practise/Practise.jsx";
// import Test from "./Components/Test/Test.jsx";
// import Test from "./Components/Test/Test.jsx";
import Syllabus from "./Components/Syllabus/Syllabus.jsx";
import Test from './Components/Test/Test';
import TakeTest from './Components/Test/TestComponents/TakeTest';
import TestSeriesQP from './Components/Test/TestComponents/TestSeriesQP';
import Cdata from './Components/Test/TestComponents/Cdata';
import ScrollToTop from './Components/ScrollToTop';

function App() {
  return (
    <Router>
    <ScrollToTop>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/educator' element={<EducatorSection/>}/>
            <Route path='/browse' element={<Browse/>}/>
            <Route path='/practise' element={<Practise/>}/>
            <Route path='/test' element={<Test/>}/>
            <Route path='/syllabus' element={<Syllabus/>}/>
            <Route path='/test/taketest' element={<TakeTest/>}/>
            <Route path='/syllabus/taketest' element={<TakeTest/>}/>
            <Route path='/test/qp/:title/' element={<TestSeriesQP/>}/>
            
          </Routes>
          </ScrollToTop>
    </Router>

  );
}

export default App;
