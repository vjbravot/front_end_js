import { useState } from "react";
import Modal from "./Modal.jsx";

function Portal() {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    return (
        <div>
            <h2>Ejemplo de Portal</h2>
            <button onClick={openModal}>Abrir Modal</button>
            {isOpen && (
                <Modal onClose={closeModal}>
                    <h3>Detalles del Doctor</h3>
                    <p>Acá puedes agregar comentarios del doctor</p>
                </Modal>
            )}
        </div>
    )
}

export default Portal;