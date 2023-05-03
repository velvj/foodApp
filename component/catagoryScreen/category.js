import React from 'react';
import {
  Text,
  ScrollView,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';

import catestyles from './categoryStyle';

import cateData from '../../jsonData.json';

function Category(props) {
  const {navigation, route} = props;
  const dataItem = route?.params.item;
  const clickedData = route?.params.item.data;
  const category = route?.params.category;
  const cateImg = route?.params.item.image;
  console.log('<<<cat img>>', cateImg);
  // console.log("vjjjj",route?.params.item.data[0]?.img)
  return (
    <View style={catestyles.container}>
      <TouchableOpacity>
        <Image
          style={catestyles.banner}
          source={{
            width: 390,
            height: 360,
            uri: 'https://i.pinimg.com/originals/44/63/e5/4463e5ef7cdc404f96be3027641ee3a9.jpg',
          }}></Image>
      </TouchableOpacity>
      <View style={catestyles.cateHead}>
        <Image source={{width: 30, height: 35, uri: cateImg}}></Image>
        <Text style={catestyles.cateHead}>{category} </Text>
      </View>
      <View>
        <FlatList
          style={catestyles.flatList}
          key={'_'}
          horizontal={true}
          // numColumns={1}
          data={clickedData}
          renderItem={({item, index}) => {
            {
              console.log('item detaiil>>', item?.img);
            }
            return (
              <TouchableOpacity
                style={catestyles.item}
                key={item.id}
                onPress={() => {
                  navigation.navigate('buying', {item});
                }}>
                <View style={catestyles.logoDesign}>
                  <Image
                    style={catestyles.itemImg}
                    source={{
                      uri: item?.img,
                    }}
                  />
                  <View style={catestyles.flatList}>
                    <Text style={{color: 'white'}}>{item.Name}</Text>
                    <Text style={{color: '#fffc43'}}>{`$${item.Price}`}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}
          keyExtractor={(item, index) => item.id}
        />
      </View>
    </View>
  );
}

export default Category;
