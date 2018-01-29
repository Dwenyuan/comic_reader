"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_native_1 = require("react-native");
exports.wrapper = (title) => ({ navigation, screenProps = {} }) => ({
    title: title,
    headerStyle: {
        height: 35,
        justifyContent: 'center'
    },
    headerTitleStyle: {
        alignSelf: 'center',
    },
    headerLeft: React.createElement(react_native_1.Button, { title: "left", onPress: () => navigation.navigate('DrawerToggle') }),
    headerRight: React.createElement(react_native_1.Button, { title: "right", onPress: () => 1 })
});
//# sourceMappingURL=header.js.map