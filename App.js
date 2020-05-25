import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);

  const inputHandler = text => {
    setInput(text)
  }

  const addTodo = () => {
    setTodos(currentState => [...currentState, input])
  }

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput placeholder='to do...' style={styles.input} onChangeText={inputHandler} />
        <Button title='add' onPress={addTodo} />
      </View>
      <View>
        {todos.map((e, i) => <Text key={i}>{e}</Text>)}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
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
