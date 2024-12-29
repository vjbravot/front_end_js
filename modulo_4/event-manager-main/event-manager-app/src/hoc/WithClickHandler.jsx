function WithClickHandler(WrappedComponent) {
    return function ClickHandlerComponent(props){
        const handleClick = () => {
            console.log(`Componente clickeado,: ${props.name}`)
        }

        return (
            <div onClick={handleClick}>
                <WrappedComponent {... props}/>
            </div>
        )
    }
}

export default WithClickHandler