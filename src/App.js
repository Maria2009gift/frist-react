
import avatar from './images/grayCat.jpg'
import './App.css';
import {List} from './components/List'

console.log(avatar);

const textName = "Maria"


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
      <img src={avatar} alt="gray cat"/>
      <p>Ласкаво просимо до нашого сайту!</p>
      <a href={websiteFavorite.href}>Мій улюблений сайт!</a>
      <p>{numb1+numb2}</p>
      <List colors={colors} />
    </>
  );
}

export default App;
