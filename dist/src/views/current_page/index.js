"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_navigation_1 = require("react-navigation");
const current_page_1 = require("./current_page");
exports.CurrentPage = react_navigation_1.StackNavigator({
    main: {
        screen: current_page_1.CurrentPageView,
        navigationOptions: {
            title: 'current page'
        }
    }
});
//# sourceMappingURL=index.js.map