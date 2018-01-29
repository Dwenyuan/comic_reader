import * as React from 'react'
import { View, Text, Image, StyleSheet } from "react-native";

export interface IProps {

}
export interface IState {

}
export class Thumbnail extends React.Component<IProps, IState>{

    render() {
        return (
            <View style={thumbnailStyles.container}>
                <Text>缩略图 </Text>
            </View>
        )
    }
}
const thumbnailStyles = StyleSheet.create({
    container: {
        width: 72,
        height: 128,
        backgroundColor:'#cccccc'
    }
})