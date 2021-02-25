import React, { useContext } from "react";
import {
    MDBInput,
    MDBIcon,
    MDBSideNavItem,
    MDBSideNavCat,
    MDBSideNavNav,
    MDBSideNav
} from "mdbreact";
import { ContextoNavbar } from "../contexts/contextNavbar";

const SideNav = () => {

    const { toggleStateA } = useContext(ContextoNavbar);

    return (
        <MDBSideNav
            logo="https://mdbootstrap.com/img/logo/mdb-transparent.png"
            triggerOpening={toggleStateA}
            // breakWidth={breakWidth}
            bg="https://mdbootstrap.com/img/Photos/Others/sidenav4.jpg"
            mask="strong"
            fixed
        >
            <MDBSideNavNav>

                {/* CATEGORIAS */}
                <MDBSideNavCat
                    name="Administración"
                    id="administracion"
                    icon="toolbox"
                >
                    <MDBSideNavItem>
                        <MDBIcon icon="tags" style={{ marginRight: '8px' }} />
                        Categorías
                    </MDBSideNavItem>
                    <MDBSideNavItem>
                        <MDBIcon icon="truck-loading" style={{ marginRight: '8px' }} />
                        Proveedores
                    </MDBSideNavItem>
                    <MDBSideNavItem>
                        <MDBIcon icon="address-book" style={{ marginRight: '8px' }} />
                        Clientes
                    </MDBSideNavItem>
                    <MDBSideNavItem>
                        <MDBIcon icon="users" style={{ marginRight: '8px' }} />
                        Usuarios
                    </MDBSideNavItem>
                </MDBSideNavCat>

                {/* PRODUCTOS */}
                <MDBSideNavCat
                    name="Productos"
                    id="productos"
                    icon="pallet"
                >
                    <MDBSideNavItem>
                        <MDBIcon icon="boxes" style={{ marginRight: '8px' }} />
                        Mis Productos
                    </MDBSideNavItem>
                    <MDBSideNavItem>
                        <MDBIcon icon="scanner" style={{ marginRight: '8px' }} />
                        Nuevo Producto
                    </MDBSideNavItem>
                    <MDBSideNavItem>
                        <MDBIcon icon="file-invoice-dollar" style={{ marginRight: '8px' }} />
                        Más Vendidos
                    </MDBSideNavItem>
                </MDBSideNavCat>

                <MDBSideNavCat
                    name="Compras"
                    id="compras"
                    icon="shopping-bag"
                >
                    <MDBSideNavItem>
                        <MDBIcon icon="cart-plus" style={{ marginRight: '8px' }} />
                        Nueva Compra
                    </MDBSideNavItem>
                    <MDBSideNavItem>
                        <MDBIcon icon="receipt" style={{ marginRight: '8px' }} />
                        Historial de Compras
                    </MDBSideNavItem>
                </MDBSideNavCat>
                
                <MDBSideNavCat
                    name="Ventas"
                    id="ventas"
                    icon="hand-holding-usd"
                >
                    <MDBSideNavItem>
                        <MDBIcon icon="hand-holding-box" style={{ marginRight: '8px' }} />
                        Nueva Venta
                    </MDBSideNavItem>
                    <MDBSideNavItem>
                        <MDBIcon icon="file-chart-line" style={{ marginRight: '8px' }} />
                        Historial de Ventas
                    </MDBSideNavItem>
                </MDBSideNavCat>

                <MDBSideNavCat
                    name="Almacenes"
                    id="almacenes"
                    icon="warehouse"
                >
                    <MDBSideNavItem>
                        <MDBIcon icon="warehouse-alt" style={{ marginRight: '8px' }} />
                        Nuevo Almacen
                    </MDBSideNavItem>
                    <MDBSideNavItem>
                        <MDBIcon icon="pallet" style={{ marginRight: '8px' }} />
                        Entrada a Almacen
                    </MDBSideNavItem>
                </MDBSideNavCat>

            </MDBSideNavNav>
        </MDBSideNav>
    )
}

export default SideNav;

// import React from "react";
// import { BrowserRouter as Router } from "react-router-dom";
// import { MDBInput, MDBNavbar, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon, MDBSideNavItem, MDBSideNavCat, MDBSideNavNav, MDBSideNav, MDBContainer } from "mdbreact";

// class DoubleNavigationPage extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             toggleStateA: false
//         };
//     }

//     handleToggleClickA = () => {
//         this.setState({
//             toggleStateA: !this.state.toggleStateA
//         });
//     };

//     render() {
//         const mainStyle = {
//             paddingTop: "5rem"
//         };

//         const specialCaseNavbarStyles = {
//             WebkitBoxOrient: "horizontal",
//             flexDirection: "row"
//         };

//         return (
//             <Router>
//                 <div className="mdb-skin">
//                     <MDBSideNav
//                         logo="https://mdbootstrap.com/img/logo/mdb-transparent.png"
//                         triggerOpening={this.state.toggleStateA}
//                         bg="https://mdbootstrap.com/img/Photos/Others/sidenav4.jpg"
//                         mask="strong"
//                         hidden
//                     >
//                         <li>
//                             <ul className="social">
//                                 <li>
//                                     <a href="#!">
//                                         <MDBIcon fab icon="facebook-f" />
//                                     </a>
//                                 </li>
//                                 <li>
//                                     <a href="#!">
//                                         <MDBIcon fab icon="pinterest" />
//                                     </a>
//                                 </li>
//                                 <li>
//                                     <a href="#!">
//                                         <MDBIcon fab icon="google-plus-g" />
//                                     </a>
//                                 </li>
//                                 <li>
//                                     <a href="#!">
//                                         <MDBIcon fab icon="twitter" />
//                                     </a>
//                                 </li>
//                             </ul>
//                         </li>
//                         <MDBInput
//                             type="text"
//                             hint="Search"
//                             style={{
//                                 color: "#fff",
//                                 padding: "0 10px 8px 30px",
//                                 boxSizing: "border-box"
//                             }}
//                         />
//                         <MDBSideNavNav>
//                             <MDBSideNavCat
//                                 name="Submit blog"
//                                 id="submit-blog-cat"
//                                 icon="chevron-right"
//                             >
//                                 <MDBSideNavItem>Submit listing</MDBSideNavItem>
//                                 <MDBSideNavItem>Registration form</MDBSideNavItem>
//                             </MDBSideNavCat>
//                             <MDBSideNavCat
//                                 iconRegular
//                                 name="Instruction"
//                                 id="instruction-cat"
//                                 icon="hand-pointer"
//                             >
//                                 <MDBSideNavItem>For bloggers</MDBSideNavItem>
//                                 <MDBSideNavItem>For authors</MDBSideNavItem>
//                             </MDBSideNavCat>
//                             <MDBSideNavCat name="About" id="about-cat" icon="eye">
//                                 <MDBSideNavItem>Instruction</MDBSideNavItem>
//                                 <MDBSideNavItem>Monthly meetings</MDBSideNavItem>
//                             </MDBSideNavCat>
//                             <MDBSideNavCat
//                                 name="Contact me"
//                                 id="contact-me-cat"
//                                 icon="envelope"
//                             >
//                                 <MDBSideNavItem>FAQ</MDBSideNavItem>
//                                 <MDBSideNavItem>Write a message</MDBSideNavItem>
//                             </MDBSideNavCat>
//                         </MDBSideNavNav>
//                     </MDBSideNav>

//                 </div>
//             </Router>
//         );
//     }
// }

// export default DoubleNavigationPage;