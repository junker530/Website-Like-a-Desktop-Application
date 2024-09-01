import { AppleIcon, WifiIcon, BatteryIcon, Clock } from 'lucide-react'

export default function Taskbar() {
  return (
    <div className="absolute top-0 left-0 right-0 bg-black/20 backdrop-blur-md text-white p-2 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <AppleIcon className="w-5 h-5" />
        <span className="font-semibold">Finder</span>
      </div>
      <div className="flex items-center space-x-4">
        <WifiIcon className="w-5 h-5" />
        <BatteryIcon className="w-5 h-5" />
        <Clock className="w-5 h-5" />
      </div>
    </div>
  )
}