import React, {useState} from 'react';
import {Text, StyleSheet, TextInput, Button} from 'react-native';

const BlogPostForm = ({texts, initialValues, onSubmit}) => {
    const [title, setTitle] = useState(initialValues.title);
    const [content, setContent] = useState(initialValues.content);

    return (
        <>
            <Text style={styles.label}>
                {texts.titleTitle}
            </Text>
            <TextInput style={styles.input}
                       value={title}
                       onChangeText={(text) => setTitle(text)}
            />
            <Text style={styles.label}>
                {texts.contentTitle}
            </Text>
            <TextInput style={styles.input}
                       value={content}
                       onChangeText={(text) => setContent(text)}
            />
            <Button title={texts.submitButtonText}
                    onPress={() => onSubmit(title, content)}
            />
        </>
    );
};

BlogPostForm.defaultProps = {
    initialValues: {
        title: '',
        content: ''
    }
}

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

export default BlogPostForm;
