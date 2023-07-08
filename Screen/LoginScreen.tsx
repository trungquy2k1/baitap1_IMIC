import * as React  from "react";
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

const LoginScreen = () => {
  return (
  <SafeAreaView style = {styles.root}>
    <View style={styles.container }>
      <Text style ={styles.text} > Yolo System </Text>
      <TextInput style={styles.input} placeholder="Tên đăng nhập "/>
      <TextInput style={styles.input} placeholder="Mật khẩu "/>

      <TextInput style={styles.input} placeholder="Mật khẩu "/>
      <TouchableOpacity style={styles.button}>
        <Text style={{fontWeight:'bold',color:'white', fontSize:18}}>
          LOGIN
        </Text>
      </TouchableOpacity>
      <Text style={styles.tex1}>
        OR
      </Text>
      <TouchableOpacity style={styles.button1}>
        <Text style={{fontWeight:'bold',color:'white',fontSize:18}}>
          Facebook
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button2}>
        <Text style={{fontWeight:'bold',color:'white',fontSize:18}}>
          Google
        </Text>
      </TouchableOpacity>
    </View>
  </SafeAreaView>
 );

};

const styles = StyleSheet.create ({
  root :{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical:140,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'gray',
  },
  container:{

    // borderRadius: 10,
    // borderWidth: 1,
    // borderColor: 'gray',
  },
  text :{
    color : 'green',
    fontSize: 50,
    fontWeight:'700',
    margin : 8,
    textAlign:'center',
    justifyContent:'center',
    textAlignVertical:'center',

  },
  
  input:{
      height:40,
      width:370,
      marginHorizontal: 16,
      borderColor:'gray',
      borderRadius:10,
      borderWidth:1,
      marginTop:10,

  },
  button:{
    height:40,
    margin:4,
    backgroundColor:'#99109c',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:60,
    marginHorizontal: 16,
  },
  tex1 :{
    color:'green',
    fontSize:40,
    fontWeight:'700',
    textAlign:'center',
    marginVertical:20

  },
  button1:{
    height:40,
    margin:4,
    backgroundColor:'#0b8a0b',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:60,
    marginHorizontal: 16,
    
  },
  button2:{
    height:40,
    margin:4,
    backgroundColor:'#e01d1d',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:60,
    marginHorizontal: 16,
  },
});

export default LoginScreen;