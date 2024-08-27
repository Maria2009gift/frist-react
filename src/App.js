
import './App.css';
import {List} from './components/List'

const textName = "Maria"
const picture = {
  src: "https://www.google.com/imgres?q=cat%20img%20gray&imgurl=https%3A%2F%2Fmedia.istockphoto.com%2Fid%2F858701710%2Fphoto%2Ffluffy-gray-kitten-of-a-russian-blue-cat.jpg%3Fs%3D612x612%26w%3D0%26k%3D20%26c%3DUNa1QGzOed4h-c5xs7bdNFA7UGKhjmaYDUn27f28RwA%3D&imgrefurl=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fgray-cat&docid=iuZ6mcFyhnW2eM&tbnid=emUI4PA9oTQijM&vet=12ahUKEwi1j822ypWIAxUeJxAIHQ3hMXwQM3oECCUQAA..i&w=612&h=408&hcb=2&ved=2ahUKEwi1j822ypWIAxUeJxAIHQ3hMXwQM3oECCUQAA",
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
