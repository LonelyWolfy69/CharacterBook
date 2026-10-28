import { Global, css } from '@emotion/react'

/*-------->Importing Animates :3 ----*/
import { FallPop } from './animation';


export function GlobalStyles() {
    return(
        <Global 
        styles={(theme) => css` 
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          background-color: ${theme.colors.background};
          font-family: sans-serif;
          color: ${theme.colors.textGeneral};
        }

        #root {
          min-height: 100vh;
        }

        .bsc-button {
          background-color: ${theme.colors.primary};
          color: ${theme.colors.textSecondary};
          border: none;
          border-radius: ${theme.radius.md};
          padding: ${theme.spacing.md};
          cursor: pointer;
        }

        .lobby_header-label {
          position:relative;
          
          display: flex;
          justify-content:center;
          align-items: center;
          margin: 0px auto;
          with: 100%;
          height:80px;
          background-color: ${theme.colors.primary};

          animation: ${FallPop} 700ms ease-out;
          animation-delay: 200ms;
          animation-fill-mode: backwards;
        }

      .nav_element--li{
          margin-bottom:16px;
          list-style: ${theme.lists.noStyle};
      }

       .characterBox-container__titles p {
          margin-top: 6px;
          color: ${theme.colors.textSecondary};
      }

  
        `}
        />
    );
}