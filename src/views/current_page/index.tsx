import * as React from 'react'
import { StackNavigator } from "react-navigation";
import { CurrentPageView } from "./current_page";

export const CurrentPage = StackNavigator({
    main: {
        screen: CurrentPageView,
        navigationOptions: {
            title: 'current page'
        }
    }
})