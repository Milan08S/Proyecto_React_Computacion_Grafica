import { ContainerLogoBoton, LabelInput } from '../Inicio Sesion/IniciarSesion.elements'
import { InputsFields, ContainerInput } from './Registro.elements';
import { useState } from 'react';
import "../navbar/navbar.css"
import { useAuth } from '../../context/authContext';
import { useNavigate } from 'react-router-dom';

const Registro	= () => {
    const { signup } = useAuth();

    const [user, setUser] = useState({
        email: "",
        password: "",
      });

    const [error, setError] = useState("");
    const navigate = useNavigate();
    
    const handleChange = ({ target: { value, name } }) =>
        setUser({ ...user, [name]: value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
            await signup(user.email, user.password);
            navigate("/");
        } catch (error) {
          setError(error.message);
        }
      };
    return(
        <div>
            {error && <ContainerLogoBoton><h2>{error}</h2></ContainerLogoBoton>}
            <form onSubmit={handleSubmit}>
            <ContainerLogoBoton>
                <img className="Logo" src="https://upload.wikimedia.org/wikipedia/commons/1/1e/RPC-JP_Logo.png" alt='LOGO'></img>
                <h1>REGISTRO</h1>
            </ContainerLogoBoton>
            <ContainerInput>
                <LabelInput>Usuario</LabelInput>
                <InputsFields type="text" name="username" placeholder="Ingresar nombre de usuario"></InputsFields>
            </ContainerInput>
            <ContainerInput>
                <LabelInput>Email</LabelInput>
                <InputsFields type="email" name="email" placeholder="Ingresar correo"
                onChange={handleChange}>
                </InputsFields>
            </ContainerInput>
            <ContainerInput>
                <LabelInput>Contraseña</LabelInput>
                <InputsFields type="password" name="password" placeholder="Ingresar contraseña"
                onChange={handleChange}></InputsFields>
            </ContainerInput>
            <ContainerInput>
                <LabelInput>Confirmar contraseña</LabelInput>
                <InputsFields type="password" name="ConfirmPassword" placeholder="Vuelve a ingresar la contraseña"></InputsFields>
            </ContainerInput>
            <ContainerLogoBoton>
                <button>REGISTRARSE</button>
            </ContainerLogoBoton>
        </form>
        </div>
                
    )
}

export default Registro;