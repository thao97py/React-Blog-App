import "./settings.css"
import Sidebar from "../../components/sidebar/Sidebar"
import { useContext,useState } from "react"
import { Context } from "../../context/Context"
import axios from "axios"

export default function Settings() {
    const [userName,setUsername] = useState("");
    const [userEmail,setUserEmail] = useState("");
    const [userPassword,setUserPassword] = useState("");
    //const [userPic,setUserPic]=useState(null);
    const [newUserPic,setNewUserPic] =useState(null);
    const {user,dispatch}=useContext(Context);
    const [successUpdated,setSuccessUpdated]=useState(false);
    const publicFolder ="http://localhost:5000/images/";

    const handleSubmit= async (e)=>{
        e.preventDefault();
        dispatch({type:"UPDATE_START"});
        const updatedUser = {userId:user._id,
                            username:userName,
                            useremail:userEmail,
                            userpassword:userPassword
                            };
        if(newUserPic){
            const data = new FormData();
            const filename = Date.now() + newUserPic.name;
            data.append("name",filename);
            data.append("file",newUserPic);
            updatedUser.profilePic=filename;
            try{
                await axios.post("/upload",data);
            }catch(err){
                
            }
        };

        try{
            const res = await axios.put("/users/" +user._id,updatedUser);
            setSuccessUpdated(true);
            dispatch({type:"UPDATE_SUCCESS",payload:res.data});
        }catch(err){
            dispatch({type:"UPDATE_FAILURE"});
        }
    };
    
    return (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Update Your Account</span>
                    <span className="settingsDeleteTitle">Delete Account</span>
                </div>
                <form action="" className="settingsForm" onSubmit={handleSubmit}>
                    <label>Profile Picture</label>
                    <div className="settingsPP">
                        <img 
                            className="settingsPPImg" 
                            src={newUserPic ? URL.createObjectURL(newUserPic) :publicFolder + user.profilePic} 
                            alt="" 
                        />
                        <label htmlFor="fileInput"><i className="settingsPPIcon fas fa-user-circle"></i></label>
                        <input 
                            type="file" id="fileInput" 
                            style={{display:"none"}}
                            onChange={(e)=>setNewUserPic(e.target.files[0])}
                        />
                    </div>
                    <label>Username</label>
                    <input 
                        type="text" 
                        placeholder = {user.username}
                        onChange={e=> setUsername(e.target.value)}
                    />
                    <label>Email</label>
                    <input 
                        type="email" 
                        placeholder = {user.email}
                        onChange={e=> setUserEmail(e.target.value)}
                    />
                    <label>Password</label>
                    <input 
                        type="password" 
                        placeholder = "************"
                        onChange={e=> setUserPassword(e.target.value)}
                    />
                    <button className="settingsSubmit" type="submit">Update</button>
                    {successUpdated && (<span className="settingsSuccessUpdate">Your profile has successfully been updated... </span>
                    )}
                </form>
            </div>
                <Sidebar />
        </div>
    )
}
