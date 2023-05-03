import {StyleSheet, StatusBar, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#122432',
    justifyContent: 'flex-end',
  },
  vectorIcon: {
    // width: '100%',
    // height: 80,
    padding:20,
    backgroundColor: '#293948',
    overflow: 'hidden',
    boderRadius: 300,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  item: {
    backgroundColor: '#122432',
    padding: 10,
    marginVertical: 15,
    marginHorizontal: 15,
    width: 100,
    height: 100,
 
  }
  ,
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  flatList: {
    width: '100%',
    height: 250,
  },

  banner: {
    borderRadius: 20,
    overflow: 'hidden',
    marginBottom: 15,
  },
  search: {
    borderWidth: 3,
    backgroundColor: '#293948',
  },
  head: {
    width: "100%",
    height: 40,
    marginHorizontal: 340,
    color:'white'
  },
  cateList: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 8,
  },
  textList: {
    borderRadius: 10,
    // backfaceVisibility: 'visble',
    padding: 6,
    alignSelf: 'center',
    color: 'white',
  },
  titleCate: {
    fontWeight: 'bold',
    borderRadius: 20,
    alignSelf: 'center',
  },
  btnListActive: {
    backgroundColor: '#116af4',
    borderRadius: 15,
    padding: 3,
  },
  heading: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'red',
    // width:"100%",
    marginBottom: 10,
  },
});

export default styles;
