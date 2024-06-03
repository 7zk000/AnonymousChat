import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Hello = () => {
  const handleLoginPress = () => {
    console.log('Login button pressed');
  };

  const handleSignupPress = () => {
    console.log('Signup button pressed');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello, World!</Text>
      <Button title="Login" onPress={handleLoginPress} />
      <Button title="Sign Up" onPress={handleSignupPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  button: {
    marginVertical: 10,
  },
});

export default Hello;
