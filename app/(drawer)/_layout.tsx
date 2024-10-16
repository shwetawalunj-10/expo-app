import React from 'react'
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";

const DrawerRoot = () => {
  return (
    <GestureHandlerRootView>
      {/* <Drawer /> */}
      <Drawer>
        <Drawer.Screen name="index" />
      </Drawer>
    </GestureHandlerRootView>
  );
};

export default DrawerRoot;