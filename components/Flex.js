import React, { Component } from 'react'
import {View,StyleSheet} from 'react-native'

export default class Flex extends Component {

  render() {
    return(
      <View style={styles.container}>
        <View style={{flex: 1, backgroundColor: 'powderblue'}}/>
        <View style={{flex: 2, backgroundColor: 'skyblue'}}/>
        <View style={{flex: 3, backgroundColor: 'steelblue'}}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    flex: 1
  }
})
