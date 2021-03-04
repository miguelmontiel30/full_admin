import React, { useContext, useEffect, useMemo, useState } from 'react';
import { MDBBtn, MDBIcon, MDBInput, MDBInputGroup } from 'mdbreact';
import DataTable from 'react-data-table-component';
import Swal from 'sweetalert2';
import { ContextoTema } from '../../../../contexts/Theming/contextTema';
import data_categorias from '../../../../data/DataCategorias'

const CategoriasTable = ({toggleModal}) => {

    //ESTADOS DE LA TABLA QUE PERMITEN BUSCAR Y SETEAR LA DATA DE LA TABLA
    const [busqueda, setbusqueda] = useState('');
    const [tableData, setTableData] = useState([]);

    //CONTEXTOS PARA EL USO DEL TEMA DEL SISTEMA
    const { styles__dataTables } = useContext(ContextoTema);

    /**
     * FUNCION QUE PERMITE MANEJAR EL EVENTO DEL INPUT DE BUSQUEDA CUANDO ESTE CAMBIE
     * @param {*} e PARAMETRO QUE SE RECIBE DIRECTO DEL INPUT PARA MANEJARLO
     */
    const handleChange = async (e) => {

        //ACTUALIZAMOS EL ESTADO DEL TEXTO DE LA BUSQUEDA
        setbusqueda(e.target.value);

        //SI ESTA VACIO EL CAMPO DE BUSQUEDA QUE DEVUELVA TODA LA DATA DE LA TABLA
        if (busqueda == '') {
            setTableData(data_categorias);
        } else { //SI NO ESTA VACIO ENTONCES VAMOS A FILTRAR LOS DATOS 
            filtrarData();
        }

    }

    /**
     * FUNCION QUE PERMITE FILTRAR LOS DATOS DE LA TABLA DE CATEGORIAS
     * 
     */
    const filtrarData = () => {

        //VAMOS A RECORRER EL ARRAY DE LOS DATOS EN LA TABLA PARA BUSCAR EL TEXTO QUE SE INGRESO EN EL INPUT
        let datos_filtrados = tableData.filter((categoria) => {
            // console.log(categoria.nombre_categoria.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, ""));

            //SI ENCONTRO COINCIDENCIA DE LA BUSQUEDA CON LA CATEGORIA ACTUAL REGRESA EL ITEM DE CATEGORIA
            if (
                categoria.nombre_categoria.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").includes(busqueda.toLowerCase())
            ) {
                // console.log(categoria);
                return categoria;
            }
        });

        //  SETEAMOS LA DATA CON LOS DATOS ENCONTRADOS CON LA BUSQUEDA
        setTableData(datos_filtrados);
    };

    //USAMOS PARA CARGAR LA DATA UNA VEZ QUE HAYA CARGADO POR PRIMERA VEZ LA INTERFAZ
    useEffect(() => {

        //SI NO EXISTEN DATOS DE BUSUQEDA ENTONCES CARGAMOS TODA LA DATA
        if (busqueda == '') {
            setTableData(data_categorias);
        }
        // console.log(data_categorias);        
    }, [busqueda])

    //COMPONENTE DE LA BARRA DE BUSQUEDA PARA LA TABLA
    const barraBusqueda = useMemo(() => {

        return (


            <div className="col-12 p-0 align-items-center d-md-flex justify-content-md-end">

                <div className='col-sm-12 col-md-4'>
                    <MDBInput
                        type="text"
                        hint="Buscar Categoria"
                        value={busqueda}
                        onChange={handleChange}
                    />
                </div>

                <div className='col-sm-12 col-md-3'>
                    <MDBBtn outline color='primary' className='btn-md btn-block' onClick={toggleModal}>
                        <MDBIcon far icon='plus' className='mr-2' />
                        Nueva Categoría
                    </MDBBtn>
                </div>

            </div>

        )
    });

    //COMPONENTE QUE MUESTRA QUE NO SE HAN ENCONTRADO DATOS EN LA BUSQUEDA
    const emptyData = useMemo(() => {
        return (
            <>
                {/* <img src={'images/vacio.png'}/> */}
                <p className='h5 font-weight-bold' >No se encontró ningún elemento.</p>
            </>
        )
    });

    const columns = useMemo(() => [
        {
            name: 'ID',
            selector: 'id_categoria',
            sortable: true,
            center: true,
            width: '70px',
        },
        {
            name: 'Nombre',
            selector: 'nombre_categoria',
            sort: true,
            center: true,
            width: '270px',
            minWidth: '270px'
            // maxWidth: '270px',
        },
        {
            name: 'Descripción',
            selector: 'descripcion_categoria',
            expandableRows: true,
            center: true,
            width: '270px',
            minWidth: '200px'
        },
        {
            name: 'Editar',
            cell: (row) =>
                <button
                    id={row.id_categoria}
                    onClick={() => editarCategoria(row.id_categoria)}
                    className={styles__dataTables.button_edit_class}>
                    <MDBIcon far icon="edit" className='mr-2' />
                    Editar
                </button>,
            center: true,
            minWidth: '160px'
        },
        {
            name: 'Eliminar',
            cell: (row) =>
                <button id={row.id_categoria}
                    onClick={() => eliminarCategoria(row.id_categoria)}
                    className={styles__dataTables.button_delete_class}>
                    <MDBIcon far icon="trash-alt" className='mr-2' />
                    Eliminar
                </button>
            ,
            center: true,
            minWidth: '180px'
        }
    ]);

    const editarCategoria = (id_categoria) => {

        let categoria = data_categorias.filter((categoria) => {
            if (categoria.id_categoria == id_categoria) {
                return categoria.nombre_categoria
            }
        });

        let title = '¿Quiere editar la categoria ' + categoria[0].nombre_categoria + '?';

        console.log(categoria);

        Swal.fire(
            {
                title: title,
                icon: 'question'
            }
        );
    };

    const eliminarCategoria = (id_categoria) => {

        let datos_categoria = data_categorias.filter((categoria) => {
            if (categoria.id_categoria == id_categoria) {
                return categoria.nombre_categoria
            }
        });

        let title = '¿Quiere eliminar la categoria ' + datos_categoria[0].nombre_categoria + '?';

        // console.log(categoria);

        Swal.fire(
            {
                title: title,
                icon: 'question'
            }
        );
    };

    const paginacionOpciones = {
        rowsPerPageText: 'Filas por página',
        rangeSeparatorText: 'de',
        selectAllRowsItem: true,
        selectAllRowsItemText: 'Todos',
    }

    return (

        <DataTable
            title='Categorias en el sistema'
            columns={columns}
            data={tableData}
            fixedHeader
            pagination
            paginationComponentOptions={paginacionOpciones}
            highlightOnHover
            theme={styles__dataTables.theme}
            subHeader
            subHeaderComponent={barraBusqueda}
            noDataComponent={emptyData}
        />

    );
}

export default CategoriasTable
