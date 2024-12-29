import TransformableEventList from "../components/TransformableEventList.jsx"

function TransformableEventView() {
    return (
        <div>
            <h1>Transformación de elementos</h1>
            <p>Haz click en un elemento para cambiar su estado</p>
            <TransformableEventList />
        </div>
    )
}

export default TransformableEventView;