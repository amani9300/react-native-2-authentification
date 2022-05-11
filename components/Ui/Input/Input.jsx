import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import styles from './inputStyles';
// props => {children: ....., }
const Input = ({ handlerFunction, val, children }) => {
    return (
        <>
            <View style={styles.container}>
                {/* l'icone */}
                <View>{children}</View>
                {/* l'input */}
                <TextInput onChangeText={handlerFunction} value={val} style={styles.input} />
            </View>
            <Text></Text>
        </>
    )
}

export default Input;

