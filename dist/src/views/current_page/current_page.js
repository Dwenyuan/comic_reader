"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_native_1 = require("react-native");
const header_1 = require("../../components/header");
class CurrentPageView extends React.Component {
    render() {
        return (React.createElement(react_native_1.View, null,
            React.createElement(react_native_1.Text, null, "this is current page")));
    }
}
CurrentPageView.navigationOptions = header_1.wrapper('current');
exports.CurrentPageView = CurrentPageView;
//# sourceMappingURL=current_page.js.map