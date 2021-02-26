import React, { useContext } from "react";
import {    
    MDBIcon,
    MDBSideNavItem,
    MDBSideNavCat,
    MDBSideNavNav,
    MDBSideNav
} from "mdbreact";
import { ContextoNavbar } from "../contexts/contextNavbar";
import {Link} from 'react-router-dom'

const SideNav = () => {

    const { toggleStateA } = useContext(ContextoNavbar);

    return (
        <MDBSideNav
            fixed
            logo="https://mdbootstrap.com/img/logo/mdb-transparent.png"
            bg="https://mdbootstrap.com/img/Photos/Others/sidenav4.jpg"
            triggerOpening={toggleStateA}
            mask="strong"
        >

            {/* CONTENEDOR DE LOS ITEMS DEL SIDEBAR */}
            <MDBSideNavNav>

                {/* CATEGORIAS */}
                <MDBSideNavCat
                    name="Administración"
                    id="administracion"
                    icon="toolbox"
                >
                    <Link  to='/Categorias'>
                        <MDBIcon icon="tags" style={{ marginRight: '8px' }} />
                        Categorías
                    </Link>
                    <Link to='/Categorias'>
                        <MDBIcon icon="truck-loading" style={{ marginRight: '8px' }} />
                        Proveedores
                    </Link>
                    <Link to='/Categorias'>
                        <MDBIcon icon="address-book" style={{ marginRight: '8px' }} />
                        Clientes
                    </Link>
                    <Link to='/Categorias'>
                        <MDBIcon icon="users" style={{ marginRight: '8px' }} />
                        Usuarios
                    </Link>
                </MDBSideNavCat>

                {/* PRODUCTOS */}
                <MDBSideNavCat
                    name="Productos"
                    id="productos"
                    icon="pallet"
                >
                    <Link to='/Categorias'>
                        <MDBIcon icon="boxes" style={{ marginRight: '8px' }} />
                        Mis Productos
                    </Link>
                    <Link to='/Categorias'>
                        <MDBIcon icon="scanner" style={{ marginRight: '8px' }} />
                        Nuevo Producto
                    </Link>
                    <Link to='/Categorias'>
                        <MDBIcon icon="file-invoice-dollar" style={{ marginRight: '8px' }} />
                        Más Vendidos
                    </Link>
                </MDBSideNavCat>

                {/* COMPRAS */}
                <MDBSideNavCat
                    name="Compras"
                    id="compras"
                    icon="shopping-bag"
                >
                    <Link to='/Categorias'>
                        <MDBIcon icon="cart-plus" style={{ marginRight: '8px' }} />
                        Nueva Compra
                    </Link>
                    <Link to='/Categorias'>
                        <MDBIcon icon="receipt" style={{ marginRight: '8px' }} />
                        Historial de Compras
                    </Link>
                </MDBSideNavCat>

                {/* VENTAS */}
                <MDBSideNavCat
                    name="Ventas"
                    id="ventas"
                    icon="hand-holding-usd"
                >
                    <Link to='/Categorias'>
                        <MDBIcon icon="hand-holding-box" style={{ marginRight: '8px' }} />
                        Nueva Venta
                    </Link>
                    <Link to='/Categorias'>
                        <MDBIcon icon="file-chart-line" style={{ marginRight: '8px' }} />
                        Historial de Ventas
                    </Link>
                </MDBSideNavCat>

                {/* ALMACES */}
                <MDBSideNavCat
                    name="Almacenes"
                    id="almacenes"
                    icon="warehouse"
                >
                    <Link to='/Categorias'>
                        <MDBIcon icon="warehouse-alt" style={{ marginRight: '8px' }} />
                        Nuevo Almacen
                    </Link>
                    <Link to='/Categorias'>
                        <MDBIcon icon="pallet" style={{ marginRight: '8px' }} />
                        Entrada a Almacen
                    </Link>
                </MDBSideNavCat>

            </MDBSideNavNav>
            {/* CONTENEDOR DE LOS ITEMS DEL SIDEBAR */}

        </MDBSideNav>
    )
}

export default SideNav;