export default function Footer() {
  return (
    <footer id="footer" className="fixed bottom-0 left-0 right-0 h-12 bg-white border-t border-gray-200 flex items-center px-6 z-50">
      <div className="flex items-center gap-x-2">
        <div className="w-2 h-2 rounded-full bg-blue-500"></div>
        <span className="text-sm text-gray-600">production</span>
      </div>
    </footer>
  )
}
