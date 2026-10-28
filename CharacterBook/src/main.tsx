import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

/* Importin RouterDom for creating routes between pages :3 ---*/
import { RouterProvider } from 'react-router-dom';

import { router } from './routes/AppRouter.tsx'

//* Importin Global for general styles :3 ---*/
import { GlobalStyles } from './styles/globalStyles'
import { ThemeProvider } from '@mui/material/styles'
import { themeDarkHeart } from './styles/theme'

//* Importing  css   */
//* import './index.css'  */


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
      <ThemeProvider theme={themeDarkHeart}>
        <GlobalStyles />
      
      </ThemeProvider>

  </StrictMode>,
)
