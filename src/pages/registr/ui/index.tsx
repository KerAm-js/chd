import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export const RegistrPage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Регистрация</Text>
        <View  style={styles.arrowImage}></View>
      </View>
      <View style={{width: 100, height: 100, backgroundColor:'#000000', borderRadius:8}}></View>
      
      <View style={styles.content}>
          <View style={{gap:10,width:'100%'}}>
            <TextInput 
            style={styles.input}
            placeholder="Логин"
          />
        
          <TextInput 
            style={styles.input}
            placeholder="ФИО"
            secureTextEntry={true}
          />

            <TextInput 
            style={styles.input}
            placeholder="Придумйте пароль"
          />
        
          <TextInput 
            style={styles.input}
            placeholder="Повторите пароль"
            secureTextEntry={true}
          />
          </View>
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Продолжить</Text>
        </TouchableOpacity>
      </View>
    </View>
  ); 
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingVertical: 40,
    gap:40,
  },
  header:{
    position:'relative',
    width:'100%',
    justifyContent:'center',
    alignItems:'center',
    marginTop:20,
  },
  arrowImage:{
      position:'absolute',
      left:30,
      width: 30, 
      height: 30, 
      backgroundColor:'#000000', 
      borderRadius:8
  },
  headerText:{
    fontSize:24,
    fontWeight:400,
    fontFamily: 'Inter',
    color:'#000000',
  },
  content: {
    width: '80%',
  },
  title: {
    fontFamily: 'Inter',
    fontWeight: '400',
    fontSize: 15,
    color: '#000000',
    marginBottom: 15,
    textAlign:'center',
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height:36,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: '#e5e7eb',
    fontWeight:400,
    fontSize:14,
    paddingTop:5,
  },
  loginButton: {
    width: '100%',
    height: 45,
    backgroundColor: '#000000',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  loginButtonText: {
    color: '#ffffff',
    fontFamily: 'Inter',
    fontWeight: '500',
    fontSize: 16,
  },
  registerLink: {
    marginBottom: 20,
  },
  registerText: {
    fontFamily: 'Inter',
    fontWeight: '400',
    fontSize: 15,
    color: '#000000',
  },
});