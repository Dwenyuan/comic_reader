"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_native_1 = require("react-native");
class Thumbnail extends React.Component {
    render() {
        return (React.createElement(react_native_1.View, { style: thumbnailStyles.container },
            React.createElement(react_native_1.Text, null, "\u7F29\u7565\u56FE ")));
    }
}
exports.Thumbnail = Thumbnail;
const thumbnailStyles = react_native_1.StyleSheet.create({
    container: {
        width: 72,
        height: 128,
        backgroundColor: '#cccccc'
    }
});
//# sourceMappingURL=Thumbnail.js.map