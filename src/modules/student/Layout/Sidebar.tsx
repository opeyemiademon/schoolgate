
import { FaAngleLeft, FaCog, FaCogs, FaDatabase, FaFilePdf, FaPrint } from "react-icons/fa"

import { Link } from "react-router-dom"
const Sidebar = (props:any) => {

   

  return (
   

<div className="flex flex-row">
<div className=" fixed min-h-[calc(100vh-56px)] bg-[#F7F8F9] ">

<div className="h-[calc(100vh-60px)]">
    <ul className="border-r h-full overflow-scroll border-r-[#D8D9DA] ">


        <li className="border-b border-b-[#D8D9DA] p-3"><Link to='#'><FaDatabase className="text-2xl text-color-primary"/></Link></li>


        <li className="border-b cursor-pointer border-b-[#D8D9DA] p-3 group"><Link to='#'><FaFilePdf className="text-2xl text-color-border group-hover:text-color-primary "  /></Link></li>
        <li className="border-b cursor-pointer border-b-[#D8D9DA] p-3 group"><Link to='#'><FaCog className="text-2xl text-color-border group-hover:text-color-primary " /></Link></li>
       
        <li className="border-b cursor-pointer border-b-[#D8D9DA] p-3 group"><Link to='#'><FaCog className="text-2xl text-color-border group-hover:text-color-primary " /></Link></li>  
        <li className="border-b cursor-pointer border-b-[#D8D9DA] p-3 group"><Link to='#'><FaCog className="text-2xl text-color-border group-hover:text-color-primary " /></Link></li>
        <li className="border-b cursor-pointer border-b-[#D8D9DA] p-3 group"><Link to='#'><FaCog className="text-2xl text-color-border group-hover:text-color-primary " /></Link></li>
     
        <li className="border-b cursor-pointer border-b-[#D8D9DA] p-3 group"><Link to='#'><FaCog className="text-2xl text-color-border group-hover:text-color-primary " /></Link></li>


        <li className="border-t p-3 cursor-pointer border-t-[#D8D9DA] bottom-0 absolute"><a href="#"><FaPrint className="text-2xl text-color-primary " /></a></li>

    </ul>

    </div>
</div>


 <div className={`min-h-[calc(100vh-56px)] z-30 border-r border-r-color-border ml-12  bg-white shadow-md fixed ${props.isSidebarOpen?' w-[280px]':' w-[1px]'}`}>

<div className="h-[calc(100vh-60px)]">
 <ul className="sidebar  h-full overflow-scroll ">
        <li><FaCogs/> <Link to='#'> Dashboard</Link></li>
       
        <li className="active"><FaCogs/><Link to='#'> Add New Student</Link></li>

        <li><FaCogs/><Link to='#'> Upload Student</Link></li>
        <li><FaCogs/><Link to='#'> Bulk Student Registration</Link></li>
        <li><FaCogs/><Link to='#'> Student Records</Link></li>
        <li><FaCogs/><Link to='#'> Student Promotion</Link></li>


        <li><FaCogs/> <Link to='#'> Graduate Student</Link></li>
        <li><FaCogs/><Link to='#'> Transfer Student</Link></li>
        <li><FaCogs/><Link to='#'> Admission Number Pattern</Link></li>
        <li><FaCogs/><Link to='#'> Student Documents</Link></li>
        <li><FaCogs/><Link to='#'> Student Wallet</Link></li>
        <li><FaCogs/><Link to='#'> Student Review</Link></li>

        <li><FaCogs/><Link to='#'> Change Student Password</Link></li>
        <li><FaCogs/><Link to='#'> General Settings</Link></li>

        <li><FaCogs/><Link to='#'> Reports</Link></li>
    </ul>


    <div className="absolute bg-white -right-5 bottom-4 px-0.5 cursor-pointer py-2 border-t border-r border-b shadow-sm rounded-r-sm  border-color-border " onClick={props.toggleSidebar}>
        <FaAngleLeft className="text-color-gray-2"/>
    </div>
    </div>

</div> 
</div>
  )
}

export default Sidebar
