/* eslint-disable react/prop-types */
import './Menu.css'
import { useNavigate } from 'react-router-dom';
const Menu = ({menu}) => {
    const navigate = useNavigate();
    const hanldeClick = () => {
        navigate(`/menu/${menu.source.id}`);
    };
    return (
        <div className='contenedor' onClick={hanldeClick}>  
            <img src={menu.urlToImage} alt="resto" width="30%" height="300px" className='imagen'/>     
            <div className='datos'>
                <h2 className='titulo'>{menu.title}</h2>
                <div className='subdatos'>
                    <p className='descripcion'>{menu.description}</p>
                    <p className='precio'>Precio:  ${menu.precio}</p>
                </div>
            </div>

            
        </div>
        
    );          
}   

export default Menu; 