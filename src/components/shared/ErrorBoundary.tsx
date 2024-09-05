import React, { Component, ErrorInfo, ReactNode } from 'react'

// Define the ErrorComponent type
type ErrorComponent = React.ComponentType<{
  error: Error
  errorInfo: ErrorInfo
}>

interface ErrorBoundaryProps {
  children: ReactNode
  errorComponent: ErrorComponent // Update this type to match the expected ErrorComponent
}

interface State {
  hasError: boolean
  error: Error | null
  errorInfo: ErrorInfo | null
}

class ErrorBoundary extends Component<ErrorBoundaryProps, State> {
  state: State = {
    hasError: false,
    error: null,
    errorInfo: null,
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error, errorInfo: null }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error', error, errorInfo)
    this.setState({ error, errorInfo })
  }

  render() {
    const { hasError, error, errorInfo } = this.state
    const { errorComponent: ErrorComponent, children } = this.props

    if (hasError && error && errorInfo) {
      return <ErrorComponent error={error} errorInfo={errorInfo} /> // Render the provided error component
    }

    return children
  }
}

export default ErrorBoundary
