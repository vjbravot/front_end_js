function WithExtraInfo(WrappedComponent){

    return function ExtraInfoComponent(props) {
        const extraInfo = "Este componente tendrá funcionalidad extendida";

        return (
            <div>
                <WrappedComponent {...props} />
                <p style= {{fontStyle: "italic", color: "#666"}}>{extraInfo}</p>
            </div>
        );
    };
}

export default WithExtraInfo;