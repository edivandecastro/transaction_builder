import { useState } from 'react'
import { BlocksIcon } from '@/components/BlocksIcon'
import { XIcon } from '@/components/XIcon'
import InputTextIcon from '@/assets/icons/InputTextIcon.svg'

function App() {
  const [isComponentsSidebarOpen, setIsComponentsSidebarOpen] = useState(false)

  return (
    <div className="h-screen flex flex-col bg-gray-50">
      <header id="header" className="fixed top-0 left-0 right-0 h-10 bg-white border-b border-gray-200 z-50">
        <div className="h-full flex items-center justify-between px-3">
          {/* Left Section - Navigation (Aesthetic only) */}
          <div className="flex items-center gap-x-4">
            {/* Logo placeholder (future logo will go here) */}
            <div>
              <svg className="w-6 h-6 text-gray-800" viewBox="0 0 24 24" fill="currentColor">
                <rect x="2" y="4" width="9" height="9" rx="0" />
                <rect x="12" y="1" width="8" height="8" rx="0" />
                <rect x="12" y="10" width="11" height="8" rx="0" />
                <rect x="12" y="19" width="8" height="4" rx="0" />
                <rect x="-1" y="14" width="12" height="9" rx="0" />
              </svg>
            </div>

            {/* Microservices Text */}
            <h1 className="text-sm font-semibold text-gray-900">Microservices</h1>
          </div>

          {/* Right Section - User Profile */}
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
              <span className="text-white text-sm font-medium">U</span>
            </div>
          </div>
        </div>
      </header>

      <div id="main-content" className="flex flex-1 mt-10">
        {/* First Sidebar - Icon Bar */}
        <aside className="w-12 bg-white border-r border-gray-200 flex flex-col items-center py-4">
          <BlocksIcon
            id="components-icon"
            className={`cursor-pointer text-gray-600 rounded-sm p-2 ${isComponentsSidebarOpen ? ' bg-gray-100' : ''}`}
            onClick={() => setIsComponentsSidebarOpen(true)}
            size={20}
            title="Open Components"
          />
        </aside>

        {/* Components Sidebar - Opens when plus is clicked */}
        {isComponentsSidebarOpen && (
          <aside id="sidebar" className="w-72 bg-white border-r border-gray-200 flex flex-col h-full">
            {/* Components Section Header */}
            <div className="py-2 px-4 flex justify-between items-center border-b border-gray-200">
              <h2 className="text-sm font-semibold text-gray-900">Components</h2>
              {/* Close Button */}
              <button
                onClick={() => setIsComponentsSidebarOpen(false)}
                className="w-6 h-6 rounded-md hover:bg-gray-100 flex items-center justify-center transition-colors"
                title="Close components sidebar"
              >
                <XIcon size={15} />
              </button>
            </div>

            {/* Search Bar */}
            <div className="px-6 py-4 border-b border-gray-200">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Search components"
                  className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                />
              </div>
            </div>

            {/* Components List Area */}
            <div className="flex-1 overflow-y-auto px-6 py-4">
              {/* Text inputs section */}
              <div className="mb-6">
                <h3 className="text-xs font-semibold text-gray-700 mb-3 uppercase tracking-wide">Text inputs</h3>
                <div className="grid grid-cols-4 gap-3">
                  <div className="flex flex-col items-center cursor-pointer group">
                    <div className="w-full bg-white rounded-lg shadow-sm border border-gray-100 p-2 flex items-center justify-center group-hover:shadow-md transition-shadow">
                      <img src={InputTextIcon} alt="Editable Text" className="w-full h-auto" />
                    </div>
                    <span className="text-xs text-gray-600 mt-1.5 text-center">Editable Text</span>
                  </div>
                  <div className="flex flex-col items-center cursor-pointer group">
                    <div className="w-full bg-white rounded-lg shadow-sm border border-gray-100 p-2 flex items-center justify-center group-hover:shadow-md transition-shadow">
                      <img src={InputTextIcon} alt="Editable Text Area" className="w-full h-auto" />
                    </div>
                    <span className="text-xs text-gray-600 mt-1.5 text-center">Editable Text Area</span>
                  </div>
                  <div className="flex flex-col items-center cursor-pointer group">
                    <div className="w-full bg-white rounded-lg shadow-sm border border-gray-100 p-2 flex items-center justify-center group-hover:shadow-md transition-shadow">
                      <img src={InputTextIcon} alt="Email" className="w-full h-auto" />
                    </div>
                    <span className="text-xs text-gray-600 mt-1.5 text-center">Email</span>
                  </div>
                  <div className="flex flex-col items-center cursor-pointer group">
                    <div className="w-full bg-white rounded-lg shadow-sm border border-gray-100 p-2 flex items-center justify-center group-hover:shadow-md transition-shadow">
                      <img src={InputTextIcon} alt="JSON Editor" className="w-full h-auto" />
                    </div>
                    <span className="text-xs text-gray-600 mt-1.5 text-center">JSON Editor</span>
                  </div>
                  <div className="flex flex-col items-center cursor-pointer group">
                    <div className="w-full bg-white rounded-lg shadow-sm border border-gray-100 p-2 flex items-center justify-center group-hover:shadow-md transition-shadow">
                      <img src={InputTextIcon} alt="Password" className="w-full h-auto" />
                    </div>
                    <span className="text-xs text-gray-600 mt-1.5 text-center">Password</span>
                  </div>
                  <div className="flex flex-col items-center cursor-pointer group">
                    <div className="w-full bg-white rounded-lg shadow-sm border border-gray-100 p-2 flex items-center justify-center group-hover:shadow-md transition-shadow">
                      <img src={InputTextIcon} alt="Rich Text Editor" className="w-full h-auto" />
                    </div>
                    <span className="text-xs text-gray-600 mt-1.5 text-center">Rich Text Editor</span>
                  </div>
                  <div className="flex flex-col items-center cursor-pointer group">
                    <div className="w-full bg-white rounded-lg shadow-sm border border-gray-100 p-2 flex items-center justify-center group-hover:shadow-md transition-shadow">
                      <img src={InputTextIcon} alt="Text Area" className="w-full h-auto" />
                    </div>
                    <span className="text-xs text-gray-600 mt-1.5 text-center">Text Area</span>
                  </div>
                  <div className="flex flex-col items-center cursor-pointer group">
                    <div className="w-full bg-white rounded-lg shadow-sm border border-gray-100 p-2 flex items-center justify-center group-hover:shadow-md transition-shadow">
                      <img src={InputTextIcon} alt="Text Input" className="w-full h-auto" />
                    </div>
                    <span className="text-xs text-gray-600 mt-1.5 text-center">Text Input</span>
                  </div>
                  <div className="flex flex-col items-center cursor-pointer group">
                    <div className="w-full bg-white rounded-lg shadow-sm border border-gray-100 p-2 flex items-center justify-center group-hover:shadow-md transition-shadow">
                      <img src={InputTextIcon} alt="URL" className="w-full h-auto" />
                    </div>
                    <span className="text-xs text-gray-600 mt-1.5 text-center">URL</span>
                  </div>
                </div>
              </div>

              {/* Number inputs section */}
              <div className="mb-6">
                <h3 className="text-xs font-semibold text-gray-700 mb-3 uppercase tracking-wide">Number inputs</h3>
                <div className="grid grid-cols-4 gap-3">
                  <div className="flex flex-col items-center cursor-pointer group">
                    <div className="w-full bg-white rounded-lg shadow-sm border border-gray-100 p-2 flex items-center justify-center group-hover:shadow-md transition-shadow">
                      <img src={InputTextIcon} alt="Currency" className="w-full h-auto" />
                    </div>
                    <span className="text-xs text-gray-600 mt-1.5 text-center">Currency</span>
                  </div>
                  <div className="flex flex-col items-center cursor-pointer group">
                    <div className="w-full bg-white rounded-lg shadow-sm border border-gray-100 p-2 flex items-center justify-center group-hover:shadow-md transition-shadow">
                      <img src={InputTextIcon} alt="Editable Number" className="w-full h-auto" />
                    </div>
                    <span className="text-xs text-gray-600 mt-1.5 text-center">Editable Number</span>
                  </div>
                  <div className="flex flex-col items-center cursor-pointer group">
                    <div className="w-full bg-white rounded-lg shadow-sm border border-gray-100 p-2 flex items-center justify-center group-hover:shadow-md transition-shadow">
                      <img src={InputTextIcon} alt="Number Input" className="w-full h-auto" />
                    </div>
                    <span className="text-xs text-gray-600 mt-1.5 text-center">Number Input</span>
                  </div>
                  <div className="flex flex-col items-center cursor-pointer group">
                    <div className="w-full bg-white rounded-lg shadow-sm border border-gray-100 p-2 flex items-center justify-center group-hover:shadow-md transition-shadow">
                      <img src={InputTextIcon} alt="Percent" className="w-full h-auto" />
                    </div>
                    <span className="text-xs text-gray-600 mt-1.5 text-center">Percent</span>
                  </div>
                  <div className="flex flex-col items-center cursor-pointer group">
                    <div className="w-full bg-white rounded-lg shadow-sm border border-gray-100 p-2 flex items-center justify-center group-hover:shadow-md transition-shadow">
                      <img src={InputTextIcon} alt="Phone Number" className="w-full h-auto" />
                    </div>
                    <span className="text-xs text-gray-600 mt-1.5 text-center">Phone Number</span>
                  </div>
                  <div className="flex flex-col items-center cursor-pointer group">
                    <div className="w-full bg-white rounded-lg shadow-sm border border-gray-100 p-2 flex items-center justify-center group-hover:shadow-md transition-shadow">
                      <img src={InputTextIcon} alt="Range Slider" className="w-full h-auto" />
                    </div>
                    <span className="text-xs text-gray-600 mt-1.5 text-center">Range Slider</span>
                  </div>
                  <div className="flex flex-col items-center cursor-pointer group">
                    <div className="w-full bg-white rounded-lg shadow-sm border border-gray-100 p-2 flex items-center justify-center group-hover:shadow-md transition-shadow">
                      <img src={InputTextIcon} alt="Rating" className="w-full h-auto" />
                    </div>
                    <span className="text-xs text-gray-600 mt-1.5 text-center">Rating</span>
                  </div>
                  <div className="flex flex-col items-center cursor-pointer group">
                    <div className="w-full bg-white rounded-lg shadow-sm border border-gray-100 p-2 flex items-center justify-center group-hover:shadow-md transition-shadow">
                      <img src={InputTextIcon} alt="Slider" className="w-full h-auto" />
                    </div>
                    <span className="text-xs text-gray-600 mt-1.5 text-center">Slider</span>
                  </div>
                </div>
              </div>

              {/* Select inputs section */}
              <div className="mb-6">
                <h3 className="text-xs font-semibold text-gray-700 mb-3 uppercase tracking-wide">Select inputs</h3>
                <div className="grid grid-cols-4 gap-3">
                  <div className="flex flex-col items-center cursor-pointer group">
                    <div className="w-full bg-white rounded-lg shadow-sm border border-gray-100 p-2 flex items-center justify-center group-hover:shadow-md transition-shadow">
                      <img src={InputTextIcon} alt="Cascader" className="w-full h-auto" />
                    </div>
                    <span className="text-xs text-gray-600 mt-1.5 text-center">Cascader</span>
                  </div>
                  <div className="flex flex-col items-center cursor-pointer group">
                    <div className="w-full bg-white rounded-lg shadow-sm border border-gray-100 p-2 flex items-center justify-center group-hover:shadow-md transition-shadow">
                      <img src={InputTextIcon} alt="Checkbox" className="w-full h-auto" />
                    </div>
                    <span className="text-xs text-gray-600 mt-1.5 text-center">Checkbox</span>
                  </div>
                  <div className="flex flex-col items-center cursor-pointer group">
                    <div className="w-full bg-white rounded-lg shadow-sm border border-gray-100 p-2 flex items-center justify-center group-hover:shadow-md transition-shadow">
                      <img src={InputTextIcon} alt="Checkbox Group" className="w-full h-auto" />
                    </div>
                    <span className="text-xs text-gray-600 mt-1.5 text-center">Checkbox Group</span>
                  </div>
                  <div className="flex flex-col items-center cursor-pointer group">
                    <div className="w-full bg-white rounded-lg shadow-sm border border-gray-100 p-2 flex items-center justify-center group-hover:shadow-md transition-shadow">
                      <img src={InputTextIcon} alt="Checkbox Tree" className="w-full h-auto" />
                    </div>
                    <span className="text-xs text-gray-600 mt-1.5 text-center">Checkbox Tree</span>
                  </div>
                  <div className="flex flex-col items-center cursor-pointer group">
                    <div className="w-full bg-white rounded-lg shadow-sm border border-gray-100 p-2 flex items-center justify-center group-hover:shadow-md transition-shadow">
                      <img src={InputTextIcon} alt="Listbox" className="w-full h-auto" />
                    </div>
                    <span className="text-xs text-gray-600 mt-1.5 text-center">Listbox</span>
                  </div>
                  <div className="flex flex-col items-center cursor-pointer group">
                    <div className="w-full bg-white rounded-lg shadow-sm border border-gray-100 p-2 flex items-center justify-center group-hover:shadow-md transition-shadow">
                      <img src={InputTextIcon} alt="Multiselect" className="w-full h-auto" />
                    </div>
                    <span className="text-xs text-gray-600 mt-1.5 text-center">Multiselect</span>
                  </div>
                  <div className="flex flex-col items-center cursor-pointer group">
                    <div className="w-full bg-white rounded-lg shadow-sm border border-gray-100 p-2 flex items-center justify-center group-hover:shadow-md transition-shadow">
                      <img src={InputTextIcon} alt="Multiselect Listbox" className="w-full h-auto" />
                    </div>
                    <span className="text-xs text-gray-600 mt-1.5 text-center">Multiselect Listbox</span>
                  </div>
                  <div className="flex flex-col items-center cursor-pointer group">
                    <div className="w-full bg-white rounded-lg shadow-sm border border-gray-100 p-2 flex items-center justify-center group-hover:shadow-md transition-shadow">
                      <img src={InputTextIcon} alt="Radio Group" className="w-full h-auto" />
                    </div>
                    <span className="text-xs text-gray-600 mt-1.5 text-center">Radio Group</span>
                  </div>
                  <div className="flex flex-col items-center cursor-pointer group">
                    <div className="w-full bg-white rounded-lg shadow-sm border border-gray-100 p-2 flex items-center justify-center group-hover:shadow-md transition-shadow">
                      <img src={InputTextIcon} alt="Segmented Control" className="w-full h-auto" />
                    </div>
                    <span className="text-xs text-gray-600 mt-1.5 text-center">Segmented Control</span>
                  </div>
                  <div className="flex flex-col items-center cursor-pointer group">
                    <div className="w-full bg-white rounded-lg shadow-sm border border-gray-100 p-2 flex items-center justify-center group-hover:shadow-md transition-shadow">
                      <img src={InputTextIcon} alt="Select" className="w-full h-auto" />
                    </div>
                    <span className="text-xs text-gray-600 mt-1.5 text-center">Select</span>
                  </div>
                  <div className="flex flex-col items-center cursor-pointer group">
                    <div className="w-full bg-white rounded-lg shadow-sm border border-gray-100 p-2 flex items-center justify-center group-hover:shadow-md transition-shadow">
                      <img src={InputTextIcon} alt="Switch" className="w-full h-auto" />
                    </div>
                    <span className="text-xs text-gray-600 mt-1.5 text-center">Switch</span>
                  </div>
                  <div className="flex flex-col items-center cursor-pointer group">
                    <div className="w-full bg-white rounded-lg shadow-sm border border-gray-100 p-2 flex items-center justify-center group-hover:shadow-md transition-shadow">
                      <img src={InputTextIcon} alt="Switch Group" className="w-full h-auto" />
                    </div>
                    <span className="text-xs text-gray-600 mt-1.5 text-center">Switch Group</span>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        )}

        {/* Main Content Area */}
        <main className="flex-1 bg-gray-50 bg-grid-pattern p-8 overflow-auto">
          {/* Inner Canvas/Frame */}
          <div className="relative bg-white border-2 border-blue-500 rounded-lg p-8 min-h-[600px]">
            {/* Main Tag */}
            <div className="absolute top-2 left-2">
              <span className="inline-block px-2 py-1 bg-blue-500 text-white text-xs font-semibold rounded-full uppercase">
                Main
              </span>
            </div>

            {/* Content Area */}
            <div className="mt-8">
              {/* Content would go here */}
            </div>
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className="h-12 bg-white border-t border-gray-200 flex items-center px-6">
        <div className="flex items-center gap-x-2">
          <div className="w-2 h-2 rounded-full bg-blue-500"></div>
          <span className="text-sm text-gray-600">production</span>
        </div>
      </footer>
    </div>
  )
}

export default App
