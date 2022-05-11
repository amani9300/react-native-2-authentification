import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Input from './../Ui/Input/Input';
import Card from './../hoc/Card';
import Button from './../Ui/Button/Button';
import { Entypo } from '@expo/vector-icons';
import { useState } from 'react';

const Login = () => {
    
    const [email, setEmail] = useState('');
    const onChangeEmailHandler = (text) => {
        setEmail(text);
    }
    console.log('Email:  ', email);
    return (
        <Card header='Please, Login here!'>
            <Input val={email} handlerFunction={onChangeEmailHandler}>
                <Entypo name='email' size={24} color='royalblue' />
            </Input>

            <Input>
                <Entypo name='lock' size={24} color='royalblue' />
            </Input>

            <Button>Login</Button>
        </Card>
    )
}

export default Login

const styles = StyleSheet.create({})



