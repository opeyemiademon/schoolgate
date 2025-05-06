
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { FaAngleLeft,  FaCog, FaCogs, FaDatabase, FaFilePdf, FaPlusCircle, FaPrint, FaUserFriends, FaFileImport, FaReceipt, FaEllipsisV, FaGripVertical, FaChevronCircleRight, FaChevronRight, FaSearch } from "react-icons/fa"
import { FaPlugCirclePlus, FaGraduationCap, FaBuromobelexperte, FaChampagneGlasses, FaCodeFork, FaCodeCompare, FaChildren, FaKey, FaLaptopFile, FaEthernet, FaRegFileLines, FaRegThumbsUp, FaSquareFontAwesomeStroke } from "react-icons/fa6"
import { IoAddCircleOutline, IoCloudUpload } from "react-icons/io5";
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


 <div className={`min-h-[calc(100vh-56px)] z-30 border-r border-r-color-border  ml-12  bg-white shadow-md fixed ${props.isSidebarOpen?' w-[280px]':' w-[1px]'}`}>

<div className="h-[calc(100vh-60px)]">

<div className="m-3">


{props.isSidebarOpen?<div className="flex border items-center border-color-border p-2 rounded-sm">
<FaSearch className="text-color-gray-2 text-xs"/>
<input type="text" className="form-group text-xs" placeholder="Search " />
</div>:[]}


</div>


 <ul className="sidebar  h-full overflow-scroll   pb-24 ">
        <li> <Link to='#'><FaBuromobelexperte /> Dashboard</Link></li>
        <li><Link to='#'><FaCogs/> Setup</Link></li>
        <li ><Link to='/student/add' className="active"> <FaPlusCircle /> Add New Staff</Link></li>

       
       
        <li> <Link to='/student/registration/bulk'><FaUserFriends/> Bulk  Registration</Link></li>

        
        <li className="flex items-center justify-between group   ">
          
          
        <Link to='/student' className="flex items-center w-full justify-between" > <div className="flex items-center gap-2"> <FaGraduationCap/> Student Records </div>
       <div className="relative group/item "><FaEllipsisV className="hidden group-hover:block group/item "/>
       
       
       <div className="bg-white border border-color-border  rounded-md shadow-md absolute  w-[200px] -right-2 hidden group-hover/item:block ">


<ul className="flex flex-col  ">
  
  <li className="flex items-center gap-2 text-color-gray-2 px-4 py-2 hover:bg-color-primary-light cursor-pointer text-sm rounded-t-md"> Short </li>
 
  <li className="flex items-center gap-2 text-color-gray-2 px-4 py-2 hover:bg-color-primary-light cursor-pointer text-sm">  Medium  </li>

  <li className="flex items-center gap-2 text-color-gray-2 px-4 py-2 hover:bg-color-primary-light cursor-pointer text-sm">  Tall  </li>

  <li className="flex items-center gap-2 text-color-gray-2 px-4 py-2 hover:bg-color-primary-light cursor-pointer text-sm rounded-b-md">  Extra Tall </li>


 

</ul>


</div></div>

</Link>  


       </li>

        <li > <Link to='/student/promotion'> <FaCodeFork className="hover:cursor-move" /> Student Promotion</Link></li>


        <li> <Link to='#'><FaChampagneGlasses /> Graduate Student</Link></li>
        <li><Link to='#'> <FaCodeCompare />Transfer Student</Link></li>
        <li><Link to='#'><FaSquareFontAwesomeStroke /> Admission Number Pattern</Link></li>
        <li><Link to='#'><FaEthernet /> Student Documents</Link></li>
        <li><Link to='#'> <FaLaptopFile/>Student Review</Link></li>
        <li><Link to='#'><FaChildren /> Student Activity</Link></li>
        <li><Link to='#'> <FaKey />Change Student Password</Link></li>
  

        <li><Link to='#'> <FaRegThumbsUp />Student Wallet</Link>   </li>
        <li className="flex flex-col items-start"><Link to='#' className="font-semibold flex items-center"><FaChevronRight /> Reports</Link>
        
        </li>
<ul className="gap-0 ml-3 ">
        <li className="text-xs"><Link to='#'> Student Documents</Link></li>
        <li className="text-xs"><Link to='#'> Student Review</Link></li>
        <li className="text-xs"><Link to='#'> Student Activity</Link></li>
        <li className="text-xs"><Link to='#'> Change Student Password</Link></li>
        <li className="text-xs"><Link to='#'> Student Wallet</Link>   </li>
</ul>
        <div className="border-b border-color-border"></div>


        <li className="flex flex-col items-start"><Link to='#' className="font-semibold flex items-center"><FaChevronRight /> Reports</Link>
        
        </li><>
<ul className="gap-0 ml-3 ">
        <li className="text-xs"><Link to='#'> Student Documents</Link></li>
        <li className="text-xs"><Link to='#'> Student Review</Link></li>
        <li className="text-xs"><Link to='#'> Student Activity</Link></li>
        <li className="text-xs"><Link to='#'> Change Student Password</Link></li>
        <li className="text-xs"><Link to='#'> Student Wallet</Link>   </li>
</ul>
        <div className="border-b border-color-border"></div>
        </>
    </ul>





    <div className="absolute bg-white -right-5.5 bottom-4 px-0.5 cursor-pointer py-2 border-t border-r border-b shadow-sm rounded-r-sm  border-color-border " onClick={props.toggleSidebar}>
        <FaAngleLeft className="text-color-gray-2"/>
    </div>
    </div>

</div> 
</div>
  )
}

export default Sidebar
