import Spinner from 'react-bootstrap/Spinner';

const LoadingComp = () => {
    return (
        <div>
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </div>
    )
}

export default LoadingComp
