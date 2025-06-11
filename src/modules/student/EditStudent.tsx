import React, { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"

import {
    Card,
    CardContent,
} from "@/components/ui/card"
import Template from '@/Layout/Template'
import { 
  FaChevronLeft, 
  FaChevronRight, 
  FaEdit, 
  FaExternalLinkAlt, 
  FaSave, 
  FaTrashAlt, 
  FaUpload,
  FaUser,
  FaPhone,
  FaGraduationCap,
  FaUsers,
  FaCertificate,
  FaUserFriends,
  FaFileAlt
} from 'react-icons/fa'
import { Loader2, RefreshCcw } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { RadioItem } from '@/components/RadioGroup'
import { selectStyle } from '@/components/GlobalFunction'
import Select from 'react-tailwindcss-select'
import { ModalEdit } from './Modal'
import Basic from './profile/Basic'
import Contact from './profile/Contact'
import { Academic } from './profile/Academic'
import Parent from './profile/Parent'
import Qualification from './profile/Qualification'
import File from './profile/File'
import Sibling from './profile/Sibling'

const EditStudent = () => {
  // State for active tab/step
  const [activeTab, setActiveTab] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [hasChanges, setHasChanges] = useState(false);
  
  // Student information tabs with icons
  const tabs = [
    { id: 1, name: "Basic Details", icon: <FaUser /> },
    { id: 2, name: "Contact Details", icon: <FaPhone /> },
    { id: 3, name: "Academic Details", icon: <FaGraduationCap /> },
    { id: 4, name: "Parent Details", icon: <FaUsers /> },
    { id: 5, name: "Qualifications", icon: <FaCertificate /> },
    { id: 6, name: "Sibling Records", icon: <FaUserFriends /> },
    { id: 7, name: "Files", icon: <FaFileAlt /> }
  ];

  // Handle tab change
  const handleTabChange = (tabId: number) => {
    setActiveTab(tabId);
  };
  
  // Handle refresh data
  const handleRefresh = () => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };
  
  // Handle save changes
  const handleSave = () => {
    setIsSaving(true);
    // Simulate API call
    setTimeout(() => {
      setIsSaving(false);
      setHasChanges(false);
    }, 1500);
  };
  
  // Handle discard changes
  const handleDiscard = () => {
    // Show confirmation dialog in a real app
    setHasChanges(false);
  };
  
  // Handle delete student
  const handleDelete = () => {
    // Show confirmation dialog in a real app
    console.log("Delete student");
  };

  return (
    <Template>
      {/* Header - Sticky and Responsive */}
      <div className="border-b flex justify-between items-center border-color-border w-full bg-white sticky top-0 z-10 shadow-sm">
        <div className='flex items-center gap-2 sm:gap-5'>
          <Link 
            to='/student' 
            className='border-r border-color-border cursor-pointer flex items-center py-4 px-3 sm:px-4 hover:bg-gray-100 transition-colors'
            aria-label="Back to student list"
          >
            <FaChevronLeft className="text-color-gray-2" /> 
          </Link>

          <h2 className="flex gap-2 items-center font-semibold text-sm sm:text-base">
            <FaEdit className="text-color-primary"/>
            <span className="hidden xs:inline">Edit Student Record</span>
            <span className="xs:hidden">Edit Student</span>
          </h2>
        </div>

        <button 
          onClick={handleRefresh} 
          disabled={isLoading}
          className="text-sm hover:bg-color-primary-light hover:text-color-primary py-3 px-3 sm:px-4 rounded-sm cursor-pointer transition-colors flex items-center gap-1"
          aria-label="Refresh data"
        >
          {isLoading ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <RefreshCcw size={16} />
          )}
          <span className="hidden sm:inline ml-1">Refresh</span>
        </button>
      </div>

      {/* Tab Navigation - Responsive with Horizontal Scroll on Mobile */}
      <div className="border-b border-color-border bg-white sticky top-[57px] z-10">
        <div className="overflow-x-auto scrollbar-hide">
          <ul className="flex items-center min-w-max px-2 sm:px-6">
            {tabs.map((tab) => (
              <li 
                key={tab.id} 
                onClick={() => handleTabChange(tab.id)} 
                className={`
                  flex items-center gap-1 sm:gap-2 py-3 px-2 sm:px-4 cursor-pointer transition-colors relative
                  ${activeTab === tab.id ? 'text-color-primary font-medium' : 'text-color-gray-2 hover:text-color-gray-1'}
                `}
              >
                <span className="text-sm sm:text-base">{tab.icon}</span>
                <span className="text-xs sm:text-sm whitespace-nowrap">{tab.name}</span>
                {activeTab === tab.id && (
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-color-primary"></div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Main Content Area - Responsive with proper padding */}
      <div className="px-4 sm:px-8 lg:px-14 py-4 pb-24">
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          {/* Render the appropriate component based on activeTab */}
          {activeTab === 1 ? (
            <Basic />
          ) : activeTab === 2 ? (
            <Contact />
          ) : activeTab === 3 ? (
            <Academic />
          ) : activeTab === 4 ? (
            <Parent />
          ) : activeTab === 5 ? (
            <Qualification />
          ) : activeTab === 6 ? (
            <Sibling />
          ) : (
            <File />
          )}
        </div>

        <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <Button 
            type='button' 
            variant={'white'} 
            size={'md'} 
            className='flex items-center gap-2 text-red-500 hover:bg-red-50 border-red-200'
            onClick={handleDelete}
          >
            <FaTrashAlt size={14} />
            <span>Delete Student Record</span>
          </Button>
          
          <div className="flex items-center gap-2">
            <span className="text-xs text-color-gray-2">Last updated: 2 days ago</span>
          </div>
        </div>
      </div>

      {/* Sticky Footer - Responsive */}
      <div className="flex justify-between items-center bg-white border-t border-color-border px-4 sm:px-8 lg:px-20 py-3 sm:py-4 bottom-0 fixed w-full shadow-md z-20">
        {hasChanges && (
          <div className="flex items-center">
            <div className="w-2 h-2 rounded-full bg-amber-500 mr-2"></div>
            <h2 className="text-sm font-medium">Unsaved Changes</h2>
          </div>
        )}
        {!hasChanges && (
          <div className="text-sm text-color-gray-2">No changes</div>
        )}

        <div className="flex gap-2 sm:gap-3">
          
          <Button 
            variant={'outline'} 
            size='md' 
            className="text-sm"
            onClick={handleDiscard}
            disabled={!hasChanges || isSaving}
          >
            Discard
          </Button>

          <Button 
            variant={'primary'} 
            size='md' 
            className="text-sm flex items-center gap-1"
            onClick={handleSave}
            disabled={!hasChanges || isSaving}
          >
            {isSaving ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" /> Saving...
              </>
            ) : (
              <>
                <FaSave size={14} className="mr-1" /> Save
              </>
            )}
          </Button>
        </div>
      </div>
    </Template>
  )
}

export default EditStudent
