import "./write.css"
import fog from "../../images/fog.jpg"
import axios from "axios";
import { useContext, useState } from "react";
import { Context } from "../../context/Context";


export default function Write() {
    const [title,setTitle] = useState("");
    const [desc,setDesc] = useState("");
    const [file,setFile] = useState(null);
    const {user,dispatch} = useContext(Context);

    const handleSubmit= async (e)=>{
        e.preventDefault();
        const newPost = {username: user.username,
                         title,
                         desc,
                        };
        if(file){
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append("name",filename);
            data.append("file",file);
            newPost.photo=filename;
            try{
                await axios.post("/upload",data);
            }catch(err){
                
            }
        };

        try{
            const res = await axios.post("/posts/",newPost);
            window.location.replace("/post/" + res.data._id);
        }catch(err){
        }
    };

    return (
        <div className="write">
            <h1 className="writeHeader"><i class="fas fa-feather-alt"></i>Let Write your Blog Here and Publish It <i class="fas fa-feather-alt"></i></h1>
            {file && (
            <img    
                //src={fog} 
                src ={URL.createObjectURL(file)} 
                alt="Post image" 
                className="writeImg" />
            )}

            <form action="" className="writeForm" onSubmit={handleSubmit}>
                <div className="writeFormGroup">
                    <label className="writeFormUpload" htmlFor="fileInput"><i className="writeIcon fas fa-plus"></i>  Upload your Post's picture
                    </label>
                    <input 
                        type="file" 
                        id="fileInput" 
                        style={{display:"none"}} 
                        onChange={e=>setFile(e.target.files[0])} 
                    />
                    <input 
                        type="text" 
                        className="writeInput" 
                        placeholder="Title..." autoFocus={true} 
                        onChange={(e)=>setTitle(e.target.value)}
                    />
                </div>
                <div className="writeFormGroup">
                    <textarea 
                        className="writeInput writeText" 
                        placeholder="Tell your story..." 
                        type="text" 
                        name="" 
                        id="" onChange={e=>setDesc(e.target.value)} >
                    </textarea>
                </div>
                <button className="writeSubmit" type="submit">Publish</button>
            </form>
        </div>
    )
}
