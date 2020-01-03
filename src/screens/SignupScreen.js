import React, {useState} from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Text, Button, Input } from 'react-native-elements'
import Spacer from '../components/Spacer'
import trackerApi from '../api/'

const SignupScreen = ({ navigation }) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const signup = async (email, password) => {
        try {
            let response = await trackerApi.post('/signup', { email, password })
            console.log('response ', response)

        } catch(err){
            console.log('error', err)
        }
    }

        return (
        <View style={styles.container}>
            <Spacer>
            <Text h4>Sign up for Tracker</Text>
            </Spacer>
            <Input
                value={email} 
                onChangeText={setEmail}
                autoCapitalize="none"
                autiCorrect={false}
                placeholder='Enter Email'
                leftIcon={{ type: 'font-awesome', name: 'user' }}
            />
            <Spacer/>
            <Input
                value={password} 
                onChangeText={setPassword}
                autoCapitalize="none"
                secureTextEntry={true}
                placeholder='Enter Password'
                leftIcon={{ type: 'font-awesome', name: 'lock' }}
            />
            <Spacer/>
            <Spacer>
                <Button onPress={() => signup(email, password)} title="Sign Up"/>
            </Spacer>
            <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
                <Spacer><Text style={styles.Link}>Already have an account? Sign in</Text></Spacer>
            </TouchableOpacity>
        </View>
    )
}
SignupScreen.navigationOptions = ()=>{
    return{
        header: null
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 100,
    },
    Link: {
        color: 'blue',
        textDecorationLine: 'underline',
        fontSize: 15
    }
})
export default SignupScreen
