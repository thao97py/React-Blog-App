import "./post.css"
import fog from "../../images/fog.jpg"
import { Link } from "react-router-dom"
export default function Post() {
    return (
        <div className="post">
            <img className="postImg" src={fog} alt="post" />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                </div>
                <span className="postTitle"> <Link className="link" to="/post/:postId"> Lorem ipsum dolor sit.</Link> </span>
                <hr />
                <span className="postDate">1 hour ago</span>
                <p className="postDesc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam et, reprehenderit quo maxime quas ullam itaque blanditiis consequuntur distinctio commodi. Quo minus exercitationem aspernatur, nostrum architecto ipsum eos eveniet pariatur quia rem ducimus consectetur excepturi et sapiente doloremque. Nihil, fuga?
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam et, reprehenderit quo maxime quas ullam itaque blanditiis consequuntur distinctio commodi. Quo minus exercitationem aspernatur, nostrum architecto ipsum eos eveniet pariatur quia rem ducimus consectetur excepturi et sapiente doloremque. Nihil, fuga?
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam et, reprehenderit quo maxime quas ullam itaque blanditiis consequuntur distinctio commodi. Quo minus exercitationem aspernatur, nostrum architecto ipsum eos eveniet pariatur quia rem ducimus consectetur excepturi et sapiente doloremque. Nihil, fuga?</p>
            </div>
        </div>
    )
}
