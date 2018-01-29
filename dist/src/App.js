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
const icon_1 = require("./assets/icon");
const current_page_1 = require("./views/current_page");
const home_1 = require("./views/home");
const App = react_navigation_1.DrawerNavigator({
    Home: {
        screen: home_1.Home,
        navigationOptions: {
            drawerLabel: 'home',
            drawerIcon({ focused = false }) {
                return React.createElement(react_native_1.Image, { source: icon_1.default.home, resizeMode: "contain", style: { width: 24, height: 24 } });
            }
        }
    },
    Current: {
        screen: current_page_1.CurrentPage
    }
});
exports.default = App;
//# sourceMappingURL=App.js.map