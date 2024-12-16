
/* eslint-disable no-unused-vars */

import {newsMock} from '../../mocks/newsMock'
import { useState, useEffect } from 'react';
import Menu from './menu'
import './Home.css'


const Home = () => {
    const [menus, setMenus] = useState(newsMock);
   console.log(menus)

    return (
        <div className='contenedorhome'>
            <h1 className='h1'>Pagina Principal</h1>
            {menus.map((menu) => ( <Menu menu={menu} key={menu.title }>   </Menu>
            ))}
        </div>
    )
}

export default Home;