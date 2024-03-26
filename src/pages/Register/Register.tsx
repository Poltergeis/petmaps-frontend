import './Register.css'
import { Header } from '../../components/pages/Header/Header'
import { AutoForm } from '../../components/pages/AutoForm/AutoForm'
import { registerValidation } from '../../services/registerValidation'
import main_logo from '../../images/main_logo.jpeg'

const Register = () => {
    const fields:string[] = ['Nuevo Gmail', 'Contraseña', 'Nueva Contraseña']
    return(
        <main className='Register-Container'>
            <Header>Registro de usuario</Header>
            <section className='register-main-container'>
                <AutoForm fields={fields} route='/Login' forgotPassword={false} validation={registerValidation}/>
                <img src={main_logo} alt="main_logo" className='register-main-logo'/>
            </section>
        </main>
    )
}
export default Register;