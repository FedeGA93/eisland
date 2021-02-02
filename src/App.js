import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/NavBar/NavBar';
import '@fortawesome/fontawesome-free'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';


function App() {
  return (
    <>
      <NavBar/>
      <ItemListContainer/>
    </>
  );
}

export default App;
