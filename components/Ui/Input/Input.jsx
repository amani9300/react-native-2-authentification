import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import styles from './inputStyles';
// props => {children: ....., }
const Input = ({ handlerFunction, val, children, errorMsg }) => {
    return (
        <>
            <View style={styles.container}>
                {/* l'icone */}
                <View>{children}</View>
                {/* l'input */}
                <TextInput onChangeText={handlerFunction} value={val} style={styles.input} />
            </View>
            {/* {condition && qlq chose à retourné} */}
            {errorMsg && <Text>{errorMsg}</Text>} 
            {/* {errorMsg ? <Text>{errorMsg}</Text> : null} */}
        </>
    )
}

export default Input;

