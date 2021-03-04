import React, { useContext, useState } from 'react';
import {
    MDBCard,
    MDBCardBody,
    MDBCardHeader,
    MDBContainer,
    MDBIcon
} from 'mdbreact'
import { ContextoTema } from '../../../contexts/Theming/contextTema';
import CategoriasTable from './Tables/CategoriasTable';
import ModalCategorias from './Modals/ModalCategorias'

const Categorias = () => {

    const [modalCategoria, setModalCategoria] = useState(true);

    const { styles__cards } = useContext(ContextoTema);
    const { tema } = useContext(ContextoTema);

    const toggleModal = () => {
        setModalCategoria(!modalCategoria);
    }

    return (
        <MDBContainer style={{ margin: '10px', padding: '30px' }} fluid style={{ paddingTop: "5.5rem" }}>

            <MDBCard className={styles__cards.card_background}>

                <MDBCardHeader className="text-center">
                    <h3 style={{ color: tema.text_primary }} className='font-weight-bold text-uppercase pt-1'>
                        <MDBIcon icon='tags' size="sm" className='mr-2'></MDBIcon>
                        Categorias
                    </h3>
                    <p className='text-justify mt-4' style={{ color: tema.text_secondary }}>
                        En el módulo CATEGORÍA usted podrá registrar las categorías que servirán para agregar productos.
                        Además, puede actualizar los datos de las categorías,
                        realizar búsquedas de categorías o eliminarlas si así lo desea.
                </p>

                </MDBCardHeader>

                <MDBCardBody>

                    <CategoriasTable
                        toggleModal={toggleModal}
                    />

                </MDBCardBody>

            </MDBCard>

            <ModalCategorias
                modalCategoria={modalCategoria}
                toggleModal={toggleModal}
                // tipoModal={tipoModal}
            />

        </MDBContainer>
    )
}

export default Categorias;