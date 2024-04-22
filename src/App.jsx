import { useState } from 'react';
import arrayFrases from './data/pharases.json';
import photos from './data/photos.json';
import getRandomNumber from './utils/getRandomNumber.js';
import Pharase from './components/Pharase.jsx';
import BtnPharase from './components/BtnPharase.jsx'
import './App.css'

function App() {

  const indexRandom = getRandomNumber(arrayFrases.length)

  const [pharaseSelected, setPharaseSelected] = useState(arrayFrases[indexRandom])

  const [bgSelected, setBgSelected] = useState(photos[getRandomNumber(photos.length)])


  console.log(pharaseSelected)

  const objStyle = {
    backgroundImage: `url(/image/fondo${bgSelected}.png)`,
    backgroundSize: `cover`,
    backgroundPosition: `center`,
    
  }

  return (
    <>
      <div className='contenedor' style={objStyle}>

        <h1 className='title'>Galleta de la fortuna</h1>

        <section className='card'> 
          <Pharase className="parrafo" 
            //paso un prop
            pharaseSelected={pharaseSelected}
          />

          <BtnPharase 
            setPharaseSelected={setPharaseSelected }
            setBgSelected={setBgSelected}
          />
        </section>

      </div>


      {/* //https://youtu.be/EvFFbHU-MEU?si=lF_35OtRIFNI3G_5 */}
      {/* corto cotro circuito para reenderizar con &&  */}

    </>
  )
}

export default App
