"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_native_1 = require("react-native");
const images_1 = require("../../assets/images");
class Thumbnail extends React.Component {
    render() {
        return (React.createElement(react_native_1.View, { style: thumbnailStyles.container },
            React.createElement(react_native_1.Image, { style: thumbnailStyles.image, source: images_1.default.test_image })));
    }
}
exports.Thumbnail = Thumbnail;
const thumbnailStyles = react_native_1.StyleSheet.create({
    container: {
        padding: 15
    },
    image: {
        width: 144,
        height: 256,
        resizeMode: 'contain',
        backgroundColor: '#cccccc'
    }
});
//# sourceMappingURL=Thumbnail.js.map