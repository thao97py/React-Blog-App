import "./settings.css"
import Sidebar from "../../components/sidebar/Sidebar"
import sunflower from "../../images/sunflower.jpg"

export default function Settings() {
    return (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Update Your Account</span>
                    <span className="settingsDeleteTitle">Delete Account</span>
                </div>
                <form action="" className="settingsForm">
                    <label>Profile Picture</label>
                    <div className="settingsPP">
                        <img className="settingsPPImg" src={sunflower} alt="" />
                        <label htmlFor="fileInput"><i className="settingsPPIcon fas fa-user-circle"></i></label>
                        <input type="file" id="fileInput" style={{display:"none"}}/>
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder="Your name" />
                    <label>Eamil</label>
                    <input type="email" placeholder="name@gmail.com" />
                    <label>Password</label>
                    <input type="password" />
                    <button className="settingsSubmit">Update</button>
                </form>
            </div>
                <Sidebar />
        </div>
    )
}
