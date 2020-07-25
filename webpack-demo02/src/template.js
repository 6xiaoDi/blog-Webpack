import fn from './fn';
import './css/index.css';

console.log('template');

document.onclick = async function() {

    // let rs = await fetch("http://localhost:7777/api/data")
    let rs = await fetch('/api/data')

    // console.log('rs', rs);

    // console.log('我修改了代码!！！！!!!');

    fn();
};

let input = document.querySelector('input');
input.onfocus = function() {
    fn1();
}

// console.log(module.hot);

if (module.hot) {
    // module.hot.accept: 监听哪个模块的更新
    module.hot.accept('./fn', () => {
        console.log('fn更新了');
    });

    module.hot.accept('./fn1', () => {
        console.log('fn1更新了....');
    });
}