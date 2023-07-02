import React, { FC } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAsterisk, faExclamationCircle, faMoon, faSun, faInfoCircle, faCheckCircle, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

interface TitleProps {
    message: string;
    type: string;
    isOpen: boolean;
}

 const ProcessAlert: FC<TitleProps> = ({ message, type, isOpen }) => {
    if (message === undefined) {
        console.error('ProcessAlert requires a \'message\' parameter with a message for the user.');
    }

    if (isOpen === undefined) {
        console.error('ProcessAlert requires an \'isOpen\' parameter that is true or false determining whether the alert is visible to the user.');
    }

    if (type === undefined) {
        console.warn('ProcessAlert recommends a \'type\' parameter with one of the following values: \'primary\', \'secondary\', \'light\', \'dark\', \'info\', \'success\', \'warning\', \'danger\', or \'none\'.')
    }

    const isOpenParam = (value: boolean) => isOpen ? isOpen : value;

    const getTheme = () => {
        let icon = <FontAwesomeIcon icon={faMoon} color='white' />;
        let color = type;
        let open = isOpenParam(true);

        switch (type) {
            case "none":
                open = isOpenParam(false);
                break;
            case "info":
                icon = <FontAwesomeIcon icon={faInfoCircle} color='blue' />;
                break;
            case "working":
                icon = <Spinner color="primary" size="sm" />;
                color = "primary";
                break;
            case "secondary":
                icon = <FontAwesomeIcon icon={faAsterisk} color='grey' />;
                break;
            case "success":
                icon = <FontAwesomeIcon icon={faCheckCircle} color='green' />;
                break;
            case "error":
                icon = <FontAwesomeIcon icon={faExclamationTriangle} color='red' />;
                break;
            case "warning":
                icon = <FontAwesomeIcon icon={faExclamationCircle} color='goldenrod' />;
                break;
            case "info":
                icon = <FontAwesomeIcon icon={faInfoCircle} color='teal' />;
                break;
            case "light":
                icon = <FontAwesomeIcon icon={faSun} color='black' />;
                break;
            case "dark":
                icon = <FontAwesomeIcon icon={faMoon} color='white' />;
                break;
            default:
                icon = <FontAwesomeIcon icon={faMoon} color='white' />;
                break;
        }

        return (
            <Alert key={color} variant={color}>
                {icon} {message}
            </Alert>
        )
    }

    return getTheme();
 }

export default ProcessAlert;
