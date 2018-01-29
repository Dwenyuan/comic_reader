import * as React from "react";
import { View, Text } from "react-native";
import { wrapper } from "../../components/header";

export interface IProps {

}
export interface IState {

}

export class CurrentPageView extends React.Component<IProps, IState>{

    static navigationOptions = wrapper('current')

    render() {
        return (
            <View>
                <Text>this is current page</Text>
            </View>
        )
    }
}