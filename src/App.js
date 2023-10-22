import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Nav from './components/Nav';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
    <Nav/>
    <Outlet/>
    </>
  );
}

export default App;
