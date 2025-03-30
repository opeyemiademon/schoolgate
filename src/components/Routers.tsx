
import Dashboard from '@/general/Dashboard';
import Records from '@/modules/courses/Records';
import EditStudent from '@/modules/student/EditStudent';
import AddStudent from '@/modules/student/AddStudent';
import Students from '@/modules/student/Student';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import BulkRegistration from '@/modules/student/BulkRegistration';
import Faculty from '@/modules/general/faculty';
import AddFaculty from '@/modules/general/AddFaculty';
import Promotion from '@/modules/student/Promotion';

const Routers = () => {
  return (
    <>
       <Routes>
       <Route  path="/" element={<Records /> } /> 
       <Route  path="/dashboard" element={<Dashboard /> } /> 
       <Route  path="/student/promotion" element={<Promotion /> } /> 
       <Route  path="/student" element={<Students /> } /> 
       <Route  path="/faculty" element={<Faculty /> } /> 
       <Route  path="/faculty/add" element={<AddFaculty /> } /> 
       <Route  path="/student/edit/:code" element={<EditStudent /> } /> 
       <Route  path="/student/add" element={<AddStudent /> } /> 
       <Route  path="/student/registration/bulk" element={<BulkRegistration /> } /> 
     {/*   <Route  path="*" element={<Home />} />  */}

</Routes>
    </>
  )
}

export default Routers
