import React, { useState, useEffect } from 'react'
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"

import {
  Card,
  CardContent,
} from "@/components/ui/card"
import { 
  FaChevronDown, 
  FaChevronUp, 
  FaExternalLinkAlt, 
  FaTrashAlt, 
  FaUpload,
  FaCalendarAlt,
  FaUser
} from 'react-icons/fa'
import { Calendar, CalendarIcon, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { RadioItem } from '@/components/RadioGroup'
import { selectStyle } from '@/components/GlobalFunction'
import Select from 'react-tailwindcss-select'

// Define interface for form data
interface BasicFormData {
  firstName: string;
  lastName: string;
  otherName: string;
  nickname: string;
  passportId: string;
  nationalId: string;
  birthCertificateNo: string;
  birthDate: string;
  driverLicenseNo: string;
  genotype: string;
  gender: string;
  tribe: string;
  religion: string;
  maritalStatus: string;
  languageSpoken: string;
  bloodGroup: string;
  weight: string;
  height: string;
  hasDisability: string;
  disabilityDetails: string;
  profilePicture: File | null;
}

const Basic = () => {
  // State for form data
  const [formData, setFormData] = useState<BasicFormData>({
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
  
  // State for UI
  const [isLoading, setIsLoading] = useState(false);
  const [showMore, setShowMore] = useState(false);
  
  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  // Handle radio button change
  const handleRadioChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  // Handle file upload
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({ ...prev, profilePicture: e.target.files![0] }));
    }
  };
  
  return (
    <div className="space-y-4">
      <Card className="p-0 border-0 shadow-sm overflow-hidden">
        <CardContent className="p-0">
          <div className='bg-color-primary-light text-color-primary shadow-sm rounded-t-md p-4 flex flex-col gap-1'>
            <h5 className='text-base font-semibold flex items-center gap-2'>
              <FaUser className="text-color-primary" />
              Personal Information
            </h5>
            <span className='text-sm italic opacity-80'>Manage student personal details for the new academic session.</span>
          </div>

          {/* Name Fields Section - Always visible */}
          <div className="p-4 sm:p-6">
            <h6 className="text-sm font-medium text-color-gray-1 mb-4 pb-2 border-b border-gray-100">Name Information</h6>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              <div className="space-y-1.5">
                <label htmlFor="firstName" className="form-title text-sm font-medium text-color-gray-2 flex items-center">
                  First Name <span className='text-red-500 ml-1'>*</span>
                </label>
                <Input 
                  type="text" 
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="focus:border-color-primary" 
                  placeholder="Enter first name"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="lastName" className="form-title text-sm font-medium text-color-gray-2 flex items-center">
                  Last Name <span className='text-red-500 ml-1'>*</span>
                </label>
                <Input 
                  type="text" 
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="focus:border-color-primary" 
                  placeholder="Enter last name"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="otherName" className="form-title text-sm font-medium text-color-gray-2">
                  Other Name
                </label>
                <Input 
                  type="text" 
                  id="otherName"
                  name="otherName"
                  value={formData.otherName}
                  onChange={handleInputChange}
                  className="focus:border-color-primary" 
                  placeholder="Enter other name (if any)"
                />
              </div>
            </div>
            
            <div className="mt-4 sm:mt-6">
              <div className="space-y-1.5">
                <label htmlFor="nickname" className="form-title text-sm font-medium text-color-gray-2">
                  Nickname
                </label>
                <Input 
                  type="text" 
                  id="nickname"
                  name="nickname"
                  value={formData.nickname}
                  onChange={handleInputChange}
                  className="focus:border-color-primary" 
                  placeholder="Enter nickname or alias"
                />
                <span className='text-xs text-color-gray-2 italic'>Usually, Alias, Popularly known as or Appellation</span>
              </div>
            </div>
          </div>


          {/* Identification Section - Always visible */}
          <div className="p-4 sm:p-6 border-t border-gray-100">
            <h6 className="text-sm font-medium text-color-gray-1 mb-4 pb-2 border-b border-gray-100">Identification Information</h6>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="space-y-1.5">
                <label htmlFor="passportId" className="form-title text-sm font-medium text-color-gray-2">
                  Passport ID
                </label>
                <Input 
                  type="text" 
                  id="passportId"
                  name="passportId"
                  value={formData.passportId}
                  onChange={handleInputChange}
                  className="focus:border-color-primary" 
                  placeholder="Enter passport ID"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="nationalId" className="form-title text-sm font-medium text-color-gray-2">
                  National Identity No
                </label>
                <Input 
                  type="text" 
                  id="nationalId"
                  name="nationalId"
                  value={formData.nationalId}
                  onChange={handleInputChange}
                  className="focus:border-color-primary" 
                  placeholder="Enter national ID number"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-4 sm:mt-6">
              <div className="space-y-1.5">
                <label htmlFor="birthCertificateNo" className="form-title text-sm font-medium text-color-gray-2">
                  Birth Certificate No
                </label>
                <Input 
                  type="text" 
                  id="birthCertificateNo"
                  name="birthCertificateNo"
                  value={formData.birthCertificateNo}
                  onChange={handleInputChange}
                  className="focus:border-color-primary" 
                  placeholder="Enter birth certificate number"
                />
              </div>


            {/* Birthdate Area */}
              <div className="space-y-1.5">
                <label htmlFor="birthDate" className="form-title text-sm font-medium text-color-gray-2 flex items-center">
                  Birth Date <span className='text-red-500 ml-1'>*</span>
                </label>
                <div className="relative">
                  <Input 
                    type="date" 
                    id="birthDate"
                    name="birthDate"
                    value={formData.birthDate}
                    onChange={handleInputChange}
                    className="focus:border-color-primary w-full" 
                  />
                  <FaCalendarAlt className="absolute right-3 top-1/2 transform -translate-y-1/2 text-color-gray-2 pointer-events-none" />
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-4 sm:mt-6">
              <div className="space-y-1.5">
                <label htmlFor="driverLicenseNo" className="form-title text-sm font-medium text-color-gray-2">
                  Driver License No
                </label>
                <Input 
                  type="text" 
                  id="driverLicenseNo"
                  name="driverLicenseNo"
                  value={formData.driverLicenseNo}
                  onChange={handleInputChange}
                  className="focus:border-color-primary" 
                  placeholder="Enter driver license number"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="genotype" className="form-title text-sm font-medium text-color-gray-2">
                  Genotype
                </label>
                <Input 
                  type="text" 
                  id="genotype"
                  name="genotype"
                  value={formData.genotype}
                  onChange={handleInputChange}
                  className="focus:border-color-primary" 
                  placeholder="e.g., AA, AS, SS"
                />
              </div>
            </div>
          </div>
          {/* Personal Details Section */}
          {/* Always visible */}
          <div className="p-4 sm:p-6 border-t border-gray-100">
            <h6 className="text-sm font-medium text-color-gray-1 mb-4 pb-2 border-b border-gray-100">Personal Details</h6>
            
            <div className="space-y-1.5 mb-6">
              <label htmlFor="gender" className="form-title text-sm font-medium text-color-gray-2 flex items-center">
                Gender <span className='text-red-500 ml-1'>*</span>
              </label>
              <div className="flex flex-wrap gap-6 mt-2">
                <RadioItem 
                  title='Male' 
                  name='gender' 
                  checked={formData.gender === 'Male'} 
                  onChange={() => handleRadioChange('gender', 'Male')}
                />
                <RadioItem 
                  title='Female' 
                  name='gender' 
                  checked={formData.gender === 'Female'} 
                  onChange={() => handleRadioChange('gender', 'Female')}
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              <div className="space-y-1.5">
                <label htmlFor="tribe" className="form-title text-sm font-medium text-color-gray-2">
                  Tribe
                </label>
                <Input 
                  type="text" 
                  id="tribe"
                  name="tribe"
                  value={formData.tribe}
                  onChange={handleInputChange}
                  className="focus:border-color-primary" 
                  placeholder="Enter tribe"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="religion" className="form-title text-sm font-medium text-color-gray-2">
                  Religion
                </label>
                <Input 
                  type="text" 
                  id="religion"
                  name="religion"
                  value={formData.religion}
                  onChange={handleInputChange}
                  className="focus:border-color-primary" 
                  placeholder="Enter religion"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="maritalStatus" className="form-title text-sm font-medium text-color-gray-2">
                  Marital Status
                </label>
                <Input 
                  type="text" 
                  id="maritalStatus"
                  name="maritalStatus"
                  value={formData.maritalStatus}
                  onChange={handleInputChange}
                  className="focus:border-color-primary" 
                  placeholder="Enter marital status"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-4 sm:mt-6">
              <div className="space-y-1.5">
                <label htmlFor="languageSpoken" className="form-title text-sm font-medium text-color-gray-2">
                  Language Spoken
                </label>
                <Input 
                  type="text" 
                  id="languageSpoken"
                  name="languageSpoken"
                  value={formData.languageSpoken}
                  onChange={handleInputChange}
                  className="focus:border-color-primary" 
                  placeholder="Enter languages spoken"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="bloodGroup" className="form-title text-sm font-medium text-color-gray-2">
                  Blood Group
                </label>
                <Input 
                  type="text" 
                  id="bloodGroup"
                  name="bloodGroup"
                  value={formData.bloodGroup}
                  onChange={handleInputChange}
                  className="focus:border-color-primary" 
                  placeholder="e.g., A+, O-, AB+"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-4 sm:mt-6">
              <div className="space-y-1.5">
                <label htmlFor="weight" className="form-title text-sm font-medium text-color-gray-2">
                  Weight
                </label>
                <Input 
                  type="text" 
                  id="weight"
                  name="weight"
                  value={formData.weight}
                  onChange={handleInputChange}
                  className="focus:border-color-primary" 
                  placeholder="e.g., 75kg"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="height" className="form-title text-sm font-medium text-color-gray-2">
                  Height
                </label>
                <Input 
                  type="text" 
                  id="height"
                  name="height"
                  value={formData.height}
                  onChange={handleInputChange}
                  className="focus:border-color-primary" 
                  placeholder="e.g., 180cm"
                />
              </div>
            </div>
          </div>

          {/* Disability Section - Only shown when showMore is true */}
          {showMore && (
          <div className="p-4 sm:p-6 border-t border-gray-100">
            <h6 className="text-sm font-medium text-color-gray-1 mb-4 pb-2 border-b border-gray-100">Disability Information</h6>
            
            <div className="space-y-1.5 mb-6">
              <label htmlFor="hasDisability" className="form-title text-sm font-medium text-color-gray-2">
                Do you have any disability?
              </label>
              <div className="flex flex-wrap gap-6 mt-2">
                <RadioItem 
                  title='Yes' 
                  name='hasDisability' 
                  checked={formData.hasDisability === 'Yes'} 
                  onChange={() => handleRadioChange('hasDisability', 'Yes')}
                />
                <RadioItem 
                  title='No' 
                  name='hasDisability' 
                  checked={formData.hasDisability === 'No'} 
                  onChange={() => handleRadioChange('hasDisability', 'No')}
                />
              </div>
            </div>
            
            {formData.hasDisability === 'Yes' && (
              <div className="space-y-1.5 mb-6">
                <label htmlFor="disabilityDetails" className="form-title text-sm font-medium text-color-gray-2">
                  Please specify details
                </label>
                <Textarea 
                  id="disabilityDetails"
                  name="disabilityDetails"
                  value={formData.disabilityDetails}
                  onChange={handleInputChange}
                  className="focus:border-color-primary resize-none" 
                  placeholder="Please provide details about your disability"
                  rows={4}
                />
              </div>
            )}
          </div>)}
          
          {/* Profile Picture Section - Only shown when showMore is true */}
          {showMore && (
            <div className="p-4 sm:p-6 border-t border-gray-100">
              <h6 className="text-sm font-medium text-color-gray-1 mb-4 pb-2 border-b border-gray-100">Profile Picture</h6>
            
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
                          onClick={() => setFormData(prev => ({...prev, profilePicture: null}))}
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
                      onChange={handleFileUpload}
                      className="focus:border-color-primary cursor-pointer" 
                    />
                    <div className="absolute inset-0 opacity-0">
                      <Input 
                        type="file" 
                        id="profilePicture"
                        accept="image/*"
                        onChange={handleFileUpload}
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
          )}
        </CardContent>
      </Card>
      
      {/* Show More/Less Toggle */}
      <div className="flex justify-center mt-4">
        <Button
          type="button"
          variant="ghost"
          className="text-color-primary flex items-center gap-1"
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? (
            <>
              <FaChevronUp className="h-3 w-3" />
              Show Less Details
            </>
          ) : (
            <>
              <FaChevronDown className="h-3 w-3" />
              Show More Details
            </>
          )}
        </Button>
      </div>
    </div>
  )
}

export default Basic
