import { useParams } from "react-router-dom";
import { useState } from "react";
import { newsMock } from "../../../mocks/newsMock";
import DetalleMenu from "./DetalleMenu";

const VerMenu = () => {
    const {idmenu} = useParams();
    //traer todos//
    const [menus, setMenus] = useState(newsMock);
    //flitro el blog//
    const menu = menus[idmenu - 1];
    console.log(menu)
    return (                
        <DetalleMenu menu={menu}/>                                      
    );
}       

export default VerMenu