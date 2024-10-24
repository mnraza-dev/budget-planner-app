import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import logo from '../../assets/images/logo.png';

const LoginScreen = () => {
  return (
    <View style={{
      display: 'flex',
      alignItems: 'center',
    }}>
      <Text>Hi there</Text>

      <Image
       resizeMode="contain"
        source={logo}
        style={styles.bgImage} />
     <View style={{
      backgroundColor:'purple',
      width:'100%',
      height:'100%',
      padding:20,
      marginTop:-30
     }}>
     <Text style={styles.pageTitle}>Personal Budget Planner</Text>
     </View>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  bgImage: {
    width: 200,
    height: 200,
    marginTop: 10
  },
  pageTitle: {
    fontSize: 30,
    fontWeight: 'bold'
  }
})