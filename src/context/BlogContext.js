import createDataContext from "./createDataContext";

const ACTIONS = Object.freeze({
    ADD_BLOGPOST: "add_blogpost",
    EDIT_BLOGPOST: "edit_blogpost",
    DELETE_BLOGPOST: "delete_blogpost"
});

const blogReducer = (state, action) => {
    const {payload} = action;

    switch (action.type) {
        case ACTIONS.ADD_BLOGPOST:
            return {
                ...state,
                blogPosts: [
                    ...state.blogPosts,
                    {
                        id: Math.floor(Math.random()*999999),
                        title: payload.title,
                        content: payload.content
                    }
                ]
            };
        case ACTIONS.EDIT_BLOGPOST:
            return {...state,
                blogPosts: [
                    ...state.blogPosts.filter((blogPost) => blogPost.id !== payload.id),
                    {
                        id: payload.id,
                        title: payload.title,
                        content: payload.content
                    }
                ]
            };
        case ACTIONS.DELETE_BLOGPOST:
            return {
                ...state,
                blogPosts: [
                    ...state.blogPosts.filter((blogPost) => blogPost.id !== payload.id)
                ]
            };
        default:
            return state;
    }
};

const addBlogPost = dispatch => {
    return (title, content, callback) => {
        dispatch({type: ACTIONS.ADD_BLOGPOST, payload: {title, content}});
        callback();
    };
};

const editBlogPost = dispatch => {
    return (id, title, content, callback) => {
        dispatch({type: ACTIONS.EDIT_BLOGPOST, payload: {id, title, content}});
        callback();
    };
};

const deleteBlogPost = dispatch => {
    return (id) => {
        dispatch({type: ACTIONS.DELETE_BLOGPOST, payload: {id}});
    };
};

export const { Context, Provider } = createDataContext(
    blogReducer,
    {addBlogPost, editBlogPost, deleteBlogPost},
    {blogPosts: [{id: 0, title: "test post", content:"test content"}]}
    );
