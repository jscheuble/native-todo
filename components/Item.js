import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Item = props => {
    return (
        <View style={styles.todo}>
            <Text>{props.text}</Text>
        </View>
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