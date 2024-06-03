import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import Hello from './screens/Hello';

const App = (): React.JSX.Element => {
  return (
    <SafeAreaView>
      <StatusBar/>
      <Hello />
    </SafeAreaView>
  );
};


export default App;
