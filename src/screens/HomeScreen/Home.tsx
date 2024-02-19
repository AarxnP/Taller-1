import React, { useState } from 'react'
import { View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';
import { BodyComponent } from '../../components/BodyComponent';
import { CardProduct } from './Commons/Prductos';

//Data prueba
export interface Product{
    id: number;
    name: string;
    price: number;
    stock:number;
    pathImage: string;
}

const products: Product[]=[
    {id: 1, name: 'Paracetamol', price: 0.50, stock: 10, pathImage:'https://statics-cuidateplus.marca.com/cms/styles/ratio_1_1/azblob/2022-09/blister-paracetamol.jpg.webp?itok=iBdn6prc'},
    {id: 2, name: 'Anagal', price: 1.20, stock: 0, pathImage:'https://www.fybeca.com/on/demandware.static/-/Sites-masterCatalog_FybecaEcuador/default/dw667c0e49/images/large/45764-ANALGAN-1G-UNIDAD.jpg'},
    {id: 3, name: 'Ibuprofeno', price: 0.75, stock: 6, pathImage:'https://www.lasanteca.com/userfiles/2018/12/IBUPROFENO-600MG-CAJA-POR-50-TABLETAS-CON-BLISTER.jpg'},
    {id: 4, name: 'Enterogermina', price: 1.00, stock: 12, pathImage:'https://www.enterogermina.com/dam/jcr:37dc9202-6c66-4e72-b968-c0d08158bfcd/img.jpg'},
    {id: 5, name: 'Amoxicilina', price: 2.30, stock: 5, pathImage:'https://www.lasanteca.com/userfiles/2018/12/AMOXICILINA-500MG-CAJA-POR-50-CAPSULAS-CON-BLISTER.jpg'},
    {id: 6, name: 'Monocid', price: 7.50, stock: 8, pathImage:'https://delangelclinicaveterinaria.com/wp-content/uploads/2019/03/moxid_10ml_01.jpg'},
    {id: 7, name: 'Loratadina', price: 3.00, stock: 14, pathImage:'https://www.lasanteca.com/userfiles/2018/12/LORATADINA-5MG-5ML-JARABE-100ML-FRASCO.jpg'},
]

export const Home = () => {
  //Hook que actualice el estado de los productos
  const [productsState, setProductsState] = useState(products);

  //Función para cambiar el stock
  const handlerChangeStockProduct=(idProducto: number, quantity: number)=>{
    const updateStock=productsState.map(item=>item.id == idProducto
      ?{...item,
        stock:item.stock-quantity}
      : item);
      setProductsState(updateStock)
  }

  return (
    <View>
        <title title='Productos'/>
        <BodyComponent>
                <FlatList
                    data={productsState}
                    renderItem={({item})=><CardProduct product={item} handlerChangeStockProduct={handlerChangeStockProduct}/>}
                    keyExtractor={item => item.id.toString()}/>
        </BodyComponent>
    </View>
  )
}