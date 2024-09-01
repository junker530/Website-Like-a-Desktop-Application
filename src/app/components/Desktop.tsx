'use client'

import { useState } from 'react'
import Folder from './Folder'
import Window from './Window'
import Taskbar from './Taskbar'
import CustomCursor from './CustomCursor'

const folders = [
  { id: 1, name: 'プロジェクト', content: 'プロジェクトに関する情報', url: 'https://example.com/projects' },
  { id: 2, name: 'ドキュメント', content: '重要なドキュメント', url: 'https://example.com/documents' },
  { id: 3, name: '写真', content: '思い出の写真集', url: 'https://example.com/photos' },
]

export default function Desktop() {
  const [activeFolder, setActiveFolder] = useState(null)
  const [isWindowOpen, setIsWindowOpen] = useState(false)

  const handleFolderClick = (folder) => {
    setActiveFolder(folder)
    setIsWindowOpen(true)
  }

  const handleCloseWindow = () => {
    setIsWindowOpen(false)
    setActiveFolder(null)
  }

  return (
    <div className="relative w-full h-screen bg-[url('/wallpaper.jpg')] bg-cover bg-center overflow-hidden">
      <div className="absolute inset-0 grid grid-cols-6 gap-4 p-4">
        {folders.map((folder) => (
          <Folder key={folder.id} folder={folder} onClick={() => handleFolderClick(folder)} />
        ))}
      </div>

      {isWindowOpen && activeFolder && (
        <Window folder={activeFolder} onClose={handleCloseWindow} />
      )}

      <Taskbar />
      <CustomCursor />
    </div>
  )
}