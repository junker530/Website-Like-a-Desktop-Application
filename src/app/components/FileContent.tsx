import { XIcon } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function FileContent({ file, onClose }) {
  const [content, setContent] = useState<string>('')

  useEffect(() => {
    if (typeof file.content === 'string') {
      setContent(file.content)
    } else if (typeof file.content === 'object') {
      setContent(JSON.stringify(file.content, null, 2))
    } else {
      setContent('Unsupported content type')
    }
  }, [file])

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50" onClick={(e) => e.stopPropagation()}>
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-96 max-h-[80vh] bg-gray-900 rounded-lg shadow-2xl overflow-hidden border border-neon-blue animate-window-open">
        <div className="absolute inset-0 sparkle-bg" aria-hidden="true" />
        <div className="relative z-10">
          <div className="flex justify-between items-center p-4 bg-gray-800 border-b border-neon-blue">
            <h2 className="text-lg font-semibold text-neon-blue font-cyber">{file.name}</h2>
            <button 
              onClick={onClose} 
              className="text-neon-red hover:text-neon-pink transition-colors"
              aria-label="ファイルを閉じる"
            >
              <XIcon className="w-5 h-5" />
            </button>
          </div>
          <div className="p-4 overflow-auto max-h-[calc(80vh-4rem)]">
            <pre className="whitespace-pre-wrap text-neon-green font-mono text-sm">
              {content}
            </pre>
          </div>
        </div>
      </div>
    </div>
  )
}