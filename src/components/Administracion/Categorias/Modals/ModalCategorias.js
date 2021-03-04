import React, { useState } from 'react'
import {
    MDBBtn,
    MDBInput,
    MDBModal,
    MDBModalBody,
    MDBModalFooter,
    MDBModalHeader
} from 'mdbreact'

const ModalCategorias = ({ toggleModal, modalCategoria, tipoModal }) => {

    const [radio, setRadio] = useState(1);

    const onClickRadio = radio_clicked => () => {
        setRadio(radio_clicked)
    };

    return (
        <MDBModal className='navy-blue-bg-a' isOpen={modalCategoria} toggle={toggleModal}>

            <MDBModalHeader toggle={toggleModal}>
                Nueva Categoría
            </MDBModalHeader>

            <MDBModalBody>

                <form className='container'>

                    <p className="h5 text-center mb-5">Registre la nueva categoría</p>

                    <input type='hidden' value='' id='id_categoria' />

                    <MDBInput
                        label="Nombre de la Categoria"
                        type="text"
                        validate
                        error="error"
                        success="correcto"
                    />


                    <MDBInput
                        type="textarea"
                        rows="1"
                        label="Descripción de la categoría"
                    />

                    <MDBInput
                        onClick={onClickRadio(1)}
                        checked={radio === 1 ? true : false}
                        label='Activo'
                        type='radio'
                        id='estado_categoria_1'
                    />
                    
                    <MDBInput
                        onClick={onClickRadio(2)}
                        checked={radio === 2 ? true : false}
                        label='Inactivo'
                        type='radio'
                        id='estado_categoria_2'
                    />

                </form>

            </MDBModalBody>

            <MDBModalFooter>

                <MDBBtn outline color="primary">Guardar Categoría</MDBBtn>
                <MDBBtn outline color="danger" onClick={toggleModal}>Cerrar</MDBBtn>

            </MDBModalFooter>

        </MDBModal>

    )
}

export default ModalCategorias
