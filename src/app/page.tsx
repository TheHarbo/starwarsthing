import Image from 'next/image'
import { Planet, getPlanets } from './datagetters/get-planets'
import { useEffect} from 'react'
import { PlanetGame } from './game/planet-game';
import Link from 'next/link';

export default async function Home() {

  

  const planets = await getPlanets();

  

  return (
    <main >
      <div className="logo-container" >
        <center>
        <img className="logo-image" alt="Star Wars Logo" src='Star_Wars_Logo.svg'>

        </img>
          <p className='header'>
            Gæt-en-planet
          </p>
        </center>
        
      </div>
      <div className="text-container">
        <center>
          <p className="paragraph" >
            Herunder finder du detaljerne på en planet.
          </p>
        </center>
        
        <center>
          <p className="paragraph" >
            Det er op til dig - enten ved brug af <a className='link' href="https://starwars.fandom.com/wiki/List_of_planets" target='_blank'>Wookiepedia</a> eller din egen triviaviden - at skrive det rigtige navn på planeten
          </p>
        </center>
      </div>
      {planets.length !== 0 ?      
      <PlanetGame 
        planets={planets}>
      </PlanetGame>
      : null}
    </main>
  )
}
