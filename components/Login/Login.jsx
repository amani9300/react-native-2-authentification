import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Input from './../Ui/Input/Input';
import Card from './../hoc/Card';
import Button from './../Ui/Button/Button';
import { Entypo } from '@expo/vector-icons';

const Login = () => {
    return (
        <Card header='Please, Login here!'>
            <Input>
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



