import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import Slick from 'react-native-slick'
import * as ImagePicker from 'expo-image-picker'
import UndrawGiftBox from '../../../assets/icons/Undraw-gift-box'
import { COLORS } from '../../../styles/theme'
import { Video, ResizeMode } from 'expo-av'

const Carousle = () => {
  const [selectedVideo, setSelectedVideo] = useState<any>(null)

  useEffect(() => {
    ;(async () => {
      // Request permission to access the user's media library
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync()
      if (status !== 'granted') {
        alert('Permission to access media library is required!')
      }
    })()
  }, [])

  const pickVideo = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Videos,
        allowsEditing: true,
        quality: 1,
      })

      if (!result.canceled) {
        result.assets?.map((s) => setSelectedVideo(s.uri))
      }
    } catch (error) {
      console.error('Error picking a video', error)
    }
  }

  return (
    <Slick
      style={styles.wrapper}
      showsButtons={false}
      dotStyle={{ width: 4, height: 4, backgroundColor: COLORS.slickDotClr }}
      activeDotStyle={{ backgroundColor: COLORS.textSecondaryClr, width: 12, height: 4 }}
    >
      <View style={styles.slide1}>
        <Image source={require('../../../assets/images/plain-shirt.png')} />
      </View>
      <View style={styles.slide2}>
        <Image
          style={{ objectFit: 'cover', width: 400, height: 400 }}
          source={require('../../../assets/images/monkey-nft.png')}
        />
      </View>
      <View style={styles.slide3}>
        {selectedVideo ? (
          <View>
            <Video
              source={{ uri: selectedVideo }}
              style={{ width: 400, height: 400 }}
              shouldPlay
              isLooping
              resizeMode={ResizeMode.COVER}
              useNativeControls
            />
          </View>
        ) : (
          <View>
            <UndrawGiftBox width={248} height={200} />
            <View style={{ paddingVertical: 16 }}>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 24,
                  fontFamily: 'Arvo-Regular',
                  color: COLORS.textClr,
                }}
              >
                Upload Your
              </Text>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 24,
                  fontFamily: 'Arvo-Regular',
                  color: COLORS.textSecondaryClr,
                }}
              >
                Gift unboxing video
              </Text>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 24,
                  fontFamily: 'Arvo-Regular',
                  color: COLORS.textClr,
                }}
              >
                here!
              </Text>
            </View>
            <Pressable onPress={pickVideo} style={styles.button}>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 14,
                  fontFamily: 'Gilroy-Regular',
                  color: COLORS.textSecondaryClr,
                }}
              >
                Upload
              </Text>
            </Pressable>
          </View>
        )}
      </View>
    </Slick>
  )
}

export default Carousle

const styles = StyleSheet.create({
  wrapper: {
    height: 500,
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  button: {
    borderColor: COLORS.textSecondaryClr,
    borderWidth: 1,
    borderRadius: 50,
    width: 250,
    paddingVertical: 12,
    opacity: 0.4,
  },
})
