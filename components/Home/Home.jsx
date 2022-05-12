import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Button from '../Ui/Button/Button'

const Home = ({logoutHandler}) => {
  return (
    <View style={styles.container}>
      <Text style={{color:'white'}}>Home</Text>
      <Button press={logoutHandler} styleBtn={{backgroundColor:'crimson'}}>Logout</Button>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent:'center',
    alignItems:'center'
}
})