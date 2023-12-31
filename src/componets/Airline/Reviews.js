import React from 'react'
import styled from 'styled-components'
import Rating from '../Rating/Rating'

const Card = styled.div`
    border: 1px solid rgba(0,0,0,0.1);
    border-radius: 4px;
    padding: 20px;
    margin: 0 20px 20px 0;
`
const RatingContainer = styled.div`
    display: flex;
    fledirection: row; 
`
const RatingScore = styled.div``
const Title = styled.div`
    padding: 20px 0 0 0;
    font-size: 18px;
`
const Description = styled.div`
    padding: 0 0 20px 0;
    font-size: 14px;
`

function Reviews(props) {
    const { score, title, description } = props
  return (
    <Card>
        <RatingContainer>
            <Rating score={score} />
        </RatingContainer>
            <Title>{title}</Title>
            <Description>{description}</Description>
    </Card>
  )
}

export default Reviews