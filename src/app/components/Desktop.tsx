'use client'

import { useState, useCallback } from 'react'
import Folder from './Folder'
import Window from './Window'
import Taskbar from './Taskbar'
import CustomCursor from './CustomCursor'
import FolderPreview from './FolderPreview'
import FileContent from './FileContent'

const folders = [
  { 
    id: 1, 
    name: 'プロジェクト', 
    content: 'サイバーパンクな未来のプロジェクト', 
    url: 'https://example.com/projects',
    files: [
      { name: 'project1.txt', content: 'プロジェクト1の詳細内容...' },
      { name: 'project2.txt', content: 'プロジェクト2の詳細内容...' },
      { name: 'cyberpunk_ideas.md', content: '# サイバーパンクアイデア\n\n1. 義体化\n2. ネットランナー\n3. メガコーポ' }
    ],
    gifUrl: '/gifs/cyberpunk-city.gif'
  },
  { 
    id: 2, 
    name: 'ハック', 
    content: '秘密のハッキングツール', 
    url: 'https://example.com/hacks',
    files: [
      { name: 'hack_tool.exe', content: 'バイナリデータ...' },
      { name: 'encryption.py', content: 'def encrypt(data):\n    # 暗号化ロジック\n    return encrypted_data' },
      { name: 'backdoor.sh', content: '#!/bin/bash\n# バックドアスクリプト' }
    ],
    gifUrl: '/gifs/hacking.gif'
  },
  { 
    id: 3, 
    name: 'ネットランナー', 
    content: '仮想世界への入り口', 
    url: 'https://example.com/netrunner',
    files: [
      { name: 'virtual_reality.exe', content: 'VR起動プログラム...' },
      { name: 'neural_link.dat', content: 'ニューラルリンクデータ...' },
      { name: 'cyberspace_map.jpg', content: '[画像データ]' }
    ],
    gifUrl: '/gifs/virtual-reality.gif'
  },
]

export default function Desktop() {
  const [activeFolder, setActiveFolder] = useState(null)
  const [isWindowOpen, setIsWindowOpen] = useState(false)
  const [previewFolder, setPreviewFolder] = useState(null)
  const [activeFile, setActiveFile] = useState(null)
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })

  const handleFolderClick = useCallback((folder) => {
    setActiveFolder(folder)
    setIsWindowOpen(true)
    setPreviewFolder(null)
    setActiveFile(null)
  }, [])

  const handleFolderHover = useCallback((folder) => {
    setPreviewFolder(folder)
  }, [])

  const handleCloseWindow = useCallback(() => {
    setIsWindowOpen(false)
    setActiveFolder(null)
    setActiveFile(null)
  }, [])

  const handleFileClick = useCallback((file) => {
    setActiveFile(file)
  }, [])

  const handleMouseMove = useCallback((e) => {
    setCursorPosition({ x: e.clientX, y: e.clientY })
  }, [])

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden" onMouseMove={handleMouseMove}>
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      <div className="absolute top-4 left-4 grid grid-cols-3 gap-8">
        {folders.map((folder) => (
          <Folder 
            key={folder.id} 
            folder={folder} 
            onClick={() => handleFolderClick(folder)}
            onHover={() => handleFolderHover(folder)}
            cursorPosition={cursorPosition}
          />
        ))}
      </div>

      {isWindowOpen && activeFolder && (
        <Window 
          folder={activeFolder} 
          onClose={handleCloseWindow} 
          onFileClick={handleFileClick}
          cursorPosition={cursorPosition}
        />
      )}

      {activeFile && (
        <FileContent file={activeFile} onClose={() => setActiveFile(null)} />
      )}

      {previewFolder && !isWindowOpen && (
        <FolderPreview folder={previewFolder} />
      )}

      <Taskbar />
      <CustomCursor position={cursorPosition} />
    </div>
  )
}