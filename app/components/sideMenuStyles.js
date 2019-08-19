import {StyleSheet} from 'react-native';

const _sidemenuStyle = StyleSheet.create({
  avaImgContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#bfe6ff', // HEADER BACKGROUND COLOR
    marginTop: -1,
    paddingTop: 30,
    height: 350,
    flex: 1,
    borderColor: 'silver',
    // borderWidth: 1,
    marginBottom: 0,
  },
  menuItem: {
    borderTopColor: '#777',
    borderBottomColor: '#777',
    borderColor: 'cornsilk',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
    height: 50,
    flex: 1,
    fontSize: 20,
    backgroundColor: '#FEEDA6'
  },
  Image: {
    paddingTop: 50,
    width: 220,
    height: 220,
    // borderTopLeftRadius: 10,
    // borderTopRightRadius: 10,
    // borderBottomLeftRadius: 10,
    // borderBottomRightRadius: 10,
    borderRadius: 125,
    borderColor: '#999',
    borderWidth: 3,
  },
  TextHeader: {
    marginTop: 15,
    // paddingBottom: 5,
    fontSize: 23,
    fontFamily: 'AvenirNext-Regular',
    color: '#333'
  },
  Text: {
    flex:1,
    textAlign: 'left',
    paddingTop: 5,
    fontSize: 18,
    fontFamily: 'AvenirNext-Regular',
  },
  Footer: {
    marginTop: 20,
  },
  HeaderText: {
    fontSize: 12,
    fontFamily: 'AvenirNext-Regular',
    padding: 5,
    textAlign: 'center',
  },
  FooterContainer: {
    marginTop: 5,
    flexDirection: 'row',
    flex: 1,
  },
  FooterItem: {
    flex: 1,
    flexDirection: 'column',
    height: 50,
    width: 50,
    justifyContent: 'center',
  },
  FooterText: {
    fontSize: 10,
    fontFamily: 'AvenirNext-Regular',
    textAlign: 'center',
  },
  TeamSpeak: {
    marginTop: 10,
    marginBottom: 40,
  },
  BarIconWrapper: {
    flex: 1,
    marginTop: 8,
    paddingRight: 15,
    alignItems: 'flex-end',
    // backgroundColor: 'red',
  },
  TextWrapper: {
    // backgroundColor: 'blue',
    width: 180
  }
})

export default _sidemenuStyle;