import { StyleSheet, View, KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react'
import MapView from 'react-native-maps'
import CustomButton from '../../../components/Button'
import styled from 'styled-components/native'
import { Pressable } from 'react-native'
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'
import { COLORS } from '../../../styles/theme'
import CurrentLocationIcon from '../../../assets/icons/CurrentLocationIcon'
import LeftArrow from '../../../assets/icons/LeftArrow'
import CloseIcon from '../../../assets/icons/Close'
import AddAddress from '../../../components/AddressBook/AddAddress'
import ChooseLocation from '../../../components/AddressBook/ChooseLocation'

interface IAddressBook {
  navigation: any
}

const AddressBook: React.FC<IAddressBook> = ({ navigation }) => {
  const height = useSharedValue('0%')
  const displayAddressSelection = useSharedValue('none')
  const [showDisplay, setDisplay] = useState(1)

  const handlePress = () => {
    height.value = withTiming('52%')
    displayAddressSelection.value = 'flex'
  }

  const editAnimationStyle = useAnimatedStyle(() => ({
    height: height.value as any,
    display: displayAddressSelection.value as any,
  }))

  const changeHeight = (value: string) => {
    height.value = withTiming(value)
  }

  const handleClose = () => {
    setDisplay(1)
    height.value = withTiming('0%', { duration: 300 })
    setTimeout(() => (displayAddressSelection.value = 'none'), 300)
  }

  return (
    <KeyboardAvoidingView style={[styles.container]} contentContainerStyle={{ height: 900 }}>
      <GoBackArrowContent
        onPress={() => {
          navigation.goBack()
        }}
      >
        <LeftArrow width={24} height={24} />
        <CartText>Addressbook</CartText>
      </GoBackArrowContent>
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 12.9288755,
          longitude: 80.131692,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      ></MapView>

      <CurrentLocationWrapper>
        <FlexRow
          style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
            gap: 8,
          }}
        >
          <CurrentLocationIcon width={16} height={16} />
          <UseCurrentLocationText>Use current location</UseCurrentLocationText>
        </FlexRow>
      </CurrentLocationWrapper>

      <SelectAddressBtn>
        <CustomButton
          onPress={handlePress}
          variant='primary'
          text='Select address'
          fontFamily='Arvo-Regular'
          fontSize={16}
        />
      </SelectAddressBtn>

      <Animated.View style={[styles.parent, editAnimationStyle]}>
        <View style={styles.cancelContainer}>
          <Pressable onPress={handleClose}>
            <CloseIcon width={24} height={24} />
          </Pressable>
        </View>
        {showDisplay == 1 && (
          <AddAddress
            onAddPress={() => {
              setDisplay(2)
              changeHeight('80%')
            }}
          />
        )}
        {showDisplay == 2 && (
          <ChooseLocation
            onSavePress={() => {
              setDisplay(1)
              changeHeight('52%')
            }}
          />
        )}
      </Animated.View>
    </KeyboardAvoidingView>
  )
}

const GoBackArrowContent = styled.Pressable`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  padding: 16px;
  position: absolute;
  z-index: 10000;
  top: 0;
`

const CartText = styled.Text`
  color: ${COLORS.textClr};
  font-family: Arvo-Regular;
  font-size: 20px;
  letter-spacing: -0.4px;
`

const SelectAddressBtn = styled.View`
  background: ${COLORS.iconsNormalClr};
  padding-horizontal: 16px;
  padding-vertical: 24px;
`

const UseCurrentLocationText = styled.Text`
  font-size: 14px;
  text-align: center;
  font-family: Gilroy-Medium;
  color: ${COLORS.textSecondaryClr};
`

const CurrentLocationWrapper = styled.View`
  position: absolute;
  bottom: 120px;
  left: 100px;
`

const FlexRow = styled.View`
  background: ${COLORS.iconsNormalClr};
  border-radius: 42px;
  padding-horizontal: 16px;
  padding-vertical: 12px;
  background: ${COLORS.iconsNormalClr};
`

export default AddressBook

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: 'transparent',
    position: 'relative',
  },

  parent: {
    position: 'absolute',
    width: '100%',
    backgroundColor: 'white',
    padding: 16,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    bottom: 0,
    zIndex: 10,
  },

  cancelContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginBottom: 8,
  },
  map: {
    flex: 1,
  },
})
