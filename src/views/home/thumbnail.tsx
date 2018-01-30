import * as React from 'react'
import { View, Text, Image, StyleSheet } from "react-native";
import Images from "../../assets/images";

export interface IProps { }
export interface IState { }
export class Thumbnail extends React.Component<IProps, IState>{

    render() {
        return (
            <View style={thumbnailStyles.container}>
                <Image
                    style={thumbnailStyles.image}
                    source={Images.test_image} />
            </View>
        )
    }
}

const thumbnailStyles = StyleSheet.create({
    container: {
        padding: 15
    },
    image: {
        width: 144,
        height: 256,
        resizeMode: 'contain'
        backgroundColor: '#cccccc'
    }
})

