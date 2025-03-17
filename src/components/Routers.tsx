
import Dashboard from '@/general/Dashboard';
import Records from '@/modules/courses/Records';
import EditStudent from '@/modules/student/EditStudent';
import AddStudent from '@/modules/student/AddStudent';
import Students from '@/modules/student/Student';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

const Routers = () => {
  return (
    <>
       <Routes>
       <Route  path="/" element={<Records /> } /> 
       <Route  path="/dashboard" element={<Dashboard /> } /> 
       
       <Route  path="/student" element={<Students /> } /> 
       <Route  path="/student/edit/:code" element={<EditStudent /> } /> 
       <Route  path="/student/add" element={<AddStudent /> } /> 
     {/*   <Route  path="*" element={<Home />} />  */}

</Routes>
    </>
  )
}

export default Routers
