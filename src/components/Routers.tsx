
import Dashboard from '@/general/Dashboard';
import Records from '@/modules/courses/Records';
import EditStudent from '@/modules/student/EditStudent';
import AddStudent from '@/modules/student/AddStudent';
import Students from '@/modules/student/Student';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import BulkRegistration from '@/modules/student/BulkRegistration';

import AddFaculty from '@/modules/general/AddFaculty';
import Promotion from '@/modules/student/Promotion';

import AddDepartment from '@/modules/department/AddDepartment';
import Department from '@/modules/department/Department';
import AddLevel from '@/modules/level/AddLevel';
import Level from '@/modules/level/Level';

import Courses from '@/modules/courses/Courses';
import AddCourse from '@/modules/courses/AddCourse';
import Staff from '@/modules/staff/Staff';
import Faculty from '@/modules/general/Faculty';
import AddStaff from '@/modules/staff/AddStaff';
import EditStaff from '@/modules/staff/EditStaff';
import StaffBulkRegistration from '@/modules/staff/StaffBulkRegistration';

const Routers = () => {
  return (
    <>
       <Routes>
       <Route  path="/" element={<Records /> } /> 
       <Route  path="/dashboard" element={<Dashboard /> } /> 
       <Route  path="/student/promotion" element={<Promotion /> } /> 
       <Route  path="/student" element={<Students /> } /> 
       <Route  path="/student/edit/:code" element={<EditStudent /> } /> 
       <Route  path="/student/add" element={<AddStudent /> } /> 
       <Route  path="/student/registration/bulk" element={<BulkRegistration /> } /> 


       <Route  path="/courses" element={<Courses /> } />
       <Route  path="/course/add" element={<AddCourse /> } />
       <Route  path="/levels" element={<Level /> } />
       <Route  path="/level/add" element={<AddLevel /> } />

       <Route  path="/department/add" element={<AddDepartment /> } /> 
       <Route  path="/departments" element={<Department /> } /> 

       <Route  path="/faculty" element={<Faculty /> } /> 
       <Route  path="/faculty/add" element={<AddFaculty /> } /> 


       <Route  path="/staff" element={<Staff /> } /> 
       <Route  path="/staff/edit/:code" element={<EditStaff /> } /> 
       <Route  path="/staff/add" element={<AddStaff /> } /> 
       <Route  path="/staff/registration/bulk" element={<StaffBulkRegistration /> } /> 
       <Route  path="/staff/edit/:code" element={<EditStaff /> } />
     {/*   <Route  path="*" element={<Home />} />  */}

</Routes>
    </>
  )
}

export default Routers
