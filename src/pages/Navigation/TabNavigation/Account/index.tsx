import React, { useState } from 'react'
import styled from 'styled-components/native'
import { Pressable, ScrollView, View, StyleSheet, Dimensions } from 'react-native'
import { useIsFocused } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { auth } from '../../../../../firebase'
import { COLORS } from '../../../../styles/theme'
import { userStore } from '../../../../store/userStore'
import AuthNavigate from '../../../../screens/AuthNavigate'
import LogoutIcon from '../../../../assets/icons/AccountPageIcon/Logout'
import { AccountData } from '../../../../utils/data/AccountData'
import Animated, { FadeInDown, FadeInUp, FadeOutDown, FadeOutUp } from 'react-native-reanimated'
import CustomButton from '../../../../components/Button'
import SubscriptionModal from '../../../../screens/Modals/Subscription'
import EditIcon from '../../../../assets/icons/AccountPageIcon/EditIcon'
import { LinearGradient } from 'expo-linear-gradient'
import NotUserIcon from '../../../../assets/icons/AccountPageIcon/NotUserIcon'

interface IAccount {
  navigation: any
}

const { width, height } = Dimensions.get('window')

const Data = [
  {
    postName: 'Posts',
    postView: 298,
    view: 'K',
  },
  {
    postName: 'Royalties',
    postView: 24,
    inr: 'INR',
  },
  {
    postName: 'Orders',
    postView: 0,
  },
  {
    postName: 'Cart',
    postView: 2,
  },
]

const Account: React.FC<IAccount> = ({ navigation }) => {
  const [isSubscriptionModal, setSubscriptionModal] = useState(false)
  const [image, setImage] = React.useState<string | null>(null)
  const user = userStore((state) => state.user)
  const isFocused = useIsFocused()
  const { updateUser } = userStore()

  const openSubscriptionModal = () => {
    setSubscriptionModal(true)
  }
  const closeSubscriptionModal = () => {
    setSubscriptionModal(false)
  }

  const handleLogout = async () => {
    try {
      await auth.signOut()
      const data = await AsyncStorage.getItem('mail')
      await AsyncStorage.removeItem('mail')
      if (!data) {
        updateUser(null)
        navigation.navigate('Post')
        console.log('Signed out successfully')
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <ScrollView>
      <AuthNavigate focus={isFocused}>
        <AccountWrapper>
          <Animated.View entering={FadeInUp.duration(800).delay(200)} exiting={FadeOutUp}>
            <UserWrapper style={{ width: width, height: height / 2.5 }}>
              <NotUserContent>
                <NotUserIcon width={128} height={128} />
              </NotUserContent>
              {/* <View style={{ position: 'absolute', top: 0, left: 0, right: 0 }}>
                {image && (
                  <ProfileImage
                    source={{ uri: image }}
                    style={{
                      width: width,
                      height: height / 2.4,
                      resizeMode: 'cover',
                      borderBottomLeftRadius: 50,
                      borderBottomRightRadius: 50,
                    }}
                  />
                )}
              </View> */}
              <EditContent onPress={() => navigation.navigate('EditProfile')}>
                <LinearGradient
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                  colors={['#462D85', '#DB00FF']}
                  style={styles.plusIconGradientColor}
                >
                  <EditIcon width={20} height={20} />
                </LinearGradient>
              </EditContent>
            </UserWrapper>
            <ProfileName>{user?.displayName}</ProfileName>
            <View style={{ padding: 16 }}>
              <CustomButton
                text='Subscribe now'
                fontFamily='Arvo-Regular'
                fontSize={16}
                onPress={openSubscriptionModal}
              />
            </View>

            <SubscriptionModal
              isVisible={isSubscriptionModal}
              onClose={closeSubscriptionModal}
              navigation={navigation}
            />

            {/* <FlexContent>
              {Data.map((viewItem, viewIndex) => (
                <View key={viewIndex}>
                  <PostText>{viewItem.postName}</PostText>
                  <ViewText>
                    {viewItem.postView}
                    {viewItem.view}
                    {viewItem.inr}
                  </ViewText>
                </View>
              ))}
            </FlexContent> */}
          </Animated.View>

          <Animated.View entering={FadeInDown.duration(800).delay(200)} exiting={FadeOutDown}>
            {AccountData.map((f, index) => {
              return (
                <Pressable key={index} onPress={() => navigation.navigate(f.navigation)}>
                  <ProfileUserContent>
                    <FlexIcon>
                      <f.leftIcon width={20} height={20} />
                      <UserText>{f.name}</UserText>
                    </FlexIcon>
                    {f.rightIcon && <f.rightIcon width={20} height={20} />}
                    {f.rightText && <RightText>{f.rightText}</RightText>}
                  </ProfileUserContent>
                </Pressable>
              )
            })}
            <LogoutPressable onPress={handleLogout}>
              <ProfileUserContent>
                <FlexIcon>
                  <LogoutIcon width={24} height={24} />
                  <LogoutText>Log out</LogoutText>
                </FlexIcon>
              </ProfileUserContent>
            </LogoutPressable>
          </Animated.View>
        </AccountWrapper>
      </AuthNavigate>
    </ScrollView>
  )
}

const AccountWrapper = styled.View`
  flex: 1;
`
const FlexContent = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-vertical: 16px;
  padding-horizontal: 24px;
`

const UserWrapper = styled.View`
  position: relative;
  border-color: ${COLORS.strokeClr};
  border-width: 1px;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
`

const LogoutPressable = styled.Pressable`
  margin-bottom: 42px;
`

const NotUserContent = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
`

const RightText = styled.Text`
  font-size: 14px;
  font-family: Gilroy-Medium;
  color: ${COLORS.SecondaryTwo};
`
const LogoutText = styled.Text`
  font-size: 14px;
  font-family: Gilroy-Medium;
  color: #ef5757;
`

const EditContent = styled.Pressable`
  position: absolute;
  top: 16px;
  right: 16px;
`

const ProfileUserContent = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-vertical: 16px;
  padding-horizontal: 24px;
  border-bottom-color: ${COLORS.strokeClr};
  border-bottom-width: 1px;
`

const FlexIcon = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`

const UserText = styled.Text`
  font-family: Gilroy-Medium;
  color: ${COLORS.iconsHighlightClr};
  font-size: 14px;
`

const PostText = styled.Text`
  text-align: center;
  font-size: 12px;
  font-family: Gilroy-Medium;
  color: ${COLORS.SecondaryTwo};
  text-transform: uppercase;
  margin-bottom: 4px;
`

const ViewText = styled.Text`
  text-align: center;
  font-size: 14px;
  font-family: Montserrat-SemiBold;
  color: ${COLORS.iconsHighlightClr};
`

const ProfileImage = styled.Image`
  width: 100%;
  overflow: hidden;
  object-fit: fill;
`

const ProfileName = styled.Text`
  font-size: 20px;
  font-family: Montserrat-SemiBold;
  color: ${COLORS.iconsHighlightClr};
  text-align: center;
  margin-top: 8px;
`

const AccountText = styled.Text`
  font-size: 28px;
`

export default Account

const styles = StyleSheet.create({
  plusIconGradientColor: {
    backgroundColor: '#462d85',
    borderRadius: 70,
    padding: 15,
    width: 50,
    height: 50,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.24,
    shadowRadius: 0,
    elevation: 5,
  },
})
