import React, { useState } from 'react'

import Container from '../components/Container'
import Grid from '../components/Grid'
import SearchBar from '../components/SearchBar'
import Card from '../components/Card'

const IMG_SIZE = 'portrait_fantastic'

export default function Home() {
    const [heroes, setHeroes] = useState([])

    let cards;

    if(heroes) {
      cards = heroes.map((hero) => (
        <Card 
          name={hero.name} 
          id={hero.id} 
          key={hero.id} 
          thumbnail={`${hero.thumbnail.path}/${IMG_SIZE}.${hero.thumbnail.extension}`} 
        />
      ))
    }

  return (
    <Container>
        <h1>Discover Marvel Heroes</h1>
        <SearchBar setter={setHeroes}/>
        <Grid>
            {cards ? cards : ''}   
        </Grid>
    </Container>
  )
}
