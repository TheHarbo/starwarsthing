"use client"

import React, { KeyboardEvent, useEffect, useState } from "react";
import { Planet } from "../datagetters/get-planets";
import { set } from "lodash";
import { DisplayTable } from "./tables/display-table";
import { InteractionTable } from "./tables/interaction-table";

interface PlanetGameProps
{
    planets: Planet[];
}

function getRandomPlanet(planets: Planet[]): Planet {
    const planet = planets[Math.floor(Math.random() * planets.length)];
    console.log(planet.name);
    return planet;
}

export function PlanetGame(props: PlanetGameProps)
{

    const {planets} = props;

    const [shownPlanet, setShownPlanet] = useState<Planet>(); 
    const [guess, setGuess] = useState("");
    const [message, setMessage] = useState("");

    useEffect(() => {
        if (planets.length)
        {
            setShownPlanet(getRandomPlanet(planets))
        }
        else 
        {
            setMessage("Der blev ikke fundet nogle planeter under indlæsning. Tjek din internetforbindelse.")
        }
    }, [planets])


   
    const handleGuessButtonClick = () => {
        if (guess.toLocaleLowerCase() === shownPlanet?.name.toLocaleLowerCase())
        {
            const index = planets.indexOf(shownPlanet);
            if (index > -1)
            {
                planets.splice(index, 1)
            }
            if (!planets.length)
            {
                setGuess("");
                setMessage(`Det er korrekt! Der er ${planets.length} planeter tilbage. Her kommer en ny planet!`);
                setShownPlanet(getRandomPlanet(planets));
                setTimeout(() => {setMessage("")}, 5000)
            }
            else 
            {
                setMessage("Tillykke, du har gættet alle planeterne korrekt.");
            }

        }
        else
        {
            setMessage("Du gættede forkert, prøv igen");
            setTimeout(() => {setMessage("")}, 5000)
        }

    }

    const handleGuessInputChange = (e: React.FormEvent<HTMLInputElement>) => {        
        setGuess(e.currentTarget.value)
    }

    

    return <>
    {shownPlanet ? 
    <center>
        <InteractionTable 
            guess={guess} 
            onGuessInputChange={handleGuessInputChange} 
            onGuessButtonClick={handleGuessButtonClick} 
            message={message}>        
        </InteractionTable>
        { !message ? 
        <DisplayTable 
            planet={shownPlanet}>
        </DisplayTable> 
        
        : message}
    </center>
    : null}
    </>
}