import React from "react";
import Proptypes from "prop-types";
import { Link } from "react-router-dom";
import { FiHome, FiPlusCircle, FiLogOut} from 'react-icons/fi';

function Navigation(logout, name){
    return(
        <nav className="navigation">
            <ul>
                <li><Link to="/"><FiHome /></Link></li>
                <li><Link to="/add"><FiPlusCircle /></Link></li>
                <li><button onClick={logout}> {name}<FiLogOut /></button></li>
            </ul>
        </nav>
    );
}

Navigation.propTypes ={
    logout: Proptypes.func.isRequired,
    name: Proptypes.string.isRequired,
}
export default Navigation;