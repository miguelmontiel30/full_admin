import { MDBBtn, MDBDropdown, MDBDropdownItem, MDBDropdownMenu, MDBDropdownToggle, MDBIcon, MDBNavbar, MDBNavbarNav, MDBNavItem, MDBNavLink } from 'mdbreact'
import React, { useState, useContext } from 'react'
import { ContextoNavbar } from './../contexts/contextNavbar'

const Navbar = () => {

    //UTILIZAMOS LOS CONTEXTOS PARA LAS FUNCIONES Y ESTILOS DE LA NAVBAR
    const { navStyle } = useContext(ContextoNavbar);
    const { handleToggleClickA } = useContext(ContextoNavbar);
    const { specialCaseNavbarStyles } = useContext(ContextoNavbar);

    return (

        <MDBNavbar style={navStyle} double expand="md" fixed="top" scrolling>

            <MDBNavbarNav left>

                <MDBNavItem>
                    <div
                        onClick={handleToggleClickA}
                        key="sideNavToggleA"
                        style={{
                            lineHeight: "32px",
                            marginRight: "1em",
                            verticalAlign: "middle"
                        }}
                    >
                        <MDBIcon icon="bars" color="white" size="2x" />
                    </div>
                </MDBNavItem>

                <MDBNavItem c
                    className="d-none d-md-inline text-uppercase font-weight-bold"
                    style={{ paddingTop: 5 }}>
                    Full Admin
                </MDBNavItem>

            </MDBNavbarNav>

            <MDBNavbarNav right style={specialCaseNavbarStyles}>

                <MDBNavItem>
                    <MDBDropdown>
                        <MDBDropdownToggle nav caret>
                            <MDBIcon icon="bell mr-2" />
                            <div className="d-none d-md-inline">Notificaciones</div>
                        </MDBDropdownToggle>
                        <MDBDropdownMenu right>
                            <MDBDropdownItem href="#!">Notificacion N</MDBDropdownItem>
                        </MDBDropdownMenu>
                    </MDBDropdown>
                </MDBNavItem>

                <MDBNavItem>
                    <MDBDropdown>
                        <MDBDropdownToggle nav caret>
                            <MDBIcon icon="user mr-2" />
                            <div className="d-none d-md-inline">Perfil</div>
                        </MDBDropdownToggle>
                        <MDBDropdownMenu right>
                            <MDBDropdownItem href="#!">Mi Perfil</MDBDropdownItem>
                            <MDBDropdownItem href="#!">Cerrar Sesión</MDBDropdownItem>
                        </MDBDropdownMenu>
                    </MDBDropdown>
                </MDBNavItem>

                <MDBNavItem>
                    <MDBBtn outline color="dark" size="sm">
                        Modo Oscuro
                        <MDBIcon icon="moon" className="ml-1" />
                    </MDBBtn>
                </MDBNavItem>

            </MDBNavbarNav>
        </MDBNavbar>
    );
}

export default Navbar
