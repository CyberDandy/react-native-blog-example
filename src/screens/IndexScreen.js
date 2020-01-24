import React, {useContext} from 'react';
import {Text, FlatList, View, Button, TouchableOpacity, StyleSheet} from 'react-native';
import { Context as BlogContext } from "../context/BlogContext";
import {FontAwesome} from "@expo/vector-icons";

const IndexScreen = () => {
    const {state, actions} = useContext(BlogContext);
    const {blogPosts} = state;
    const {addBlogPost, deleteBlogPost} = actions;

    const renderBlogPost = ({item: blogPost}) => {
        return (
            <View style={styles.row} >
                <Text style={styles.title}> {blogPost.title} - {blogPost.id} </Text>
                <TouchableOpacity onPress={() => deleteBlogPost(blogPost.id)}>
                    <FontAwesome style={styles.icon}
                                 name="trash-o"/>
                </TouchableOpacity>
            </View>
        );
    };

    return (
        <>
            <Text>
                Blog Posts
            </Text>
            <Button
                title="Add Post"
                onPress={addBlogPost}
            />
            <FlatList
                data={blogPosts}
                keyExtractor={(item, index) => index.toString()}
                renderItem={renderBlogPost}
            />
        </>
    );
};

const styles = StyleSheet.create({
    row: {
        flexDirection:'row',
        justifyContent:'space-between',
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderTopWidth: 1,
        borderColor: 'black'
    },
    title: {
        fontSize: 18
    },
    icon: {
        fontSize: 24
    }
});

export default IndexScreen;
