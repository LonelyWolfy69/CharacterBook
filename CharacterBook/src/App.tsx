/* ----  Importing React Utils **/
import { useNavigate } from "react-router-dom";


/*import { useState } from 'react'*/

/*---------------Importing Buttons-----------------*/
import { MyButton } from './MyButton'
import './App.css'

function App() {
/*-  const [count, setCount] = useState(0) **/
const navigator = useNavigate();

  return (
    <>
      <section id="center">
        <h1>Hey Ookami</h1>
        <MyButton 
          onClick={() => navigator('/Lobby')}
          label="Tap here to choose your path :3" className="bsc-button"
        />
        <p>somwhere you belong...</p>
      </section>    
    </>
  )
}

export default App
