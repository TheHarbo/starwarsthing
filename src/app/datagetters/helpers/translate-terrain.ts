export function translateTerrain(terrain: string): string
{
    const terrains = terrain.split(",");

    const translatedTerrain = terrains.map((terrain) => {
        switch(terrain.toLocaleLowerCase().trim())
        {
            case "airless asteroid":
                return "asteroide"
            case "ash":
                return "aske";
            case "barren":
                return "øde"
            case "canyons":
                return "kløfter";
            case "caves": 
                return "grotter";
            case "cityscape":
            case "urban":
                return "bebygget";
            case "cliffs":
                return "klipper";
            case "desert":
            case "deserts":
                return "ørkener";
            case "fields":
                return "marker"; 
            case "forests":
                return "skove";                  
            case "fungus forests":
                return "skove af svampe"; 
            case "gas giant":
                return "gaskæmpe";
            case "glaciers":
                return "glætsjer";
            case "grass":   
            case "grasslands":
            case "plains":
                return "slette";   
            case "grassy hills": 
            case "hills":
                return "bakker";
            case "ice caves":
                return "isgrotter";                
            case "ice canyons":
                return "iskløfter";
            case "islands":
                return "øer";
            case "lakes":
                return "søer"   
            case "lava rivers":
                return "lavafloder"     
            case "jungle":
            case "jungles":
                return "jungler";  
            case "mesas":
                return "taffelbjerge";             
            case "mountain":               
            case "mountains":             
            case "mountain ranges":
                return "bjerge";   
            case "oceans":
            case "ocean":
            case "seas":
            case "sea":
                return "have";   
            case "plateaus":
                return "plateauer"; 
            case "rainforests":
                return "regnskove"; 
            case "reefs":
                return "rev";
            case "rivers":
                return "floder";
            case "rock arches":
                return "stenhvælver"
            case "rock":
            case "rocky":
                return "stenet";
            case "rocky deserts":
                return "stenørkener";
            case "rocky islands":
                return "stenøer";
            case "savanna": 
            case "savannas":
                return "savanne";  
            case "scrublands":
                return "krat";  
            case "sinkholes":
                return "jordfaldshuller";
            case "swamp":
            case "swamps":
                return "moser";
            case "toxic cloudsea":
                return "giftige tunggasser"
            case "tundra":
                return "tundraer";
            case "valleys":
                return "dale";
            case "verdant":
                return "frodigt";    
            case "vines":
                return "slyng";  
            case "volcanoes":
                return "vulkaner";  
            default:
                return terrain
        }

    })


    return translatedTerrain.join(', ');
}