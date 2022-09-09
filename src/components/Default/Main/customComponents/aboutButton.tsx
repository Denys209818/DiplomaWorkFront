import { Link } from "react-router-dom";


const AboutButton: React.FC = () => 
{
    return (<>
    
        <Link to="/auth/login" target="_self"
         className="button-53" role="button">Долучитися до волонтерства</Link>
    </>);
}

export default AboutButton;

