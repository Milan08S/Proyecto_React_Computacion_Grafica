import { ContainerModal, ContainerIS, Encabezado, BotonCerrar, ContainerBoton } from './Modal.elements.js';
import { Olvido, ConGoogle, ContainerLogoBoton, ContainerInput, LabelInput, InputsField, ContainerCheckbox, CheckboxInput, LabelCheckbox} from "./IniciarSesion.elements";
import { useState } from 'react';
import { useAuth } from '../../context/authContext.js';
import { useNavigate } from 'react-router-dom';

const Modal = ({ estado, cambiarEstado }) => {
    const [user, setUser] = useState({
        email: "",
        password: "",
      });

    const { login, loginWithGoogle, resetPassword } = useAuth();
    const navigate = useNavigate();
    const [error, setError] = useState("");
    
    const handleChange = ({ target: { value, name } }) =>
        setUser({ ...user, [name]: value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
            await login(user.email, user.password);
            navigate("/Iniciado");
        } catch (error) {
          setError(error.message);
        }
    };

    const handleGoogleSignin = async () => {
        try {
          await loginWithGoogle();
          navigate("/Iniciado");
        } catch (error) {
          setError(error.message);
        }
      };

    const handleResetPassword = async (e) => {
        e.preventDefault();
        if (!user.email) return setError("Escribe tu correo para editar tu contraseña");
        try {
          await resetPassword(user.email);
          setError('Te enviamos un email, mira el spam!')
        } catch (error) {
          setError(error.message);
        }
      };  
    return(
        <div>
            {estado && 

            <form onSubmit={handleSubmit}>
                <ContainerModal>  
                    <ContainerIS>
                        <Encabezado>
                            <h3>INICIO DE SESIÓN</h3>
                        </Encabezado>
                        {error && <ContainerLogoBoton><h2>{error}</h2></ContainerLogoBoton>}
                        <BotonCerrar onClick={() => cambiarEstado(false)}> 
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                            </svg>
                        </BotonCerrar>
                        <ContainerLogoBoton>
                            <img className="Logo" src="https://upload.wikimedia.org/wikipedia/commons/1/1e/RPC-JP_Logo.png" alt='LOGO'></img>
                        </ContainerLogoBoton>
                        <ContainerInput>
                            <LabelInput>Email:</LabelInput>
                            <InputsField type="email" name="email" placeholder="Ingresar correo" 
                            onChange={handleChange}
                            />
                        </ContainerInput>
                        <ContainerInput>
                            <LabelInput>Contraseña:</LabelInput>
                            <InputsField type="password" name="password" placeholder="Ingresar contraseña" 
                            onChange={handleChange}
                            />
                        </ContainerInput>
                        <ContainerCheckbox>
                            <CheckboxInput type="checkbox" name="recordarme"></CheckboxInput>
                            <LabelCheckbox> Recordarme</LabelCheckbox>
                        </ContainerCheckbox>
                        <ContainerBoton>
                            <ContainerLogoBoton>
                                <button>INICIAR SESIÓN</button>
                            </ContainerLogoBoton>
                            <ConGoogle>
                                <button onClick={handleGoogleSignin}>Con Google...</button>
                            </ConGoogle>
                            <Olvido href='#!' onClick={handleResetPassword}>Olvidaste tu contraseña?</Olvido>
                            <a href="/Registro">No tienes cuenta? Registrate</a>
                        </ContainerBoton> 
                    </ContainerIS>       
                </ContainerModal>
            
            </form>
            }
        </div>
    );
}

export default Modal;