"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_native_1 = require("react-native");
const Thumbnail_1 = require("./Thumbnail");
const header_1 = require("../../components/header");
const react_native_fs_1 = require("react-native-fs");
class HomePage extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            content: '测试'
        };
    }
    componentDidMount() {
        const path = react_native_fs_1.MainBundlePath + 'text.txt';
        react_native_fs_1.writeFile(path, '这是一段文本', 'utf8').then(sucess => alert('done')).catch(error => alert('error'));
    }
    getContent() {
        const path = react_native_fs_1.MainBundlePath + 'text.txt';
        react_native_fs_1.readFile(path, 'utf8').then(data => this.setState({ content: data }));
    }
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
            React.createElement(Thumbnail_1.Thumbnail, null),
            React.createElement(react_native_1.Text, null, this.state.content),
            React.createElement(react_native_1.Button, { title: "获取内容", onPress: () => this.getContent() })));
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