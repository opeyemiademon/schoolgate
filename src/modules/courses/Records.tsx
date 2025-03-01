import { useState } from "react"
import { FaGlobe, FaTrash } from "react-icons/fa"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"

import {
    Card,
    CardContent,
  } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Topbar from "@/Layout/Topbar"
import Sidebar from "@/Layout/Sidebar"
import Template from "@/Layout/Template"
  
const Records = () => {

    

  return (

   <Template>

<div className="border-b border-color-border w-full py-4 px-6 bg-white">
<h2 className="flex  gap-2 items-center font-semibold leading-3"><FaGlobe/> Domain Settings</h2>
</div>

<div className="px-6  border-b border-color-border bg-white">
    <ul className="flex items-center gap-4 tab">
        <li className=" active ">General</li>
        <li className="   ">Additional Domains</li>
    </ul>
</div>



<div className="px-14 py-4">

<Card className="p-0">
  <CardContent className="p-0">
    
    <div className=" py-4 px-5">

        <div className="flex justify-between items-center">
        <label htmlFor="" className="form-title text-base leading-1 text-color-gray-2 "> App Slug</label>

<div className="flex gap-2 items-center">
    <a href="#" className="text-sm text-color-primary cursor-pointer hover:text-color-primary/80">Copy</a>
    <a href="#" className="text-sm text-color-primary cursor-pointer hover:text-color-primary/80">View</a>
</div>
</div>
        <Input type="text" className="mt-2" />

    </div>


    <div className="py-2 px-5">
        <label htmlFor="" className="form-title text-base leading-1 text-color-gray-2 "> Custom Domain Name</label>

        <Input type="text" className="mt-2" />

    </div>


    <div className="hover:bg-color-primary-light py-3 px-5 flex justify-between items-center cursor-pointer rounded-b-md">

        <label htmlFor="" className="text-color-gray-2">Remove hash (#!) from URL</label>
        <Switch id="airplane-mod"  />
    </div>

  </CardContent>
</Card>
<hr className="mt-5 text-color-border " />
</div>




<div className="px-14 py-4">

<h2 className="text-xl my-2">Default Page Settings</h2>
<Card className="p-0">
  <CardContent className="p-0">
    
    <div className=" py-4 px-5">

    <label htmlFor="" className="form-title text-base leading-1 text-color-gray-2 "> App Slug</label>
        <Input type="text" className="mt-2" />

    </div>


    <div className="py-2 px-5 mb-4">


<div className="flex gap-4">
        <div className="w-1/2">
        <label htmlFor="" className="form-title text-base leading-1 text-color-gray-2 "> Custom Domain Name</label>

        <Input type="text" className="mt-2" />
        </div>



        <div className="w-1/2">
        <label htmlFor="" className="form-title text-base leading-1 text-color-gray-2 "> Custom Domain Name</label>

        <Input type="text" className="mt-2" />
        </div>
        </div>

    </div>



  </CardContent>
</Card>
<hr className="mt-5 text-color-border " />
</div>




<div className="px-14 py-4">

<h2 className="text-xl my-2">App Meta Tags</h2>
<Card className="p-10">
  <CardContent className="p-0 flex items-center justify-center">
    
 

 <Button variant={'white'} size={'md'}> Add New</Button>





  </CardContent>
</Card>
</div>




<div className="px-14 py-4">


<div className="flex justify-between items-center">
<h2 className="text-xl my-2">App Meta Tag</h2>

<div className="flex gap-2 items-center">
    <a href="#" className="text-sm text-color-primary cursor-pointer hover:text-color-primary/80">Add New</a>
</div>
</div>


<Card className="p-0">
  <CardContent className="p-0">
    
  

  <table className="w-full">
    <thead>
        <tr className="border-b border-b-color-border">
            <td className="px-4  py-3 font-semibold w-1/6">Type</td>
            <td className="w-2/6 px-4  py-3 font-semibold">Key</td>
            <td className="w-2/6 px-4  py-3 font-semibold">Value</td>
            <td className="w-1/6 px-4  py-3 font-semibold"></td>
        </tr>
    </thead>
    <tbody>
    <tr className="border-b border-b-color-border ">
            <td className="w-1/6 px-4 py-3 "> <Input type="text" className="w-full" /></td>


            <td className="w-2/6 px-4 py-3">     <Input type="text" className="w-full" /></td>


            <td className="w-2/6 px-4 py-3">     <Input type="text" className="w-full" /></td>
            
            <td className="px-4 w-1/6 py-3"> <Button variant={'white'} size='md' className=""><FaTrash/></Button></td>
        </tr>



        <tr className="border-b border-b-color-border ">
            <td className="w-1/6 px-4 py-3 "> <Input type="text" className="w-full" /></td>


            <td className="w-2/6 px-4 py-3">     <Input type="text" className="w-full" /></td>


            <td className="w-2/6 px-4 py-3">     <Input type="text" className="w-full" /></td>

            <td className="px-4 w-1/6 py-3"> <Button variant={'white'} size='md' className=""><FaTrash/></Button></td>
        </tr>

        <tr className="border-b border-b-color-border ">
            <td className="w-1/6 px-4 py-3 "> <Input type="text" className="w-full" /></td>


            <td className="w-2/6 px-4 py-3">     <Input type="text" className="w-full" /></td>


            <td className="w-2/6 px-4 py-3">     <Input type="text" className="w-full" /></td>

            <td className="px-4 w-1/6 py-3"> <Button variant={'white'} size='md' className=""><FaTrash/></Button></td>
        </tr>
    </tbody>
  </table>

   



  </CardContent>
</Card>
</div>








<div className="flex justify-between items-center bg-white border-t-2 border-t-color-border px-20 py-5 bottom-0 sticky w-full ">

    <h2 className="text-base font-medium">Unsaved Changes</h2>

    <div className="flex gap-3">
    <Button variant={'white'} size='md' className="">Discard</Button>

    <Button variant={'primary'} size='md' className="">Save</Button>
    </div>
</div>

</Template>
  )
}

export default Records
