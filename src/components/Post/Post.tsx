import React from "react";
import "./Post.css";

const Post: React.FC = () => {
    return (
    <div className={"Post"}>
        <div className={"Post-author"}>
            <img className={"Post-author-photo"} src={"https://sun9-72.userapi.com/s/v1/ig2/jTCdOfZbUYMmpUa8VqKnSJ_oEUzRd8pkYQuVHkaiyJEV7L7O_MiRgrLJaCR1CSBvnIXsUtbSnJjRj7uyvcN1upq_.jpg?size=50x50&quality=95&crop=123,808,1206,1206&ava=1"}></img>
            <div className={"Post-author-name"}>Neevin Kirill</div>
            <div className={"Post-author-time"}>5 days ago</div>
        </div>
        <div className={"Post-content"}>
            Текст поста тут
        </div>
    </div>
    );
}

export default Post;
