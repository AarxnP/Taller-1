
import React, { useState } from 'react';
import { Modal, StyleSheet, Text, View, FlatList } from 'react-native';
import { FlatList as GestureFlatList } from 'react-native-gesture-handler';
import { BodyComponent } from '../../components/BodyComponent';
import { CardProduct } from './Commons/Prductos';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TitleComponent } from '../../components/TitleComponents';
import { ModalCar } from './Commons/ModalCar';

// Data de prueba
export interface Product { 
        id: number;   
        name: string;   
        price: number;   
        stock:number;   
        pathImage: string;  
    }   
    const  products: Product[] = [   
      {id: 1, name: 'Paracetamol 500mg', price: 2.50, stock: 6, pathImage:'https://www.laboratoriochile.cl/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2015/11/Paracetamol_500MG_16C_BE_HD.jpg.webp'},   
      {id: 2, name: 'Bismutol 360ml', price: 8.50, stock: 5, pathImage:'https://www.pharmacys.com.ec/wcsstore/DF_CatalogAsset/images/catalog/producto/fullimage/30408P-1.jpg'},   
      {id: 4, name: 'Buscamint', price: 12.50, stock: 10, pathImage:'https://www.buscapina.com/dam/jcr:beb932af-5837-47ad-a3a1-bb788654326c/PER%C3%9A%20Buscamint%200,2%20ML%2012%20CAP%20-%20Frontal%20M.png'},   
      {id: 5, name: 'Alka-Seltzer x10', price: 2.99, stock: 7, pathImage:'https://www.alkaseltzer.com.ec/sites/g/files/vrxlpx49061/files/2023-12/prod-1.png'},   
      {id: 6, name: 'Pharmaton Kiddi Jarabe de 200ml', price: 11.25, stock: 9, pathImage:'https://www.plmconnection.com/plmservices/PharmaSearchEngine/Mexico/DEF/SIDEF/400x400/sanofi_pharmaton_kiddi_jara_fco_100ml.png'},   
      {id: 7, name: 'Aspirina 100mg Tabletas x100', price: 2.14, stock: 4, pathImage:'https://www.supermercadosantamaria.com/documents/10180/10504/153802995_G.jpg'},   
      {id: 8, name: 'Enterogermina 10 Unidades', price: 1.00, stock: 10, pathImage:'https://farmaenlace.vtexassets.com/arquivos/ids/166768/0000101880.jpg?v=638116423759770000'},   
      {id: 9, name: 'Loratadina x10 Unidades', price: 0.80, stock: 8, pathImage:'https://www.plmconnection.com/plmservices/PharmaSearchEngine/Ecuador/DEF/SIDEF/400x400/lasante_loratadina_tabletas.png'}, 
      {id: 10, name: 'Analgan x8 Unidades', price: 1.20, stock: 10, pathImage:'https://www.kuyuna.com/wp-content/uploads/2021/06/ANALGAN-1G.jpg'}, 
    ];

export interface Car {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

export const Home = () => {

  const [productsState, setProductsState] = useState(products);
  const [cars, setCars] = useState<Car[]>([]);
  const [showModal, setShowModal] = useState(false);

  const handlerChangeStockProduct = (idProducto: number, quantity: number) => {
    const updateStock = productsState.map(item => item.id === idProducto
      ? { ...item, stock: item.stock - quantity }
      : item);
    setProductsState(updateStock);

    const existingCarItem = cars.find(carItem => carItem.id === idProducto);

    if (existingCarItem) {
      const updatedCars = cars.map(carItem => carItem.id === idProducto
        ? { ...carItem, quantity: carItem.quantity + quantity }
        : carItem
      );
      setCars(updatedCars);
    } else {
      const product = products.find(item => item.id === idProducto);
      if (product) {
        setCars([...cars, { id: product.id, name: product.name, price: product.price, quantity }]);
      }
    }
  };

  return (
    <View>
      <View style={styles.header}>
        <TitleComponent title='Productos' />
        <View style={styles.iconCart}>
          <Text style={styles.textIconCars}>{cars.length}</Text>
          <Icon name={'shopping-cart-checkout'} size={27} color={'#fff'} onPress={() => setShowModal(!showModal)} />
        </View>
      </View>
      <BodyComponent>
        <GestureFlatList
          data={productsState}
          renderItem={({ item }) => <CardProduct product={item} handlerChangeStockProduct={handlerChangeStockProduct} />}
          keyExtractor={item => item.id.toString()} />
      </BodyComponent>
      <ModalCar cars={cars} isVisible={showModal} changeVisible={() => setShowModal(!showModal)} />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#6CCFE7'
  },
  iconCart: {
    flex: 1,
    alignItems: 'flex-end',
    paddingHorizontal: 30,
    backgroundColor: '#6CCFE7'
  },
  textIconCars: {
    color: 'white',
    backgroundColor: 'black',
    paddingHorizontal: 5,
    borderRadius: 10,
    fontWeight: 'bold',
    fontSize: 20
  }
});
