import './Login.css';
import { Header } from '../../components/pages/Header/Header';
import { AutoForm } from '../../components/pages/AutoForm/AutoForm';
import validateLogin from '../../services/loginValidation';
import main_logo from '../../images/main_logo.jpeg';

const Login = () => {
    const fields:string[] = ["email","contraseña"]
    return(
        <main className='Login-Container'>
            <Header>Inicio de Sesion</Header>
            <p className='welcome-title'>BIENVENIDO A PETMAPS</p>
            <section className='main-container'>
                <AutoForm fields={fields} route='/home' validation={validateLogin} forgotPassword={true}/>
                <img src={main_logo} alt="main_logo" className='main-logo'/>
            </section>
        </main>
    )
}

export default Login;