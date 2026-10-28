/* --------> Importing Styled elements */
import { CharacterReelStyled } from "./characterReel.styles";

/* -----------------> Importing Components */
import { CharacterBox } from '../../components/CharacterReel/characterBox'



export function CharacterReel (
        ) {
        return (
            <CharacterReelStyled>
            {/*-- ----C haracter Box -01 ------------ -->*/}
            
                    <CharacterBox $delay={400}></CharacterBox>
           
            {/*-- ----C haracter Box -02 ------------ -->*/}
                
                    <CharacterBox $delay={400+50}></CharacterBox>
               

            {/*-- ----C haracter Box -03 ------------ -->*/}
                
                    <CharacterBox $delay={400+100}></CharacterBox>
               
            
            {/*-- ----C haracter Box -04 ------------ -->*/}
         
                    <CharacterBox $delay={400+150}></CharacterBox>
              
            </CharacterReelStyled>
        );
}