import React, { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import {
  FaMapMarkerAlt,
  FaMobileAlt,
  FaEnvelope,
  FaGlobe,
  FaMapPin,
  FaCity,
  FaInfoCircle,
  FaSave,
  FaUndo
} from 'react-icons/fa'
import { Button } from '@/components/ui/button'
import { selectStyle } from '@/components/GlobalFunction'
import Select from 'react-tailwindcss-select'

// Define interface for form data
interface ContactFormData {
  contactAddress: string;
  permanentAddress: string;
  mobile: string;
  alternateMobile: string;
  schoolEmail: string;
  personalEmail: string;
  nationality: string;
  stateOfOrigin: string;
  lga: string;
  placeOfBirth: string;
  city: string;
  otherInfo: string;
}

const Contact = () => {
  // State for form data
  const [formData, setFormData] = useState<ContactFormData>({
    contactAddress: '',
    permanentAddress: '',
    mobile: '',
    alternateMobile: '',
    schoolEmail: '',
    personalEmail: '',
    nationality: '',
    stateOfOrigin: '',
    lga: '',
    placeOfBirth: '',
    city: '',
    otherInfo: ''
  });
  
  // State for UI
  const [isLoading, setIsLoading] = useState(false);
  
  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Form data submitted:', formData);
      setIsLoading(false);
    }, 1000);
  };
  
  // Reset form
  const resetForm = () => {
    setFormData({
      contactAddress: '',
      permanentAddress: '',
      mobile: '',
      alternateMobile: '',
      schoolEmail: '',
      personalEmail: '',
      nationality: '',
      stateOfOrigin: '',
      lga: '',
      placeOfBirth: '',
      city: '',
      otherInfo: ''
    });
  };
  
  // Sample country options for dropdown
  const countryOptions = [
    { value: "nigeria", label: "Nigeria" },
    { value: "ghana", label: "Ghana" },
    { value: "kenya", label: "Kenya" },
    { value: "southAfrica", label: "South Africa" },
    { value: "usa", label: "United States" },
    { value: "uk", label: "United Kingdom" },
  ];
  
  return (
    <div className="space-y-4">
      <Card className="border shadow-sm overflow-hidden p-0">
        <CardContent className="p-0">
          <div className='bg-color-primary-light text-color-primary shadow-sm rounded-t-md p-4 flex flex-col gap-1'>
            <h5 className='text-base font-semibold flex items-center gap-2'>
              <FaEnvelope className="text-color-primary" />
              Contact Information
            </h5>
            <span className='text-sm italic opacity-80'>Manage student contact details for the new academic session.</span>
          </div>
          
          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            {/* Address Section */}
            <div className="space-y-6">
              <h6 className="text-sm font-medium text-color-gray-1 pb-2 border-b border-gray-100 flex items-center gap-2">
                <FaMapMarkerAlt className="text-color-primary" />
                Address Information
              </h6>
              
              <div className="grid grid-cols-1 gap-6">
                <div className="space-y-1.5">
                  <label htmlFor="contactAddress" className="form-title text-sm font-medium text-color-gray-2 flex items-center">
                    Contact Address <span className='text-red-500 ml-1'>*</span>
                  </label>
                  <div className="relative">
                    <Input 
                      type="text" 
                      id="contactAddress"
                      name="contactAddress"
                      value={formData.contactAddress}
                      onChange={handleInputChange}
                      className="focus:border-color-primary pl-9" 
                      placeholder="Enter your current contact address"
                      required
                    />
                    <FaMapMarkerAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-color-gray-2" />
                  </div>
                  <span className='text-xs text-color-gray-2'>Your current residential address</span>
                </div>
                
                <div className="space-y-1.5">
                  <label htmlFor="permanentAddress" className="form-title text-sm font-medium text-color-gray-2 flex items-center">
                    Permanent Home Address <span className='text-red-500 ml-1'>*</span>
                  </label>
                  <div className="relative">
                    <Input 
                      type="text" 
                      id="permanentAddress"
                      name="permanentAddress"
                      value={formData.permanentAddress}
                      onChange={handleInputChange}
                      className="focus:border-color-primary pl-9" 
                      placeholder="Enter your permanent home address"
                      required
                    />
                    <FaMapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-color-gray-2" />
                  </div>
                  <span className='text-xs text-color-gray-2'>Your permanent home address</span>
                </div>
              </div>
            </div>
            
            {/* Contact Information Section */}
            <div className="space-y-6">
              <h6 className="text-sm font-medium text-color-gray-1 pb-2 border-b border-gray-100 flex items-center gap-2">
                <FaMobileAlt className="text-color-primary" />
                Contact Details
              </h6>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-1.5">
                  <label htmlFor="mobile" className="form-title text-sm font-medium text-color-gray-2 flex items-center">
                    Mobile <span className='text-red-500 ml-1'>*</span>
                  </label>
                  <div className="relative">
                    <Input 
                      type="tel" 
                      id="mobile"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleInputChange}
                      className="focus:border-color-primary pl-9" 
                      placeholder="Enter your mobile number"
                      required
                    />
                    <FaMobileAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-color-gray-2" />
                  </div>
                </div>
                
                <div className="space-y-1.5">
                  <label htmlFor="alternateMobile" className="form-title text-sm font-medium text-color-gray-2">
                    Alternate Mobile
                  </label>
                  <div className="relative">
                    <Input 
                      type="tel" 
                      id="alternateMobile"
                      name="alternateMobile"
                      value={formData.alternateMobile}
                      onChange={handleInputChange}
                      className="focus:border-color-primary pl-9" 
                      placeholder="Enter alternate mobile number"
                    />
                    <FaMobileAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-color-gray-2" />
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-1.5">
                  <label htmlFor="schoolEmail" className="form-title text-sm font-medium text-color-gray-2 flex items-center">
                    School Email Address <span className='text-red-500 ml-1'>*</span>
                  </label>
                  <div className="relative">
                    <Input 
                      type="email" 
                      id="schoolEmail"
                      name="schoolEmail"
                      value={formData.schoolEmail}
                      onChange={handleInputChange}
                      className="focus:border-color-primary pl-9" 
                      placeholder="Enter your school email address"
                      required
                    />
                    <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-color-gray-2" />
                  </div>
                </div>
                
                <div className="space-y-1.5">
                  <label htmlFor="personalEmail" className="form-title text-sm font-medium text-color-gray-2">
                    Personal Email Address
                  </label>
                  <div className="relative">
                    <Input 
                      type="email" 
                      id="personalEmail"
                      name="personalEmail"
                      value={formData.personalEmail}
                      onChange={handleInputChange}
                      className="focus:border-color-primary pl-9" 
                      placeholder="Enter your personal email address"
                    />
                    <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-color-gray-2" />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Location Information Section */}
            <div className="space-y-6">
              <h6 className="text-sm font-medium text-color-gray-1 pb-2 border-b border-gray-100 flex items-center gap-2">
                <FaGlobe className="text-color-primary" />
                Location Information
              </h6>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                <div className="space-y-1.5">
                  <label htmlFor="nationality" className="form-title text-sm font-medium text-color-gray-2">
                    Nationality
                  </label>
                  <div className="z-10">
                    <Select
                      primaryColor="indigo"
                      value={countryOptions}
                      onChange={(option: any) => setFormData(prev => ({ ...prev, nationality: option ? option.value : '' }))}
                      options={countryOptions}
                      classNames={selectStyle}
                      placeholder="Select country"
                    />
                  </div>
                </div>
                
                <div className="space-y-1.5">
                  <label htmlFor="stateOfOrigin" className="form-title text-sm font-medium text-color-gray-2">
                    State of Origin
                  </label>
                  <div className="relative">
                    <Input 
                      type="text" 
                      id="stateOfOrigin"
                      name="stateOfOrigin"
                      value={formData.stateOfOrigin}
                      onChange={handleInputChange}
                      className="focus:border-color-primary" 
                      placeholder="Enter state of origin"
                    />
                  </div>
                </div>
                
                <div className="space-y-1.5">
                  <label htmlFor="lga" className="form-title text-sm font-medium text-color-gray-2">
                    Local Government Area
                  </label>
                  <div className="relative">
                    <Input 
                      type="text" 
                      id="lga"
                      name="lga"
                      value={formData.lga}
                      onChange={handleInputChange}
                      className="focus:border-color-primary" 
                      placeholder="Enter local government area"
                    />
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-1.5">
                  <label htmlFor="placeOfBirth" className="form-title text-sm font-medium text-color-gray-2">
                    Place of Birth
                  </label>
                  <div className="relative">
                    <Input 
                      type="text" 
                      id="placeOfBirth"
                      name="placeOfBirth"
                      value={formData.placeOfBirth}
                      onChange={handleInputChange}
                      className="focus:border-color-primary pl-9" 
                      placeholder="Enter place of birth"
                    />
                    <FaMapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-color-gray-2" />
                  </div>
                </div>
                
                <div className="space-y-1.5">
                  <label htmlFor="city" className="form-title text-sm font-medium text-color-gray-2">
                    City
                  </label>
                  <div className="relative">
                    <Input 
                      type="text" 
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      className="focus:border-color-primary pl-9" 
                      placeholder="Enter city"
                    />
                    <FaCity className="absolute left-3 top-1/2 transform -translate-y-1/2 text-color-gray-2" />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Additional Information Section */}
            <div className="space-y-6">
              <h6 className="text-sm font-medium text-color-gray-1 pb-2 border-b border-gray-100 flex items-center gap-2">
                <FaInfoCircle className="text-color-primary" />
                Additional Information
              </h6>
              
              <div className="space-y-1.5">
                <label htmlFor="otherInfo" className="form-title text-sm font-medium text-color-gray-2">
                  Other Information
                </label>
                <Textarea 
                  id="otherInfo"
                  name="otherInfo"
                  value={formData.otherInfo}
                  onChange={handleInputChange}
                  className="focus:border-color-primary resize-none" 
                  placeholder="Enter any additional information"
                  rows={4}
                />
                <span className='text-xs text-color-gray-2'>Any other relevant contact information</span>
              </div>
            </div>
          </form>
        </CardContent>
        
      </Card>
    </div>
  );
}

export default Contact
