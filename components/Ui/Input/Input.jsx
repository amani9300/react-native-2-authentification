import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import styles from './inputStyles';
// props => {children: ....., }
const Input = ({ children }) => {
    return (
        <View style={styles.container}>
            {/* l'icone */}
            <View>{children}</View>
            {/* l'input */}
            <TextInput style={styles.input} />
        </View>
    )
}

export default Input;

