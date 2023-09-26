import React, { useState } from 'react'
import { Pressable, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import styled from 'styled-components/native'
import ShoppingCart from '../assets/icons/ShoppingCart'
import NotificationInActive from '../assets/icons/NotificationInActive'
import NotificationActive from '../assets/icons/NotificationActive'
import { COLORS } from '../styles/theme'

export const HeaderLeft = () => {
  const navigation = useNavigation()

  return (
    <LogoContent>
      <Pressable onPress={() => navigation.navigate('Stack')}>
        <TShirtImg source={require('../assets/logo/HeaderLogo.png')} />
      </Pressable>
      <LogoText>SPRINKLE</LogoText>
    </LogoContent>
  )
}

export const HeaderRight = () => {
  const [isNotificationActive, setIsNotificationActive] = useState(false)
  const navigation = useNavigation()

  const toggleNotification = () => {
    setIsNotificationActive(!isNotificationActive)
    goToNotification()
  }

  const goToCart = () => {
    navigation.navigate('Cart')
  }

  const goToNotification = () => {
    navigation.navigate('Notification')
  }

  return (
    <Icons>
      <Pressable onPress={goToCart}>
        <ShoppingCart height={24} width={24} />
      </Pressable>
      <View>
        <Pressable onPress={toggleNotification}>
          {isNotificationActive ? (
            <NotificationActive height={24} width={24} />
          ) : (
            <NotificationInActive height={24} width={24} />
          )}
        </Pressable>
      </View>
    </Icons>
  )
}

const LogoContent = styled.View`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 8px;
  padding-vertical: 12px;
`

const TShirtImg = styled.Image`
  height: 100%;
  width: 20px;
  object-fit: contain;
`

const LogoText = styled.Text`
  letter-spacing: 5.6px;
  font-size: 14px;
  color: ${COLORS.iconsHighlightClr};
  font-family: Gilroy-Medium;
`

const Icons = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-vertical: 12px;
  gap: 24px;
`
