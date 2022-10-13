/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Provider} from 'react-redux';
import {ImageLoadingLocalDemoScreen} from './app/components/ImageLoadingLocalDemoScreen';
import {ImageViewScreen} from './app/components/ImageViewScreen';
import store from './app/redux/store';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{headerShown: false}}
            name="Home"
            component={ImageLoadingLocalDemoScreen}
          />
          <Stack.Screen
            options={{headerBackButtonMenuEnabled: false, title: 'Image'}}
            name="imageView"
            component={ImageViewScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
