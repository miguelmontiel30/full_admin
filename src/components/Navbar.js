function Navbar() {
    
    return (

        <nav className="navbar fixed-top navbar-expand-lg scrolling-navbar double-nav">

            <div className="float-left">
                <a href="#" data-activates="slide-out" className="button-collapse"><i className="fas fa-bars"></i></a>
            </div>

            <div className="breadcrumb-dn mr-auto">
                <p>Demo Ferretería</p>
            </div>

            <div className="d-flex change-mode">

                <ul className="nav navbar-nav nav-flex-icons ml-auto">

                    <li className="nav-item dropdown notifications-nav">

                        <a className="nav-link dropdown-toggle waves-effect" id="navbarDropdownMenuLink" data-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="false">
                            <span className="badge red">2</span> <i className="fas fa-bell"></i>
                            <span className="d-none d-md-inline-block">Notificaciones</span>
                        </a>

                        <div className="dropdown-menu dropdown-primary" aria-labelledby="navbarDropdownMenuLink">

                            <a className="dropdown-item" href="#">
                                <p className="m-0 p-0">
                                    <i className="far fa-money-bill-alt mr-2" aria-hidden="true"></i>
                        Nueva Orden de Compra Recibida al Almacén
                    </p>
                                <span className="text-muted"></span>
                                <i className="far fa-clock" aria-hidden="true"></i>
                                <span className="d-none d-md-inline-block">13 min</span>
                            </a>

                            <a className="dropdown-item d-flex flex-wrap" href="#">
                                <p className="m-0 p-0">
                                    <i className="far fa-money-bill-alt mr-2" aria-hidden="true"></i>
                        Existen <strong>10</strong> productos en stock minimo.
                    </p>
                                <span className="text-muted">
                                    <i className="far fa-clock" aria-hidden="true"></i>
                        33 min
                    </span>
                            </a>

                        </div>

                    </li>

                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle waves-effect" href="#" id="userDropdown" data-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="false">
                            <i className="fas fa-user"></i> <span className="clearfix d-none d-sm-inline-block">Perfil</span>
                        </a>
                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">
                            <a className="dropdown-item" href="#">Cerrar Sesión</a>
                            <a className="dropdown-item" href="#">Mi Cuenta</a>
                        </div>
                    </li>

                </ul>

                <div className="ml-auto mb-0 mr-3 change-mode-wrapper">
                    <button className="btn btn-outline-black btn-sm" id="dark-mode">Modo Obscuro</button>
                </div>

            </div>

        </nav>
    )
}

export default Navbar;
