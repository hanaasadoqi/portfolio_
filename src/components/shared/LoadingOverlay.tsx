export function LoadingOverlay() {
  return (
    <div className="absolute rounded-2xl inset-0 z-50 flex items-center justify-center bg-primary-200 opacity-30 backdrop-blur-sm">
      <div className="opacity-100 flex flex-col items-center justify-center space-y-4">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-primary-500"></div>
        <p className="text-2xl text-gray-900">Loading content, please wait...</p>
      </div>
    </div>
  )
}