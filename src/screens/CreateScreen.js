import React, {useContext} from 'react';
import {StyleSheet} from 'react-native';
import {Context as BlogContext} from '../context/BlogContext'
import BlogPostForm from "../components/BlogPostForm";

const CreateScreen = ({navigation}) => {
    const {actions} = useContext(BlogContext);
    const {addBlogPost} = actions;

    return (
        <BlogPostForm texts={{titleTitle: "Enter Title", contentTitle: "Enter Content", submitButtonText: "Add blog post"}}
                      initialValues={{title: "", content: ""}}
                      onSubmit={(title, content) => addBlogPost(title, content, () => navigation.navigate('Index'))}
        />
    );
};

const styles = StyleSheet.create({}
);

export default CreateScreen;
