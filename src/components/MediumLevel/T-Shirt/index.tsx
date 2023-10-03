import { StyleSheet, Image, View } from 'react-native'
import React from 'react'
import ThreeSixtyDegree from '../../../assets/icons/360-degree'

const TShirt: React.FC = () => {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        marginBottom: 80,
      }}
    >
      <View style={[styles.selectSizeTShirt]}>
        <Image source={require('../../../assets/images/plain-shirt.png')} />
      </View>
      <View style={styles.selectSize360Degree}>
        <ThreeSixtyDegree width={40} height={40} />
      </View>
    </View>
  )
}

export default TShirt

const styles = StyleSheet.create({
  selectSizeTShirt: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    zIndex: -1000,
  },
  selectSize360Degree: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 16,
  },
})
