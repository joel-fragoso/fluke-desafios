import React, { useCallback, useRef } from 'react';
import {
  SafeAreaView,
  Text,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
  View,
  TextInput,
} from 'react-native';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';

import Input from './components/Input';

const App: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const passwordInputRef = useRef<TextInput>(null);

  const handleSignIn = useCallback(async () => {}, []);

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
          <Form ref={formRef} onSubmit={handleSignIn} style={{ width: '100%' }}>
            <Input
              name="email"
              icon="mail"
              placeholder="E-mail"
              autoCorrect={false}
              autoCapitalize="none"
              keyboardType="email-address"
              returnKeyType="next"
              onSubmitEditing={() => passwordInputRef.current?.focus()}
            />
            <Input
              ref={passwordInputRef}
              name="password"
              icon="lock"
              placeholder="Senha"
              secureTextEntry
              returnKeyType="send"
              onSubmitEditing={() => formRef.current?.submitForm()}
            />
          </Form>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </>
  );
};

export default App;
