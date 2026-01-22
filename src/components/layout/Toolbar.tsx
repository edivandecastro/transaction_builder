import { BlocksIcon } from "../icons/BlocksIcon";

type ToolbarProps = {
  isComponentsSidebarOpen: boolean;
  setIsComponentsSidebarOpen: (isOpen: boolean) => void;
};

export default function Toolbar({ isComponentsSidebarOpen, setIsComponentsSidebarOpen }: ToolbarProps) {
  return (
    <aside id="toolbar" className="fixed top-10 left-0 w-12 bg-white border-r border-gray-200 flex flex-col items-center py-4 h-[calc(100vh-2.5rem-3rem)] z-40">
      <BlocksIcon
        id="components-icon"
        className={`cursor-pointer text-gray-700 rounded-sm p-2 ${isComponentsSidebarOpen ? ' bg-gray-100' : ''}`}
        onClick={() => setIsComponentsSidebarOpen(!isComponentsSidebarOpen)}
        size={20}
        title="Open Components"
      />
    </aside>
  )
}
