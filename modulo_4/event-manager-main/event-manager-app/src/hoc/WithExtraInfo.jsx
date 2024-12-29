function WithExtraInfo(WrappedComponent){
    return function ExtraInfoComponent(props) {
        const extraInfo = "Este componente tiene funcionalidad extendida";

        return (
            <div>
                {/* Se renderiza el componente original */}
                <WrappedComponent {... props} />
                <p style = {{ fontStyle: "italic", color: "#666"}}></p>
            </div>
        )
    }
}


export default WithExtraInfo;