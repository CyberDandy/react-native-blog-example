import React, {useContext} from 'react';
import {StyleSheet} from 'react-native';
import {Context as BlogContext} from '../context/BlogContext'
import BlogPostForm from '../components/BlogPostForm'

const EditScreen = ({navigation}) => {
    const {state, actions} = useContext(BlogContext);
    const {editBlogPost} = actions;
    const blogPost = state.blogPosts.find(({id}) => id === navigation.getParam('id'));

    return (
        <BlogPostForm texts={{titleTitle: "Edit Title", contentTitle: "Edit Content", submitButtonText: "Edit blog post"}}
                      initialValues={{title: blogPost.title, content: blogPost.content}}
                      onSubmit={(title, content) => editBlogPost(blogPost.id, title, content, () => navigation.navigate('Index'))}
        />
    );
};

const styles = StyleSheet.create({
});

export default EditScreen;
