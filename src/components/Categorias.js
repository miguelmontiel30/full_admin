import { MDBCard, MDBContainer } from 'mdbreact'
import React, { useContext } from 'react';
import { ContextoTema } from '../contexts/contextTema';
import DataTable from 'react-data-table-component'

const Categorias = () => {

    const { styles__cards } = useContext(ContextoTema);

    const data = [
        {
            "id_categoria": 1,
            "nombre_categoria": "Aceros",
            "descripcion_categoria": "Aceros Definitivo",
            "estado": true
        },
        {
            "id_categoria": 2,
            "nombre_categoria": "Tornillos",
            "descripcion_categoria": "Tornillería",
            "estado": true
        },
        {
            "id_categoria": 9,
            "nombre_categoria": "Herraje",
            "descripcion_categoria": "Sin Descripción",
            "estado": true
        },
        {
            "id_categoria": 11,
            "nombre_categoria": "Coches",
            "descripcion_categoria": "Sin Descripcion",
            "estado": true
        },
        {
            "id_categoria": 12,
            "nombre_categoria": "Iluminación",
            "descripcion_categoria": "Alumbrado",
            "estado": true
        },
        {
            "id_categoria": 1,
            "nombre_categoria": "Aceros",
            "descripcion_categoria": "Aceros Definitivo",
            "estado": true
        },
        {
            "id_categoria": 2,
            "nombre_categoria": "Tornillos",
            "descripcion_categoria": "Tornillería",
            "estado": true
        },
        {
            "id_categoria": 9,
            "nombre_categoria": "Herraje",
            "descripcion_categoria": "Sin Descripción",
            "estado": true
        },
        {
            "id_categoria": 11,
            "nombre_categoria": "Coches",
            "descripcion_categoria": "Sin Descripcion",
            "estado": true
        },
        {
            "id_categoria": 12,
            "nombre_categoria": "Iluminación",
            "descripcion_categoria": "Alumbrado",
            "estado": true
        },
        {
            "id_categoria": 1,
            "nombre_categoria": "Aceros",
            "descripcion_categoria": "Aceros Definitivo",
            "estado": true
        },
        {
            "id_categoria": 2,
            "nombre_categoria": "Tornillos",
            "descripcion_categoria": "Tornillería",
            "estado": true
        },
        {
            "id_categoria": 9,
            "nombre_categoria": "Herraje",
            "descripcion_categoria": "Sin Descripción",
            "estado": true
        },
        {
            "id_categoria": 11,
            "nombre_categoria": "Coches",
            "descripcion_categoria": "Sin Descripcion",
            "estado": true
        },
        {
            "id_categoria": 12,
            "nombre_categoria": "Iluminación",
            "descripcion_categoria": "Alumbrado",
            "estado": true
        }
    ];

    const columns = [
        {
            name: 'ID',
            selector: 'id_categoria',
            sortable: true,
        },
        {
            name: 'Nombre',
            selector: 'nombre_categoria',
            sortable: true,
        },
        {
            name: 'Descripción',
            selector: 'descripcion_categoria',
            sortable: true,
        }
    ];

    const paginacionOpciones = {
        rowsPerPageText: 'Filas por página',
        rangeSeparatorText: 'de',
        selectAllRowsItem: true,
        selectAllRowsItemText: 'Todos',
    }
    return (
        <MDBContainer fluid style={{ paddingTop: "5.5rem" }}>

            <MDBCard style={{ margin: '10px', padding: '15px' }} className={styles__cards.card_background}>

                <h2>Categorias</h2>
                <p>
                    En el módulo CATEGORÍA usted podrá registrar las categorías que servirán para agregar productos
                    y también podrá ver los productos que pertenecen a una categoría determinada. Además de lo antes
                    mencionado, puede actualizar los datos de las categorías, realizar búsquedas de categorías o eliminarlas si así lo desea.
                </p>

                <DataTable
                    // title='Categorias'
                    columns={columns}
                    data={data}
                    responsive
                    fixedHeader
                    fixedHeaderScrollHeight='200px'
                    pagination
                    paginationComponentOptions={paginacionOpciones}
                    highlightOnHover                    
                />

            </MDBCard>


        </MDBContainer>
    )
}

export default Categorias;
