import React from 'react'

interface ErrorFallbackProps {
  error: Error
  errorInfo: React.ErrorInfo
}

const ErrorFallback: React.FC<ErrorFallbackProps> = ({ error, errorInfo }) => {
  return (
    <div role="alert" className="rounded border border-red-500 bg-red-100 p-4">
      <h2 className="font-bold text-red-800">Something went wrong:</h2>
      <p className="text-red-600">{error.message}</p>
      <pre className="text-xs text-red-500">{errorInfo.componentStack}</pre>
    </div>
  )
}

export default ErrorFallback
