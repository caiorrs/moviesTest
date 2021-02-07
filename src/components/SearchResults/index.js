import React from 'react'
import { Wrapper, List, ItemWrapper } from './styles'
import { searchResult } from '../../services/types'
import ResultItem from './ResultItem'

const SearchResults = ({results, onSelect}) => {

  const renderItem = ({item: movie} : searchResult) => {
    return (
      <ItemWrapper key={movie?.id}>
        <ResultItem 
          movie={movie}
          onSelect={onSelect}
        />
      </ItemWrapper>
    )
  }

  return (
    <Wrapper>
      <List 
        data={results}
        extraData={results}
        renderItem={renderItem}
      />
    </Wrapper>
  )
}

export default SearchResults
