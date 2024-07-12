import "./style.css"

import { NavLink } from "react-router-dom";




//props - это все те свойства которые принимает компонент.
//всё что мы передаём в скобки это те свойства которыми обладае объект
//мы можем просто написать props в скобках и через props получать переменные
//например props.title, props.img
const Project = ({title, img, index}) =>{
   return (


                 <NavLink to={`/project/${index}`}>

                <li className="project">
                   
                        <img src={img} alt={title} className="project__img"/>

                        <h3 className="project__title">{title}</h3>
                 
                </li>
                 </NavLink>


   );
}

export default Project