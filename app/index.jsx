import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import services from '../utils/services'
import { useRouter } from 'expo-router'
const Home = () => {

  const router = useRouter();


  useEffect(() => {
    checkUserAuth()
  }, [])
  /**
   * Check if user is logged in
   */
  const checkUserAuth = async () => {
    const result = await services.getData('login')
    if (result !== 'true') {
      router.replace('/login')
    }


  }
  return (
    <View>
      <Text>Home Screen </Text>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})