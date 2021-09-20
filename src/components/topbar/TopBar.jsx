import { Link, NavLink } from "react-router-dom";
import "./topbar.css"

export default function TopBar() {
    

    const user = false;

    return (
        <div className="top">
            <div className="topLeft">
                <i className="topIcon fab fa-facebook-square"></i>
                <i className="topIcon fab fa-twitter-square"></i>
                <i className="topIcon fab fa-pinterest-square"></i>
                <i className="topIcon fab fa-instagram-square"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem"><NavLink exact className="link"  activeClassName="active" to="/">HOME</NavLink></li>
                    <li className="topListItem"><NavLink className="link" activeClassName="active" to="/about">ABOUT</NavLink></li>
                    <li className="topListItem"><NavLink className="link" activeClassName="active" to="/contact">CONTACT</NavLink></li>
                    <li className="topListItem"><NavLink className="link" activeClassName="active" to="/write">WRITE</NavLink></li>
                    <li className="topListItem">{user && "LOGOUT"}</li>
                </ul>
            </div>
            <div className="topRight">
                {
                    user ? (
                            <img className="topImg" src="https://source.unsplash.com/weekly?water" alt="" />
                            ) : (
                            <ul className="topList">
                                 <li className="topListItem"><NavLink className="link" activeClassName="active" to="/login">LOGIN</NavLink></li>
                                 <li className="topListItem"><NavLink className="link" activeClassName="active" to="/register">REGISTER</NavLink></li>
                            
                            </ul>
                            )
                }
                
                <i className="topSearchIcon fas fa-search"></i>
            </div>
        </div>
    )
}
