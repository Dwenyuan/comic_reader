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
    View,
    Button
} from 'react-native';
import { StackNavigator, DrawerNavigator } from "react-navigation";

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
        'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});

class App extends React.Component<{}> {
    static navigationOptions = {
        title: 'Great',
        headerStyle: {
            height: 35,
            justifyContent: 'center'
        },
        headerTitleStyle: {
            alignSelf: 'center',
        },
        headerLeft: <Button title="left" onPress={() => 1}></Button>,
        headerRight: <Button title="right" onPress={() => 1}></Button>
    }
    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Text>this is header</Text>
                </View>
                <Text style={styles.welcome}> Welcome to React Native! </Text>
                <Text style={styles.instructions}>
                    To get started, edit App.js
                    this is liushao~ hahhaahaha </Text>
                <Text style={styles.instructions}>
                    {instructions}
                </Text>
            </View>
        );
    }
}

const myStackNavigator = StackNavigator({
    Home: {
        screen: App
    }
})
const myDrawerNavigator = DrawerNavigator({
    App: {
        screen: myStackNavigator,
        navigationOptions: {
            drawerLabel: 'APP',
        }
    }
})
export default myDrawerNavigator

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
