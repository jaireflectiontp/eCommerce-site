import Alert from 'react-bootstrap/Alert';

const ErrorComp = (props) => {
    const { error, variant } = props
    return (
        <div>
            <Alert key={variant} variant={variant || 'info'}>
                {error}
            </Alert>
        </div>
    )
}

export default ErrorComp
