import React, { useRef } from 'react'
import { Wrapper } from './styles'
// import Video from 'react-native-video'
// import VideoPlayer from 'react-native-video-controls'
import YouTube from 'react-native-youtube'
import { YOUTUBE_KEY } from 'react-native-dotenv'

const VideoItem = ({video}) => {

  const playerRef = useRef(null)

  // const url = `https://www.youtube.com/watch?v=${video?.key}`
  // console.warn({url})

  return (
    <Wrapper>
      <YouTube
        videoId={video?.key}
        ref={playerRef}
        style={{ flex: 1 }}
        apiKey={YOUTUBE_KEY}
        // onBuffer={}
        // onError={}
        // controls
        // paused={false}
        showFullscreenButton
      />
    </Wrapper>
  )
}

export default VideoItem
