import { ProviderNavbar } from './contexts/contextNavbar'
import SideNav from './components/SideNav';
import Navbar from './components/Navbar'
import { Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard';

function App() {

  return (
    <>

      <div className="white-skin">
      {/* <div className="navy-blue-skin dark-bg-admin"> */}

        <ProviderNavbar>
          <SideNav />
          <Navbar />
        </ProviderNavbar>

        <Switch>
          <Dashboard path='/' />
        </Switch>

      </div>

    </>
  );
}

export default App;
