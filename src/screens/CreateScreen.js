import React, {useContext, useState} from 'react';
import {Text, TextInput, Button, StyleSheet} from 'react-native';
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

const styles = StyleSheet.create({
    label: {
        fontSize: 20,
        marginHorizontal: 5,
        marginBottom: 5
    },
    input: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 15,
        padding: 5,
        margin: 5
    }
});

export default CreateScreen;
