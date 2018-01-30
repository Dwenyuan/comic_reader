"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_native_1 = require("react-native");
const Thumbnail_1 = require("./Thumbnail");
const header_1 = require("../../components/header");
class HomePage extends React.Component {
    render() {
        return (React.createElement(react_native_1.View, { style: styles.container },
            React.createElement(Thumbnail_1.Thumbnail, null),
            React.createElement(Thumbnail_1.Thumbnail, null),
            React.createElement(Thumbnail_1.Thumbnail, null),
            React.createElement(Thumbnail_1.Thumbnail, null),
            React.createElement(Thumbnail_1.Thumbnail, null),
            React.createElement(Thumbnail_1.Thumbnail, null),
            React.createElement(Thumbnail_1.Thumbnail, null),
            React.createElement(Thumbnail_1.Thumbnail, null),
            React.createElement(Thumbnail_1.Thumbnail, null)));
    }
}
HomePage.navigationOptions = header_1.wrapper('home');
exports.HomePage = HomePage;
const styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        backgroundColor: '#F5FCFF',
        flexWrap: 'wrap',
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
//# sourceMappingURL=home.js.map