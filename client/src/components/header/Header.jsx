import './header.css'
import wintertree from '../../images/wintertree.jpg'
export default function Header() {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className= "headerTitleSm">React & Node</span>
                <span className= "headerTitleLg">Blog</span>
            </div>
            <img src={wintertree} alt="" className="headerImg" />
        </div>
    )
}
