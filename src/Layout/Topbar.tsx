
import { useState } from "react"
import { FaAngleDown, FaCogs, FaDatabase, FaEye, FaBars, FaSearch, FaBell, FaUser } from "react-icons/fa"
import { Button } from "@/components/ui/button"
import { Search, Menu, X, ChevronDown, Bell } from "lucide-react"
import { HiOutlineChat, HiOutlineChevronRight } from "react-icons/hi"

const Topbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="fixed top-0 w-full z-50 bg-white border-b border-b-[#D8D9DA] shadow-sm">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Left section - Logo and breadcrumbs */}
            <div className="flex items-center space-x-4">
              {/* Mobile menu button */}
              <button 
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 lg:hidden hover:text-color-primary hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-color-primary"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <X className="block h-5 w-5" aria-hidden="true" />
                ) : (
                  <Menu className="block h-5 w-5" aria-hidden="true" />
                )}
              </button>
              
              {/* Logo */}
              <div className="flex-shrink-0 flex items-center">
                <FaDatabase className="text-2xl text-color-primary" />
              </div>
              
              {/* Breadcrumbs - Hide on mobile */}
              <nav className="hidden md:flex items-center">
                <ul className="flex items-center space-x-1">
                  <li className="flex items-center">
                    <a href="" className="flex items-center px-2 py-1 rounded-md hover:bg-gray-100 hover:text-color-primary transition-colors group">
                      <FaDatabase className="text-sm group-hover:text-color-primary" />
                      <span className="text-sm ml-1.5 font-medium">Student Portal</span>
                    </a>
                    <HiOutlineChevronRight className="text-lg text-gray-400" />
                  </li>
                  
                  <li className="flex items-center">
                    <a href="" className="flex items-center px-2 py-1 rounded-md hover:bg-gray-100 hover:text-color-primary transition-colors group">
                      <FaCogs className="text-sm group-hover:text-color-primary" />
                      <span className="text-sm ml-1.5 font-medium">Settings</span>
                    </a>
                    <HiOutlineChevronRight className="text-lg text-gray-400" />
                  </li>
                </ul>
              </nav>
            </div>
            
            {/* Center section - Search (expands on mobile) */}
            <div className={`${isSearchOpen ? 'absolute inset-x-0 top-0 px-4 py-3 bg-white z-10 lg:relative lg:inset-auto lg:p-0 lg:bg-transparent' : 'hidden lg:block'}`}>
              <div className="relative max-w-lg w-full mx-auto lg:mx-0">
                <div className="flex items-center justify-between w-full border rounded-md border-color-border py-2 px-3 bg-white hover:bg-gray-50 transition-colors focus-within:ring-2 focus-within:ring-color-primary focus-within:border-color-primary">
                  <div className="flex items-center flex-grow">
                    <Search className="h-4 w-4 text-gray-400" />
                    <input 
                      type="text" 
                      placeholder="Search..." 
                      className="ml-2 text-sm w-full bg-transparent border-none focus:outline-none focus:ring-0"
                    />
                  </div>
                  <span className="text-xs text-gray-400 hidden sm:block">Ctrl + K</span>
                  {isSearchOpen && (
                    <button 
                      className="ml-2 lg:hidden" 
                      onClick={() => setIsSearchOpen(false)}
                    >
                      <X className="h-4 w-4" />
                    </button>
                  )}
                </div>
              </div>
            </div>
            
            {/* Right section - Actions and profile */}
            <div className="flex items-center space-x-1 sm:space-x-2">
              {/* Mobile search button */}
              <button 
                className="p-2 rounded-full text-gray-400 lg:hidden hover:text-color-primary hover:bg-gray-100"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
              >
                <FaSearch className="h-4 w-4" />
              </button>
              
              <Button 
                variant="white" 
                size="sm" 
                className="hidden sm:flex items-center space-x-1 hover:bg-gray-100"
              >
                <span className="text-xs">Actions</span>
                <FaAngleDown className="h-3 w-3" />
              </Button>
              
              <Button 
                variant="orange" 
                size="sm" 
                className="hidden sm:inline-flex text-xs font-medium"
              >
                12 days left
              </Button>
              
              <Button 
                variant="success" 
                size="sm" 
                className="hidden md:inline-flex items-center space-x-1 text-xs"
              >
                <FaEye className="h-3 w-3" /> 
                <span>View App</span>
              </Button>
              
              {/* Notifications */}
              <button className="p-2 rounded-full text-gray-400 hover:text-color-primary hover:bg-gray-100 relative">
                <Bell className="h-5 w-5" />
                <span className="absolute top-1 right-1 block h-2 w-2 rounded-full bg-red-500"></span>
              </button>
              
              {/* Profile dropdown */}
              <div className="relative">
                <button 
                  className="flex items-center space-x-2 p-1 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-color-primary"
                  onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
                >
                  <img 
                    src="/images/ope.png" 
                    alt="User profile" 
                    className="w-8 h-8 rounded-full object-cover border border-gray-200" 
                  />
                  <span className="text-sm font-medium hidden md:block">Eminent Ade</span>
                  <ChevronDown className="h-4 w-4 text-gray-400 hidden md:block" />
                </button>
                
                {isProfileMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Your Profile</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Settings</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sign out</a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 shadow-sm">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#" className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:bg-gray-100">
                <FaDatabase className="mr-2" /> Student Portal
              </a>
              <a href="#" className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:bg-gray-100">
                <FaCogs className="mr-2" /> Settings
              </a>
              <Button variant="success" size="sm" className="w-full justify-center mt-2">
                <FaEye className="mr-2 h-3 w-3" /> View App
              </Button>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default Topbar
