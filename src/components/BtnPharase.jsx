import getRandomNumber from '../utils/getRandomNumber';
import quotes from '../data/pharases.json';
import photos from '../data/photos.json';


const BtnPharase = ({setPharaseSelected, setBgSelected}) => {

    const activarNuevaFrase = () =>{
        const indexRandom = getRandomNumber(quotes.length)
        // const photoRandom = getRandomNumber(photos.length)
        //mejor legibilidad que codigo reducido.

        setPharaseSelected(quotes[indexRandom])
        setBgSelected(photos[getRandomNumber(photos.length)])
    };


  return (
    <button className="bnt_card" onClick={activarNuevaFrase}>Ver Otra</button>
  )
};

export default BtnPharase;