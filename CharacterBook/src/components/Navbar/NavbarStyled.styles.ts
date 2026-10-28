/* ---->----------------- Importing Emotion for styles */
import styled from '@emotion/styled';

/*-------->Importing Animates :3 ----*/
import { SlipRight } from '../../styles/animation';

/* -----> CSS Style items */
export const NavbarStyled = styled.ul`
  top: 84px;
  left: -64px;
  padding-top:24px;
  padding-left:24px;
  width: 96px;
  height: 328px;
  position: fixed;
  background-color: #ff9100;
  border-radius: 0 16px 16px 0;
  cursor: pointer ;

  transition: left 300ms ease-in-out;

  &:hover {
    left: 0;
    }

  animation: ${SlipRight} 700ms ease-out;
  animation-delay: 300ms;
  animation-fill-mode: backwards;
  
`;