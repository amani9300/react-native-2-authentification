import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Input from './../Ui/Input/Input';
import Card from './../hoc/Card';
import Button from './../Ui/Button/Button';
import { Entypo } from '@expo/vector-icons';
import { useState } from 'react';
const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};
const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onChangeEmailHandler = (text) => {
        setEmail(text);
    }

    const onChangePasswordHandler = (text) => {
        setPassword(text);
    }

    const onSubmitHandler = () => {

        if (password.trim() !== '' && password.length > 5 && validateEmail(email)) {

            console.log(email);
            console.log(password);
        }
    }

    // console.log('Email:  ', email);
    console.log('password:  ', password);
    return (
        <Card header='Please, Login here!'>
            <Input val={email} handlerFunction={onChangeEmailHandler}>
                <Entypo name='email' size={24} color='royalblue' />
            </Input>

            <Input val={password} handlerFunction={onChangePasswordHandler}>
                <Entypo name='lock' size={24} color='royalblue' />
            </Input>

            <Button press={onSubmitHandler}>Login</Button>
        </Card>
    )
}

export default Login

const styles = StyleSheet.create({})



