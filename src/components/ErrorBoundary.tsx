import React, { ErrorInfo } from 'react';

interface ErrorBoundaryProps {
    children: React.ReactNode;
}

interface ErrorBoundaryState {
    hasError: boolean;
    error: Error | null;
    errorInfo: ErrorInfo | null;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = {
            hasError: false,
            error: null,
            errorInfo: null,
        };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        this.setState({
            hasError: true,
            error,
            errorInfo,
        });
        // You can also log the error to an error reporting service here
    }

    render() {
        if (this.state.hasError) {
            // You can customize the error UI here
            return (
                <div>
                    <h1>Something went wrong.</h1>
                    <p>{this.state.error?.toString()}</p>
                    <p>{this.state.errorInfo?.componentStack}</p>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;