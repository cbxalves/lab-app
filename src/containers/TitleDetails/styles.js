import { StyleSheet } from 'react-native'
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen'

export default StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    marginTop: 32,
    flex: 1,
    // top: hp('30%'),
    alignItems: 'center',
    width: '90%',
    alignSelf: 'center',
  },
  poster: {
    width: '60%',
    height: hp('30%'),
    marginBottom: 32,
  },
  title: {
    fontSize: 28,
    // color: '#fff',
    fontWeight: 'bold',
    paddingBottom: 8,
  },
  plot: {
    fontSize: 18,
    paddingBottom: 32,
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingLabel: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 8,
  },
  ratingScore: {
    paddingLeft: 8,
    fontSize: 18,
  },
  actions: {
    marginTop: 24,
  },
})
