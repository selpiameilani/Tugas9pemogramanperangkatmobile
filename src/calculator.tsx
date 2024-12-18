import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Calculator = () => {
  const [result, setResult] = useState(0);
  const [input, setInput] = useState('');

  const handlePress = (value) => {
    setInput(input + value);
  };

  const calculateResult = () => {
    try {
      // Menggunakan eval untuk menghitung hasil
      setResult(eval(input));
      setInput('');
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.result}>{result}</Text>
      <Text style={styles.input}>{input}</Text>
      <View style={styles.buttonContainer}>
        <Button title="1" onPress={() => handlePress('1')} />
        <Button title="2" onPress={() => handlePress('2')} />
        <Button title="+" onPress={() => handlePress('+')} />
        <Button title="=" onPress={calculateResult} />
      </View>
    </View>
  );
};

export default Calculator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  result: {
    fontSize: 40,
  },
  input: {
    fontSize: 30,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
});