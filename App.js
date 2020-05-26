import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView } from 'react-native';

import Item from './components/Item';
import Input from './components/Input';

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
      <Input inputHandler={inputHandler} addTodo={addTodo} />
      <ScrollView>
        {todos.map((e, i) => <Item key={i} text={e} />)}
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


});
