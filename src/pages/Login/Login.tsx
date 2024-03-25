import './Login.css';
import { Header } from '../../components/pages/Header/Header';

const Login = () => {
    return(
        <main className='Login-Container'>
            <Header>Inicio de Sesion</Header>
            <p className='welcome-title'>BIENVENIDO A PETMAPS</p>
        </main>
    )
}

export default Login;