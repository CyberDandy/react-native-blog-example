import createDataContext from "./createDataContext";

const ACTIONS = Object.freeze({
    ADD_BLOGPOST: "add_blogpost",
    REMOVE_BLOGPOST: "remove_blogpost"});

const blogReducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.ADD_BLOGPOST:
            return {
                ...state,
                blogPosts: [...state.blogPosts, {title: `Blog post #${state.blogPosts.length + 1}`}]
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

export const { Context, Provider } = createDataContext(
    blogReducer,
    {addBlogPost},
    {blogPosts: []}
    );
