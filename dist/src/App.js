"use strict";
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_native_1 = require("react-native");
const react_navigation_1 = require("react-navigation");
const instructions = react_native_1.Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
        'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});
class App extends React.Component {
    render() {
        return (React.createElement(react_native_1.View, { style: styles.container },
            React.createElement(react_native_1.View, null,
                React.createElement(react_native_1.Text, null, "this is header")),
            React.createElement(react_native_1.Text, { style: styles.welcome }, " Welcome to React Native! "),
            React.createElement(react_native_1.Text, { style: styles.instructions }, "To get started, edit App.js this is liushao~ hahhaahaha "),
            React.createElement(react_native_1.Text, { style: styles.instructions }, instructions)));
    }
}
App.navigationOptions = {
    title: 'Great',
    headerStyle: {
        height: 35,
        justifyContent: 'center'
    },
    headerTitleStyle: {
        alignSelf: 'center',
    },
    headerLeft: React.createElement(react_native_1.Button, { title: "left", onPress: () => 1 }),
    headerRight: React.createElement(react_native_1.Button, { title: "right", onPress: () => 1 })
};
const myStackNavigator = react_navigation_1.StackNavigator({
    Home: {
        screen: App
    }
});
const myDrawerNavigator = react_navigation_1.DrawerNavigator({
    App: {
        screen: myStackNavigator,
        navigationOptions: {
            drawerLabel: 'APP',
        }
    }
});
exports.default = myDrawerNavigator;
const styles = react_native_1.StyleSheet.create({
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
//# sourceMappingURL=App.js.map