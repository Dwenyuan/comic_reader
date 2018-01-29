import * as React from 'react'
import { Button } from "react-native";

export const wrapper = (title: string) =>
    ({ navigation, screenProps = {} }: { navigation: any, screenProps: any }) =>
        ({
            title: title,
            headerStyle: {
                height: 35,
                justifyContent: 'center'
            },
            headerTitleStyle: {
                alignSelf: 'center',
            },
            headerLeft: <Button title="left" onPress={() => navigation.navigate('DrawerToggle')}></Button>,
            headerRight: <Button title="right" onPress={() => 1}></Button>
        })