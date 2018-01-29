import * as React from "react";
import { StackNavigator } from "react-navigation";
import { HomePage } from "./home";
export const Home = StackNavigator({
    Home: {
        screen: HomePage
    }
})