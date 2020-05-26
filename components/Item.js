import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Item = props => {
    return (
        <TouchableOpacity onPress={props.onDelete.bind(this, props.id)} >
            <View style={styles.todo}>
                <Text>{props.text}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    todo: {
        padding: 10,
        marginVertical: 10,
        backgroundColor: '#c3baf7',
        borderColor: 'black',
        borderWidth: 1,
    }
});

export default Item;