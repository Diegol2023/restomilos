import {useState} from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        console.log('Usuario:', user);
        console.log('Contraseña:', password);
        navigate('/');
    }
    return (                
        <div> 
            <br/>
            <h1>Ventana de Login</h1>
            <form onSubmit={handleLogin}>
                <label>Usuario:</label>
                <input type="text" value={user} onChange={(e) => setUser(e.target.value)}/>
                <label>Contraseña:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <button type="submit">Iniciar Sesión</button>
            </form>                                                    
            <br/>
        </div>                                                    
    );
}

export default Login