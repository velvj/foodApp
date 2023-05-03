import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  TextInput,
  Pressable,
} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialIcons';
import {ScrollView} from 'react-native-virtualized-view';

import styles from '../homeScreen/homeStyle';
import jsonData from '../../jsonData.json';

//category tab
const listTab = [
  {id: 111, category: 'Popular'},
  {id: 112, category: 'Hot Today'},
  {id: 113, category: 'Favorite'},
];

//mock data
const list = [
  {
    id: 151,
    image: 'https://clipartcraft.com/images/ice-cream-clipart-animated-5.png',
    title: 'IceCream',
    data: jsonData[0].popular[0].IceCream,
  },
  {
    id: 152,
    image:
      'https://th.bing.com/th/id/R.8aa41d8323bac667c19d3827ed321d20?rik=t%2fVaYRt8F3inBA&riu=http%3a%2f%2fwww.clipartbest.com%2fcliparts%2fpT5%2fXxj%2fpT5XxjXAc.png&ehk=pVH4v4YeRdsTSjF89gt0HBPv5HoTQQjhly5%2bWO2BVvA%3d&risl=&pid=ImgRaw&r=0',
    title: 'Potato',
    data: jsonData[0].popular[0].Potatoes,
  },
  {
    id: 153,
    image: 'https://clipartcraft.com/images/tea-clipart-3.png',
    title: 'coffee',
    data: jsonData[0].popular[0].Coffee,
  },
  {
    id: 154,
    image:
      'https://th.bing.com/th/id/R.0eaec40ff60f91e1fc24b75aac20189b?rik=CqbaLmcpmm15fA&riu=http%3a%2f%2fpngimg.com%2fuploads%2ftea%2ftea_PNG16921.png&ehk=DfV2tr6Vo%2fBJ4SW3viCLMZ86AeuuXzpAS8V%2fES3%2fdZs%3d&risl=&pid=ImgRaw&r=0',
    title: 'Tea',
    data: jsonData[0].popular[0].Teas,
  },
  {
    id: 155,
    image:
      'https://th.bing.com/th/id/R.f7f145fa3a0a1c6b20e755f556a09993?rik=z1thWPB6q%2f2rHA&riu=http%3a%2f%2fwww.clipartbest.com%2fcliparts%2fRcd%2f6jz%2fRcd6jzr7i.png&ehk=SXFtB5WQz3PpSkKzafLspsNIISgXvn5eotcY1V%2b15mk%3d&risl=&pid=ImgRaw&r=0',
    title: 'HotDog',
    data: jsonData[0].popular[0].HotDogs,
  },
  {
    id: 156,
    image: 'https://webstockreview.net/images/clipart-chicken-fish-5.png',
    title: 'Chicken',
    data: jsonData[0].popular[0].chicken,
  },
];

function HomeScreen({navigation}) {
  const [category, setCategory] = useState('Popular');

  const [dataList, setDataList] = useState(list);

  const setCategoryFilter = category => {
    if (category == 'Favorite') {
      setDataList([...list.filter((e, i) => e.title.includes('o'))]);
    } else if (category == 'Hot Today') {
      setDataList([...list.filter((e, i) => e.title.includes('c'))]);
    } else {
      setDataList(list);
    }
    setCategory(category);
  };

  return (
    <View style={styles.container}>
      <View style={styles.headcontain}>
        <Icons
          style={styles.head}
          name="notifications-none"
          size={40}
          color={'#3b4a56'}
        />
      </View>
      <View>
        <TextInput style={styles.search}>
          <Icons name="search" size={20} color={'#4e5c69'} /> find food & drink
        </TextInput>
      </View>
      <TouchableOpacity>
        <Image
          style={styles.banner}
          source={{
            width: 390,
            height: 290,
            uri: 'https://i.pinimg.com/originals/44/63/e5/4463e5ef7cdc404f96be3027641ee3a9.jpg',
          }}></Image>
      </TouchableOpacity>
      <View style={styles.cateList}>
        {listTab.map((e, i) => (
          <Pressable
            key={e.id}
            style={[
              styles.titleCate,
              category === e.category && styles.btnListActive,
            ]}
            onPress={() => setCategoryFilter(e.category)}>
            <Text style={styles.textList}>{e.category}</Text>
          </Pressable>
        ))}
      </View>
      <View>
        <FlatList
          style={styles.flatList}
          key={'_'}
          numColumns={3}
          data={dataList}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                style={styles.item}
                key={item.id}
                onPress={() => {
                  navigation.navigate('category', {item, category});
                }}>
                <Image
                  style={styles.itemImg}
                  source={{width: 80, height: 80, uri: item.image}}
                />
                <Text
                  key={item.id}
                  style={{
                    color: 'white',
                    fontWeight: 'bold',
                    textAlign: 'center',
                  }}>
                  {item.title}
                </Text>
              </TouchableOpacity>
            );
          }}
          keyExtractor={(item, index) => item.id.toString()}
        />
      </View>
      <TouchableOpacity style={styles.vectorIcon}>
        <Icons name="home" size={30} color={'#53606a'} />
        <Icons name="person" size={30} color={'#53606a'} />
        <Icons name="shopping-cart" size={30} color={'#53606a'} />
      </TouchableOpacity>
    </View>
  );
}

export default HomeScreen;
