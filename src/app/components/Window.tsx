import { XIcon } from 'lucide-react'

export default function Window({ folder, onClose }) {
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 bg-white/80 backdrop-blur-lg rounded-xl shadow-2xl overflow-hidden">
      <div className="flex justify-between items-center p-4 bg-gray-100/50">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <h2 className="text-lg font-semibold">{folder.name}</h2>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
          <XIcon className="w-5 h-5" />
        </button>
      </div>
      <div className="p-4">
        <p className="mb-4">{folder.content}</p>
        <a
          href={folder.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          コンテンツを見る
        </a>
      </div>
    </div>
  )
}