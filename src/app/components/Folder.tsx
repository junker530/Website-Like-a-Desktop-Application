import { FolderIcon } from 'lucide-react'

export default function Folder({ folder, onClick }) {
  return (
    <div
      className="relative flex flex-col items-center justify-center p-4 cursor-pointer group"
      onClick={onClick}
    >
      <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 transition-all duration-300 group-hover:bg-white/20 group-hover:scale-105">
        <FolderIcon className="w-16 h-16 text-white" />
      </div>
      <span className="mt-2 text-sm font-medium text-white">{folder.name}</span>
      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 p-2 bg-black/70 text-white rounded-lg opacity-0 transition-opacity duration-200 pointer-events-none group-hover:opacity-100">
        <p className="text-xs">{folder.content}</p>
      </div>
    </div>
  )
}