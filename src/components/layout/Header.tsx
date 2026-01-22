import LogoIcon from '@/components/icons/LogoIcon';

export default function Header() {
  return (
    <header id="header" className="fixed top-0 left-0 right-0 h-10 bg-white border-b border-gray-200 z-50">
      <div className="h-full flex items-center justify-between px-3">
        <div id="left-section" className="flex items-center gap-x-4">
          <div id="logo">
            <LogoIcon className="w-6 h-6 text-gray-700" />
          </div>

          <h1 className="text-sm font-semibold text-gray-700">Microservices</h1>
        </div>

        <div id="right-section" className="flex items-center">
          <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
            <span className="text-white text-sm font-medium">U</span>
          </div>
        </div>
      </div>
    </header>
  )
}
