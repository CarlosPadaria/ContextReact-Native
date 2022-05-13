import React from 'react';
import {View, Text} from 'react-native'
import {ContadorProvider} from './context/ContadorContext';
import ContadorEspelho from './components/ContadorEspelho';
import ContadorComponent from './components/ContadorComponent';

const App = () => {

  return (
    <View>
        <Text>
            Use Context
        </Text>
        <ContadorProvider>
          <ContadorComponent/>
          <ContadorEspelho></ContadorEspelho>
        </ContadorProvider>
    </View>
  );
};

export default App;