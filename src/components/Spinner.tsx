import { Spinner as SpinnerBootstrap } from 'react-bootstrap'

export const Spinner = () => {
    return (
        <div className="spinner-custom">
            <SpinnerBootstrap animation="border"/>
        </div>
    );
}