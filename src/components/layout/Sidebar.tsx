import { useDraggable } from '@dnd-kit/core'
import { XIcon } from '@/components/icons/XIcon'
import TextInputIcon from '@/assets/icons/TextInputIcon.svg'
import EmailInputIcon from '@/assets/icons/EmailInputIcon.svg'
import PasswordInputIcon from '@/assets/icons/PasswordInputIcon.svg'
import SearchInputIcon from '@/assets/icons/SearchInputIcon.svg'
import TextAreaIcon from '@/assets/icons/TextAreaIcon.svg'
import UrlInputIcon from '@/assets/icons/UrlInputIcon.svg'
import NumberInputIcon from '@/assets/icons/NumberInputIcon.svg'
import PhoneInputIcon from '@/assets/icons/PhoneInputIcon.svg'
import RangerInputIcon from '@/assets/icons/RangerInputIcon.svg'
import CheckboxIcon from '@/assets/icons/CheckboxIcon.svg'
import CheckboxGroupIcon from '@/assets/icons/CheckboxGroupIcon.svg'
import RadioGroupIcon from '@/assets/icons/RadioGroupIcon.svg'

type SidebarProps = {
  onClose: () => void;
};

type DraggableComponentProps = {
  id: string;
  icon: string;
  label: string;
  alt: string;
};

function DraggableComponent({ id, icon, label, alt }: DraggableComponentProps) {
  const { attributes, listeners, setNodeRef, isDragging } = useDraggable({
    id,
  })

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      className={`flex flex-col items-center cursor-grab group ${isDragging ? 'opacity-50' : ''}`}
    >
      <div className="w-full bg-white rounded-sm border border-gray-100 flex items-center justify-center">
        <img src={icon} alt={alt} className="w-full h-auto" />
      </div>
      <span className="text-xs text-gray-700 mt-1.5 text-center">{label}</span>
    </div>
  )
}


export default function Sidebar({ onClose }: SidebarProps) {
  return (
    <aside id="sidebar" className="fixed top-10 left-12 w-72 bg-white border-r border-gray-200 flex flex-col h-[calc(100vh-2.5rem-3rem)] overflow-hidden z-40">
      <div id="components-section-header" className="py-2 px-4 flex justify-between items-center border-b border-gray-200 flex-shrink-0">
        <h2 className="text-sm font-semibold text-gray-700">Components</h2>
        <button
          id="close-sidebar-button"
          onClick={onClose}
          className="w-6 h-6 rounded-md hover:bg-gray-100 flex items-center justify-center transition-colors"
          title="Close components sidebar"
        >
          <XIcon size={15} />
        </button>
      </div>

      <div id="search-bar" className="px-6 py-4 flex-shrink-0">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search components"
            className="w-full h-8 pl-10 pr-4 py-2 border border-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-xs"
          />
        </div>
      </div>

      <div id="components-list" className="flex-1 overflow-y-auto px-6 py-4 min-h-0">
        <div id="text-inputs" className="mb-6">
          <h3 className="text-xs font-semibold text-gray-700 mb-3 tracking-wide">Text Input</h3>
          <div className="grid grid-cols-3 gap-2">
            <DraggableComponent
              id="text-input"
              icon={TextInputIcon}
              label="Text Input"
              alt="Text Input"
            />
            <div className="flex flex-col items-center cursor-grab group">
              <div className="w-full bg-white rounded-sm border border-gray-100 flex items-center justify-center">
                <img src={EmailInputIcon} alt="Email" className="w-full h-auto" />
              </div>
              <span className="text-xs text-gray-700 mt-1.5 text-center">Email</span>
            </div>
            <div className="flex flex-col items-center cursor-grab group">
              <div className="w-full bg-white rounded-sm border border-gray-100 flex items-center justify-center">
                <img src={PasswordInputIcon} alt="Password" className="w-full h-auto" />
              </div>
              <span className="text-xs text-gray-700 mt-1.5 text-center">Password</span>
            </div>
            <div className="flex flex-col items-center cursor-grab group">
              <div className="w-full bg-white rounded-sm border border-gray-100 flex items-center justify-center">
                <img src={SearchInputIcon} alt="Search" className="w-full h-auto" />
              </div>
              <span className="text-xs text-gray-700 mt-1.5 text-center">Search</span>
            </div>
            <div className="flex flex-col items-center cursor-grab group">
              <div className="w-full bg-white rounded-sm border border-gray-100 flex items-center justify-center">
                <img src={TextAreaIcon} alt="Text Area" className="w-full h-auto" />
              </div>
              <span className="text-xs text-gray-700 mt-1.5 text-center">Text Area</span>
            </div>
            <div className="flex flex-col items-center cursor-grab group">
              <div className="w-full bg-white rounded-sm border border-gray-100 flex items-center justify-center">
                <img src={UrlInputIcon} alt="URL" className="w-full h-auto" />
              </div>
              <span className="text-xs text-gray-700 mt-1.5 text-center">URL</span>
            </div>
          </div>
        </div>

        <div id="number-inputs" className="mb-6">
          <h3 className="text-xs font-semibold text-gray-700 mb-3 tracking-wide">Number inputs</h3>
          <div className="grid grid-cols-3 gap-2">
            <div className="flex flex-col items-center cursor-grab group">
              <div className="w-full bg-white rounded-sm border border-gray-100 flex items-center justify-center">
                <img src={NumberInputIcon} alt="Number Input" className="w-full h-auto" />
              </div>
              <span className="text-xs text-gray-600 mt-1.5 text-center">Number Input</span>
            </div>
            <div className="flex flex-col items-center cursor-grab group">
              <div className="w-full bg-white rounded-sm border border-gray-100 flex items-center justify-center">
                <img src={PhoneInputIcon} alt="Phone Number" className="w-full h-auto" />
              </div>
              <span className="text-xs text-gray-600 mt-1.5 text-center">Phone Number</span>
            </div>
            <div className="flex flex-col items-center cursor-grab group">
              <div className="w-full bg-white rounded-sm border border-gray-100 flex items-center justify-center">
                <img src={RangerInputIcon} alt="Ranger Input" className="w-full h-auto" />
              </div>
              <span className="text-xs text-gray-600 mt-1.5 text-center">Ranger Input</span>
            </div>
          </div>
        </div>

        <div id="select-inputs" className="mb-6">
          <h3 className="text-xs font-semibold text-gray-700 mb-3 tracking-wide">Select inputs</h3>
          <div className="grid grid-cols-3 gap-2">
            <div className="flex flex-col items-center cursor-grab group">
              <div className="w-full bg-white rounded-sm border border-gray-100 flex items-center justify-center">
                <img src={CheckboxIcon} alt="Checkbox" className="w-full h-auto" />
              </div>
              <span className="text-xs text-gray-600 mt-1.5 text-center">Checkbox</span>
            </div>
            <div className="flex flex-col items-center cursor-grab group">
              <div className="w-full bg-white rounded-sm border border-gray-100 flex items-center justify-center">
                <img src={CheckboxGroupIcon} alt="Checkbox Group" className="w-full h-auto" />
              </div>
              <span className="text-xs text-gray-600 mt-1.5 text-center">Checkbox Group</span>
            </div>
            <div className="flex flex-col items-center cursor-grab group">
              <div className="w-full bg-white rounded-sm border border-gray-100 flex items-center justify-center">
                <img src={RadioGroupIcon} alt="Radio Group" className="w-full h-auto" />
              </div>
              <span className="text-xs text-gray-600 mt-1.5 text-center">Radio Group</span>
            </div>
            <div className="flex flex-col items-center cursor-grab group">
              <div className="w-full bg-white rounded-sm border border-gray-100 flex items-center justify-center">
                <img src={TextInputIcon} alt="Checkbox Tree" className="w-full h-auto" />
              </div>
              <span className="text-xs text-gray-600 mt-1.5 text-center">Checkbox Tree</span>
            </div>
            <div className="flex flex-col items-center cursor-grab group">
              <div className="w-full bg-white rounded-sm border border-gray-100 flex items-center justify-center">
                <img src={TextInputIcon} alt="Listbox" className="w-full h-auto" />
              </div>
              <span className="text-xs text-gray-600 mt-1.5 text-center">Listbox</span>
            </div>
            <div className="flex flex-col items-center cursor-grab group">
              <div className="w-full bg-white rounded-sm border border-gray-100 flex items-center justify-center">
                <img src={TextInputIcon} alt="Multiselect" className="w-full h-auto" />
              </div>
              <span className="text-xs text-gray-600 mt-1.5 text-center">Multiselect</span>
            </div>
            <div className="flex flex-col items-center cursor-grab group">
              <div className="w-full bg-white rounded-sm border border-gray-100 flex items-center justify-center">
                <img src={TextInputIcon} alt="Multiselect Listbox" className="w-full h-auto" />
              </div>
              <span className="text-xs text-gray-600 mt-1.5 text-center">Multiselect Listbox</span>
            </div>
            <div className="flex flex-col items-center cursor-grab group">
              <div className="w-full bg-white rounded-sm border border-gray-100 flex items-center justify-center">
                <img src={TextInputIcon} alt="Radio Group" className="w-full h-auto" />
              </div>
              <span className="text-xs text-gray-600 mt-1.5 text-center">Radio Group</span>
            </div>
            <div className="flex flex-col items-center cursor-grab group">
              <div className="w-full bg-white rounded-sm border border-gray-100 flex items-center justify-center">
                <img src={TextInputIcon} alt="Segmented Control" className="w-full h-auto" />
              </div>
              <span className="text-xs text-gray-600 mt-1.5 text-center">Segmented Control</span>
            </div>
            <div className="flex flex-col items-center cursor-grab group">
              <div className="w-full bg-white rounded-sm border border-gray-100 flex items-center justify-center">
                <img src={TextInputIcon} alt="Select" className="w-full h-auto" />
              </div>
              <span className="text-xs text-gray-600 mt-1.5 text-center">Select</span>
            </div>
            <div className="flex flex-col items-center cursor-grab group">
              <div className="w-full bg-white rounded-sm border border-gray-100 flex items-center justify-center">
                <img src={TextInputIcon} alt="Switch" className="w-full h-auto" />
              </div>
              <span className="text-xs text-gray-600 mt-1.5 text-center">Switch</span>
            </div>
            <div className="flex flex-col items-center cursor-grab group">
              <div className="w-full bg-white rounded-sm border border-gray-100 flex items-center justify-center">
                <img src={TextInputIcon} alt="Switch Group" className="w-full h-auto" />
              </div>
              <span className="text-xs text-gray-600 mt-1.5 text-center">Switch Group</span>
            </div>
          </div>
        </div>
      </div>
    </aside>
  )
}
