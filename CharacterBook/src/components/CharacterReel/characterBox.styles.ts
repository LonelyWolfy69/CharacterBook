/* ---->----------------- Importing Emotion for styles */
import styled from '@emotion/styled';

/*-------->Importing Animates :3 ----*/
import { FadeIn } from '../../styles/animation';

import { CharBoxLabel } from '../../styles/animation';


/* Typing Props for Delay ---*/
type CharacterBoxStyledProps = {
        $delay: number;
};


/* -----> CSS Style items */
export const CharacterBoxStyled = styled.section<CharacterBoxStyledProps> `
  
  margin: 0px auto;
  display:flex;
  flex-direction: column;
  justify-content: space-between;
  width: 25%;
  height: hv;
  
  background-color: rgb(58, 58, 58);

  animation: ${FadeIn} 1200ms ease-out;
  animation-delay: 100ms;
  animation-fill-mode: backwards;

  .characterBox-container__titles {
          padding:8px;
          background-color: #ff9100;
          border-radius: 15px 15px 0 0;

          animation: ${CharBoxLabel} 500ms ease-in;
          animation-delay: ${({ $delay }) => `${$delay}ms`};
          animation-fill-mode: backwards;
          }

  .characterBox-container__img {
          width: 100%;
          height: 85%;
          }

`;