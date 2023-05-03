import {StyleSheet} from 'react-native';

const buyStyle = StyleSheet.create({
  counterBg: {
    backgroundColor: '#293948',
    width: 120,
    height: 60,
    color: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginVertical: 10,
    marginHorizontal: 10,
    textAlign: 'center',
  },
  basketTotal: {
    backgroundColor: '#106af4',
    borderColor: '#106af4',
    color: 'white',
    marginLeft: 140,
    width: 240,
    height: 60,
    borderRadius: 20,
    flexDirection: 'row',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 140,
    fontWeight: 30,
    bottom: 8,
  },
  basket: {
    color: 'white',
    justifyContent: 'space-between',
  },
  toppingRadio: {
    backgroundColor: '#293948',
    width: '100%',
    height: 140,
    borderRadius: 30,
    marginVertical: 4,
    borderRightWidth: 10,
    borderColor: '#293948',
    justifyContent: 'center',
    padding: 25,
  },
  topping: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
  },
  banner:{
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 15,
    marginHorizontal:120
  }
});

export default buyStyle;
