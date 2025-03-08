
import Dashboard from '@/general/Dashboard';
import Records from '@/modules/courses/Records';
import Students from '@/modules/student/Student';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

const Routers = () => {
  return (
    <>
       <Routes>
       <Route  path="/" element={<Records /> } /> 
       <Route  path="/dashboard" element={<Dashboard /> } /> 

       <Route  path="/student" element={<Students /> } /> 
     {/*   <Route  path="*" element={<Home />} />  */}

</Routes>
    </>
  )
}

export default Routers
