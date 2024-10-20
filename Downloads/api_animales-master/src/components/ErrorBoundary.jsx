export const ErrorBoundary = ({ error, resetErrorBoundary }) => {
    return (
        <div role="alert">
            <p>Algo salió mal...</p>
            <pre>{error.message}</pre>
            <button onClick={resetErrorBoundary}>Volver a Intentar</button>
        </div>
    );
};
