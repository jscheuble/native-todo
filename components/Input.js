import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const Input = props => {
    return (
        <View style={styles.inputContainer}>
            <TextInput placeholder='to do...' style={styles.input} onChangeText={props.inputHandler} />
            <Button title='add' onPress={props.addTodo} />
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    input: {
        width: '80%',
        padding: 5,
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        marginBottom: 10
    },
})

export default Input;