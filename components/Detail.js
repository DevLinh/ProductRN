import React, {Component} from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions
} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Detail({navigation, route}){
  let {productDetail} = route.params;
  let productAdd = {
    id: productDetail.id,
    name: productDetail.name,
    price: productDetail.price,
    image: productDetail.image,
    quantity: 1
  }

    return (
      <View style={styles.container}>
        <ScrollView style={styles.productDetail}>
          <View style={{alignItems: 'center'}}>
            {/* <Image
              source={productDetail.image}
              style={styles.productDetailImg}
            /> */}
            <Image
              source={{uri: productDetail.image}}
              style={styles.productDetailImg}
            />
          </View>
          <View style={styles.productDetailContent}>
            <Text style={styles.productDetailName}>{productDetail.name}</Text>
    <Text style={styles.productDetailPrice}>{productDetail.price} đ</Text>
          </View>
          <View style={styles.productDetailContent}>
            <Text style={{color: '#333', fontSize: 16, fontWeight: 'bold'}}>
              Giới thiệu sách
            </Text>
            <Text style={styles.productDetailInfo}>
              Tất cả những trải nghiệm trong chuyến phiêu du theo đuổi vận mệnh
              của mình đã giúp Santiago thấu hiểu được ý nghĩa sâu xa nhất của
              hạnh phúc, hòa hợp với vũ trụ và con người. Tiểu thuyết Nhà giả
              kim của Paulo Coelho như một câu chuyện cổ tích giản dị, nhân ái,
              giàu chất thơ, thấm đẫm những minh triết huyền bí của phương Đông.
              Trong lần xuất bản đầu tiên tại Brazil vào năm 1988, sách chỉ bán
              được 900 bản. Nhưng, với số phận đặc biệt của cuốn sách dành cho
              toàn nhân loại, vượt ra ngoài biên giới quốc gia, Nhà giả kim đã
              làm rung động hàng triệu tâm hồn, trở thành một trong những cuốn
              sách bán chạy nhất mọi thời đại, và có thể làm thay đổi cuộc đời
              người đọc. “Nhưng nhà luyện kim đan không quan tâm mấy đến những
              điều ấy. Ông đã từng thấy nhiều người đến rồi đi, trong khi ốc đảo
              và sa mạc vẫn là ốc đảo và sa mạc. Ông đã thấy vua chúa và kẻ ăn
              xin đi qua biển cát này, cái biển cát thường xuyên thay hình đổi
              dạng vì gió thổi nhưng vẫn mãi mãi là biển cát mà ông đã biết từ
              thuở nhỏ. Tuy vậy, tự đáy lòng mình, ông không thể không cảm thấy
              vui trước hạnh phúc của mỗi người lữ khách, sau bao ngày chỉ có
              cát vàng với trời xanh nay được thấy chà là xanh tươi hiện ra
              trước mắt. ‘Có thể Thượng đế tạo ra sa mạc chỉ để cho con người
              biết quý trọng cây chà là,’ ông nghĩ.” - Trích Nhà giả kim
            </Text>
          </View>
        </ScrollView>
        <View style={styles.bottomOption}>
          <TouchableOpacity style={styles.cartTouch} onPress={() => (navigation.navigate('Cart', {productDetail: productAdd}))}>
            <Text style={styles.cartText}>Thêm vào giỏ hàng</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  productDetail: {
    marginTop: 30,
  },
  productDetailImg: {
    resizeMode: 'contain',
    flex: 1,
    width: windowWidth/2,
    height: windowHeight/2,
  },
  productDetailContent: {
    marginVertical: 10,
    paddingHorizontal: 10,
    marginTop: 20,
  },
  productDetailName: {
    fontSize: 25,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  productDetailPrice: {
    fontSize: 18,
    color: 'red',
  },
  productDetailInfo: {
    marginVertical: 10,
    fontSize: 15,
  },
  bottomOption: {
    height: 50,
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  cartTouch: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f4511e',
  },
  cartText: {
    color: '#fff',
  },
});
