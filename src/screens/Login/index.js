import React from 'react';
import {Platform, ActivityIndicator} from 'react-native';
import {useAuthContext} from '../../_context/AuthProvider';

// Components
import {Input, Button} from '../../components';
import {Container, Logo, Form} from './styles';

// Images
import logoImg from '../../assets/images/logo.png';

function Login() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const {authContext, state} = useAuthContext();

  return (
    <Container behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <Logo source={logoImg} />
      <Form>
        <Input
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={(e) => setEmail(e)}
          editable={!state?.isLoading}
        />
        <Input
          placeholder="Senha"
          secureTextEntry
          onChangeText={(e) => setPassword(e)}
          editable={!state?.isLoading}
        />
        {state?.isLoading ? (
          <ActivityIndicator style={{marginTop: 10}} />
        ) : (
          <Button
            title="Entrar"
            action={() => authContext.signIn(email, password)}
          />
        )}
      </Form>
    </Container>
  );
}

export default Login;
