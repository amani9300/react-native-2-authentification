import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header/Header';
import Input from './components/Ui/Input/Input';
import { Entypo } from '@expo/vector-icons';
import Card from './components/hoc/Card';
import Button from './components/Ui/Button/Button';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />

      <Card header='Please, Login here!'>
        <Input>
          <Entypo name='email' size={24} color='royalblue' />
        </Input>

        <Input>
          <Entypo name='lock' size={24} color='royalblue' />
        </Input>

        <Button>Login</Button>
      </Card>




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


