/* --------> Importing Styled elements */
import { CharacterBoxStyled } from "./characterBox.styles";

/* Typing Props for Delay ---*/
type CharacterBoxStyledProps = {
    $delay: number;
};


export function CharacterBox (
    { $delay }: CharacterBoxStyledProps
    ) {
        return (
            <CharacterBoxStyled $delay={$delay}>
                <div className="characterBox-container__img"></div>
                
                <div className="characterBox-container__titles">
                    <h4>Nina Kulanina</h4>
                    <p>The dark doughter from the sky</p>
                </div>               
            </CharacterBoxStyled>
        )
    }