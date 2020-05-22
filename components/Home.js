import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  Text,
} from 'react-native';

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
export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listProduct: [],
      index: 0,
      listBanner: [{
        "id": "1",
        "name": "banner1",
        "link": "https://salt.tikicdn.com/cache/w885/ts/banner/6e/54/b4/79a2bf27de62d11106a5e8b5d20a8aba.jpg",
        "image": null,
        "enable_flg": null,
        "created_at": "2020-05-20 21:44:06",
        "updated_at": null,
        "deleted_at": null
      },
      {
        "id": "2",
        "name": "banner2",
        "link": "https://salt.tikicdn.com/cache/w885/ts/banner/17/5e/89/92ee781eaf30b6916bb6bf33d3acb964.jpg",
        "image": null,
        "enable_flg": null,
        "created_at": "2020-05-20 21:44:06",
        "updated_at": null,
        "deleted_at": null
      },
      {
        "id": "3",
        "name": "banner3",
        "link": "https://salt.tikicdn.com/cache/w885/ts/banner/ff/68/12/9c5ca2086b5ffcf84ef8b19e2c522670.jpg",
        "image": null,
        "enable_flg": null,
        "created_at": "2020-05-26 21:45:11",
        "updated_at": null,
        "deleted_at": null
      },
      {
        "id": "4",
        "name": "banner4",
        "link": "https://salt.tikicdn.com/cache/w885/ts/banner/9d/51/c7/c4559bf62630bf597bee4e50b5d56d81.jpg",
        "image": null,
        "enable_flg": null,
        "created_at": "2020-05-20 21:45:11",
        "updated_at": null,
        "deleted_at": null
      }]
    }
  }

  componentDidMount() {
    fetch('http://192.168.1.3/listbooks.php')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          listProduct: responseJson,
        });
      });

    // fetch('http://192.168.1.3/loadbanner.php')
    // .then((response) => response.json())
    // .then((responseJson) => {
    //   this.setState({
    //     listBanner: responseJson,
    //   });
    //   console.log(responseJson[0].link);
    //   console.log(typeof(this.state.listBanner[this.state.index].link));
    //   console.log(this.state.listBanner[this.state.index].link);
    // });

    this._interval = setInterval(() => {
      this.changeBanner();
    }, 3000);

  }

  componentWillUnmount() {
    clearInterval(this._interval);
  }

  changeBanner() {
    let index = this.state.index;
    index = index + 1;
    if (index == this.state.listBanner.length) {
      index = 0;
    }
    this.setState({
      index: index
    })
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.banner}>
          <Image
            style={{ width: '100%', height: '100%' }}
            source={{ uri: this.state.listBanner[this.state.index].link }}
          />
        </View>
        <View style={styles.listProduct}>
          {/* Dùng Flatlist show danh sách product */}
          <FlatList
            data={this.state.listProduct}
            renderItem={({ item }) => (
              <View style={styles.productView}>
                <TouchableOpacity
                  style={styles.productTouch}
                  onPress={() =>
                    navigation.navigate('Detail', { productDetail: item })
                  }>
                  {/* Đối với hình ảnh dùng source từ link uri */}
                  <Image source={{ uri: item.image }} style={styles.productImage} />
                  {/* <Image source={item.image} style={styles.productImage} /> */}
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
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
  },

  productTouch: {
    flex: 9,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  productImage: {
    width: 80,
    height: 100,
    marginTop: 10,
    marginBottom: 15,
  },
  productName: {
    fontSize: 15,
  },
  productPrice: {
    color: 'red',
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  detailTouch: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    backgroundColor: '#f9f9f9',
  },
});
