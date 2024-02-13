import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ImageBackground } from 'react-native';

interface Opcion {
  id: number;
  texto: string;
  imagen: string;
}

const opciones: Opcion[] = [
  { id: 1, texto: '', imagen: 'https://xanafiz.com/wp-content/uploads/2020/09/analgan.jpg' },
  { id: 2, texto: '', imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRQ5Nzy29jfQl9oqCS_EyD1aHy_UDF-VvyhgSi9qH1dA&s' },
  { id: 3, texto: '', imagen: 'https://www.pharmacys.com.ec/wcsstore/DF_CatalogAsset/images/catalog/producto/fullimage/50243P-1.jpg' },
  { id: 4, texto: '', imagen: 'https://medypiel.com/wp-content/uploads/2022/08/ENTEROGERMINA-ESPORAS-DE-BACILLUS-CLAUSI-X-10-FCOS.jpg' },
];

export const Menu = () => {
  return (
    <ImageBackground
      source={{ uri: 'https://img.freepik.com/vector-gratis/antecedentes-medicos-limpios_53876-101048.jpg?size=626&ext=jpg&ga=GA1.1.87170709.1706918400&semt=ais' }}
      style={styles.imagenFondo}
      resizeMode="cover">
      <View style={styles.container}>
      <Text style={styles.titulo}>Menu</Text>
        <View style={styles.gridContainer}>
          <View style={styles.row}>
            {opciones.slice(0, 2).map((opcion) => (
              <TouchableOpacity key={opcion.id} style={styles.item}>
                <Image source={{ uri: opcion.imagen }} style={styles.image} resizeMode="contain" />
                <Text style={styles.text}>{opcion.texto}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <View style={styles.row}>
            {opciones.slice(2,4).map((opcion) => (
              <TouchableOpacity key={opcion.id} style={styles.item}>
                <Image source={{ uri: opcion.imagen }} style={styles.image} resizeMode="contain" />
                <Text style={styles.text}>{opcion.texto}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
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
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center', 
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between', 
  },
  item: {
    width: '45%',
    height: 200,
    aspectRatio: 1,
    backgroundColor: '#F6F6F6',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginVertical: 10,
    margin: 5,
  },
  image: {
    width: '100%',
    height: 100,
  },
  text: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  imagenFondo: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});
