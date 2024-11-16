function LoadingComponent() {
  return (
    // <div>
    //   <span className="absolute inset-0 z-50 flex items-center justify-center">
    //     <span className="flex flex-col items-center justify-center space-y-4">
    //       <span className="animate-spin rounded-full h-16 w-16 border-t-4 border-primary-500"></span>
    //       <span className="text-white text-sm">Loading content, please wait...</span>
    //     </span>
    //   </span>
    // </>
    // <div className="relative">
    // {/* {isLoading && ( */}
    <span className="absolute inset-0 flex items-center justify-center bg-white/50">
      <span>Loading...</span>
    </span>
    // {/* )} */}
    // {/* <div className={isLoading ? "invisible" : ""}>{actualContent}</div> */}
    // </div>

  )
}

export default LoadingComponent