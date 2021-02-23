import { Switch } from 'react-router-dom';
import Main from './components/Main';
import Navbar from './components/Navbar'
import '@fortawesome/fontawesome-free/css/all.css';
import 'bootstrap-css-only/css/bootstrap.css';
import 'mdbreact/dist/css/mdb.css';

function App() {

  return (
    <>
      <header>
        <Navbar />
      </header>

      {/* <main> */}
      <main style={{ paddingTop: '4.9rem' }}>

        <Switch>
          <Main path='/' />
          {/* </main> */}
        </Switch>
      </main>
    </>
  );
}

export default App;
