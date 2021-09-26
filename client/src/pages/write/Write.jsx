import "./write.css"
import fog from "../../images/fog.jpg"
export default function Write() {
    return (
        <div className="write">
            <img src={fog} alt="" className="writeImg" />
            <form action="" className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput"><i className="writeIcon fas fa-plus"></i></label>
                    <input type="file" id="fileInput" style={{display:"none"}} />
                    <input type="text" className="writeInput" placeholder="Title" autoFocus={true}/>
                </div>
                <div className="writeFormGroup">
                    <textarea className="writeInput writeText" placeholder="Tell your story..." type="text" name="" id="" ></textarea>
                </div>
                <button className="writeSubmit">Publish</button>
            </form>
        </div>
    )
}
