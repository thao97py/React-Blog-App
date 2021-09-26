import "./singlePost.css"
import  fog from "../../images/fog.jpg"
export default function SinglePost() {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img src={fog} alt="" className="singlePostImg" />
                <h1 className="singlePostTitle">Lorem ipsum dolor sit am.
                    <div className="singlePostEdit">
                        <i className="singlePostIcon far fa-edit"></i>
                        <i className="singlePostIcon far fa-trash-alt"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author: <b>James</b> </span>
                    <span className="singlePostDate">1 hour ago</span>
                </div>
                <p className="singlePostDesc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum aut beatae reiciendis pariatur illum. Laudantium animi exercitationem temporibus molestiae aperiam aut voluptatem, iste modi facere placeat minus alias incidunt aspernatur!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum aut beatae reiciendis pariatur illum. Laudantium animi exercitationem temporibus molestiae aperiam aut voluptatem, iste modi facere placeat minus alias incidunt aspernatur!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum aut beatae reiciendis pariatur illum. Laudantium animi exercitationem temporibus molestiae aperiam aut voluptatem, iste modi facere placeat minus alias incidunt aspernatur!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum aut beatae reiciendis pariatur illum. Laudantium animi exercitationem temporibus molestiae aperiam aut voluptatem, iste modi facere placeat minus alias incidunt aspernatur!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum aut beatae reiciendis pariatur illum. Laudantium animi exercitationem temporibus molestiae aperiam aut voluptatem, iste modi facere placeat minus alias incidunt aspernatur!</p>
            </div>
        </div>
    )
}
