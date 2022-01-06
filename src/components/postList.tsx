import React, {useEffect} from "react";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions"
import Loader from "./Loader/Loader"

const PostList: React.FC = () => {
    const {posts, loading, error} = useTypedSelector(state => state.posts);
    const {fetchPosts} = useActions();

    useEffect(() => {
        fetchPosts()
    }, []);

    if(loading){
        return <div>
                    <Loader/>
                    <span>Идёт загрузка</span>
                </div>;
    }
    if(error){
        return <span>{error}</span>;
    }

    return (
        <div>
            {posts.map(p =>
                <div id={p.id}>{p.body}</div>
            )}
        </div>
    );
};

export default PostList;