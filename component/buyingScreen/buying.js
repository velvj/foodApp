import React, {useState} from 'react';

import {
  Text,
  View,
  Button,
  TouchableOpacity,
  Image,
  Pressable,
  Alert,
} from 'react-native';
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button';
import styles from '../homeScreen/homeStyle';
import buyStyle from './buyingStyle';

function Buying(props) {
  const {navigation, route} = props;
  console.log('route>>', route?.params?.item);
  const img = route?.params?.item?.img;
  const price = route?.params?.item?.Price;
  let initialState = 1;
  const [count, setCount] = useState(initialState);

  const [chooseOPt, setChooseOpt] = useState(null);
  const [size, setSize] = useState(null);
  console.log('chooseOpt>>', chooseOPt);
  const sizes = [
    {label: 'Size S', value: 8, id: 20},
    {label: 'Size M', value: 10, id: 21},
  ];

  const options = [
    {label: `Cocacola `, value: 8, id: 10},
    {label: `Beer `, value: 6, id: 11},
  ];
  const incre = () => {
    setCount(count + 1);
  };
  const decre = () => {
    if (count <= 1) return 0;
    setCount(count - 1);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image
          style={buyStyle.banner}
          source={{
            width: 180,
            height: 200,
            uri: img,
          }}></Image>
      </TouchableOpacity>
      <View style={buyStyle.toppingRadio}>
        <Text style={{color: '#728ca6', width: '100%'}}>
          Establish gour food award
        </Text>
        <Text style={{color: '#ffed3a', left: '98%', position: 'absolute'}}>
          {`     $${price}           
 Best price`}
        </Text>
        <Text style={{color: '#728ca6', width: '100%', top: 35}}>
          Establish gour food awards and share your favourites with you
        </Text>
      </View>
      <View style={buyStyle.toppingRadio}>
        <Text
          style={[
            buyStyle.topping,
            {padding: 10, fontSize: 20, fontWeight: 'bold'},
          ]}>
          Size
        </Text>
        <Text style={{color: '#ffed3a', left: '98%', position: 'absolute'}}>
          {size === 8 ? `$${size}` : null}
        </Text>
        <Text
          style={{
            color: '#ffed3a',
            left: '98%',
            bottom: 20,
            position: 'absolute',
          }}>
          {size === 10 ? `$${size}` : null}
        </Text>
        <RadioForm
          radio_props={sizes}
          initial={null}
          onPress={value => {
            setSize(value);
          }}
          buttonColor={'#57626c'}
          borderWidth={1}
          buttonStyle={{fontSize: 15}}
          labelColor="#5a6671"
          // buttonWrapStyle={{marginBottom: 10}}
          labelStyle={{fontSize: 15}}
          selectedLabelColor="white"
          labelWrapStyle={{}}
        />
      </View>
      <View style={buyStyle.toppingRadio}>
        <Text
          style={[
            buyStyle.topping,
            {padding: 10, fontSize: 20, fontWeight: 'bold'},
          ]}>
          Topping
        </Text>
        <Text style={{color: '#ffed3a', left: '98%', position: 'absolute'}}>
          {chooseOPt === 8 ? `$${chooseOPt}` : null}
        </Text>
        <Text
          style={{
            color: '#ffed3a',
            left: '98%',
            bottom: 20,
            position: 'absolute',
          }}>
          {chooseOPt === 6 ? `$${chooseOPt}` : null}
        </Text>
        <RadioForm
          style={[]}
          radio_props={options}
          initial={null}
          onPress={value => {
            setChooseOpt(value);
          }}
          status={chooseOPt === 'Cocacola' ? chooseOPt : options[0].value}
          buttonColor={'#57626c'}
          buttonStyle={{}}
          labelColor="#5a6671"
          labelStyle={{fontSize: 15}}
          selectedLabelColor="white"
          labelWrapStyle={{}}
        />
      </View>
      <View style={[buyStyle.counterBg, {borderRadius: 30}]}>
        <TouchableOpacity onPress={count => incre()}>
          <Text style={{color: 'white', fontSize: 30}}>+</Text>
        </TouchableOpacity>
        <Text style={{color: 'white', fontSize: 20}}>{count}</Text>
        <TouchableOpacity onPress={count => decre()}>
          <Text style={{color: 'white', fontSize: 30}}>-</Text>
        </TouchableOpacity>
      </View>
      <View style={buyStyle.basketTotal}>
        <Pressable onPress={() => Alert.alert('success')}>
          <Text style={buyStyle.basket}>
            Add to Basket-${count * price + size + chooseOPt}
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

export default Buying;
