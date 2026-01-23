import { useState } from 'react'
import { DndContext, DragOverlay } from '@dnd-kit/core'
import { useDroppable } from '@dnd-kit/core'
import type { DragEndEvent, DragStartEvent } from '@dnd-kit/core'
import Header from '@/components/layout/Header'
import Toolbar from '@/components/layout/Toolbar'
import Sidebar from '@/components/layout/Sidebar'
import PropertiesSidebar from '@/components/layout/PropertiesSidebar'
import Footer from '@/components/layout/Footer'
import TextInput from '@/components/inputs/TextInput'

type CanvasComponent = {
  id: string;
  type: string;
  props?: Record<string, unknown>;
}

function DroppableCanvas({ children }: { children: React.ReactNode }) {
  const { setNodeRef, isOver } = useDroppable({
    id: 'canvas-drop-zone',
  })

  return (
    <div
      ref={setNodeRef}
      className={`relative bg-white border-2 ${isOver ? 'border-blue-500' : 'border-gray-300'} p-8 min-h-[600px] w-full h-full transition-colors`}
    >
      {children}
    </div>
  )
}

function App() {
  const [isComponentsSidebarOpen, setIsComponentsSidebarOpen] = useState(false)
  const [canvasComponents, setCanvasComponents] = useState<CanvasComponent[]>([])
  const [activeId, setActiveId] = useState<string | null>(null)
  const [selectedComponent, setSelectedComponent] = useState<{
    id: string
    type: string
    name: string
  } | null>(null)

  const handleDragStart = (event: DragStartEvent) => {
    setActiveId(event.active.id as string)
  }

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event
    
    if (!over) {
      setActiveId(null)
      return
    }

    // Verifica se foi solto no canvas (droppable area)
    if (over.id === 'canvas-drop-zone') {
      const componentType = active.id as string
      
      // Cria um novo componente no canvas
      const newComponent: CanvasComponent = {
        id: `component-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
        type: componentType,
      }

      setCanvasComponents((prev) => [...prev, newComponent])
    }

    setActiveId(null)
  }

  const getComponentName = (type: string): string => {
    const names: Record<string, string> = {
      'text-input': 'textInput1',
      'email-input': 'emailInput1',
      'password-input': 'passwordInput1',
    }
    return names[type] || type
  }

  const handleComponentClick = (component: CanvasComponent) => {
    setSelectedComponent({
      id: component.id,
      type: component.type,
      name: getComponentName(component.type),
    })
  }

  const renderComponent = (component: CanvasComponent) => {
    const isSelected = selectedComponent?.id === component.id

    switch (component.type) {
      case 'text-input':
        return (
          <div
            key={component.id}
            onClick={() => handleComponentClick(component)}
            className={`w-full cursor-pointer transition-all ${
              isSelected ? 'ring-2 ring-blue-500 rounded-md p-2 -m-2' : ''
            }`}
          >
            <TextInput id={component.id} />
          </div>
        )
      default:
        return null
    }
  }

  return (
    <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
      <div className="h-screen flex flex-col bg-gray-50">
        <Header />

        <div id="main-content" className="flex flex-1 mt-10">
          <Toolbar isComponentsSidebarOpen={isComponentsSidebarOpen} setIsComponentsSidebarOpen={setIsComponentsSidebarOpen} />

          {isComponentsSidebarOpen && <Sidebar onClose={() => setIsComponentsSidebarOpen(false)} />}

          <main
            id="desktop"
            className={`flex-1 bg-gray-50 bg-grid-pattern pt-8 pb-20 pl-8 overflow-auto transition-all duration-200 ml-12 ${
              isComponentsSidebarOpen ? 'ml-[21rem]' : ''
            } ${selectedComponent ? 'pr-80' : 'pr-8'}`}
          >
            <DroppableCanvas>
              <div id="main-tag" className="absolute top-2 left-2">
                <span className="inline-block px-2 py-1 bg-blue-500 text-white text-xs font-semibold rounded-full uppercase">
                  Main
                </span>
              </div>

              <div
                id="content-area"
                className="mt-8 flex flex-col items-start gap-4 h-full w-full"
              >
                {canvasComponents.length === 0 ? (
                  <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">
                    Arraste componentes aqui
                  </div>
                ) : (
                  canvasComponents.map((component) => renderComponent(component))
                )}
              </div>
            </DroppableCanvas>
          </main>
        </div>

        {selectedComponent && (
          <PropertiesSidebar
            selectedComponent={selectedComponent}
            onClose={() => setSelectedComponent(null)}
          />
        )}

        <Footer />
      </div>

      <DragOverlay>
        {activeId ? (
          <div className="opacity-50">
            {activeId === 'text-input' && <TextInput />}
          </div>
        ) : null}
      </DragOverlay>
    </DndContext>
  )
}

export default App
