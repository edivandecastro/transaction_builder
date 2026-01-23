import { XIcon } from '@/components/icons/XIcon'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { MoreHorizontal, Search, Plus } from 'lucide-react'

type PropertiesSidebarProps = {
  selectedComponent: {
    id: string
    type: string
    name: string
  } | null
  onClose: () => void
  onUpdateComponent?: (id: string, props: Record<string, unknown>) => void
}

export default function PropertiesSidebar({
  selectedComponent,
  onClose,
}: PropertiesSidebarProps) {
  if (!selectedComponent) return null

  return (
    <aside
      id="properties-sidebar"
      className="fixed top-10 right-0 w-80 bg-white border-l border-gray-200 flex flex-col h-[calc(100vh-2.5rem-3rem)] overflow-hidden z-40"
    >
      {/* Header */}
      <div className="py-3 px-4 flex items-center justify-between border-b border-gray-200 flex-shrink-0">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 flex items-center justify-center text-gray-600">
            <span className="text-lg font-semibold">T</span>
          </div>
          <span className="text-sm font-medium text-gray-900">
            {selectedComponent.name}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button
            className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded transition-colors"
            title="More options"
          >
            <MoreHorizontal className="w-4 h-4 text-gray-600" />
          </button>
          <button
            className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded transition-colors"
            title="Search"
          >
            <Search className="w-4 h-4 text-gray-600" />
          </button>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded transition-colors"
            title="Close"
          >
            <XIcon size={16} />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto">
        <Accordion type="multiple" defaultValue={['content']} className="w-full">
          <AccordionItem value="content" className="border-b border-gray-200">
            <AccordionTrigger>Content</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-3">
                {/* Default value */}
                <div className="flex items-center gap-3">
                  <label className="text-xs font-normal text-gray-500 whitespace-nowrap min-w-[100px]">
                    Default value
                  </label>
                  <input
                    type="text"
                    className="flex-1 min-w-0 px-3 py-1.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder=""
                  />
                </div>

                {/* Placeholder */}
                <div className="flex items-center gap-3">
                  <label className="text-xs font-normal text-gray-500 whitespace-nowrap min-w-[100px]">
                    Placeholder
                  </label>
                  <input
                    type="text"
                    defaultValue="Enter value"
                    className="flex-1 min-w-0 px-3 py-1.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                {/* Add-ons */}
                <div className="space-y-2 pt-1">
                  <div className="flex items-center gap-3">
                    <label className="text-xs font-medium text-gray-900 whitespace-nowrap min-w-[100px]">
                      Add-ons
                    </label>
                    <button
                      type="button"
                      className="w-6 h-6 flex items-center justify-center text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded transition-colors ml-auto"
                      title="Add add-on"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                  <button
                    type="button"
                    className="w-full px-3 py-2 text-sm text-gray-600 bg-gray-50 border border-gray-200 rounded-md hover:bg-gray-100 transition-colors text-left"
                  >
                    None
                  </button>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="interaction" className="border-b border-gray-200">
            <AccordionTrigger>Interaction</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-3">
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1.5">
                    Required
                  </label>
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1.5">
                    Disabled
                  </label>
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="appearance" className="border-b border-gray-200">
            <AccordionTrigger>Appearance</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-3">
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1.5">
                    Width
                  </label>
                  <select className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                    <option>Full</option>
                    <option>Half</option>
                    <option>Third</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1.5">
                    Size
                  </label>
                  <select className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                    <option>Small</option>
                    <option>Medium</option>
                    <option>Large</option>
                  </select>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="spacing" className="border-b border-gray-200">
            <AccordionTrigger>Spacing</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-3">
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1.5">
                    Margin Top
                  </label>
                  <input
                    type="number"
                    className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="0"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1.5">
                    Margin Bottom
                  </label>
                  <input
                    type="number"
                    className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="0"
                  />
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </aside>
  )
}
