import React from 'react'
import { Wrapper, Title, List, ItemWrapper } from './styles'
import VideoItem from './VideoItem';

const VideosList = ({title, videos}) => {
  
  const renderItem = ({item: video}) => {
    return (
      <ItemWrapper key={video.id}>
        <VideoItem
          video={video}
        />
      </ItemWrapper>
    )
  }

  return (
    <Wrapper>
      <Title>{title}</Title>
      <List 
        data={videos}
        extraData={videos}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </Wrapper>
  )
}

export default VideosList
