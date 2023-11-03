import React, { useEffect, useState }from 'react'
import axios from 'axios';
import Flights from './Flights';
import styled from 'styled-components';

const Home = styled.div`
    text-align: center;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
`
const Header = styled.div`
    padding: 100px 100px 10px 100px;
    h1 {
        font-size: 42px;
    }
`
const Subheader = styled.div`
    font-weight: 300;
    font-size: 26px;
`
const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
    width: 100%;
    padding: 20px;
`

function Airlines(props) {
    const [airlines, setAirlines] = useState([])
    const API_URL = "http://localhost:3000"

    useEffect(()=> {
        axios.get(`${API_URL}/api/v1/airlines.json`)
        .then(resp => {
            setAirlines(resp.data.data)
        })
        .catch(resp => console.log(resp))
    },[airlines.length])

    const grid = airlines.map(flight => {
        return (
            <Flights
                key={flight.attributes.id}
                attributes={flight.attributes}
            />
        )
    })
    
  return(
    <Home>
        <Header>
            <h1>Open Flights</h1>
            <Subheader>The Real, For real airline reviews</Subheader>
        </Header>
        <Grid>
            {grid}
        </Grid>
    </Home>
  )   
}

export default Airlines