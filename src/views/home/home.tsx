import * as React from 'react'
import { Button, View, Text, StyleSheet, ScrollView } from "react-native";
import { StackNavigator } from "react-navigation";

import { Thumbnail } from "./Thumbnail";
import { wrapper } from "../../components/header";
import { MainBundlePath, writeFile, readFile } from "react-native-fs";

export interface IProps {

}
export interface IState {

}
export class HomePage extends React.Component<{}> {
    static navigationOptions = wrapper('home')
    public state = {
        content: '测试'
    }
    componentDidMount() {
        const path = MainBundlePath + 'text.txt'
        writeFile(path, '这是一段文本', 'utf8').then(sucess => alert('done')).catch(error => alert('error'))
    }
    getContent() {
        const path = MainBundlePath + 'text.txt'
        readFile(path, 'utf8').then(data => this.setState({ content: data }))
    }
    render() {
        return (
            <ScrollView style={{ flex: 1 }}>
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
                    <Text>{this.state.content}</Text>
                    <Button title="获取内容" onPress={() => this.getContent()}></Button>
                </View>
            </ScrollView>
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