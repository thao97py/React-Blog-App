import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { Context } from "../../context/Context";
import "./topbar.css"

export default function TopBar() {
    const {user,dispatch} = useContext(Context);
    const publicFolder ="http://localhost:5000/images/";

    const handleLogout= ()=>{
        dispatch({type:"LOGOUT"});
    };

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
                    <li className="topListItem" onClick={handleLogout}>{user && "LOGOUT"}</li>
                </ul>
            </div>
            <div className="topRight">
                {
                    user ? (
                            <Link to="/settings">
                            <img className="topImg" src={publicFolder+ user.profilePic} alt="user's profile picture" />
                            </Link>
                            ) : (
                            <ul className="topList">
                                 <li className="topListItem">
                                     <NavLink className="link" activeClassName="active" to="/login">LOGIN</NavLink>
                                </li>
                                 <li className="topListItem">
                                     <NavLink className="link" activeClassName="active" to="/register">REGISTER</NavLink>
                                </li>
                            
                            </ul>
                            )
                }
                <i className="topSearchIcon fas fa-search"></i>
            </div>
        </div>
    )
}
