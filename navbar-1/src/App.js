import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Logo from './components/Logo';
import Links from './components/Links';
import Button from './components/Button';

function App() {
  return (
    <div className='navbar' >
    <Logo />
    <Links/>
    <Button/>
   
    </div>
  );
}

export default App;
