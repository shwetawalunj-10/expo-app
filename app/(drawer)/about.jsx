import { View, Text } from 'react-native'
import React from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { Drawer } from "expo-router/drawer";

const about = () => {
    return (
        <GestureHandlerRootView>
            <Drawer>
                <Drawer.Screen name="index" />
            </Drawer>
        </GestureHandlerRootView>
    )
}

export default about