import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

import logo from '../../assets/images/react-logo.png';
import { COLORS } from '../../constants/Colors';
import { TouchableOpacity } from 'react-native';
import {client} from "../../utils/KindConfig";
import services from '../../utils/services';
import { useRouter } from 'expo-router';


const LoginScreen = () => {
  const router = useRouter();

  const handleSignIn = async () => {
    const token = await client.login();
    if (token) {
      await services.storeData('login', 'true');
      router.replace('/');
      console.log("btn clicked")
    }
  };
  return (
    <View style={
      {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 10,

      }}>
      <Image
        resizeMode="contain"
        source={logo}
        style={styles.bgImage} />
      <View style={{
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        backgroundColor: COLORS.PRIMARY,
        width: '100%',
        height: '50%',
        padding: 20,

      }}>
        <Text style={styles.pageTitle}>Personal Budget Planner</Text>

        <Text style={styles.subHeading}>Stay on Track, Event by Event: Your Personal Budget Planner  Budget Planner</Text>

        <View style={styles.buttonWrapper}>
          <TouchableOpacity onPress={handleSignIn} style={styles.button}>
            <Text style={{
              color: COLORS.PRIMARY,
              textAlign: 'center',
              fontSize: 28,
              fontWeight: '600'
            }}>Login/Sigup</Text>
          </TouchableOpacity>
          <Text style={{
            color: COLORS.WHITE,
            marginTop: 8,
            fontSize: 13,
            fontWeight: '600'
          }}>* By Signup/Login you will be agree to our Terms & Conditions</Text>

        </View>


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
    color: 'white',
    textAlign: 'center',
    fontSize: 40,
    marginBottom: 10,
    fontWeight: 'bold'
  },
  subHeading: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '400'
  },
  button: {
    backgroundColor: COLORS.WHITE,
    paddingHorizontal: 5,
    padding: 20,
    marginTop: 20,
    borderRadius: 99
  },
  buttonWrapper: {
    paddingVertical: 20
  }
})