import { ProviderNavbar } from './contexts/contextNavbar'
import { ContextoTema } from './contexts/contextTema'
import SideNav from './components/SideNav';
import Navbar from './components/Navbar'
import { Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import { useContext } from 'react';
import Categorias from './components/Categorias';

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
