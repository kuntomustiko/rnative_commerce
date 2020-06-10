import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
// ketika kita ingin menggunakan sesuatu dari bawaan react-native maka kita harus meng-import sesuatu tersebut
//  ex: kita mau menggunakan Alert, maka kita harus import alert dari bawaan react-native
import {TouchableOpacity, StyleSheet, Text, Alert} from 'react-native';
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
} from 'native-base';
import axios from '../../config/api';
import {login} from '../../redux/actions';

const SignIn = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const onSignIn = () => {
    const data = {username, password};
    axios
      .post('/user/login', data)
      // res.data = {username, token}
      .then(res => {
        // hasil = {type: 'LOGIN', payload: {username, token} }
        const hasil = login(res.data);
        dispatch(hasil);
      })
      .catch(err => {
        if (err.response.data.message) {
          Alert.alert('', `${err.response.data.message}`);
        } else {
          // console.log() --> akan muncul di react debugger karena kita react native bukan react js website
          console.log({err});
          Alert.alert('Snap!', 'Something is wrong, check console');
        }
      });
  };

  return (
    <Container>
      <Content>
        <Text style={styles.text}>Sign In</Text>
        <Form>
          <Item stackedLabel>
            <Label>Username</Label>
            {/* ketika kita ingin mendapatkan isi input dari sebuah form */}
            {/* karena kita menggunakna component dari native base maka kita tidak bisa menggunakan ref={} */}
            {/*  inputan akan disimpan di dalam state denga menggunakan setUsername || apa yang disimpan? adalah text dari inputan user  */}
            <Input value={username} onChangeText={text => setUsername(text)} />
            {/* kalau kita menggunakn component dari react aslinya (bukan native base) maka kita bisa menggunakan ref={} */}
          </Item>
          <Item stackedLabel last>
            <Label>Password</Label>
            <Input
              // agar isi inputan menjadi bintang-bintang
              secureTextEntry
              value={password}
              onChangeText={text => setPassword(text)}
            />
          </Item>
        </Form>
        <TouchableOpacity style={styles.signBtn} onPress={onSignIn}>
          <Text style={styles.signText}>Sign In</Text>
        </TouchableOpacity>
        {/* onPress={} --> ketika di klik maka akan melakukan apa? akan berpindah ke component lainnya */}
        {/* ketika element ini diklik maka akan di navigasikan ke component SignUp */}
        {/* onPress={() => navigation.navigate('SignUp')} */}
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.signUpText}>Don't have an account ?</Text>
        </TouchableOpacity>
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  // kita membuat object dengan nama text yang berisi property css, nanti sebuah element di dalam component tinggal
  // memanggil object ini untuk mendapatkan efek dari property css yang diinisialisasikan di obejct ini
  text: {
    marginTop: 35,
    fontSize: 25,
    textAlign: 'center',
  },
  signBtn: {
    backgroundColor: 'purple',
    padding: 9,
    margin: 5,
    borderRadius: 5,
  },
  signText: {
    fontSize: 19,
    color: 'white',
    textAlign: 'center',
  },
  signUpText: {
    marginTop: 5,
    fontSize: 17,
    color: 'blue',
    textAlign: 'center',
  },
});

export default SignIn;

// ctrl + m --> stop debugging sebelum close project
// buka aplikasi debugger --> baru aktifi debugger di ponsel
