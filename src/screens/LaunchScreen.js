import React, { Component } from 'react'
import { Text, View, ActivityIndicator, AsyncStorage } from 'react-native'

export default class LaunchScreen extends Component {
    async componentDidMount() {
        let token = await AsyncStorage.getItem('token')
        if(token) {
            this.props.navigation.navigate('TrackList')
        } else{
            this.props.navigation.navigate('Signup')
        }
    }
    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <ActivityIndicator/>
            </View>
        )
    }
}

