


// 'use client'


// import React, { useState, useEffect } from 'react'

// const Loading: React.FC = () => {
//   const [isMounted, setIsMounted] = useState(false)

//   // Ensure component only mounts client-side, avoiding SSR-related issues
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsMounted(true)
//     }, 100) // Delay to allow hydration to finish smoothly without flash

//     return () => clearTimeout(timer)
//   }, [])

//   // Avoid rendering anything during SSR to prevent hydration issues
//   if (!isMounted) {
//     return null
//   }

//   return (
//   <div className="fixed inset-0 h-screen w-screen bg-black bg-opacity-50 flex items-center justify-center">
//     <div className="h-full w-4/5 max-w-7xl bg-white flex items-center justify-center p-6">
//       <div className="space-y-6 w-full animate-pulse-slow">
//         <div className="flex items-center w-full space-x-3">
//           <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32"></div>
//           <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
//           <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 flex-1"></div>
//         </div>

//         <div className="flex items-center w-full space-x-3 max-w-[480px]">
//           <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 flex-1"></div>
//           <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
//         </div>

//         <div className="flex items-center w-full space-x-3 max-w-[400px]">
//           <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 flex-1"></div>
//           <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-80"></div>
//         </div>

//         <div className="flex items-center w-full space-x-3 max-w-[480px]">
//           <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 flex-1"></div>
//           <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
//         </div>

//         <div className="flex items-center w-full space-x-3 max-w-[440px]">
//           <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-32"></div>
//           <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
//           <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 flex-1"></div>
//         </div>

//         <div className="flex items-center w-full space-x-3 max-w-[360px]">
//           <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 flex-1"></div>
//           <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-80"></div>
//         </div>

//         <span className="sr-only">Loading...</span>
//       </div>
//     </div>
//   </div>
//   )
// }

// export default Loading
function LoadingComponent() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-70 backdrop-blur-sm">
      <div className="flex flex-col items-center justify-center space-y-4">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-primary-500"></div>
        <p className="text-white text-sm">Loading content, please wait...</p>
      </div>
    </div>
  )
}

export default LoadingComponent