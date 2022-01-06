import {PostAction, PostActionTypes, PostState} from "../../types/postTypes";

const initialState: PostState = {
    posts: [],
    loading: false,
    error: null
}

// reducer
export const postReducer = (state: PostState = initialState, action: PostAction): PostState => {
    switch (action.type){
        case PostActionTypes.FETCH_POSTS:
            return {posts: [], loading: true, error: null};
        case PostActionTypes.FETCH_POSTS_SUCCESS:
            return {posts: action.payload, loading: false, error: null};
        case PostActionTypes.FETCH_POSTS_ERROR:
            return {posts: [], loading: false, error: action.payload};
        default:
            return state;
    }

}