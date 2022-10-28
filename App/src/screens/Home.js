import { View, Text, StyleSheet, Button } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import Teste from '../components/Teste'
import { Context, Provider } from '../context/dataContext'

const Home = () => {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    document.title = counter
  }, [counter])
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home</Text>
      <h1> {counter} </h1>
      <Button 
        title='Aumentar' 
        onPress={() => setCounter(counter + 1)}
      />
      <Button 
        title='Zerar' 
        onPress={() => setCounter(0)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 30
  }
})

export default () => {
  return (
    <Provider>
      <Home />
    </Provider>
  )
}