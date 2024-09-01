import { Skull, Wifi, Battery, Clock } from 'lucide-react'

export default function Taskbar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-neon-blue p-2 flex justify-between items-center border-t border-neon-blue z-50">
      <div className="flex items-center space-x-4">
        <Skull className="w-5 h-5 text-neon-pink" />
        <span className="font-cyber">CyberOS</span>
      </div>
      <div className="flex items-center space-x-4">
        <Wifi className="w-5 h-5" />
        <Battery className="w-5 h-5" />
        <Clock className="w-5 h-5" />
      </div>
    </div>
  )
}