import {Link} from "react-router-dom";

const NavBar = ()=>{
    return(
       <nav className="header-navbar">
           <h2>کتابخانه ی من </h2>
           <div className="header-links">
               <Link className="link btn" to="/books">کتاب ها</Link>
               <Link className="link btn" to="/about"> درباره ی ما</Link>
           </div>
       </nav>
    )
}

export default NavBar;