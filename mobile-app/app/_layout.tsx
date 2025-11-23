import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function RootLayout() {
  return (
    <>
      <StatusBar style="light" />
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: '#1a1a2e',
          },
          headerTintColor: '#00d4ff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen 
          name="index" 
          options={{ 
            title: 'Data Scientist Group',
            headerShown: false
          }} 
        />
        <Stack.Screen 
          name="expenses" 
          options={{ title: 'Group Expenses' }} 
        />
        <Stack.Screen 
          name="gallery" 
          options={{ title: 'Gallery' }} 
        />
        <Stack.Screen 
          name="members" 
          options={{ title: 'Members' }} 
        />
        <Stack.Screen 
          name="education" 
          options={{ title: 'Education Hub' }} 
        />
        <Stack.Screen 
          name="fun-zone" 
          options={{ title: 'Fun Zone' }} 
        />
      </Stack>
    </>
  );
}
