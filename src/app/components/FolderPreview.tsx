import { FileIcon } from 'lucide-react'

export default function FolderPreview({ folder }) {
  return (
    <div className="absolute bottom-16 left-4 w-64 bg-gray-900 rounded-lg shadow-2xl overflow-hidden border border-neon-blue p-4">
      <h3 className="text-neon-blue font-cyber mb-2">{folder.name} の中身</h3>
      <ul className="space-y-2">
        {folder.files.map((file, index) => (
          <li key={index} className="flex items-center text-neon-green">
            <FileIcon className="w-4 h-4 mr-2" />
            <span className="font-cyber text-sm">{file.name}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}