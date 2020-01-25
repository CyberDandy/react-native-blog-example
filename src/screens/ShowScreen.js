import React, {useContext} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Context as BlogContext} from '../context/BlogContext'
import {FontAwesome} from "@expo/vector-icons";
import IndexScreen from "./IndexScreen";

const ShowScreen = ({navigation}) => {
    const {state} = useContext(BlogContext);
    const blogPost = state.blogPosts.find((blogPost) => blogPost.id === navigation.getParam('id'));

    return (
        <>
            <Text>SHOW</Text>
            <Text>
                {blogPost.title}
            </Text>
            <Text>
                {blogPost.content}
            </Text>
        </>
    );
};

ShowScreen.navigationOptions = ({navigation}) => {
    return {
        headerRight: <TouchableOpacity onPress={() => navigation.navigate('Edit', {id:navigation.getParam('id')})}>
            <FontAwesome style={styles.pencilButton}
                         name="pencil"
                         size={30 }/>
        </TouchableOpacity>
    }
};

const styles = StyleSheet.create({
    pencilButton: {
        marginRight: 10
    }
});

export default ShowScreen;
