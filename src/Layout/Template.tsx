import React, { useState } from 'react'
import Topbar from './Topbar'
import Sidebar from './Sidebar'

const Template =(props:{children?:React.ReactNode})=> {

    const [isSidebarOpen, setIsSidebarOpen] = useState(true)

    const toggleSidebar = ()=>{
        setIsSidebarOpen(!isSidebarOpen)
    }

  return (
  
      <>
    {/* topbar */}
 <Topbar />
 <div className="flex mt-14 z-40 w-screen">
<Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} /> 

<main className={` ${isSidebarOpen?"ml-80":"ml-12"} min-h-[calc(100vh-56px)]   relative w-full `}>



{props.children}


</main>

</div>

    </>
  )
}

export default Template
