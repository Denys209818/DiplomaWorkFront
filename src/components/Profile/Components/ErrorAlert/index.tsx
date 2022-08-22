import { Alert } from "antd";


interface IErrorAlert {
    error?: string, 
    setError: React.Dispatch<React.SetStateAction<string|undefined>>
}

const ErrorAlert: React.FC<IErrorAlert> = ({error, setError}) => {
    return (<>{error && error.length > 0  && <Alert
        message="Помилка редагування"
        description={error}
        type="error"
        closable
        onClose={() => {
            if(setError){

                setError("")
            }
        }}
    />}</>);
}

export default ErrorAlert;