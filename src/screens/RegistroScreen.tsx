import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ImageBackground } from 'react-native';

const FormularioRegistro = () => {
  const [nombreUsuario, setNombreUsuario] = useState('');
  const [correoElectronico, setCorreoElectronico] = useState('');
  const [contrasena, setContrasena] = useState('');

  const onPressRegistrarse = () => {
    console.log('Registrarse con:', nombreUsuario, correoElectronico, contrasena);
  };

  return (
    <ImageBackground
      source={{
        uri: 'https://i.pinimg.com/736x/e6/6b/4e/e66b4eaa600b4614bc695646538325f7.jpg',
      }}
      style={styles.imagenFondo}
    >
      <View style={styles.contenedor}>
        <Text style={styles.titulo}>Registro</Text>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Nombre de usuario"
            value={nombreUsuario}
            onChangeText={(text) => setNombreUsuario(text)}
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Correo electrónico"
            keyboardType="email-address"
            value={correoElectronico}
            onChangeText={(text) => setCorreoElectronico(text)}
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Contraseña"
            secureTextEntry
            value={contrasena}
            onChangeText={(text) => setContrasena(text)}
          />
        </View>

        <TouchableOpacity style={styles.boton} onPress={onPressRegistrarse}>
          <Text style={styles.textoBoton}>Registrarse</Text>
        </TouchableOpacity>
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
    marginBottom: 15,
    fontFamily: 'times new roman',
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
    height: 40,// Color del fondo del cuadro de entrada
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

export default FormularioRegistro;