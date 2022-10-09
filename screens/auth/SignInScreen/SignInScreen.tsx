import React from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, View } from 'react-native';
import { Input, CheckBox, Button, Avatar } from 'react-native-elements';
import { BASE_URL } from '../../../config';
import { styles } from './SignInScreenStyles';

const SignInScreen = ({ navigation }) => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [firstname, setFirstName] = React.useState('');
  const [lastname, setLastName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [remember, setRemember] = React.useState(Boolean);
  const [imageUrl, setImageUrl] = React.useState(BASE_URL + 'images/logo.png');

  const handleRegister = () => {
    console.log(JSON.stringify(username));
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{
        alignSelf: 'stretch',
        justifyContent: 'space-between',
      }}
    >
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Avatar
              size={64}
              rounded
              title={username.substring(0, 1)}
              containerStyle={{ backgroundColor: '#3d4db7' }}
            />
          </View>
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
          <Input
            placeholder="First Name"
            leftIcon={{ type: 'font-awesome', name: 'user-o' }}
            onChangeText={(firstname) => setFirstName(firstname)}
            value={firstname}
            containerStyle={styles.formInput}
          />
          <Input
            placeholder="Last Name"
            leftIcon={{ type: 'font-awesome', name: 'user-o' }}
            onChangeText={(lastname) => setFirstName(lastname)}
            value={lastname}
            containerStyle={styles.formInput}
          />
          <Input
            placeholder="Email"
            leftIcon={{ type: 'font-awesome', name: 'envelope-o' }}
            onChangeText={(email) => setEmail(email)}
            value={email}
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
              onPress={handleRegister}
              title="Register"
              icon={{
                name: 'user-plus',
                type: 'font-awesome',
                size: 24,
                color: 'white',
              }}
              buttonStyle={{
                backgroundColor: '#512DA8',
              }}
            />
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SignInScreen;
