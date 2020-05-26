import React, { useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';

import Item from './components/Item';
import Input from './components/Input';

export default function App() {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);
  const [count, setCount] = useState(1)

  const inputHandler = text => {
    setInput(text)
  }

  const addTodo = () => {
    setTodos(currentState => [...currentState, {
      id: count,
      text: input
    }])
    setCount(count + 1);
  }

  const destroy = id => {
    setTodos(todos.filter(e => e.id !== id))
  }

  return (
    <View style={styles.screen}>
      <Input inputHandler={inputHandler} addTodo={addTodo} />
      <ScrollView>
        {todos.map((e, i) => <Item id={e.id} key={i} text={e.text} onDelete={destroy} />)}
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
