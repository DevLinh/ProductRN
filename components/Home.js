import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  Text,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//Khoi tao Danh sach
const listProduct = [
  {
    id: 1,
    name: 'Nhà Giả Kim',
    image: require('../src/image/book1.jpg'),
    price: '200.000',
  },
  {
    id: 2,
    name: 'Thế Giới Ba Không',
    image: require('../src/image/book2.jpg'),
    price: '300.000',
  },
  {
    id: 3,
    name: 'Mắt Biếc',
    image: require('../src/image/book3.jpg'),
    price: '100.000',
  },
  {
    id: 4,
    name: 'Cà Phê Cùng Tony',
    image: require('../src/image/book4.jpg'),
    price: '400.000',
  },
  {
    id: 5,
    name: 'Đi Tìm Lẽ Sống',
    image: require('../src/image/book5.jpg'),
    price: '500.000',
  },
  {
    id: 6,
    name: 'Giận',
    image: require('../src/image/book6.jpg'),
    price: '500.000',
  },
  {
    id: 7,
    name: 'The Magic',
    image: require('../src/image/book7.jpg'),
    price: '500.000',
  },
  {
    id: 8,
    name: '3 Người Thầy Vĩ Đại',
    image: require('../src/image/book8.jpg'),
    price: '500.000',
  },
];
export default function Home({navigation}) {
  
    return (
      <View style={styles.container}>
        <View style={styles.banner}>
          <Image
            style={{width: '100%', height: '100%'}}
            source={require('../src/image/banner.jpg')}
          />
        </View>
        <View style={styles.listProduct}>
          {/* Dùng Flatlist show danh sách product */}
          <FlatList
            data={listProduct}
            renderItem={({item}) => (
              <View style={styles.productView}>
                <TouchableOpacity style={styles.productTouch} onPress={() => (navigation.navigate('Detail', {productDetail: item}))}>
                  <Image source={item.image} style={styles.productImage} />
                  <Text style={styles.productName}>{item.name}</Text>
                  <Text style={styles.productPrice}>{item.price}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.detailTouch}>
                  <Text>Xem chi tiết</Text>
                </TouchableOpacity>
              </View>
            )}
            numColumns={3}
          />
        </View>
      </View>
    );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  banner: {
    flex: 3 / 8,
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  listProduct: {
    flex: 6 / 8,
  },
  productView: {
    flex: 1 / 3,
    borderRadius: 2,
    margin: 4,
    backgroundColor: '#fff',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4
    },

    productTouch: {
      flex: 9,
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center'
    },
    productImage: {
      width: 80,
      height: 100,
      marginTop: 10,
      marginBottom: 15
    },
    productName: {
      fontSize: 15,
    },
    productPrice: {
      color: 'red',
      fontSize: 16,
      fontWeight: 'bold',
      marginVertical: 8
    },
    detailTouch: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 10,
      borderTopWidth: 1,
      borderTopColor: '#eee',
      backgroundColor: '#f9f9f9'
    }
});
