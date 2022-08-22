import { Alert } from "antd";


interface ISuccessAlert {
    alertVis: boolean,
    setVisibleAlert: React.Dispatch<React.SetStateAction<boolean>>
}

const SuccessAlert : React.FC<ISuccessAlert> = ({alertVis, setVisibleAlert}) => {
    return (<>
         {alertVis && <Alert
                                    message="Успішно відредаговано!"
                                    type="success"
                                    closable
                                    onClose={() => {setVisibleAlert(false)}}
                                />}
    </>);
}

export default SuccessAlert;