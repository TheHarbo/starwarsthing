export function translateClimate(climate: string): string
{
    const climates = climate.split(",");

    const translatedClimates = climates.map((climate) => {
        switch(climate.toLocaleLowerCase().trim())
        {
            case "arid":
            case "rocky":
                return "tørt";
            case "artic":
                return "arktisk";
            case "artificial temperate":
                return "kunstig atmosfære";
            case "frigid":
                return "køligt";
            case "frozen":
                return "frossent";
            case "hot":
                return "varmt";
            case "moist":
            case "humid":
                return "fugtigt";
            case "murky":
                return "tåget";
            case "polluted":
                return "forurenet";
            case "subartic":
                return "subarktisk";
            case "superheated":
                return "overophedet";   
            case "temperate":
                return "tempereret";
            case "tropical":
                return "tropisk";
            case "windy":
                return "windblæst";        
            default:
                return climate
        }

    })


    return translatedClimates.join(', ');
}