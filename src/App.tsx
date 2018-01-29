/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import * as React from 'react';
import {
    Platform,
    StyleSheet,
    Text, StatusBar,
    View, Image,
    Button
} from 'react-native';
import { StackNavigator, DrawerNavigator, NavigationActions, NavigationAction } from "react-navigation";
import Icon from "./assets/icon";
import { CurrentPage } from "./views/current_page";
import { Home } from './views/home'

const App = DrawerNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            drawerLabel: 'home',
            drawerIcon({ focused = false }) {
                return <Image source={Icon.home} resizeMode="contain" style={{ width: 24, height: 24 }}></Image>
            }
        }
    },
    Current: {
        screen: CurrentPage
    }
})
export default App

