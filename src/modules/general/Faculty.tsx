import {useState} from 'react'

import {
    Card,
    CardContent,
  } from "@/components/ui/card"
import Template from '@/Layout/Template'
import { FaList } from 'react-icons/fa'
import { Link } from 'react-router-dom'

import { ModalEdit } from '../student/Modal'

const Faculty = () => {


    const [animal, setAnimal] = useState(null);
  const options = [
    { value: "fox", label: " Fox" },
    { value: "Butterfly", label: " Butterfly" },
    { value: "Honeybee", label: " Honeybee" }
  ];
  
  const handleChange = (value:any) => {
    console.log("value:", value);
    setAnimal(value);
  };

  return (
    <Template>
    

    <div className="border-b flex justify-between items-center border-color-border w-full py-2 px-6 bg-white">

  

    <div className='flex items-center gap-5 '>


<h2 className="flex  gap-2 items-center font-semibold leading-3"><FaList/> Faculty</h2>
</div>


<Link to='/faculty/add' className="rounded-sm   py-2  px-5 bg-color-primary text-white shadow-xs hover:bg-color-primary/80"> Add New Faculty</Link>


</div>


     
<div className="px-6 py-4 ">
<Card className="p-0">
  <CardContent className="p-0">
 






<div className=''>




<div className=" overflow-scroll ">

    <table className="custom-table  rounded-md w-full ">
      <thead>
        <tr >
        <th>SN</th>
        <th > <div className=" items-center flex  justify-start">Record Id  </div> </th>
        <th > <div className=" items-center flex  justify-start">Name  </div> </th>
        <th > <div className=" items-center flex  justify-start">Abbreviation  </div> </th>
        
          <th>Established Date</th>
    
        </tr>
      </thead>
      <tbody>
        <tr className=" group">
        <td > <div className=" items-center flex  justify-center">1  </div> </td>
        <td > <div className=" items-center flex  justify-start">hyhfj  </div> </td>
      
       <td ><div className="cell-active m-1 ">Faculty of Natural and Applied Science  <ModalEdit visible={true} /></div></td>
       <td ><div className="cell-active ">NAS  <ModalEdit visible={true} /></div></td>
       <td > <div className=" items-center flex  justify-center">22-03-2025  </div> </td>

    
        </tr>
        <tr className=" group">
        <td > <div className=" items-center flex  justify-center">2  </div> </td>
        <td > <div className=" items-center flex  justify-start">hyhfj  </div> </td>
      
        <td ><div className="">Social Science  </div></td>
       <td ><div className="">SOS </div></td>
       <td > <div className=" items-center flex  justify-center">22-03-2025  </div> </td>
    
        </tr>
        <tr className=" group">
        <td > <div className=" items-center flex  justify-center">3  </div> </td>
        <td > <div className=" items-center flex  justify-start">hyhfj  </div> </td>
      
        <td ><div className="">Social Science  </div></td>
       <td ><div className="">SOS </div></td>
       <td > <div className=" items-center flex  justify-center">22-03-2025  </div> </td>
    
        </tr>
       
      </tbody>
    </table>
    
    </div>




  

</div>



  </CardContent>
</Card>
<hr className="mt-5 mb-20 text-color-border " />
</div>



    </Template>
  )
}

export default Faculty
