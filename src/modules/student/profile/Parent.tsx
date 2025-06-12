import React, { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import {
    Card,
    CardContent,
} from "@/components/ui/card"
import { Button } from '@/components/ui/button'
import { selectStyle } from '@/components/GlobalFunction'
import Select from 'react-tailwindcss-select'
import { FaExternalLinkAlt, FaTrashAlt, FaUserTie, FaUserFriends, FaUserAlt, FaUpload, FaUser } from 'react-icons/fa'

const Parent = () => {
  // State management for form selections
  const [parentData, setParentData] = useState({
    father: null,
    mother: null,
    guardian: null
  });
  
   const [formData, setFormData] = useState({
      firstName: 'John',
      lastName: 'Doe',
      otherName: '',
      nickname: '',
      passportId: 'A1234567',
      nationalId: '98765432',
      birthCertificateNo: 'BC123456',
      birthDate: '1995-05-15',
      driverLicenseNo: 'DL987654',
      genotype: 'AA',
      gender: 'Male',
      tribe: 'Yoruba',
      religion: 'Christianity',
      maritalStatus: 'Single',
      languageSpoken: 'English, Yoruba',
      bloodGroup: 'O+',
      weight: '75kg',
      height: '180cm',
      hasDisability: 'Yes',
      disabilityDetails: '',
      profilePicture: null
    });
  // Sample options for select dropdowns
  const qualificationOptions = [
    { value: "phd", label: "Ph.D" },
    { value: "masters", label: "Master's Degree" },
    { value: "bachelors", label: "Bachelor's Degree" },
    { value: "diploma", label: "Diploma" },
    { value: "highschool", label: "High School" }
  ];
  
  const handleChange = (value: any, field: string) => {
    console.log("value:", value, "field:", field);
    setParentData(prev => ({
      ...prev,
      [field]: value
    }));
  };
  
  return (
    <div className="space-y-6">
      <Card className="shadow-md p-0 hover:shadow-lg transition-shadow duration-300">
        <CardContent className="p-0">
          <div className='bg-color-primary-light text-color-primary rounded-t-md p-4 flex flex-col gap-1'>
            <h5 className='text-base font-semibold flex items-center gap-2'>
              <FaUserTie className="text-color-primary" />
              Parent Details
            </h5>
            <span className='text-sm italic'>Manage student parent information for the new academic session.</span>
          </div>
     
          <div className="p-5">
            <div className="flex items-center gap-2 mb-4 border-b border-gray-200 pb-2">
              <FaUserTie className="text-blue-700" />
              <h2 className="text-blue-700 text-xl font-semibold">Father Information</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="space-y-1">
                <label htmlFor="fatherName" className="form-title text-sm font-medium text-color-gray-2 block">
                  Father Name <span className='text-red-800'>*</span>
                </label>
                <Input 
                  id="fatherName" 
                  type="text" 
                  placeholder="Enter father's name"
                  className="w-full" 
                />
              </div>
              
              <div className="space-y-1">
                <label htmlFor="fatherPhone" className="form-title text-sm font-medium text-color-gray-2 block">
                  Father Phone <span className='text-red-800'>*</span>
                </label>
                <Input 
                  id="fatherPhone" 
                  type="tel" 
                  placeholder="Enter father's phone number"
                  className="w-full" 
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="space-y-1">
                <label htmlFor="fatherEmail" className="form-title text-sm font-medium text-color-gray-2 block">
                  Father Email <span className='text-red-800'>*</span>
                </label>
                <Input 
                  id="fatherEmail" 
                  type="email" 
                  placeholder="Enter father's email"
                  className="w-full" 
                />
              </div>
              
              <div className="space-y-1">
                <label htmlFor="fatherOccupation" className="form-title text-sm font-medium text-color-gray-2 block">
                  Father Occupation <span className='text-red-800'>*</span>
                </label>
                <Input 
                  id="fatherOccupation" 
                  type="text" 
                  placeholder="Enter father's occupation"
                  className="w-full" 
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="space-y-1">
                <label htmlFor="fatherQualification" className="form-title text-sm font-medium text-color-gray-2 block">
                  Father Qualification <span className='text-red-800'>*</span>
                </label>
                <Select
                  value={parentData.father}
                  onChange={(value) => handleChange(value, 'father')}
                  options={qualificationOptions}
                  primaryColor={"indigo"}
                  isSearchable={true}
                  isClearable={true}
                  placeholder="Select qualification"
                  classNames={selectStyle}
                />
              </div>
              
              <div className="space-y-1">
                <label htmlFor="fatherOrganization" className="form-title text-sm font-medium text-color-gray-2 block">
                  Father Organization <span className='text-red-800'>*</span>
                </label>
                <Input 
                  id="fatherOrganization" 
                  type="text" 
                  placeholder="Enter father's organization"
                  className="w-full" 
                />
              </div>
            </div>
            
         
    <div className=" sm:p-1">
                  <h6 className="text-sm font-medium text-color-gray-1 mb-4 pb-2 border-b border-gray-100">Father Picture</h6>
                
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="border border-gray-200 rounded-md h-[200px] w-full sm:w-[200px] flex items-center justify-center bg-gray-50 overflow-hidden relative group">
                      {formData.profilePicture ? (
                        <>
                          <img 
                            src={URL.createObjectURL(formData.profilePicture)} 
                            alt="Profile Preview" 
                            className="object-cover h-full w-full"
                          />
                          <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                            <button 
                               className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
                            >
                              <FaTrashAlt className="text-red-500" />
                            </button>
                          </div>
                        </>
                      ) : (
                        <div className="flex flex-col gap-2 items-center text-center p-4">
                          <div className="h-[100px] w-[100px] rounded-full bg-gray-100 flex items-center justify-center">
                            <FaUser className="text-gray-400 text-3xl" />
                          </div>
                          <span className="text-xs text-gray-500">No image uploaded</span>
                          <span className="text-xs text-gray-400">Recommended size: 300x300px</span>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex-grow space-y-4">
                    <div className="space-y-1.5">
                      <label htmlFor="profilePicture" className="form-title text-sm font-medium text-color-gray-2">
                        Upload Image
                      </label>
                      <div className="relative">
                        <Input 
                          type="file" 
                          id="profilePicture"
                          accept="image/*"
                          className="focus:border-color-primary cursor-pointer" 
                        />
                        <div className="absolute inset-0 opacity-0">
                          <Input 
                            type="file" 
                            id="profilePicture"
                            accept="image/*"
                            className="cursor-pointer h-full" 
                          />
                        </div>
                        <label htmlFor="profilePicture" className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 rounded-md hover:bg-gray-100 cursor-pointer">
                          <FaUpload className="text-color-primary" />
                        </label>
                      </div>
                      <p className="text-xs text-gray-500">Supported formats: JPG, PNG, GIF (Max 5MB)</p>
                    </div>
                    
                    <div className="space-y-1.5">
                      <label htmlFor="imageLink" className="form-title text-sm font-medium text-color-gray-2">
                        Image Link
                      </label>
                      <div className="flex gap-2">
                        <Input 
                          type="text" 
                          id="imageLink"
                          placeholder="Enter image URL"
                          className="focus:border-color-primary" 
                        />
                        <Button className="bg-color-primary hover:bg-color-primary-dark flex-shrink-0">
                          <FaExternalLinkAlt className="mr-1" /> Import
                        </Button>
                      </div>
                      <p className="text-xs text-gray-500">Import image from an external URL</p>
                    </div>
                  </div>
                </div>
                </div>
    </div>
    
    </CardContent>
    </Card>
    
    <Card className="p-0 mt-5">
    <CardContent className="p-0">
    
      <h2 className="text-blue-700 text-xl m-2 font-semibold mb-5 border-b border-gray-200 pb-3">Mother Information</h2>
     
    
    <div className="grid grid-cols-2 gap-4">
    
    <div className=" py-2 px-5">
    
    <label htmlFor="" className="form-title text-sm leading-1 text-color-gray-2 "> Mother Name <span className='text-red-800'>*</span></label>
        <Input type="text"  className="mt-2" value="FT23POL0123" />
    
    </div>
    
    
    <div className=" py-2 px-5">
    
    <label htmlFor="" className="form-title text-sm leading-1 text-color-gray-2 "> Mother Phone <span className='text-red-800'>*</span></label>
        <Input type="text"  className="mt-2" value="FT23POL0123" />
    
    </div>
    
    
    
    
    
    </div>
    
    
    
    
    <div className="grid grid-cols-2 gap-4">
    
    <div className=" py-2 px-5">
    
    <label htmlFor="" className="form-title text-sm leading-1 text-color-gray-2 "> Mother Email <span className='text-red-800'>*</span></label>
        <Input type="text"  className="mt-2" value="FT23POL0123" />
    
    </div>
    
    <div className=" py-2 px-5">
    
    <label htmlFor="" className="form-title text-sm leading-1 text-color-gray-2 "> Mother Occupation <span className='text-red-800'>*</span></label>
        <Input type="text"  className="mt-2" value="FT23POL0123" />
    
    </div>
    
    </div>
    <div className="grid grid-cols-2 gap-4">
    
    
    <div className=" py-2 px-5">
    
    <label htmlFor="" className="form-title text-sm leading-1 text-color-gray-2 "> Mother Qualification <span className='text-red-800'>*</span></label>
    <Select
                   value={parentData.father}
                   onChange={(value) => handleChange(value, 'father')}
                   options={qualificationOptions}
                    primaryColor={"indigo"}
                    isSearchable={true}
                    isClearable={true}
                    placeholder="Select department first"
                    classNames={selectStyle}
                />
    </div>
    
    <div className=" py-2 px-5">
    
    <label htmlFor="" className="form-title text-sm leading-1 text-color-gray-2 "> Mother Organization <span className='text-red-800'>*</span></label>
    <Select
                    value={parentData.father}
                   onChange={(value) => handleChange(value, 'father')}
                   options={qualificationOptions}
                    primaryColor={"indigo"}
                    isSearchable={true}
                    isClearable={true}
                    placeholder="Select department first"
                    classNames={selectStyle}
                />
    </div>
    
    </div>
    
    <div className=" py-2 px-5">
    
    <label htmlFor="" className="form-title text-sm leading-1 text-color-gray-2 "> Mother Photo</label>
    
    <div className='flex items-center gap-2 w-full'>
    
    <div className='border-2 rounded-sm border-border/70 items-center justify-center  flex flex-col   hover:border-border group '>
    
    
    <div className='h-28 m-2 w-28'>
         <img src="/images/ope.png" alt="photo" className='rounded-full w-full h-full ' />
         </div>
    
         <div className='flex border-t-2 border-border/70 items-center'>
    
    <span className='text-color-gray-2 text-sm px-1'>imageonlin...</span>
    
    <div className='p-1 border-l-2 border-border/70'><FaExternalLinkAlt className='text-sm text-color-gray-2 hover:text-sm hover:text-color-primary cursor-pointer'/></div>
    <div className='p-1 border-l-2 border-border/70'><FaTrashAlt className='text-sm text-color-gray-2 hover:text-sm hover:text-color-primary cursor-pointer'/></div>
    </div>
    
        </div>
    
        
    
    
    
    
    <div className='border-2 rounded-sm border-border/70 items-center justify-center w-full h-38 flex  cursor-pointer hover:border-border group'>
    
          <span className='text-sm text-color-gray-2/70 group-hover:text-color-gray-2'>DROP FILES HERE TO UPLOAD</span>
        </div>
        </div>
    
    
    </div>
    
    
    
    </CardContent>
    </Card>
    
    <Card className="p-0 mt-5">
    <CardContent className="p-0">
    
       <h2 className="text-blue-700 text-xl m-2 font-semibold mb-5 border-b border-gray-200 pb-3">Gaurdian Information</h2>
     
    
    <div className="grid grid-cols-2 gap-4">
    
    <div className=" py-2 px-5">
    
    <label htmlFor="" className="form-title text-sm leading-1 text-color-gray-2 "> Guardian Name <span className='text-red-800'>*</span></label>
        <Input type="text"  className="mt-2" value="FT23POL0123" />
    
    </div>
    
    
    <div className=" py-2 px-5">
    
    <label htmlFor="" className="form-title text-sm leading-1 text-color-gray-2 "> Guardian Phone <span className='text-red-800'>*</span></label>
        <Input type="text"  className="mt-2" value="FT23POL0123" />
    
    </div>
    
    
    
    
    
    </div>
    
    
    
    
    <div className="grid grid-cols-2 gap-4">
    
    <div className=" py-2 px-5">
    
    <label htmlFor="" className="form-title text-sm leading-1 text-color-gray-2 "> Guardian Email <span className='text-red-800'>*</span></label>
        <Input type="text"  className="mt-2" value="FT23POL0123" />
    
    </div>
    
    <div className=" py-2 px-5">
    
    <label htmlFor="" className="form-title text-sm leading-1 text-color-gray-2 "> Guardian Occupation <span className='text-red-800'>*</span></label>
        <Input type="text"  className="mt-2" value="FT23POL0123" />
    
    </div>
    
    </div>
    <div className="grid grid-cols-2 gap-4">
    
    
    <div className=" py-2 px-5">
    
    <label htmlFor="" className="form-title text-sm leading-1 text-color-gray-2 "> Guardian Qualification <span className='text-red-800'>*</span></label>
    <Select
                    value={parentData.father}
                    onChange={(value) => handleChange(value, 'father')}
                    options={qualificationOptions}
                    primaryColor={"indigo"}
                    isSearchable={true}
                    isClearable={true}
                    placeholder="Select department first"
                    classNames={selectStyle}
                />
    </div>
    
    <div className=" py-2 px-5">
    
    <label htmlFor="" className="form-title text-sm leading-1 text-color-gray-2 "> Guardian Organization <span className='text-red-800'>*</span></label>
    <Select
                    value={parentData.father}
                    onChange={(value) => handleChange(value, 'father')}
                    options={qualificationOptions}
                    primaryColor={"indigo"}
                    isSearchable={true}
                    isClearable={true}
                    placeholder="Select department first"
                    classNames={selectStyle}
                />
    </div>
    
    </div>
    
    <div className=" py-2 px-5">
    
    <label htmlFor="" className="form-title text-sm leading-1 text-color-gray-2 "> Guardian Photo</label>
    
    <div className='flex items-center gap-2 w-full'>
    
    <div className='border-2 rounded-sm border-border/70 items-center justify-center  flex flex-col   hover:border-border group '>
    
    
    <div className='h-28 m-2 w-28'>
         <img src="/images/ope.png" alt="photo" className='rounded-full w-full h-full ' />
         </div>
    
         <div className='flex border-t-2 border-border/70 items-center'>
    
    <span className='text-color-gray-2 text-sm px-1'>imageonlin...</span>
    
    <div className='p-1 border-l-2 border-border/70'><FaExternalLinkAlt className='text-sm text-color-gray-2 hover:text-sm hover:text-color-primary cursor-pointer'/></div>
    <div className='p-1 border-l-2 border-border/70'><FaTrashAlt className='text-sm text-color-gray-2 hover:text-sm hover:text-color-primary cursor-pointer'/></div>
    </div>
    
        </div>
    
        
    
    
    
    
    <div className='border-2 rounded-sm border-border/70 items-center justify-center w-full h-38 flex  cursor-pointer hover:border-border group'>
    
          <span className='text-sm text-color-gray-2/70 group-hover:text-color-gray-2'>DROP FILES HERE TO UPLOAD</span>
        </div>
        </div>
    
    
    </div>
    
    
    
    </CardContent>
    </Card>
    </div>
  )
}

export default Parent
