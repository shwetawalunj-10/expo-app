import React from 'react';
import { Stack } from 'expo-router';
import DrawerRoot from './(drawer)/_layout';

const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="(tab)" options={{ headerShown: false }} />
      <Stack.Screen name="(drawer)" options={{ headerShown: false }} />
      {/* <Stack.Screen name="profile" options={{ title: 'Profile' }} /> Add the Profile screen here if needed */}
    </Stack>
  );
};

export default RootLayout;
