import { FolderIcon } from 'lucide-react'

export default function Folder({ folder, onClick, onHover, cursorPosition }) {
  return (
    <div
      className="relative flex flex-col items-center justify-center w-24 h-24 cursor-pointer group"
      onClick={onClick}
      onMouseEnter={onHover}
      onMouseLeave={() => onHover(null)}
    >
      <div className="bg-gray-800 rounded-lg p-2 transition-all duration-300 group-hover:bg-gray-700 group-hover:scale-105 border border-neon-blue shadow-neon">
        <FolderIcon className="w-12 h-12 text-neon-blue" />
      </div>
      <span className="mt-1 text-xs font-medium text-neon-blue font-cyber truncate w-full text-center">
        {folder.name}
      </span>
    </div>
  )
}