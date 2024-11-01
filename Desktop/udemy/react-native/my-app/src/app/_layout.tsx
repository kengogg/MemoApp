import { Stack } from 'expo-router';

const Layout = (): JSX.Element => {
  return <Stack screenOptions={{ 
    headerStyle: {
      backgroundColor: '#5C8DFF'
    },
    headerTintColor: '#ffffff',
    headerTitle: 'Memo App',
    headerTitleAlign: 'center',
    headerBackTitle: 'Back',
    headerTitleStyle: {
      fontSize: 22,
      fontWeight: 'bold'
    }
   }} />
}

export default Layout