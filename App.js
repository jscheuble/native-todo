import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput placeholder='to do...' style={styles.input} />
        <Button title='add' />
      </View>
      <View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 70,
    backgroundColor: '#faf74d',
    height: '100%',
  },
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
  }
});
