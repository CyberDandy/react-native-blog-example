import createDataContext from "./createDataContext";

const ACTIONS = Object.freeze({
    ADD_BLOGPOST: "add_blogpost",
    DELETE_BLOGPOST: "delete_blogpost"
});

const blogReducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.DELETE_BLOGPOST:
            return {
                ...state,
                blogPosts: [
                    ...state.blogPosts.filter((blogPost) => blogPost.id !== action.payload.id)
                ]
            };
        case ACTIONS.ADD_BLOGPOST:
            return {
                ...state,
                blogPosts: [
                    ...state.blogPosts,
                    {
                        id: Math.floor(Math.random()*999999),
                        title: `Blog post #${state.blogPosts.length + 1}`
                    }
                ]
            };
        default:
            return state;
    }
};

const addBlogPost = dispatch => {
    return () => {
        dispatch({type: ACTIONS.ADD_BLOGPOST});
    };
};

const deleteBlogPost = dispatch => {
    return (id) => {
        dispatch({type: ACTIONS.DELETE_BLOGPOST, payload: {id}});
    };
};

export const { Context, Provider } = createDataContext(
    blogReducer,
    {addBlogPost, deleteBlogPost},
    {blogPosts: []}
    );
