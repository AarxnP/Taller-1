import React, { useState } from 'react';
import {View,Text,StyleSheet,TextInput,ImageBackground,Alert,} from 'react-native';
import { ButtonComponent } from '../components/ButtonComponent';
import { createStackNavigator } from '@react-navigation/stack';
import { FormularioRegistro } from './RegistroScreen';

const Stack = createStackNavigator();

export const FormularioInicioSesion = ({ navigation }: any) => {
  const [nombreUsuario, setNombreUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');

  const onPressMenu = () => {
    console.log('Inicio Sesion con:', nombreUsuario, contrasena);
  };

  const onPress = () => {
    if (!nombreUsuario.trim()) {
      Alert.alert('Por favor, ingresa un nombre de usuario.');
      return;
    }
    if (!contrasena.trim()) {
      Alert.alert('Por favor, ingresa una contraseña.');
      return;
    }
    console.log('Tu inicio de sesion fue exitoso:',nombreUsuario,contrasena);
    navigation.navigate('Menu');
  };

  return (
    <ImageBackground
      source={{
        uri: 'https://i.pinimg.com/736x/e6/6b/4e/e66b4eaa600b4614bc695646538325f7.jpg',
      }}
      style={styles.imagenFondo}>
      <View style={styles.contenedor}>
        <Text style={styles.titulo}>Inicio de Sesión</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Nombre de usuario"
            value={nombreUsuario}
            onChangeText={(text) => setNombreUsuario(text)}/>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Contraseña"
            secureTextEntry
            value={contrasena}
            onChangeText={(text) => setContrasena(text)}/>
        </View>
        <View>
          <ButtonComponent title="Inicio Sesión" onPress={onPress} />
        </View>
        <View>
          <ButtonComponent title="Registro" onPress={() => navigation.navigate(FormularioRegistro)} />
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titulo: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#2E4053',
    marginBottom: 15,
    fontFamily:'times new roman',
    textDecorationLine: 'underline',
  },
  subtitulo: {
    fontSize: 15,
  },
  subbtitulo: {
    fontSize: 10,
  },
  inputContainer: {
    width: '80%',
    marginBottom: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    borderRadius: 10,
    height: 40,
  },
  boton: {
    backgroundColor: '#328BB2',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  textoBoton: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 0,
    fontFamily:'times new roman'
  },
  imagenFondo: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});
