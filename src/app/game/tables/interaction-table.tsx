import React, { KeyboardEvent } from "react";

interface InteractionTableProps{
    guess: string;
    onGuessInputChange: (e: React.FormEvent<HTMLInputElement>) => void;
    message: string; 
    onGuessButtonClick: () => void;
}

export function InteractionTable(props: InteractionTableProps): React.JSX.Element
{

    const {guess, message, onGuessButtonClick, onGuessInputChange} = props;

    const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            onGuessButtonClick()
        }
      }

    return  <table className="interaction-table">
                <tbody>
                    <tr>
                        <td><input className="sw-input" value={guess} onChange={onGuessInputChange} onKeyDown={handleKeyPress} placeholder="Indtast dit gæt her"></input></td>
                    </tr>
                    <tr>                
                        <td>{!message ? <button className="sw-button" onClick={onGuessButtonClick}>Bekræft dit gæt</button> : null}</td>
                    </tr>
                </tbody>
            </table>
}