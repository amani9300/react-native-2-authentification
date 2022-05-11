import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header/Header';



import Login from './components/Login/Login';

export default function App() {
  
  return (
    <View style={styles.container}>
      <Header />

      <Login />
      




    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
    padding: 20
  },
});


