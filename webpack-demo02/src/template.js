import fn from './fn';
import './css/index.css';

console.log('template');

document.onclick = async function() {

    // let rs = await fetch("http://localhost:7777/api/data")
    let rs = await fetch('/api/data')

    console.log('rs', rs);


    // fn();
};