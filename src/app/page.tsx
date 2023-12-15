import Image from 'next/image'
import { Planet, getPlanets } from './datagetters/get-planets'
import { useEffect} from 'react'
import { PlanetGame } from './game/planet-game';

export default async function Home() {

  

  const planets = await getPlanets();

  var text = ""

  if (planets)
  {
    text = "Der blev fundet " + `${planets.length}` + " planeter" ;
  }
  else {
    text = "Der blev ikke hentet nogle planeter";
  }
  return (
    <main >
      <PlanetGame planets={planets} text={text}>

      </PlanetGame>
    </main>
  )
}
