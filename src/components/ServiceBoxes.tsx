import React from 'react'
import { Globe, Smartphone, Headphones, Video, Zap } from 'lucide-react'

const ServiceBoxes: React.FC = () => {
    return (
        <div className="relative w-full h-full flex items-center justify-center min-h-[400px]">
            {/* Container for the cross layout */}
            <div className="relative sm:size-[360px] size-[240px]">
                {/* Top Box - Web Dev */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="group bg-gray-900 rounded-xl p-5 sm:size-32 size-24 flex flex-col items-center justify-center shadow-lg hover:scale-110 hover:shadow-2xl hover:shadow-green-400/50 transition-all duration-300 cursor-pointer">
                        <div className="absolute inset-0 rounded-xl bg-green-400/0 group-hover:bg-green-400/10 transition-all duration-300"></div>
                        <Globe className="w-10 h-10 text-green-400 mb-2 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" strokeWidth={1.5} />
                        <span className="text-white text-xs font-medium text-center leading-tight group-hover:text-green-400 transition-colors duration-300">Web Dev</span>
                    </div>
                </div>

                {/* Left Box - App Dev */}
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2">
                    <div className="group bg-gray-900 rounded-xl p-5 sm:size-32 size-24 flex flex-col items-center justify-center shadow-lg hover:scale-110 hover:shadow-2xl hover:shadow-pink-400/50 transition-all duration-300 cursor-pointer">
                        <div className="absolute inset-0 rounded-xl bg-pink-400/0 group-hover:bg-pink-400/10 transition-all duration-300"></div>
                        <Smartphone className="w-10 h-10 text-pink-400 mb-2 group-hover:scale-125 group-hover:-rotate-12 transition-all duration-300" strokeWidth={1.5} />
                        <span className="text-white text-xs font-medium text-center leading-tight group-hover:text-pink-400 transition-colors duration-300">App Dev</span>
                    </div>
                </div>

                {/* Center Box - Lightning */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                    <div className="group bg-gray-900 rounded-xl p-5 sm:size-32 size-24 flex flex-col items-center justify-center shadow-lg relative hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/70 transition-all duration-300 cursor-pointer">
                        {/* Purple glow effect */}
                        <div className="absolute inset-0 rounded-xl bg-purple-500 opacity-40 blur-2xl animate-pulse group-hover:opacity-60 group-hover:blur-3xl transition-all duration-300"></div>
                        <Zap className="w-12 h-12 text-white relative z-10 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" fill="white" />
                    </div>
                </div>

                {/* Right Box - Tech Support */}
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2">
                    <div className="group bg-gray-900 rounded-xl p-5 sm:size-32 size-24 flex flex-col items-center justify-center shadow-lg hover:scale-110 hover:shadow-2xl hover:shadow-teal-400/50 transition-all duration-300 cursor-pointer">
                        <div className="absolute inset-0 rounded-xl bg-teal-400/0 group-hover:bg-teal-400/10 transition-all duration-300"></div>
                        <Headphones className="w-10 h-10 text-teal-400 mb-2 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" strokeWidth={1.5} />
                        <span className="text-white text-xs font-medium text-center leading-tight group-hover:text-teal-400 transition-colors duration-300">Tech Support</span>
                    </div>
                </div>

                {/* Bottom Box - Media */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                    <div className="group bg-gray-900 rounded-xl p-5 sm:size-32 size-24 flex flex-col items-center justify-center shadow-lg hover:scale-110 hover:shadow-2xl hover:shadow-green-400/50 transition-all duration-300 cursor-pointer">
                        <div className="absolute inset-0 rounded-xl bg-green-400/0 group-hover:bg-green-400/10 transition-all duration-300"></div>
                        <Video className="w-10 h-10 text-green-400 mb-2 group-hover:scale-125 group-hover:-rotate-12 transition-all duration-300" strokeWidth={1.5} />
                        <span className="text-white text-xs font-medium text-center leading-tight group-hover:text-green-400 transition-colors duration-300">Media</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceBoxes

