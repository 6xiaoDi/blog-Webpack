import image from './images/img.jpg';

console.log(image);

let img = new Image();
img.src = image;
document.body.appendChild(img);