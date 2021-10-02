import"./sidebar.css"
import womenphoto from "../../images/womenphoto.jpg"
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Sidebar() {
    const [cats,setCats] = useState([]);

    useEffect(()=>{
        const getCats = async ()=>{
            const res = await axios.get("/categories/");
            setCats(res.data);
        }
        getCats()
    },[]);

    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img className="sidebarimg" src={womenphoto} alt="my pic" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus obcaecati ipsa quasi a deleniti magni nobis enim dolorum necessitatibus.</p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    {cats.map((eachCategory)=>(
                    <Link className= "link" to={`/?cat=${eachCategory.catName}`}>
                    <li className="sidebarListItem">{eachCategory.catName}</li>
                    </Link>
                    ))}
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fab fa-facebook-square"></i>
                    <i className="sidebarIcon fab fa-twitter-square"></i>
                    <i className="sidebarIcon fab fa-pinterest-square"></i>
                    <i className="sidebarIcon fab fa-instagram-square"></i>
                </div>
            </div>
        </div>
    );
}
