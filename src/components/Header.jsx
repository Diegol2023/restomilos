/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import {  NavLink } from "reactstrap";

const Header = () => {
    const { isLogin, setIsLogin } = useContext(AuthContext);
    const handleClick = (valor)=>{
        setIsLogin(valor)
    }
    const links = [
        {to: '/', titulo: 'Inicio'},
    ]
    const linksLogin = [
        {to: '/crear-menu', label: 'Nuevo Menu', className: 'link-end' },
        {to: '/logout', label: 'Cerrar Sesión', className:  'link-end' },
    ]
    const linksLogout = [
        {to: '/login', label: 'Iniciar Sesión', className: 'link-end' },
        {to: '/register', label: 'Registrarme', className: 'link-end' },
    ]
   
    return (
        <nav>   
            <div className="footer"> 
                <p className="copy"> Comienzo 2025 </p>
            </div>
            <div>
                {links.map((link) => (
                    <NavLink key={link.to}
                        to={link.to}>{link.label}
                    </NavLink>
                   
                
                ))}
            </div>
        </nav>

    )
}

export default Header