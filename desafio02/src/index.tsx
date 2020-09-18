import React, { useState, useCallback } from 'react';
import {
  SafeAreaView,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  Platform,
  View,
} from 'react-native';
import firebase from 'react-native-firebase';

const App: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAuthenticate, setIsAuthenticate] = useState(false);

  const handleSubmit = useCallback(async () => {
    try {
      const user = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);

      if (user) {
        setIsAuthenticate(true);

        setEmail('');

        setPassword('');
      }

      console.log(user);
    } catch (err) {
      Alert.alert('Incorrect email/password combination');

      console.log(err);
    }
  }, [email, password]);

  return (
    <>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="#202020"
      />
      <SafeAreaView
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#202020',
          padding: 24,
        }}
      >
        <KeyboardAvoidingView
          style={{
            flex: 1,
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          enabled
        >
          <View>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                color: '#f2f2f2',
                marginBottom: 24,
              }}
            >
              Faça o seu login
            </Text>
          </View>
          <TextInput
            style={{
              width: '100%',
              height: 60,
              backgroundColor: '#141414',
              color: '#eee',
              paddingHorizontal: 16,
              borderRadius: 10,
              fontSize: 16,
            }}
            autoCorrect={false}
            autoFocus
            keyboardType="email-address"
            autoCapitalize="none"
            placeholderTextColor="#666"
            placeholder="E-mail"
            value={email}
            onChangeText={value => setEmail(value)}
            returnKeyType="next"
            onSubmitEditing={() => {}}
          />
          <TextInput
            style={{
              width: '100%',
              height: 60,
              backgroundColor: '#141414',
              color: '#eee',
              paddingHorizontal: 16,
              borderRadius: 10,
              marginTop: 8,
              fontSize: 16,
            }}
            secureTextEntry
            autoCorrect={false}
            autoCapitalize="none"
            placeholderTextColor="#666"
            placeholder="Senha"
            value={password}
            onChangeText={value => setPassword(value)}
          />
          <TouchableOpacity
            style={{
              marginTop: 16,
              width: '100%',
              height: 60,
              backgroundColor: '#33cc66',
              borderRadius: 10,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={handleSubmit}
          >
            <Text style={{ color: '#fff', fontSize: 18, fontWeight: 'bold' }}>
              Entrar
            </Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </>
  );
};

export default App;
