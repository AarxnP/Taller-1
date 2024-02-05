import React from 'react';
import { Text, TouchableOpacity, StyleSheet, View, ImageBackground } from 'react-native';

export const InicioScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: 'https://static.vecteezy.com/system/resources/previews/000/936/621/non_2x/vertical-covid-19-poster-with-medicine-vector.jpg',
        }}
        style={styles.imagenFondo}>
        <View style={styles.overlay}>
          <Text style={styles.title}>Bienvenido</Text>
          <Text style={styles.title}>MedicinExpress</Text>
          <TouchableOpacity style={styles.button} onPress={() => console.log('Iniciar sesión')}>
            <Text style={styles.buttonText}>Iniciar sesión</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => console.log('Registrarse')}>
            <Text style={styles.buttonText}>Registrarse</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    width: '100%',
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#2E4053',
    marginBottom: 15,
    fontFamily:'times new roman',
    textDecorationLine: 'underline',
  },
  button: {
    backgroundColor: '#328BB2',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 0,
    fontFamily:'times new roman'
  },
  imagenFondo: {
    flex: 1,
    width: '118%', // Ajustar el ancho de la imagen al 100%
    height: '100%', // Ajustar la altura de la imagen al 100%
    resizeMode: 'cover',
  },
});