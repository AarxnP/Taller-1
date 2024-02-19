// import React from 'react';
// import {FlatList, Modal, StyleSheet, Text, useWindowDimensions} from 'react-native';
// import {View} from 'react-native';
// import {Car} from '../Home';

// export interface Props {
//   cars: Car[];
//   isVisible: boolean;
//   changeVisible: () => void;
// }

// export const ModalCar = ({cars, isVisible, changeVisible}: Props) => {
//   const {width} = useWindowDimensions();
//   return (
//     <Modal visible={isVisible} animationType="fade" transparent={true}>
//       <View style={stylesGlobal.root}>
//         <View style={{width: width * 0.8, 
//             ...styesGlobal.content}}>
//           <FlatList
//             data={cars}
//             keyExtractor={item => item.id.toString()}
//             renderItem={({item}) => (
//               <Text onPress={changeVisible}>{item.name}</Text>
//             )}
//           />
//         </View>
//       </View>
//     </Modal>
//   );
// };
// export const stylesGlobal=StyleSheet.create({
//     textPrincipal:{
//         fontSize:17,
//         fontWeight:'bold',
//         color:'black',

//     },
//     textDescription:{
//         fontSize:15,

//     },
//     containForm:{
//         marginVertical:10
//     },
//     textNavigation:{
//         color:'',
//         fontSize:15,
//         marginTop:20,
//         fontWeight:'bold',
//         textAlign:'center'
//     }
// })
import React from 'react';
import { FlatList, Modal, StyleSheet, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import { Car } from '../Home';
import Icon from 'react-native-vector-icons/MaterialIcons';

export interface Props {
  cars: Car[];
  isVisible: boolean;
  changeVisible: () => void;
}

export const ModalCar = ({ cars, isVisible, changeVisible }: Props) => {
  const { width } = useWindowDimensions();

  // Calcular el precio total de la compra
  const totalPrice = cars.reduce((total, carItem) => total + carItem.price * carItem.quantity, 0);

  return (
    <Modal visible={isVisible} animationType="fade" transparent={true}>
      <View style={stylesGlobal.root}>
        <View style={stylesGlobal.content}>
          <TouchableOpacity onPress={changeVisible} style={stylesGlobal.closeIcon}>
            <Icon name="close" size={20} color="black" />
          </TouchableOpacity>
          <Text style={stylesGlobal.title}>Mis Productos</Text>
          <View style={stylesGlobal.divider} />
          <FlatList
            data={cars}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={stylesGlobal.carItem}>
                <Text>{item.name}</Text>
                <Text>{item.quantity} x ${item.price.toFixed(2)}</Text>
              </View>
            )}
          />
          <View style={stylesGlobal.totalContainer}>
            <Text style={stylesGlobal.totalText}>Total: ${totalPrice.toFixed(2)}</Text>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export const stylesGlobal = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  content: {
    height: 300,
    width: 300,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    padding: 20,
    borderRadius: 10,
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    zIndex: 1,
    position: 'relative',
  },
  closeIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 10,
  },
  carItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  totalContainer: {
    marginTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingTop: 5,
  },
  totalText: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  textPrincipal: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'black',
  },
  textDescription: {
    fontSize: 15,
  },
  containForm: {
    marginVertical: 10,
  },
  textNavigation: {
    color: '',
    fontSize: 15,
    marginTop: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
