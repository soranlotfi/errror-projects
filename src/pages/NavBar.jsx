import {NavLink} from "react-router-dom";

const NavBar = ()=>{
    return(
       <div className="container">
           <nav className="header-navbar">
               <h2>کتابخانه ی من </h2>
               <div className="header-links">
                   <NavLink className="link btn" to="/books">کتاب ها</NavLink>
                   <NavLink className="link btn" to="/about"> درباره ی ما</NavLink>
               </div>
           </nav>
       </div>
    )
}

export default NavBar;