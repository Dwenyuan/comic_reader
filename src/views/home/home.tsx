import * as React from 'react'
import { Button, View, Text, StyleSheet } from "react-native";
import { StackNavigator } from "react-navigation";

import { Thumbnail } from "./Thumbnail";
import { wrapper } from "../../components/header";

export interface IProps {

}
export interface IState {

}
export class HomePage extends React.Component<{}> {
    static navigationOptions = wrapper('home')
    render() {
        return (
            <View style={styles.container}>
                <Thumbnail />
                <Thumbnail />
                <Thumbnail />
                <Thumbnail />
                <Thumbnail />
                <Thumbnail />
                <Thumbnail />
                <Thumbnail />
                <Thumbnail />
            </View>
        );
    }
}

const styles = StyleSheet.create({
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