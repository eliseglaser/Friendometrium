/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import { Provider } from 'react-redux'
import { store } from './redux/app-redux';
import React from 'react';
import ReduxExampleScreen from './Screens/ReduxExampleScreen'
import { Text, View } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';




export default class App extends React.Component{
    render() {
        return (
          <Provider store={store}>
          <View style={{flex:1}}>
            <ReduxExampleScreen/>
            </View>
          </Provider>
          );
    }
};
