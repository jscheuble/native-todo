import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView } from 'react-native';

export default function App() {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);

  const inputHandler = text => {
    setInput(text)
  }

  const addTodo = () => {
    setTodos(currentState => [...currentState, input]);
    setInput('')
  }

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput placeholder='to do...' style={styles.input} onChangeText={inputHandler} />
        <Button title='add' onPress={addTodo} />
      </View>
      <ScrollView>
        {todos.map((e, i) => <View key={i} style={styles.todo} ><Text >{e}</Text></View>)}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 70,
    backgroundColor: '#a290d6',
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
  },
  todo: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#c3baf7',
    borderColor: 'black',
    borderWidth: 1,
  }
});
