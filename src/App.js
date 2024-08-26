
import './App.css';
import {List} from './components/List'

const textName = "Maria"
const picture = {
  src: "./img/image.png",
  alt: "Cat"
}

const websiteFavorite = {
  name:'Google',
  href:"https://www.google.com/"
}

const numb1 = 6
const numb2 = 4

const colors =  ["Червоний", "Синій", "Зелений"]

function App() {
  return (
    <>
      <h1>{textName}</h1>
      <img src={picture.src} alt={picture.alt}/>
      <p>Ласкаво просимо до нашого сайту!</p>
      <a href={websiteFavorite.href}>Мій улюблений сайт!</a>
      <p>{numb1+numb2}</p>
      <List colors={colors} />
    </>
  );
}

export default App;
