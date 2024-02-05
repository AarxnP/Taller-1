import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ImageBackground, Image } from 'react-native';

const FormularioInicioSesion = () => {
  const [nombreUsuario, setNombreUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');

  const onPressIniciarSesion = () => {
    console.log('Iniciar sesión con:', nombreUsuario, contrasena);
  };

  return (
    <ImageBackground
      source={{
        uri: 'https://i.pinimg.com/736x/e6/6b/4e/e66b4eaa600b4614bc695646538325f7.jpg',
      }}
      style={styles.imagenFondo}
    >
      <View style={styles.contenedor}>
        <Text style={styles.titulo}>Inicio de Sesión</Text>

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
            placeholder="Contraseña"
            secureTextEntry
            value={contrasena}
            onChangeText={(text) => setContrasena(text)}
          />
        </View>

        <TouchableOpacity style={styles.boton} onPress={onPressIniciarSesion}>
          <Text style={styles.textoBoton}>Iniciar Sesión</Text>
        </TouchableOpacity>

        <View>
          <Text style={styles.subtitulo}>¿No tienes cuenta?</Text>
          {/* <Text style={styles.subbtitulo}>      Aquí!     </Text> */}
        </View>

        {/* Espacio para iconos de redes sociales */}
        <View style={styles.redesSocialesContainer}>
          {/* Aquí puedes agregar los iconos de redes sociales */}
          {/* Por ejemplo, para un ícono de Facebook */}
          {/* <TouchableOpacity>
            <Image
              source={{ uri: 'URL_DEL_ICONO_DE_FACEBOOK' }}
              style={styles.iconoRedSocial}
            />
          </TouchableOpacity> */}
          {/* Puedes agregar más iconos para otras redes sociales */}
        </View>

        {/* Icono de la aplicación */}
        {/* <Image
          source={{ uri: 'https://www.pngwing.com/es/free-png-cbxud' }}
          style={styles.iconoApp}
        /> */}
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
  redesSocialesContainer: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  iconoRedSocial: {
    width: 30,
    height: 30,
    marginHorizontal: 10,
  },
  iconoApp: {
    width: 50,
    height: 50,
    marginTop: 20,
  },
});

export default FormularioInicioSesion;