import { Text, View } from 'react-native'
import React from 'react'
import styles from './headerStyles';
const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Welcome!</Text>
      <Text style={styles.text}>are you a member? login here!</Text>
    </View>
  )
}
export default Header
