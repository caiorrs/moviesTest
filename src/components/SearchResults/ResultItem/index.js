import React from 'react'
import { useConfiguration } from '~/hooks'
import {
  Wrapper, Content, PosterWrapper, DescriptionWrapper,
  TitleAndDescription, Title, Description, RatingWrapper, Rating, Image
} from './styles'
import {searchResult} from '../../../services/types';

const ResultItem = ({ movie, onSelect }: { movie: searchResult }) => {
  const {imageBaseURL, posterSizes} = useConfiguration()
  const posterSize = posterSizes[3]

  return (
    <Wrapper onPress={() => onSelect({id: movie?.id})}>
      <Content>
        <PosterWrapper>
          <Image source={{uri: `${imageBaseURL}${posterSize}${movie?.poster_path}`}} />
        </PosterWrapper>
        <DescriptionWrapper>
          <TitleAndDescription>
          <Title>{movie?.title}</Title>
          <Description numberOfLines={3}>{movie?.overview}</Description>
          </TitleAndDescription>
          <RatingWrapper>
            <Rating>{movie?.vote_average?.toFixed(1)} / 10</Rating>
          </RatingWrapper>
        </DescriptionWrapper>
      </Content>
    </Wrapper>
  )
}

export default ResultItem
