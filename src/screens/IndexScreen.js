import React, {useContext} from 'react';
import {Text, FlatList, Button, StyleSheet} from 'react-native';
import { Context as BlogContext } from "../context/BlogContext";

const renderBlogPost = ({item: blogPost}) => {
    return (
        <Text>
            {blogPost.title}
        </Text>
    );
};

const IndexScreen = () => {
    const {state, actions} = useContext(BlogContext);
    const {blogPosts} = state;
    // const {addBlogPost} = actions;

    console.log(`state: ${JSON.stringify(state)}`);
    console.log(`actions: ${JSON.stringify(actions)}`);

    return (
        <>
            <Text>
                Blog Posts
            </Text>
            {/*<Button*/}
            {/*    title="Add Post"*/}
            {/*    onPress={addBlogPost}*/}
            {/*/>*/}
            <FlatList
                data={blogPosts}
                keyExtrator={blogPost => blogPost.title}
                renderItem={renderBlogPost}
            />
        </>
    );
};

const styles = StyleSheet.create({

});

export default IndexScreen;
