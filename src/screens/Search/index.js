import { useNavigation } from '@react-navigation/native'
import React, { useState, useEffect } from 'react'
import { SearchOffIcon } from '~/assets/icons'
import { useLanguage } from '~/language'
import { API } from '~/services'
import { 
  Wrapper, InputWrapper, Input, ResultsWrapper, IconWrapper,
  Touchable, HintText, NoResultsText
} from './styles'
import { SearchResults as ResultsComp} from '~/components'

const Search = () => {

  const [searchResults, setSearchResults] = useState([])
  const [value, setValue] = useState('')
  const [error, setError] = useState(null)

  const navigation = useNavigation()
  const { DetailStrings, SearchStrings } = useLanguage()

  const getSearchResults = async() => {
    try {
      const response = await API.getMovieSearchResults({query: value, page: 1})
      setSearchResults(response?.data?.results || [])
    } catch (error) {
      console.warn('Error - ', error?.message)
      setError(error?.message)
    }
  }

  useEffect(() => {
    if(value?.length > 0) getSearchResults()
    else setSearchResults([])
  }, [value])

  const onSelect = ({ id }) => {
    navigation.navigate("Details", { movieId: id, name: DetailStrings.title })
  }

  const onClearSearch = () => {
    if(value?.length) setValue('')
    else navigation.goBack()
  }

  return (
    <Wrapper>
      <InputWrapper>
        <Input
          value={value}
          onChangeText={setValue}
          placeholder={SearchStrings.placeholder}
        />
        <IconWrapper>
          <Touchable 
            hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}
            onPress={onClearSearch}
            >
            <SearchOffIcon height={30} width={30} />
          </Touchable>
        </IconWrapper>
      </InputWrapper>
      
      {!value?.length ? <HintText>{SearchStrings.hint}</HintText> : null}
      {value?.length && !searchResults?.length 
      ? <NoResultsText>{SearchStrings.noResults}</NoResultsText> 
      : (
      <ResultsWrapper>
        <ResultsComp 
          results={searchResults}
          onSelect={onSelect}
        />
      </ResultsWrapper>
      )}
    </Wrapper>
  )
}

export default Search
