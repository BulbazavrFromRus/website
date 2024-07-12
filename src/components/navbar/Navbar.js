import "./style.css"

import {NavLink} from "react-router-dom"
import BtnDarkMode from "../btnDarkMode/BtnDarkMode"

const  Navbar = ()=> {
      

    //при нажатии на кнопку в навбаре она подсвечивается
    //для этого мы создадим два класса когда кнопка будет подсвечиваться,т.е будет активна и когда кнопка не будет активна
    const activeLink  = "nav-list__link nav-list__link--active";
    const normalLink = "nav-list__link"



    return (
        <nav className="nav">
        <div className="container">
            <div className="nav-row">

                 <NavLink to="/" className="logo">

                 <strong>Danila</strong> Bulbakov

                 </NavLink>



                 <BtnDarkMode/>




                <ul className="nav-list">

                  
                     {/* в isActive мы смотрим является ли ссылка активной */}
                    <li className="nav-list__item">
                      <NavLink to="/"
                             className={({isActive})=>{
                                  return isActive ? activeLink: normalLink
                             }}>
                        
                        Home
                        
                       </NavLink> 
                    </li>




                    <li className="nav-list__item">
                      <NavLink to="/projects"
                       className={({isActive})=>{
                            return isActive ? activeLink : normalLink
                       }}>

                           Projects

                      </NavLink>
                        </li>



                    <li className="nav-list__item">
                    <NavLink to="/contacts"
                       className={({isActive})=>{
                          return isActive ? activeLink : normalLink
                       }}>

                           Contacts

                      </NavLink>
                        </li>


                        
                </ul>


            </div>
        </div>
    </nav>
    )
}

export default Navbar;