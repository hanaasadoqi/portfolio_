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