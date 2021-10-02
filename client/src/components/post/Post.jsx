import "./post.css"
import fog from "../../images/fog.jpg"
import { Link } from "react-router-dom"

export default function Post({post}) {
    const imageFolderURL ="http://localhost:5000/images/" ;
    return (
        <div className="post">
            {post.photo && (
                <img 
                    className="postImg" src={imageFolderURL + post.photo} alt="post" 
                />
            )}
            <div className="postInfo">
                <div className="postCats">{
                    post.categories.map((eachCategory) =>(

                        <span className="postCat">{eachCategory}</span>
                    ))}
                </div>
                <span className="postTitle"> <Link className="link" to={`/post/${post._id}`}>{post.title}</Link> </span>
                <hr />
                <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
                <p className="postDesc">{post.desc}</p>
            </div>
        </div>
    )
}
