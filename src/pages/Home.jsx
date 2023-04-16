import NavBar from "./NavBar";
import "../header.css"
import {Outlet} from "react-router-dom";
const Home = ()=>{
    return(
        <>
            <NavBar/>
            <Outlet/>
        </>
    )
}

export default Home;