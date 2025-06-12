import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Search, ChevronDown, ChevronRight, Menu, X, ChevronLeft } from "lucide-react";
import { 
  FaAngleLeft, FaAngleRight, FaCog, FaCogs, FaDatabase, FaFilePdf, FaPlusCircle, 
  FaPrint, FaUserFriends, FaEllipsisV, FaChevronRight, FaSearch,
  FaTimes, FaAngleDown, FaAngleUp, FaHome
} from "react-icons/fa";
import { 
  FaGraduationCap, FaBuromobelexperte, FaChampagneGlasses, 
  FaCodeFork, FaCodeCompare, FaChildren, FaKey, FaLaptopFile, 
  FaEthernet, FaRegThumbsUp
} from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";

interface SidebarProps {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

interface MenuItem {
  title: string;
  path: string;
  icon: React.ReactNode;
  submenu?: MenuItem[];
}

const Sidebar = ({ isSidebarOpen, toggleSidebar }: SidebarProps) => {
  const location = useLocation();
  const [openSubmenuIndex, setOpenSubmenuIndex] = useState<number | null>(null);
  const [hoveredIcon, setHoveredIcon] = useState<number | null>(null);
  
  const toggleSubmenu = (index: number) => {
    setOpenSubmenuIndex(openSubmenuIndex === index ? null : index);
  };
  
  // Define menu items with their icons and submenu items
  const menuItems: MenuItem[] = [
    { title: "Dashboard", path: "/dashboard", icon: <FaBuromobelexperte /> },
    { title: "Setup", path: "/student/setup", icon: <FaCogs /> },
    { title: "Add New Student", path: "/student/add", icon: <FaPlusCircle /> },
    { title: "Bulk Registration", path: "/student/registration/bulk", icon: <FaUserFriends /> },
    { 
      title: "Student Records", 
      path: "/student", 
      icon: <FaGraduationCap />,
      submenu: [
        { title: "All Students", path: "/student/all", icon: <ChevronRight className="h-4 w-4" /> },
        { title: "Active Students", path: "/student/active", icon: <ChevronRight className="h-4 w-4" /> },
        { title: "Inactive Students", path: "/student/inactive", icon: <ChevronRight className="h-4 w-4" /> },
        { title: "Graduated Students", path: "/student/graduated", icon: <ChevronRight className="h-4 w-4" /> }
      ]
    },
    { title: "Student Promotion", path: "/student/promotion", icon: <FaCodeFork /> },
    { title: "Graduate Student", path: "/student/graduation", icon: <FaChampagneGlasses /> },
    { title: "Change of Program", path: "/student/transfer", icon: <FaCodeCompare /> },
    { title: "Student Documents", path: "/student/documents", icon: <FaEthernet /> },
    { title: "Student Review", path: "/student/review", icon: <FaLaptopFile /> },
    { title: "Student Activity", path: "/student/activity", icon: <FaChildren /> },
    { title: "Change Student Password", path: "/student/change_password", icon: <FaKey /> },
    { title: "Student Wallet", path: "/student/wallet", icon: <FaRegThumbsUp /> },
    { 
      title: "Reports", 
      path: "/student/reports", 
      icon: <FaFilePdf />,
      submenu: [
        { title: "Student Documents", path: "/student/reports/documents", icon: <ChevronRight className="h-4 w-4" /> },
        { title: "Student Review", path: "/student/reports/review", icon: <ChevronRight className="h-4 w-4" /> },
        { title: "Student Activity", path: "/student/reports/activity", icon: <ChevronRight className="h-4 w-4" /> },
        { title: "Password Changes", path: "/student/reports/password", icon: <ChevronRight className="h-4 w-4" /> },
        { title: "Graduated (Alumni)", path: "/student/reports/alumni", icon: <ChevronRight className="h-4 w-4" /> }
      ]
    },
  ];

  return (

<div className="flex flex-row">
  {/* Icon sidebar - always visible */}
  <div className="fixed min-h-[calc(100vh-56px)] bg-[#F7F8F9] z-40">
    <div className="h-[calc(100vh-60px)]">
      <ul className="border-r h-full overflow-y-auto border-r-[#D8D9DA] scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
        {/* Logo/Home */}
        <li className="border-b border-b-[#D8D9DA] p-3">
          <Link to="/dashboard" className="flex justify-center">
            <FaHome className="text-2xl text-color-primary" />
          </Link>
        </li>

        {/* Icon menu items */}
        {menuItems.map((item, index) => (
          <li 
            key={index} 
            className="border-b cursor-pointer border-b-[#D8D9DA] p-3 group relative"
            onMouseEnter={() => setHoveredIcon(index)}
            onMouseLeave={() => setHoveredIcon(null)}
          >
            <Link 
              to={item.path}
              className="flex justify-center"
              onClick={(e) => {
                if (item.submenu && isSidebarOpen) {
                  e.preventDefault();
                  toggleSubmenu(index);
                }
              }}
            >
              <div className={`text-2xl ${location.pathname === item.path ? 'text-color-primary' : 'text-color-border group-hover:text-color-primary'}`}>
                {item.icon}
              </div>
            </Link>
            
            {/* Tooltip when sidebar is collapsed */}
            {!isSidebarOpen && hoveredIcon === index && (
              <div className="absolute left-full top-0 ml-2 px-3 py-2 bg-gray-800 text-white text-sm rounded shadow-lg whitespace-nowrap z-50">
                {item.title}
              </div>
            )}
          </li>
        ))}

        {/* Settings at bottom */}
        <li className="border-t p-3 cursor-pointer border-t-[#D8D9DA] bottom-0 absolute w-full">
          <Link to="/settings" className="flex justify-center">
            <FaCog className="text-2xl text-color-primary" />
          </Link>
        </li>
      </ul>
    </div>
  </div>

  {/* Main sidebar - expandable */}
  <div className={`min-h-[calc(100vh-56px)] z-30 border-r border-r-color-border ml-12 bg-white shadow-md fixed transition-all duration-300 ease-in-out ${isSidebarOpen ? 'w-[280px]' : 'w-[0px]'}`}>

<div className="h-[calc(100vh-60px)]">
  <div className="m-3">
    {isSidebarOpen && (
      <div className="flex border items-center border-color-border p-2 rounded-sm">
        <FaSearch className="text-color-gray-2 text-xs ml-2"/>
        <input 
          type="text" 
          className="form-group text-xs w-full px-2 py-1 focus:outline-none" 
          placeholder="Search..." 
        />
      </div>
    )}
  </div>


<ul className="sidebar h-full overflow-y-auto pb-24 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
  {/* Main menu items */}
  {menuItems.map((item, index) => (
    <li key={index} className="mb-1">
      {/* Menu item with or without submenu */}
      <div 
        className={`flex items-center justify-between px-4 py-2.5 cursor-pointer ${location.pathname === item.path ? 'bg-color-primary-light text-color-primary' : 'hover:bg-gray-100'}`}
        onClick={() => item.submenu && toggleSubmenu(index)}
      >
        <Link 
          to={item.submenu ? '#' : item.path}
          className="flex items-center gap-2.5 w-full"
          onClick={(e) => item.submenu && e.preventDefault()}
        >
          <span className="text-lg">{item.icon}</span>
          <span className="text-sm font-medium">{item.title}</span>
        </Link>
        {item.submenu && (
          <div className="text-gray-500">
            {openSubmenuIndex === index ? 
              <FaAngleUp className="text-sm" /> : 
              <FaAngleDown className="text-sm" />
            }
          </div>
        )}
      </div>
      
      {/* Submenu items */}
      {item.submenu && openSubmenuIndex === index && (
        <ul className="ml-4 mt-1 border-l border-gray-200 pl-2">
          {item.submenu.map((subItem, subIndex) => (
            <li key={`${index}-${subIndex}`} className="my-1">
              <Link 
                to={subItem.path}
                className={`flex items-center gap-2 px-4 py-2 text-xs rounded-md ${location.pathname === subItem.path ? 'bg-color-primary-light text-color-primary' : 'text-gray-600 hover:bg-gray-50'}`}
              >
                <span className="text-xs">{subItem.icon}</span>
                <span>{subItem.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  ))}
</ul>



{/* Toggle button - positioned to stick with the sidebar */}
<div 
  className="absolute z-[9999] bg-color-primary px-2 cursor-pointer py-2.5 border shadow-md rounded-r-md hover:bg-color-primary-dark transition-colors"
  style={{ 
    right: '-20px', 
    bottom: '20px'
  }}
  onClick={toggleSidebar}
>
  {isSidebarOpen ? 
    <FaAngleLeft className="text-white" /> : 
    <FaAngleRight className="text-white" />
  }
</div>

    </div>
  
  
 
  </div>
</div>
  )
}

export default Sidebar
