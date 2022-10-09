/* eslint-disable max-len */
import React from 'react';
import { View } from 'react-native';
import { Input, CheckBox, Button } from 'react-native-elements';
// import {BASE_URL} from '../../../config';
import { styles } from './LoginScreenStyles';

const LoginScreen = ({ navigation }: any) => {
  // const [text, onChangeText] = React.useState('');
  // const [secure, setSecure] = React.useState('');

  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  // const [firstname, setFirstName] = React.useState('');
  // const [lastname, setLastName] = React.useState('');
  // const [email, setEmail] = React.useState('');
  const [remember, setRemember] = React.useState(Boolean);
  // const [imageUrl, setImageUrl] = React.useState(BASE_URL + 'images/logo.png');

  // const handleLogin = () => {
  //   console.log(0);
  //   // if (this.state.remember)
  //   // eslint-disable-next-line max-len
  //   //     SecureStore.setItemAsync('userinfo', JSON.stringify({username: this.state.username, password: this.state.password}))
  //   //         .catch((error) => console.log('Could not save user info', error));
  //   // else
  //   //     SecureStore.deleteItemAsync('userinfo')
  //   //         .catch((error) => console.log('Could not delete user info', error));
  // };

  return (
    <View style={styles.container}>
      <Input
        placeholder="Username"
        leftIcon={{ type: 'font-awesome', name: 'user-o' }}
        onChangeText={(username) => setUsername(username)}
        value={username}
        containerStyle={styles.formInput}
      />
      <Input
        placeholder="Password"
        leftIcon={{ type: 'font-awesome', name: 'key' }}
        onChangeText={(password) => setPassword(password)}
        value={password}
        containerStyle={styles.formInput}
      />
      <CheckBox
        title="Remember Me"
        center
        checked={remember}
        onPress={() => setRemember(!remember)}
        containerStyle={styles.formCheckbox}
      />
      <View style={styles.formButton}>
        <Button
          onPress={() => navigation.navigate('SignIn')}
          title="Login"
          icon={{
            name: 'sign-in',
            type: 'font-awesome',
            size: 24,
            color: 'white',
          }}
          iconRight
          buttonStyle={{
            backgroundColor: '#512DA8',
          }}
        />
      </View>
      <View style={styles.formButton}>
        {/* <Button
                    onPress={() => navigation.navigate('Register')}
                    title="PROFILE"
                    icon={{
                        name: 'user',
                        type: 'font-awesome',
                        size: 15,
                        color: 'white',
                    }}
                    iconRight
                    iconContainerStyle={{ marginLeft: 10 }}
                    titleStyle={{ fontWeight: '700' }}
                    buttonStyle={{
                        backgroundColor: 'rgba(199, 43, 98, 1)',
                        borderRadius: 4,
                    }}
                /> */}
      </View>
    </View>
  );
};

export default LoginScreen;
