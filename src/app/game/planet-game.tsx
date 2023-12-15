"use client"

import { useEffect, useState } from "react";
import { Planet } from "../datagetters/get-planets";

interface PlanetGameProps
{
    planets: Planet[];
    text: string;
}

export function PlanetGame(props: PlanetGameProps)
{

    const {planets, text} = props;

    const [shownPlanet, setShownPlanet] = useState<Planet>(); 

    useEffect(() => {
        const planet = planets[Math.floor(Math.random() * planets.length)];
        setShownPlanet(planet)
    }, [planets])

    

    return <>
    <table style={{minWidth: "400px", minHeight: "400px"}}>
        <thead>
            
        </thead>
    </table>
    {text}
    </>
}