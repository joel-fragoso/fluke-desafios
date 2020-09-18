import React from 'react';
import {SafeAreaView, Text, StatusBar} from 'react-native';

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" translucent backgroundColor="#202020" />
      <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#202020'}}>
        <Text style={{ fontSize: 36, color: '#f2f2f2' }}>Hello World!</Text>
      </SafeAreaView>
    </>
  );
};

export default App;
