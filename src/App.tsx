import { useState } from 'react'
import Header from '@/components/layout/Header'
import Toolbar from '@/components/layout/Toolbar'
import Sidebar from '@/components/layout/Sidebar'
import Footer from '@/components/layout/Footer'

function App() {
  const [isComponentsSidebarOpen, setIsComponentsSidebarOpen] = useState(false)

  return (
    <div className="h-screen flex flex-col bg-gray-50">
      <Header />

      <div id="main-content" className="flex flex-1 mt-10">
        <Toolbar isComponentsSidebarOpen={isComponentsSidebarOpen} setIsComponentsSidebarOpen={setIsComponentsSidebarOpen} />

        {isComponentsSidebarOpen && <Sidebar onClose={() => setIsComponentsSidebarOpen(false)} />}

        <main id="desktop" className={`flex-1 bg-gray-50 bg-grid-pattern pt-8 pr-8 pb-20 pl-8 overflow-auto transition-all duration-200 ml-12 ${isComponentsSidebarOpen ? 'ml-[21rem]' : ''}`}>
          <div id="canvas" className="relative bg-white border-2 border-blue-500 rounded-lg p-8 min-h-[600px] w-full">
            <div id="main-tag" className="absolute top-2 left-2">
              <span className="inline-block px-2 py-1 bg-blue-500 text-white text-xs font-semibold rounded-full uppercase">
                Main
              </span>
            </div>

            <div id="content-area" className="mt-8">

            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  )
}

export default App
