import './ForgotPassword.css'
import { Header } from '../../components/pages/Header/Header';
import { AutoForm } from '../../components/pages/AutoForm/AutoForm';
import { restorePassword } from '../../services/restorePassword';
import main_logo from '../../images/main_logo.jpeg'
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
    const fields:string[] = ['Mi Gmail','Nueva Contraseña','Repite la Contraseña']

    return(
        <main className='forgotPSW-container'>
            <Header>Reestablece tu contraseña</Header>
            <section className='FPSW-main-container'>
                <AutoForm fields={fields} forgotPassword={false} route='/Login' validation={restorePassword}/>
                <section className='FPSW-image-container'>
                    <img src={main_logo} alt="main_logo" className='FPSW-main-logo'/>
                    <p>no tienes cuenta? <Link to='/Register'>Registrate</Link></p>
                </section>
            </section>
        </main>
    )
}

export default ForgotPassword;