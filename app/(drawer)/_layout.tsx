import React from 'react';
import { Drawer } from 'expo-router/drawer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const DrawerRoot = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
        <Drawer.Screen name="home" />
        <Drawer.Screen name="about" />
        <Drawer.Screen name="profile" />
      </Drawer>
    </GestureHandlerRootView>
  );
};

export default DrawerRoot;
