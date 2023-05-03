import {StyleSheet} from 'react-native';

const catestyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#122432',
    justifyContent: 'flex-end',
  },
  banner: {
    borderRadius: 20,
    overflow: 'hidden',
    marginBottom: 15,
  },
  flatList: {
    width: '100%',
    height: 300,
    color: 'white',
  },
  itemImg: {
    width: 50,
    height: 50,
  },
  item: {
    backgroundColor: '#293948',
    padding: 60,
    marginVertical: 5,
    marginHorizontal: 10,
    width: 200,
    height: 250,
    textAlign: 'center',
    borderRadius:20,
    justifyContent:'space-between'
  },
  cateHead:{
    color:"white",
  flexDirection:'row',
  alignItems:'center',
  fontSize:25,
  fontWeight:'bold',
  marginBottom:10,
  }
});

export default catestyles;
