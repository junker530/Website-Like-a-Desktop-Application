import { useState, useRef, useEffect } from 'react'
import { XIcon, FileIcon } from 'lucide-react'
import Image from 'next/image'

export default function Window({ folder, onClose, onFileClick, cursorPosition }) {
  const [hoveredFile, setHoveredFile] = useState(null)
  const fileRefs = useRef([])

  useEffect(() => {
    fileRefs.current = fileRefs.current.slice(0, folder.files.length)
  }, [folder.files])

  useEffect(() => {
    const checkHover = () => {
      let isHovering = false
      fileRefs.current.forEach((ref, index) => {
        if (ref && ref.getBoundingClientRect) {
          const rect = ref.getBoundingClientRect()
          if (
            cursorPosition.x >= rect.left &&
            cursorPosition.x <= rect.right &&
            cursorPosition.y >= rect.top &&
            cursorPosition.y <= rect.bottom
          ) {
            setHoveredFile(folder.files[index])
            isHovering = true
          }
        }
      })
      if (!isHovering) {
        setHoveredFile(null)
      }
    }

    checkHover()
  }, [cursorPosition, folder.files])

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50" onClick={(e) => e.stopPropagation()}>
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-96 bg-gray-900 rounded-lg shadow-2xl overflow-hidden border border-neon-blue animate-window-open">
        <div className="absolute inset-0 sparkle-bg" aria-hidden="true" />
        <div className="relative z-10">
          <div className="flex justify-between items-center p-4 bg-gray-800 border-b border-neon-blue">
            <h2 className="text-lg font-semibold text-neon-blue font-cyber">{folder.name}</h2>
            <button 
              onClick={onClose} 
              className="text-neon-red hover:text-neon-pink transition-colors"
              aria-label="ウィンドウを閉じる"
            >
              <XIcon className="w-5 h-5" />
            </button>
          </div>
          <div className="p-4 space-y-4">
            <p className="text-neon-green font-cyber">{folder.content}</p>
            <div className="relative w-full h-48 rounded-lg overflow-hidden">
              <Image
                src={folder.gifUrl}
                alt={`${folder.name}のイメージ`}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="space-y-2">
              <h3 className="text-neon-blue font-cyber">ファイル一覧</h3>
              {folder.files.map((file, index) => (
                <button
                  key={index}
                  ref={el => fileRefs.current[index] = el}
                  className={`flex items-center w-full p-2 rounded-md transition-colors ${
                    hoveredFile === file ? 'bg-gray-800' : 'hover:bg-gray-800'
                  }`}
                  onClick={() => onFileClick(file)}
                >
                  <FileIcon className="w-4 h-4 mr-2 text-neon-green" />
                  <span className="text-neon-green font-cyber text-sm">{file.name}</span>
                </button>
              ))}
            </div>
            <a
              href={folder.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full px-4 py-2 bg-neon-blue text-black font-bold rounded-lg hover:bg-neon-pink transition-colors font-cyber text-center"
            >
              コンテンツを見る
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}