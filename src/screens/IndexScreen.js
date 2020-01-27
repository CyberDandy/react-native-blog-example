import React, {useContext} from 'react';
import {Text, FlatList, View, Button, TouchableOpacity, StyleSheet} from 'react-native';
import { Context as BlogContext } from "../context/BlogContext";
import {FontAwesome} from "@expo/vector-icons";

const IndexScreen = ({navigation}) => {
    const {state, actions} = useContext(BlogContext);
    const {blogPosts} = state;
    const {deleteBlogPost} = actions;

    const renderBlogPost = ({item: blogPost}) => {
        return (
            <TouchableOpacity onPress={() => navigation.navigate('Show', {id: blogPost.id})}>
                <View style={styles.row} >
                    <Text style={styles.title}> {blogPost.title} - {blogPost.id} </Text>
                    <TouchableOpacity onPress={() => deleteBlogPost(blogPost.id)}>
                        <FontAwesome style={styles.icon}
                                     name="trash-o"/>
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>
        );
    };

    return (
        <>
            <FlatList
                data={blogPosts}
                keyExtractor={(item, index) => index.toString()}
                renderItem={renderBlogPost}
            />
        </>
    );
};

IndexScreen.navigationOptions = ({navigation}) => {
    return {
        headerRight: <TouchableOpacity onPress={() => navigation.navigate('Create')}>
            <FontAwesome style={styles.plusButton}
                         name="plus"
                         size={30 }/>
        </TouchableOpacity>
    }
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
    },
    plusButton: {
        marginRight: 10
    }
});

export default IndexScreen;
