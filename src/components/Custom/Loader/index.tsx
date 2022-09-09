import "./styles/style.css";

const Loader: React.FC = () => {
    return (<div className="modal-loader">
    <div className="lds-roller"><div></div><div></div>
    <div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>
    );
}

export default Loader;