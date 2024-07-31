import {Course,Home,Chapter,Video} from "./index.js";
import { Route, Routes,useNavigate } from "react-router-dom";
import Course2 from "./pages/Course2/Course2.jsx";





export default function App() {
  return (
  <>
<Routes>
  <Route  exact path='/'  element={<Home/>} />
  <Route exact path='/course/:id' element={<Course />} /> 
  <Route exact path='/chapter/:id' element={<Course2 />} /> 
  <Route exact path='/video/:id' element={<Video />} /> 
</Routes>
 {/* <Course2/> */}
  </>
  )
}