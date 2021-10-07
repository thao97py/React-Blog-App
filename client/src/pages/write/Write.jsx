import "./write.css"
import fog from "../../images/fog.jpg"
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../context/Context";
import Select from 'react-select'
import makeAnimated from 'react-select/animated';

const optionsCates = [
    { value: 'Entertainment', label: 'Entertainment' },
    { value: 'Business', label: 'Business' },
    { value: 'Cusine', label: 'Cusine' },
    { value: 'Technology', label: 'Technology' },
    { value: 'Well-being', label: 'Well-being' },
    { value: 'Health', label: 'Health' }
]

export default function Write() {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [file, setFile] = useState(null);
    const { user, dispatch } = useContext(Context);
    const [categories, setCategories] = useState([]);

    function customTheme(theme){
        return{
            ...theme,
            colors:{
                ...theme.colors,
                primary25:'lightpink',
                primary:'green'
            }
        };
    }

    const handleChange = selectedOption => {
        let a = [];
        selectedOption.map((v, l) => {
            console.log(v.value);
            a.push(v.value)
        })
        setCategories(a);
    };

    const handleSubmit = async (e) => {
        console.log("username: " + user.username);
        e.preventDefault();
        const newPost = {
            username: user.username,
            title,
            desc,
            categories: categories,
        };
        if (file) {
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append("name", filename);
            data.append("file", file);
            newPost.photo = filename;
            try {
                await axios.post("/upload", data);
            } catch (err) {

            }
        };

        try {
            const res = await axios.post("/posts/", newPost);
            window.location.replace("/post/" + res.data._id);
        } catch (err) {
        }
    };

    return (
        <div className="write">
            <h1 className="writeHeader"><i className="fas fa-feather-alt"></i>Let Write your Blog Here and Publish It</h1>
            {file && (
                <img
                    //src={fog} 
                    src={URL.createObjectURL(file)}
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
                        style={{ display: "none" }}
                        onChange={e => setFile(e.target.files[0])}
                    />
                    <div className="writeFormCats">
                        <p><i className="fas fa-hand-point-down"></i>Choose any categories below that belongs to your post</p>
                        <Select
                            options={optionsCates}
                            placeholder="Select categories"
                            className="writeFormCats"
                            isSearchable
                            isMulti
                            autoFocus
                            components={makeAnimated()}
                            onChange={handleChange}
                            theme={customTheme}
                        />
                    </div>

                    <i className="fas fa-feather-alt"></i><input
                        type="text"
                        className="writeInput"
                        placeholder="Write your title here..." autoFocus={true}
                        required
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="writeFormGroup">
                    <div className="writeFormStory">
                        <i className="fas fa-feather-alt secondFeather"></i>
                        <textarea
                            className="writeInput writeText"
                            placeholder="Tell your story..."
                            type="text"
                            required
                            id=""
                            onChange={e => setDesc(e.target.value)} >
                        </textarea>
                    </div>
                </div>
                <button className="writeSubmit" type="submit">Publish</button>
            </form>
        </div>
    )
}
