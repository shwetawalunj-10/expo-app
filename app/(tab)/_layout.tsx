import { View, Text } from 'react-native'
import React from "react"
import { Tabs } from "expo-router";
import { AntDesign, FontAwesome } from "@expo/vector-icons";

const TabRoot = () => {
    return (
        <Tabs>
            <Tabs.Screen name="index" options={{ title: "Home", tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} /> }} />
            <Tabs.Screen name="about" options={{ title: "About us", tabBarIcon: ({ color }) => <AntDesign size={28} name="contacts" color={color} /> }} />
            <Tabs.Screen name="profile" options={{ title: "Profile", tabBarIcon: ({ color }) => <FontAwesome size={28} name="user-circle-o" color={color} /> }} />

        </Tabs>
    );
};

export default TabRoot;