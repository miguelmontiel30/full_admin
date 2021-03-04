import {
    MDBBtn,
    MDBDropdown,
    MDBDropdownItem,
    MDBDropdownMenu,
    MDBDropdownToggle,
    MDBIcon,
    MDBNavbar,
    MDBNavbarNav,
    MDBNavItem,
    MDBNavLink
} from 'mdbreact'
import React, { useContext } from 'react'
import { ContextoTema } from '../../contexts/Theming/contextTema';
import { ContextoNavbar } from '../../contexts/Navigation/contextNavbar'

const Navbar = () => {

    //UTILIZAMOS LOS CONTEXTOS PARA LAS FUNCIONES Y ESTILOS DE LA NAVBAR    
    const { handleToggleClickA } = useContext(ContextoNavbar);
    const { specialCaseNavbarStyles } = useContext(ContextoNavbar);

    //MODO OSCURO
    const { styles__button_toggleDM } = useContext(ContextoTema);
    const { toggleDarkMode } = useContext(ContextoTema);

    return (

        <MDBNavbar double expand="md" fixed="top" scrolling>

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

                <MDBNavItem
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
                    <MDBBtn onClick={toggleDarkMode} outline color={styles__button_toggleDM.btn_togleDM} size="sm">
                        {styles__button_toggleDM.btn_text_togleDM}
                        <MDBIcon icon={styles__button_toggleDM.btn_icon_togleDM} className="ml-1" />
                    </MDBBtn>
                </MDBNavItem>

            </MDBNavbarNav>

        </MDBNavbar>
    );
}

export default Navbar
