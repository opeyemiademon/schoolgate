import React, { useState, useEffect } from 'react'
import Topbar from './Topbar'
import Sidebar from './Sidebar'

const Template =(props:{children?:React.ReactNode})=> {
    // Check if screen is mobile size on initial render and when window resizes
    const [isSidebarOpen, setIsSidebarOpen] = useState(() => {
        // Default to closed on mobile (window.innerWidth < 768px)
        return window.innerWidth >= 768;
    });
    
    useEffect(() => {
        // Update sidebar state when window is resized
        const handleResize = () => {
            if (window.innerWidth < 768 && isSidebarOpen) {
                setIsSidebarOpen(false);
            }
        };
        
        window.addEventListener('resize', handleResize);
        
        // Clean up event listener
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [isSidebarOpen]);

    const toggleSidebar = ()=>{
        setIsSidebarOpen(!isSidebarOpen)
    }

  return (
  
      <>
    {/* topbar */}
 <Topbar />
 <div className="flex mt-14 z-40 w-screen">
<Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} /> 

<main 
  className={`${isSidebarOpen ? "ml-80" : "ml-12"} min-h-[calc(100vh-56px)] relative w-full`}
  style={{
    '--sidebar-offset': isSidebarOpen ? '20rem' : '3rem',
  } as React.CSSProperties}
>



{props.children}


</main>

</div>

    </>
  )
}

export default Template
