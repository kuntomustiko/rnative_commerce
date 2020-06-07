import 'react-native-gesture-handler';

import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

// Redux
import {Provider} from 'react-redux';
import store from './redux';
// ROuter
import MainRouter from './router/MainRouter';
import AuthRouter from './router/AuthRouter';

const App = () => {
  return (
    <Provider store={store}>
      // Semua navigasi harus di wrap oleh NavigationContainer
      <NavigationContainer>
        {/* <MainRouter /> */}
        <AuthRouter />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
