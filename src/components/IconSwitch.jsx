const IconSwitch = ({ icon, onSwitch }) => {
    return (
        <div className="switch-view" onClick={onSwitch}>

            <i className="material-icons">
                {icon}
            </i>
        </div>
    );
};

export { IconSwitch }