import React, { Component } from 'react'
import { ScrollView, Text, Image, View } from 'react-native'
import TopList from './TopList';
import { Images } from '../Themes'

// Styles
import styles from './Styles/LaunchScreenStyles'

export default class LaunchScreen extends Component {
  render () {
    return (
      <View style={styles.mainContainer}>
        <TopList/>
      </View>
    )
  }
}
