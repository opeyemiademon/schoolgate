import React, { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import {
  Card,
  CardContent,
} from "@/components/ui/card"
import Template from '@/Layout/Template'
import { FaChevronLeft, FaPlus, FaUpload, FaUser } from 'react-icons/fa'
import { RefreshCcw, Loader2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import Select from 'react-tailwindcss-select'
import { selectStyle } from '@/components/GlobalFunction'
import RadioGroup, { RadioItem } from '@/components/RadioGroup'
const AddStudent = () => {
  // Define types for form data
  type SelectOption = { value: string; label: string } | null;
  
  interface FormData {
    matricNumber: string;
    firstName: string;
    lastName: string;
    otherName: string;
    gender: string;
    email: string;
    telephone: string;
    faculty: SelectOption;
    department: SelectOption;
    unit: SelectOption;
    status: SelectOption;
    profilePicture: File | null;
  }
  
  // State for form fields
  const [formData, setFormData] = useState<FormData>({
    matricNumber: "FT23POL0123",
    firstName: "",
    lastName: "",
    otherName: "",
    gender: "female",
    email: "",
    telephone: "",
    faculty: null,
    department: null,
    unit: null,
    status: null,
    profilePicture: null
  });
  
  // State for form submission
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStep, setFormStep] = useState(0);
  
  // Options for select fields
  const facultyOptions = [
    { value: "science", label: "Faculty of Science" },
    { value: "arts", label: "Faculty of Arts" },
    { value: "engineering", label: "Faculty of Engineering" },
    { value: "medicine", label: "Faculty of Medicine" }
  ];
  
  const departmentOptions = [
    { value: "computerScience", label: "Computer Science" },
    { value: "physics", label: "Physics" },
    { value: "chemistry", label: "Chemistry" }
  ];
  
  const unitOptions = [
    { value: "unit1", label: "Unit 1" },
    { value: "unit2", label: "Unit 2" },
    { value: "unit3", label: "Unit 3" }
  ];
  
  const statusOptions = [
    { value: "active", label: "Active" },
    { value: "inactive", label: "Inactive" },
    { value: "suspended", label: "Suspended" }
  ];
  
  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  // Handle select changes
  const handleSelectChange = (name: string) => (value: any) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  // Handle radio button changes
  const handleRadioChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      gender: value
    }));
  };
  
  // Handle file upload
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData(prev => ({
        ...prev,
        profilePicture: file
      }));
    }
  };
  
  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setIsSubmitting(false);
      // Reset form or redirect
    }, 1500);
  };
  
  // Handle form navigation
  const nextStep = () => setFormStep(prev => Math.min(prev + 1, 2));
  const prevStep = () => setFormStep(prev => Math.max(prev - 1, 0));

  return (
    <Template>
      {/* Modern responsive header */}
      <div className="sticky top-0 z-10 border-b flex justify-between items-center border-color-border w-full bg-white shadow-sm">
        <div className='flex items-center gap-3 md:gap-5'>
          <Link to='/student' className='border-r border-color-border cursor-pointer flex items-center py-4 px-3 md:px-4 hover:bg-gray-100 transition-colors'>
            <FaChevronLeft className='text-color-primary' />
          </Link>
          <h2 className="flex gap-2 items-center font-semibold text-sm md:text-base">
            <FaPlus className="text-color-primary" /> Add New Student
          </h2>
        </div>

        <div className="flex items-center gap-2">
          {isSubmitting && (
            <div className="flex items-center gap-2 text-amber-600 px-3 py-2 text-sm">
              <Loader2 className='h-4 w-4 animate-spin' /> Processing...
            </div>
          )}
          <button 
            className="text-sm hover:bg-color-primary-light hover:text-color-primary py-3 px-4 rounded-sm cursor-pointer transition-colors flex items-center gap-1"
            onClick={() => window.location.reload()}
          >
            <RefreshCcw className='h-4 w-4' /> Refresh
          </button>
        </div>
      </div>


      <div className="px-4 sm:px-6 md:px-10 lg:px-14 py-4">
        <Card className="p-0 shadow-md">
          <CardContent className="p-0">
            <form onSubmit={handleSubmit}>
              <div className='bg-color-primary-light text-color-primary rounded-t-md p-4 md:p-5 flex flex-col gap-2'>
                <h5 className='text-lg font-semibold leading-tight flex items-center gap-2'>
                  <FaUser className="hidden sm:inline" /> New Student Registration
                </h5>
                <span className='text-sm'>Add a new student to the system with their essential details</span>
                
                {/* Progress indicator for multi-step form */}
                <div className="hidden sm:flex items-center justify-between mt-3 text-xs">
                  <div className={`flex items-center ${formStep >= 0 ? 'text-color-primary font-medium' : ''}`}>
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center mr-2 ${formStep >= 0 ? 'bg-color-primary text-white' : 'bg-gray-200'}`}>1</div>
                    Personal Info
                  </div>
                  <div className="flex-1 h-0.5 mx-2 bg-gray-200"></div>
                  <div className={`flex items-center ${formStep >= 1 ? 'text-color-primary font-medium' : ''}`}>
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center mr-2 ${formStep >= 1 ? 'bg-color-primary text-white' : 'bg-gray-200'}`}>2</div>
                    Academic Details
                  </div>
                  <div className="flex-1 h-0.5 mx-2 bg-gray-200"></div>
                  <div className={`flex items-center ${formStep >= 2 ? 'text-color-primary font-medium' : ''}`}>
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center mr-2 ${formStep >= 2 ? 'bg-color-primary text-white' : 'bg-gray-200'}`}>3</div>
                    Photos
                  </div>
                </div>
              </div>


<div className='py-5'>  
  {/* Step 1: Personal Information - Only show when formStep is 0 */}
  <div className={formStep === 0 ? 'block' : 'hidden'}>              
    <div className="py-2 px-4 sm:px-5">
      <label htmlFor="matricNumber" className="form-title text-sm font-medium text-color-gray-2 block mb-1">
        Matriculation Number <span className='text-red-800'>*</span>
      </label>
      <Input 
        id="matricNumber"
        name="matricNumber"
        type="text" 
        disabled 
        className="mt-1" 
        value={formData.matricNumber} 
      />
      <span className='text-xs text-muted-foreground mt-1 block'>This is auto-generated and may change if a duplicate is detected</span>
    </div>

    <div className="py-2 px-4 sm:px-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-2">
        <div>
          <label htmlFor="firstName" className="form-title text-sm font-medium text-color-gray-2 block mb-1">
            First Name <span className='text-red-800'>*</span>
          </label>
          <Input 
            id="firstName"
            name="firstName"
            type="text" 
            className="mt-1" 
            value={formData.firstName}
            onChange={handleInputChange}
            placeholder="Enter first name"
            required
          />
        </div>

        <div>
          <label htmlFor="lastName" className="form-title text-sm font-medium text-color-gray-2 block mb-1">
            Last Name <span className='text-red-800'>*</span>
          </label>
          <Input 
            id="lastName"
            name="lastName"
            type="text" 
            className="mt-1" 
            value={formData.lastName}
            onChange={handleInputChange}
            placeholder="Enter last name"
            required
          />
        </div>

        <div>
          <label htmlFor="otherName" className="form-title text-sm font-medium text-color-gray-2 block mb-1">
            Other Name
          </label>
          <Input 
            id="otherName"
            name="otherName"
            type="text" 
            className="mt-1" 
            value={formData.otherName}
            onChange={handleInputChange}
            placeholder="Enter other name (optional)"
          />
        </div>
      </div>
    </div>

    <div className="py-2 px-4 sm:px-5">
      <label htmlFor="gender" className="form-title text-sm font-medium text-color-gray-2 block mb-1">
        Gender <span className='text-red-800'>*</span>
      </label>
      <div className="flex flex-wrap gap-6 mt-2">
        <RadioItem 
          title='Male' 
          name='gender' 
          checked={formData.gender === 'male'} 
          handleChange={() => handleRadioChange('male')} 
        />
        <RadioItem 
          title='Female' 
          name='gender' 
          checked={formData.gender === 'female'} 
          handleChange={() => handleRadioChange('female')} 
        />
      </div>
    </div>
    
    <div className="py-2 px-4 sm:px-5">
      <label htmlFor="email" className="form-title text-sm font-medium text-color-gray-2 block mb-1">
        Email Address <span className='text-red-800'>*</span>
      </label>
      <Input 
        id="email"
        name="email"
        type="email" 
        className="mt-1" 
        value={formData.email}
        onChange={handleInputChange}
        placeholder="student@example.com"
        required
      />
      <span className='text-xs text-color-gray-2 mt-1 block'>Must be unique and accessible to the student</span>
    </div>

    <div className="py-2 px-4 sm:px-5">
      <label htmlFor="telephone" className="form-title text-sm font-medium text-color-gray-2 block mb-1">
        Telephone <span className='text-red-800'>*</span>
      </label>
      <Input 
        id="telephone"
        name="telephone"
        type="tel" 
        className="mt-1" 
        value={formData.telephone}
        onChange={handleInputChange}
        placeholder="Enter phone number"
        required
      />
    </div>
    
    <div className="flex justify-end px-4 sm:px-5 mt-4">
      <Button 
        type="button" 
        variant="primary" 
        size="md" 
        className="flex items-center gap-1"
        onClick={nextStep}
      >
        Next Step <FaChevronLeft className="rotate-180" />
      </Button>
    </div>
  </div>



  {/* Step 2: Academic Details - Only show when formStep is 1 */}
  <div className={formStep === 1 ? 'block' : 'hidden'}>              
    <div className="py-2 px-4 sm:px-5">
      <label htmlFor="faculty" className="form-title text-sm font-medium text-color-gray-2 block mb-1">
        Select Faculty <span className='text-red-800'>*</span>
      </label>
      <Select
        value={formData.faculty}
        onChange={handleSelectChange('faculty')}
        options={facultyOptions}
        primaryColor={"indigo"}
        isSearchable={true}
        isClearable={true}
        placeholder="Select faculty..."
        classNames={selectStyle}
      />
    </div>

    <div className="py-2 px-4 sm:px-5">
      <label htmlFor="department" className="form-title text-sm font-medium text-color-gray-2 block mb-1">
        Select Department <span className='text-red-800'>*</span>
      </label>
      <Select
        value={formData.department}
        onChange={handleSelectChange('department')}
        options={departmentOptions}
        primaryColor={"indigo"}
        isSearchable={true}
        isClearable={true}
        placeholder={formData.faculty ? "Select department..." : "Select faculty first"}
        classNames={selectStyle}
        isDisabled={!formData.faculty}
      />
    </div>

    <div className="py-2 px-4 sm:px-5">
      <label htmlFor="unit" className="form-title text-sm font-medium text-color-gray-2 block mb-1">
        Select Unit <span className='text-red-800'>*</span>
      </label>
      <Select
        value={formData.unit}
        onChange={handleSelectChange('unit')}
        options={unitOptions}
        primaryColor={"indigo"}
        isSearchable={true}
        isClearable={true}
        placeholder={formData.department ? "Select unit..." : "Select department first"}
        classNames={selectStyle}
        isDisabled={!formData.department}
      />
    </div>

    <div className="py-2 px-4 sm:px-5">
      <label htmlFor="status" className="form-title text-sm font-medium text-color-gray-2 block mb-1">
        Status <span className='text-red-800'>*</span>
      </label>
      <Select
        value={formData.status}
        onChange={handleSelectChange('status')}
        options={statusOptions}
        primaryColor={"indigo"}
        isSearchable={true}
        isClearable={true}
        placeholder="Select status..."
        classNames={selectStyle}
      />
    </div>
    
    <div className="flex justify-between px-4 sm:px-5 mt-4">
      <Button 
        type="button" 
        variant="outline" 
        size="md" 
        className="flex items-center gap-1"
        onClick={prevStep}
      >
        <FaChevronLeft /> Previous
      </Button>
      <Button 
        type="button" 
        variant="primary" 
        size="md" 
        className="flex items-center gap-1"
        onClick={nextStep}
      >
        Next Step <FaChevronLeft className="rotate-180" />
      </Button>
    </div>
  </div>

  {/* Step 3: Additional Info - Only show when formStep is 2 */}
  <div className={formStep === 2 ? 'block' : 'hidden'}>              
    <div className="py-2 px-4 sm:px-5">
      <label htmlFor="profilePicture" className="form-title text-sm font-medium text-color-gray-2 block mb-1">
        Profile Picture <span className='text-red-800'>*</span>
      </label>
      
      <div className="flex flex-col gap-4">
        <div 
          className='border-2 rounded-md border-dashed border-border/70 items-center justify-center h-40 flex flex-col cursor-pointer hover:border-color-primary hover:bg-color-primary-light/30 transition-colors group relative overflow-hidden'
          onClick={() => document.getElementById('profilePictureInput')?.click()}
        >
          {formData.profilePicture ? (
            <div className="absolute inset-0 flex items-center justify-center bg-black/5">
              <img 
                src={URL.createObjectURL(formData.profilePicture)} 
                alt="Profile preview" 
                className="max-h-full max-w-full object-contain"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 flex items-center justify-center transition-opacity">
                <div className="text-white text-sm font-medium">Click to change</div>
              </div>
            </div>
          ) : (
            <>
              <FaUpload className="text-2xl text-color-gray-2/70 group-hover:text-color-primary mb-2" />
              <span className='text-sm text-color-gray-2/70 group-hover:text-color-primary'>DROP FILE HERE OR CLICK TO UPLOAD</span>
              <span className='text-xs text-color-gray-2/50 mt-1'>Supported formats: JPG, PNG, GIF (Max: 5MB)</span>
            </>
          )}
        </div>
        
        <input 
          type="file" 
          id="profilePictureInput" 
          className="hidden" 
          accept="image/*"
          onChange={handleFileUpload}
        />
      </div>
    </div>
    
    <div className="flex justify-between px-4 sm:px-5 mt-4">
      <Button 
        type="button" 
        variant="outline" 
        size="md" 
        className="flex items-center gap-1"
        onClick={prevStep}
      >
        <FaChevronLeft /> Previous
      </Button>
      <Button 
        type="submit" 
        variant="primary" 
        size="md" 
        className="flex items-center gap-1"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" /> Processing...
          </>
        ) : (
          <>Save Student</>  
        )}
      </Button>
    </div>
  </div>
</div>


            </form>
          </CardContent>
        </Card>
        <hr className="mt-5 mb-20 text-color-border" />
      </div>


    </Template>
  )
}

export default AddStudent
