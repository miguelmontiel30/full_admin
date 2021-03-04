import { ProviderNavbar } from './contexts/Navigation/contextNavbar'
import { ContextoTema } from './contexts/Theming/contextTema'
import SideNav from './components/Navigation/SideNav';
import Navbar from './components/Navigation/Navbar'
import { Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import { useContext } from 'react';
import Categorias from './components/Administracion/Categorias/Categorias';

function App() {

  const { tema } = useContext(ContextoTema);
  // console.log(tema.nav__background_class);

  return (
    <>

      {/* <div className="navy-blue-skin dark-bg-admin"> */}
      <div className={tema.nav__background_class}>

        <ProviderNavbar>
          <SideNav />
          <Navbar />
        </ProviderNavbar>

        <Switch>
          <Dashboard path='/' exact />
          <Categorias path='/Categorias' />
        </Switch>

      </div>
    </>
  );
}

export default App;
