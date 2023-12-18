import { Planet } from "../../datagetters/get-planets"

interface DisplayTableProps{
    planet: Planet
}

function capitalizeFirstLetter(string: string): string {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export function DisplayTable(props: DisplayTableProps){
    
    const {planet} = props
    
    return <table className="display-table">
        <tbody>
            <tr>    
                <td>Tyngdekraft:</td><td>{planet.gravityStandard ? (planet.gravityStandard * 100).toFixed(0) + "% af Jordens.": "Ukendt."}</td>
            </tr>
            <tr>    
                <td>Klima:</td><td>{planet.climate !== "unknown" ? capitalizeFirstLetter(planet.climate) + ".": "Ukendt."}</td>
            </tr>
            <tr>    
                <td>Diameter:</td><td>{planet.diameterInKilometers ? planet.diameterInKilometers.toLocaleString() + " km.": "Ukendt."}</td>
            </tr>
            <tr>    
                <td>Dagslængde:</td><td>{planet.rotationalPeriodInHours ? planet.rotationalPeriodInHours + " timer.": "Ukendt."}</td>
            </tr>
            <tr>    
                <td>Årslængde:</td><td>{planet.orbitalPeriodInDays ? planet.orbitalPeriodInDays + " dage.": "Ukendt."}</td>
            </tr>
            <tr>    
                <td>Vand dækker:</td><td>{planet.percentSurfaceWater ? planet.percentSurfaceWater + "% af overfladen.": "en ukendt del af overfladen."}</td>
            </tr>
            <tr>    
                <td>Befolkning:</td><td>{planet.population ? planet.population.toLocaleString() + " Intelligente individer.": "Ukendt."}</td>
            </tr>
            <tr>    
                <td>Terræn:</td><td>{planet.terrain !== "unknown" ? capitalizeFirstLetter(planet.terrain) + ".": "Ukendt."}</td>
            </tr>
        </tbody>
    </table>
}