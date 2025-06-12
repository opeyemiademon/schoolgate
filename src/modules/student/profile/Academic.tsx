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
import { FaGraduationCap } from 'react-icons/fa'

const Academic = () => {
  // State management for form selections
  const [faculty, setFaculty] = useState(null);
  const [department, setDepartment] = useState(null);
  const [unit, setUnit] = useState(null);
  const [startLevel, setStartLevel] = useState(null);
  const [currentLevel, setCurrentLevel] = useState(null);
  const [entryMode, setEntryMode] = useState(null);
  const [studyMode, setStudyMode] = useState(null);
  const [admissionSession, setAdmissionSession] = useState(null);
  const [admissionStatus, setAdmissionStatus] = useState(null);
  const [certificateType, setCertificateType] = useState(null);
  
  // Sample options for select dropdowns
  const genericOptions = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" }
  ];
  
  // Sample options for academic-specific dropdowns
  const facultyOptions = [
    { value: "arts", label: "Faculty of Arts" },
    { value: "science", label: "Faculty of Science" },
    { value: "engineering", label: "Faculty of Engineering" },
    { value: "medicine", label: "Faculty of Medicine" }
  ];
  
  const departmentOptions = [
    { value: "computerScience", label: "Computer Science" },
    { value: "mathematics", label: "Mathematics" },
    { value: "physics", label: "Physics" }
  ];
  
  const levelOptions = [
    { value: "100", label: "100 Level" },
    { value: "200", label: "200 Level" },
    { value: "300", label: "300 Level" },
    { value: "400", label: "400 Level" }
  ];
  
  const sessionOptions = [
    { value: "2023-2024", label: "2023/2024" },
    { value: "2024-2025", label: "2024/2025" },
    { value: "2025-2026", label: "2025/2026" }
  ];
  
  const handleChange = (value:any) => {
    console.log("value:", value);
    //setAnimal(value);
  };
  
  return (
    <div className="space-y-6">
      <Card className="shadow-md hover:shadow-lg transition-shadow duration-300 p-0">
        <CardContent className="p-0">

          <div className='bg-color-primary-light text-color-primary shadow-sm rounded-t-md p-4 flex flex-col gap-1'>
                      <h5 className='text-base font-semibold flex items-center gap-2'>
                        <FaGraduationCap className="text-color-primary" />
                        Academic Information
                      </h5>
                      <span className='text-sm italic'>Manage student academic information for the new academic session.</span>
            </div>


          <div className="p-5 space-y-6">
            {/* Student ID Information Section */}
            <div className="space-y-4">
              <h6 className="font-medium text-sm text-gray-500 uppercase tracking-wider">Student Identification</h6>
              
              <div className="space-y-4 md:grid md:grid-cols-2 md:gap-6 md:space-y-0">
                <div className="space-y-2">
                  <label htmlFor="matricNumber" className="form-title text-sm font-medium text-color-gray-2 flex items-center gap-1"> 
                    Matriculation Number <span className='text-red-800'>*</span>
                  </label>
                  <Input 
                    id="matricNumber"
                    type="text" 
                    disabled 
                    className="mt-1" 
                    value="FT23POL0123" 
                  />
                  <span className='text-xs text-muted-foreground'>Auto-generated, may change if duplicate is detected</span>
                </div>

                <div className="space-y-2">
                  <label htmlFor="appNumber" className="form-title text-sm font-medium text-color-gray-2 flex items-center gap-1"> 
                    Application Number <span className='text-red-800'>*</span>
                  </label>
                  <Input 
                    id="appNumber"
                    type="text" 
                    disabled 
                    className="mt-1" 
                    value="FT23POL0123" 
                  />
                  <span className='text-xs text-muted-foreground'>Auto-generated, may change if duplicate is detected</span>
                </div>
              </div>
            </div>

            {/* Entry and Study Mode Section */}
            <div className="space-y-4">
              <h6 className="font-medium text-sm text-gray-500 uppercase tracking-wider">Entry Information</h6>
              
              <div className="space-y-4 md:grid md:grid-cols-2 md:gap-6 md:space-y-0">
                <div className="space-y-2">
                  <label htmlFor="entryMode" className="form-title text-sm font-medium text-color-gray-2 flex items-center gap-1"> 
                    Mode of Entry <span className='text-red-800'>*</span>
                  </label>
                  <Select
                    value={entryMode}
                    onChange={handleChange}
                    options={genericOptions}
                    primaryColor={"indigo"}
                    isSearchable={true}
                    isClearable={true}
                    placeholder="Select mode of entry"
                    classNames={selectStyle}
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="studyMode" className="form-title text-sm font-medium text-color-gray-2 flex items-center gap-1"> 
                    Study Mode <span className='text-red-800'>*</span>
                  </label>
                  <Select
                    value={studyMode}
                    onChange={handleChange}
                    options={genericOptions}
                    primaryColor={"indigo"}
                    isSearchable={true}
                    isClearable={true}
                    placeholder="Select study mode"
                    classNames={selectStyle}
                  />
                </div>
              </div>
            </div>


            {/* Faculty and Department Section */}
            <div className="space-y-4">
              <h6 className="font-medium text-sm text-gray-500 uppercase tracking-wider">Academic Unit</h6>
              
              <div className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="faculty" className="form-title text-sm font-medium text-color-gray-2 flex items-center gap-1"> 
                    Select Faculty <span className='text-red-800'>*</span>
                  </label>
                  <Select
                    value={faculty}
                    onChange={handleChange}
                    options={facultyOptions}
                    primaryColor={"indigo"}
                    isSearchable={true}
                    isClearable={true}
                    placeholder="Select faculty..."
                    classNames={selectStyle}
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="department" className="form-title text-sm font-medium text-color-gray-2 flex items-center gap-1"> 
                    Select Department <span className='text-red-800'>*</span>
                  </label>
                  <Select
                    value={department}
                    onChange={handleChange}
                    options={departmentOptions}
                    primaryColor={"indigo"}
                    isSearchable={true}
                    isClearable={true}
                    placeholder="Select faculty first"
                    classNames={selectStyle}
                  />
                </div>
              </div>
            </div>


            {/* Unit Selection Section */}
            <div className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="unit" className="form-title text-sm font-medium text-color-gray-2 flex items-center gap-1"> 
                  Select Unit <span className='text-red-800'>*</span>
                </label>
                <Select
                  value={unit}
                  onChange={handleChange}
                  options={genericOptions}
                  primaryColor={"indigo"}
                  isSearchable={true}
                  isClearable={true}
                  placeholder="Select department first"
                  classNames={selectStyle}
                />
              </div>
            </div>

            {/* Level Information Section */}
            <div className="space-y-4">
              <h6 className="font-medium text-sm text-gray-500 uppercase tracking-wider">Level Information</h6>
              
              <div className="space-y-4 md:grid md:grid-cols-2 md:gap-6 md:space-y-0">
                <div className="space-y-2">
                  <label htmlFor="startLevel" className="form-title text-sm font-medium text-color-gray-2 flex items-center gap-1"> 
                    Start Level <span className='text-red-800'>*</span>
                  </label>
                  <Select
                    value={startLevel}
                    onChange={handleChange}
                    options={levelOptions}
                    primaryColor={"indigo"}
                    isSearchable={true}
                    isClearable={true}
                    placeholder="Select start level"
                    classNames={selectStyle}
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="currentLevel" className="form-title text-sm font-medium text-color-gray-2 flex items-center gap-1"> 
                    Current Level <span className='text-red-800'>*</span>
                  </label>
                  <Select
                    value={currentLevel}
                    onChange={handleChange}
                    options={levelOptions}
                    primaryColor={"indigo"}
                    isSearchable={true}
                    isClearable={true}
                    placeholder="Select current level"
                    classNames={selectStyle}
                  />
                </div>
              </div>
            </div>

            {/* Admission Information Section */}
            <div className="space-y-4">
              <h6 className="font-medium text-sm text-gray-500 uppercase tracking-wider">Admission Details</h6>
              
              <div className="space-y-4 md:grid md:grid-cols-2 md:gap-6 md:space-y-0">
                <div className="space-y-2">
                  <label htmlFor="admissionSession" className="form-title text-sm font-medium text-color-gray-2 flex items-center gap-1"> 
                    Admission Session <span className='text-red-800'>*</span>
                  </label>
                  <Select
                    value={admissionSession}
                    onChange={handleChange}
                    options={sessionOptions}
                    primaryColor={"indigo"}
                    isSearchable={true}
                    isClearable={true}
                    placeholder="Select admission session"
                    classNames={selectStyle}
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="admissionStatus" className="form-title text-sm font-medium text-color-gray-2 flex items-center gap-1"> 
                    Admission Status <span className='text-red-800'>*</span>
                  </label>
                  <Select
                    value={admissionStatus}
                    onChange={handleChange}
                    options={genericOptions}
                    primaryColor={"indigo"}
                    isSearchable={true}
                    isClearable={true}
                    placeholder="Select admission status"
                    classNames={selectStyle}
                  />
                </div>
              </div>
            </div>

            {/* Dates Section */}
            <div className="space-y-4">
              <h6 className="font-medium text-sm text-gray-500 uppercase tracking-wider">Important Dates</h6>
              
              <div className="space-y-4 md:grid md:grid-cols-2 md:gap-6 md:space-y-0">
                <div className="space-y-2">
                  <label htmlFor="admissionDate" className="form-title text-sm font-medium text-color-gray-2">Admission Date</label>
                  <Input 
                    id="admissionDate"
                    type="date" 
                    className="mt-1" 
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="registrationDate" className="form-title text-sm font-medium text-color-gray-2">Registration Date</label>
                  <Input 
                    id="registrationDate"
                    type="date" 
                    className="mt-1" 
                  />
                </div>
              </div>
            </div>

            {/* Certificate Type Section */}
            <div className="space-y-4">
              <h6 className="font-medium text-sm text-gray-500 uppercase tracking-wider">Certificate Information</h6>
              
              <div className="space-y-2">
                <label htmlFor="certificateType" className="form-title text-sm font-medium text-color-gray-2 flex items-center gap-1"> 
                  Certificate Type <span className='text-red-800'>*</span>
                </label>
                <Select
                  value={certificateType}
                  onChange={handleChange}
                  options={genericOptions}
                  primaryColor={"indigo"}
                  isSearchable={true}
                  isClearable={true}
                  placeholder="Select certificate type"
                  classNames={selectStyle}
                />
              </div>
            </div>

          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Academic;
