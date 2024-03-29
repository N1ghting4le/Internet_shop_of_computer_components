import { NavLink } from "react-router-dom";

const AppHeader = () => {
    return (
        <header>
            <NavLink to='/'>
                <span className="header_span">Main</span>
            </NavLink>
            <NavLink to='cart'>
                <span className="header_span"><img src="http://192.168.0.101:3000/images/cart.png" alt="cart"></img>cart</span>
            </NavLink>
        </header>
    );
};

export default AppHeader;