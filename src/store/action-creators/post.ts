import {PostAction, PostActionTypes} from "../../types/postTypes";
import {Dispatch} from "redux";
import axios from "axios";

export const fetchPosts = () => {
    return async (dispatch: Dispatch<PostAction>) => {
        try{
            dispatch({type: PostActionTypes.FETCH_POSTS});
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts');

            // Иммитируем долгий ответ бэкенда
            setTimeout(() => {
                dispatch({
                    type: PostActionTypes.FETCH_POSTS_SUCCESS,
                    payload: response.data
                });
            }, 500);
        }
        catch (exc){
            dispatch({
                type: PostActionTypes.FETCH_POSTS_ERROR,
                payload: "Произошла ошибка при загрузке постов"
            });
        }
    };
};
