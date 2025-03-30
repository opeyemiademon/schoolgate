import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

import {
    Card,
    CardContent,
  } from "@/components/ui/card"
import { Button } from '@/components/ui/button'
import { selectStyle } from '@/components/GlobalFunction'
import Select from 'react-tailwindcss-select'

const Academic = () => {

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
<h2 className="text-xl my-2">Academic Information</h2>
<Card className="p-0">
<CardContent className="p-0">


 <div className=" py-2 px-5">

<label htmlFor="" className="form-title text-base leading-1 text-color-gray-2 "> Matriculation Number <span className='text-red-800'>*</span></label>
    <Input type="text" disabled className="mt-2" value="FT23POL0123" />
<span className='text-xs text-muted-foreground'>This is usually auto generated, and it can change at the point of submission if duplicate is detected</span>
</div>


<div className=" py-2 px-5">

<label htmlFor="" className="form-title text-base leading-1 text-color-gray-2 "> Application Number <span className='text-red-800'>*</span></label>
    <Input type="text" disabled className="mt-2" value="FT23POL0123" />
<span className='text-xs text-muted-foreground'>This is usually auto generated, and it can change at the point of submission if duplicate is detected</span>
</div>

<div className="grid grid-cols-2 gap-4">
<div className=" py-2 px-5">

<label htmlFor="" className="form-title text-base leading-1 text-color-gray-2 "> Mode of Entry <span className='text-red-800'>*</span></label>
<Select
                value={animal}
                onChange={handleChange}
                options={options}
                primaryColor={"indigo"}
                isSearchable={true}
                isClearable={true}
                placeholder="Select department first"
                classNames={selectStyle}
            />
</div>


<div className=" py-2 px-5">

<label htmlFor="" className="form-title text-base leading-1 text-color-gray-2 "> Study Mode<span className='text-red-800'>*</span></label>
<Select
                value={animal}
                onChange={handleChange}
                options={options}
                primaryColor={"indigo"}
                isSearchable={true}
                isClearable={true}
                placeholder="Select department first"
                classNames={selectStyle}
            />
</div>
</div>


<div className=" py-2 px-5">

<label htmlFor="" className="form-title text-base leading-1 text-color-gray-2 "> Select Faculty <span className='text-red-800'>*</span></label>
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

<div className=" py-2 px-5">

<label htmlFor="" className="form-title text-base leading-1 text-color-gray-2 "> Select Department <span className='text-red-800'>*</span></label>
<Select
                value={animal}
                onChange={handleChange}
                options={options}
                primaryColor={"indigo"}
                isSearchable={true}
                isClearable={true}
                placeholder="Select faculty first"
                classNames={selectStyle}
            />
</div>


<div className=" py-2 px-5">

<label htmlFor="" className="form-title text-base leading-1 text-color-gray-2 "> Select Unit <span className='text-red-800'>*</span></label>
<Select
                value={animal}
                onChange={handleChange}
                options={options}
                primaryColor={"indigo"}
                isSearchable={true}
                isClearable={true}
                placeholder="Select department first"
                classNames={selectStyle}
            />
</div>

<div className="grid grid-cols-2 gap-4">
<div className=" py-2 px-5">

<label htmlFor="" className="form-title text-base leading-1 text-color-gray-2 "> Start Level <span className='text-red-800'>*</span></label>
<Select
                value={animal}
                onChange={handleChange}
                options={options}
                primaryColor={"indigo"}
                isSearchable={true}
                isClearable={true}
                placeholder="Select department first"
                classNames={selectStyle}
            />
</div>


<div className=" py-2 px-5">

<label htmlFor="" className="form-title text-base leading-1 text-color-gray-2 "> Current Level <span className='text-red-800'>*</span></label>
<Select
                value={animal}
                onChange={handleChange}
                options={options}
                primaryColor={"indigo"}
                isSearchable={true}
                isClearable={true}
                placeholder="Select department first"
                classNames={selectStyle}
            />
</div>
</div>

<div className=" py-2 px-5">

<label htmlFor="" className="form-title text-base leading-1 text-color-gray-2 "> Admission Session <span className='text-red-800'>*</span></label>
<Select
                value={animal}
                onChange={handleChange}
                options={options}
                primaryColor={"indigo"}
                isSearchable={true}
                isClearable={true}
                placeholder="Select department first"
                classNames={selectStyle}
            />
</div>


<div className=" py-2 px-5">

<label htmlFor="" className="form-title text-base leading-1 text-color-gray-2 "> Admission Status <span className='text-red-800'>*</span></label>
<Select
                value={animal}
                onChange={handleChange}
                options={options}
                primaryColor={"indigo"}
                isSearchable={true}
                isClearable={true}
                placeholder="Select department first"
                classNames={selectStyle}
            />
</div>

<div className="py-2 px-5">


<div className="grid grid-cols-2 gap-4">
  <div className="">
  <label htmlFor="" className="form-title text-base leading-1 text-color-gray-2 "> Admission Date</label>

  <Input type="text" className="mt-2" />
  </div>



  <div className="">
  <label htmlFor="" className="form-title text-base leading-1 text-color-gray-2 "> Registration Date</label>

  <Input type="text" className="mt-2" />
  </div>
  </div>

  </div>


  <div className=" py-2 px-5">

<label htmlFor="" className="form-title text-base leading-1 text-color-gray-2 "> Certificate Type <span className='text-red-800'>*</span></label>
<Select
                value={animal}
                onChange={handleChange}
                options={options}
                primaryColor={"indigo"}
                isSearchable={true}
                isClearable={true}
                placeholder="Select department first"
                classNames={selectStyle}
            />
</div>




  <div className=" py-2 px-5">
    
    <label htmlFor="" className="form-title text-base leading-1 text-color-gray-2 "> Notes </label>
        <Textarea className='mt-2' />

    <span className='text-xs text-color-gray-2'>Surname first, follow by First Name then Other name</span>
    </div>




</CardContent>
</Card>

<hr className="mt-5 text-color-border " />

<h2 className="text-xl my-2">Termination</h2>
<Card className="p-0">
<CardContent className="p-0">






<div className="py-2 px-5">


<div className="grid grid-cols-2 gap-4">
  <div className="">
  <label htmlFor="" className="form-title text-base leading-1 text-color-gray-2 "> Termination Date</label>

  <Input type="text" className="mt-2" />
  </div>



  <div className=" py-2 px-5">

<label htmlFor="" className="form-title text-base leading-1 text-color-gray-2 "> Select Session <span className='text-red-800'>*</span></label>
<Select
                value={animal}
                onChange={handleChange}
                options={options}
                primaryColor={"indigo"}
                isSearchable={true}
                isClearable={true}
                placeholder="Select department first"
                classNames={selectStyle}
            />
</div>
  </div>

  </div>


  <div className=" py-2 px-5">

<label htmlFor="" className="form-title text-base leading-1 text-color-gray-2 "> Select Termination Reason<span className='text-red-800'>*</span></label>
<Select
                value={animal}
                onChange={handleChange}
                options={options}
                primaryColor={"indigo"}
                isSearchable={true}
                isClearable={true}
                placeholder="Select department first"
                classNames={selectStyle}
            />
</div>







  <div className=" py-2 px-5">
    
    <label htmlFor="" className="form-title text-base leading-1 text-color-gray-2 "> Termination Remarks </label>
        <Textarea className='mt-2' />

    <span className='text-xs text-color-gray-2'>Surname first, follow by First Name then Other name</span>
    </div>

    <div className=" py-2 px-5">
<Button variant={'destructive'}>Click to Terminate Admission</Button>
      </div>


</CardContent>
</Card>

</div>
  )
}

export default Academic
