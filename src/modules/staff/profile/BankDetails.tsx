import React, { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"

import {
    Card,
    CardContent,
  } from "@/components/ui/card"
import Template from '@/Layout/Template'
import { FaChevronLeft, FaChevronRight, FaEdit, FaExternalLinkAlt, FaExternalLinkSquareAlt, FaLink, FaSave, FaShare, FaTrash, FaTrashAlt, FaUpload } from 'react-icons/fa'
import { RefreshCcw } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { RadioItem } from '@/components/RadioGroup'
import { selectStyle } from '@/components/GlobalFunction'
import Select from 'react-tailwindcss-select'
import { Checkbox } from '@/components/ui/checkbox'
import { ModalEdit } from '../Modal'

const BankDetails = () => {
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
    <div >
      
    <Card className="p-0">
    <CardContent className="p-0 pb-5">
    <div className='bg-color-primary-light  text-color-primary shadow shadow-gray-100 rounded-t-md p-4 flex gap-2'>
 
  <h5 className='text-base font-semibold leading-4'>Bank Account Details</h5>

</div>


<div className="py-2 px-5">

<div className="grid grid-cols-2 gap-4 mt-2">

<div className="">
<label htmlFor="" className="form-title text-sm leading-1 text-color-gray-2 "> Select Bank</label>

<Select
              value={animal}
              onChange={handleChange}
              options={options}
              primaryColor={"indigo"}
              isSearchable={true}
              isClearable={true}
              placeholder="Select.."
              classNames={selectStyle}
          />
</div>


<div className="">
  <label htmlFor="" className="form-title text-sm leading-1 text-color-gray-2 "> Account Number</label>

  <Input type="text" className="mt-2" />
  </div>


  <div className="">
  <label htmlFor="" className="form-title text-sm leading-1 text-color-gray-2 "> Account Name</label>

  <Input type="text" className="mt-2" />
  </div>
</div>



</div>




    </CardContent>
    </Card>
    </div>
  )
}

export default BankDetails
