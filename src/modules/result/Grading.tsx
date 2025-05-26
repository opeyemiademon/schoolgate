import React, {useState} from 'react'
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"

import {
    Card,
    CardContent,
  } from "@/components/ui/card"
import Template from './Layout/Template'
import { FaChevronLeft, FaEdit, FaLink, FaPlus, FaTrashAlt } from 'react-icons/fa'
import { RefreshCcw, Trash2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

import Select from 'react-tailwindcss-select'
import { selectStyle } from '@/components/GlobalFunction'
import RadioGroup, { RadioItem } from '@/components/RadioGroup'
import Label from '@/components/Label'

const Grading = () => {


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
    

    <div className="border-b flex justify-between items-center border-color-border w-full pr-5 bg-white">

  

    <div className='flex items-center gap-5 '>

    <Link to='/courses' className=' border-r border-color-border cursor-pointer flex items-center py-4 px-4 hover:bg-gray-100'><FaChevronLeft className='text-color-primary' /> </Link>

<h2 className="flex  gap-2 items-center font-semibold leading-3"><FaPlus/> Grading System</h2>
</div>

<RefreshCcw/>
</div>


<div className="px-14 py-4">

<Card className="p-0">
  <CardContent className="px-0 ">
    <div className='bg-color-primary-light  text-color-primary shadow shadow-gray-100 rounded-t-md p-4 flex  flex-col gap-2'>
 
 <h5 className='text-base font-semibold leading-4'>Grading System Configuration</h5>
<span className='text-sm italic'>Define vibrant grading scales for your department</span>
</div>


<div className="grid grid-cols-1 p-4 ">


<div className="">
 <h2 className="text-xl font-semibold text-gray-800 mb-4">Select Department</h2>
 
    <Label title="Department" is_reqired={true}/>
        <Select
                value={animal}
                onChange={handleChange}
                options={options}
                primaryColor={"indigo"}
                isSearchable={true}
                isClearable={true}
                placeholder="Select "
                classNames={selectStyle}
            />

    </div>








 <div className="my-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Grading Scale</h2>
                <div className="max-h-80 overflow-y-auto rounded-lg border border-gray-200 shadow-inner">
                    <table className="w-full text-sm text-gray-700">
                        <thead className="bg-gradient-to-r from-teal-600 to-blue-600 text-white sticky top-0">
                            <tr>
                                <th className="p-3 text-left text-xs font-semibold rounded-tl-lg">Lower Mark</th>
                                <th className="p-3 text-left text-xs font-semibold">Upper Mark</th>
                                <th className="p-3 text-left text-xs font-semibold">Grade</th>
                                <th className="p-3 text-left text-xs font-semibold">Remark</th>
                                <th className="p-3 text-left text-xs font-semibold">Points</th>
                                <th className="p-3 text-left text-xs font-semibold">Description</th>
                                <th className="p-3 text-left text-xs font-semibold rounded-tr-lg">Action</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white">
                            <tr className="hover:bg-teal-50">
                                <td className="p-3 border-b">
                                    
                                    <Input type='number' value="70" min="0" max="100" className='focus:ring-teal-500' />
                                </td>
                                <td className="p-3 border-b">
                                    <Input type='number' value="70" min="0" max="100" className='focus:ring-teal-500' />
                                </td>
                                <td className="p-3 border-b">
                                      <Input  value="A"  className='focus:ring-teal-500' />
                                </td>
                                <td className="p-3 border-b">

                                   <Input  value="Excellent"  className='focus:ring-teal-500' />

                                </td>
                                <td className="p-3 border-b">

                                   <Input  value="5.0"  className='focus:ring-teal-500' />

                                </td>
                                <td className="p-3 border-b">

                                   <Input  value="Outstanding performance"  className='focus:ring-teal-500' />

                                </td>
                                <td className="p-3 border-b">
                                    <Button variant={'destructive'} size={'sm'}><Trash2/></Button>
                                </td>
                            </tr>
                            <tr className="hover:bg-teal-50">
                                <td className="p-3 border-b">
                                    
                                    <Input type='number' value="70" min="0" max="100" className='focus:ring-teal-500' />
                                </td>
                                <td className="p-3 border-b">
                                    <Input type='number' value="70" min="0" max="100" className='focus:ring-teal-500' />
                                </td>
                                <td className="p-3 border-b">
                                      <Input  value="A"  className='focus:ring-teal-500' />
                                </td>
                                <td className="p-3 border-b">

                                   <Input  value="Excellent"  className='focus:ring-teal-500' />

                                </td>
                                <td className="p-3 border-b">

                                   <Input  value="5.0"  className='focus:ring-teal-500' />

                                </td>
                                <td className="p-3 border-b">

                                   <Input  value="Outstanding performance"  className='focus:ring-teal-500' />

                                </td>
                                <td className="p-3 border-b">
                                    <Button variant={'destructive'} size={'sm'}><Trash2/></Button>
                                </td>
                            </tr>
                        </tbody>

                            <tfoot >
                              <tr >
                                <td colSpan={7}>
                                  <div className='p-3 '>
                                  <Button  variant={'white'} className='w-full'><FaPlus/> Add New</Button>
                                  </div>
                                </td>
                              </tr>
                            </tfoot>
                    </table>
                </div>
                <p className="text-xs text-gray-600 mt-2">Define grade boundaries (0-100), names, remarks, points (0-5.0), and descriptions. Check 'Remove' to delete a row or leave blank to add new grades.</p>
            </div>


</div>

   






  </CardContent>
</Card>

</div>



<div className="flex justify-between items-center bg-white border-t-2 border-t-color-border px-20 py-5 bottom-0 sticky w-full  ">

    <h2 className="text-base font-medium">Unsaved Changes</h2>

    <div className="flex gap-3">
    <Button variant={'white'} size='md' className="">Discard</Button>

    <Button variant={'primary'} size='md' className="">Save Grading System</Button>
    </div>
</div>
    </Template>
  )
}

export default Grading
