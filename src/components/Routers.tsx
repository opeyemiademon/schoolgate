import Dashboard from '@/general/dashboard';
import Records from '@/modules/courses/Records';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

const Routers = () => {
  return (
    <>
       <Routes>
       <Route  path="/" element={<Records /> } /> 
       <Route  path="/dashboard" element={<Dashboard /> } /> 
     {/*   <Route  path="*" element={<Home />} />  */}

</Routes>
    </>
  )
}

export default Routers
