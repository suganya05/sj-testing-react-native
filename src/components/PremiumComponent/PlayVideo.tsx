import React, { useEffect, useRef, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Video } from 'expo-av'

const PlayVideo = () => {
  const videoRef = useRef<Video | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const handlePlaybackStatusUpdate = (status: any) => {
    if (status.isPlaying && !status.isBuffering) {
      setIsPlaying(true)
    } else {
      setIsPlaying(false)
    }

    if (!status.isPlaying && status.isLoaded) {
      // Video has ended
      // You can implement logic here, like replaying the video
    }
  }

  useEffect(() => {
    if (isPlaying) {
      videoRef.current?.playAsync()
    } else {
      videoRef.current?.pauseAsync()
    }
  }, [isPlaying])

  return (
    <View style={styles.container}>
      <Video
        ref={videoRef}
        source={require('../../assets/test.mp4')}
        style={styles.video}
        resizeMode='contain'
        useNativeControls
        isLooping
        onPlaybackStatusUpdate={handlePlaybackStatusUpdate}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  video: {
    width: 300, // Adjust the width as needed
    height: 200, // Adjust the height as needed
  },
})

export default PlayVideo
