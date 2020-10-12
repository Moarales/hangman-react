import React, { useState } from 'react'
import styled from '@emotion/styled'
import { RoundButton } from './GameControllers'
import { Text } from '../style/shared'
import { render } from '@testing-library/react'

interface IPosterProps {
  imgSrc: string
}

const HintContainer = styled.div<IPosterProps>`
  background-image: url(${props => props.imgSrc});
  height: 50px;
  width: 50px;
  background-position: center right;
`


interface IHint {
  counter: number
  poster: string
  setCounter: (n: number) => void
}

const PosterHint = ({ counter, poster, setCounter }: IHint) => {
  const [hintCounter, setHintCounter] = useState<number>(0)

  const onHintClick = () => {
    hintCounter === 0 ? setCounter(counter - 2) : setCounter(counter-1)
    setHintCounter(hintCounter+1)
  }

  const renderHints = () => {
    const hintArray = []
    for(let i = 0; i < hintCounter; i++){
     hintArray.push(<HintContainer imgSrc={`http://image.tmdb.org/t/p/w154${poster}`} />)
    }
    return hintArray
  }


  return (
    <>
      {counter > 0 &&
        (<>
          <RoundButton onClick={onHintClick}>Hint</RoundButton>
          <Text>This will cost you {hintCounter <1 ? "two guesses" : "one guess" }!</Text>
        </>)}
      {renderHints()}
    </>
  )
}

export default PosterHint