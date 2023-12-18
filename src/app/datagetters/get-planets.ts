import { checkNumber } from "./helpers/check-number";
import { translateTerrain } from "./helpers/translate-terrain";
import { translateClimate } from "./helpers/translate-climate";

 
export interface Planet {
  name: string;
  rotationalPeriodInHours: number;
  orbitalPeriodInDays: number;
  diameterInKilometers: number;
  climate: string;
  gravityStandard: number;
  terrain: string;
  percentSurfaceWater: number;
  population: number;
}

const PLANET_URL = `https://swapi.dev/api/planets`



function getPlanetsFromResultsPage(results: any)
{
  const planets: Planet[] = results.map((result: any) => {

    const {
      name, 
      rotation_period, 
      orbital_period, 
      diameter, 
      climate, 
      gravity, 
      terrain, 
      surface_water, 
      population} = result;



    const planet: Planet = {
      name: name, 
      rotationalPeriodInHours: checkNumber(rotation_period), 
      orbitalPeriodInDays: checkNumber(orbital_period), 
      diameterInKilometers: checkNumber(diameter), 
      climate: translateClimate(climate), 
      gravityStandard: checkNumber(gravity.split(" ")[0]),
      terrain: translateTerrain(terrain), 
      percentSurfaceWater: checkNumber(surface_water), 
      population: checkNumber(population)}
    return planet;  
  });

  return planets
}

function removePlanetsWithTooMuchMissingInfo(planets: Planet[]): Planet[]
{
  const filteredPlanets = planets.map((planet) => {

    var missingInfo = 0;

    Object.entries(planet).forEach(([key, value]) => {
      if (!value || value === "unknown")
      {
        missingInfo = missingInfo + 1;
      }
    })

    if (missingInfo <= 1)
    {
      return planet;
    }
    else {
      return null;
    }
  }).flatMap(f => f ? [f] : []);

   
  
  return filteredPlanets;

}


export async function getPlanets(): Promise<Planet[]> {
    
  var finished = false;
  var urlToFetchFrom = PLANET_URL;
  var allPlanets: Planet[] = []
  while (!finished)
  {
    const response = await fetch(urlToFetchFrom);

    if (response.ok)
    {
      
      const data = await response.json();
      const {results, next} = data;

      allPlanets = allPlanets.concat(getPlanetsFromResultsPage(results));

      if (next)
      {
        urlToFetchFrom = next;
      }
      else 
      {
        finished = true;
      }
    }
    else 
    {
      finished = true;
    }    
  }

  const filteredPlanets = removePlanetsWithTooMuchMissingInfo(allPlanets);

  

  return filteredPlanets;

}
