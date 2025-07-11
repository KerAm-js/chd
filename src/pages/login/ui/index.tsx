import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export const LoginPage = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: '#000000',
          borderRadius: 8,
        }}
      ></View>

      <View style={styles.content}>
        <Text style={styles.title}>Вход в приложение "Что делать?"</Text>

        <View style={{ gap: 10, width: '100%' }}>
          <TextInput style={styles.input} placeholder="Логин" />

          <TextInput
            style={styles.input}
            placeholder="Пароль"
            secureTextEntry={true}
          />
        </View>
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Войти</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.registerLink}>
        <Text style={styles.registerText}>Зарегистрироваться</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 40,
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
    textAlign: 'center',
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 36,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: '#e5e7eb',
    fontWeight: 400,
    fontSize: 14,
    paddingTop: 5,
  },
  loginButton: {
    width: '100%',
    height: 45,
    backgroundColor: '#000000',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
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
