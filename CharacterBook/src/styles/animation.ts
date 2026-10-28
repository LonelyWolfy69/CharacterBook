/* -------> Importing React Items :3 */
import { keyframes } from '@emotion/react';



/* -------- Bounce from Top Animation -----*/
export const FallPop = keyframes
    `
        0% {
            transform: translateY(-20px);
            opacity: 0;
        }

        15% {
            transform: translateY(0);

        }
        
        75% {
            transform: translateY(-28px);
            opacity: 1;
        }

        100% {
            transform: translateY(0);
        }
    `;

/* -------- Animation from Left -----*/

export const SlipRight = keyframes
`
    0% {
        transform: translateX(-20px);
        opacity: 0;
    }

    15% {
        transform: translateX(0);

    }
    
    75% {
        transform: translateX(-28px);
        opacity: 1;
    }

    100% {
        transform: translateY(0);
    }
`;

/* -------- Animation for CharBoxes Label Pop Up -----*/

export const CharBoxLabel = keyframes
`
        0% {
            transform: translateY(300px);
            opacity: 0;
        }

        100% {
            transform: translateY(0);
        }
    `;

/* -------- Animation Fade In -----*/

export const FadeIn = keyframes
`
        0% {
            opacity: 0;
        }

        100% {
            opacity: 1;
        }
    `;