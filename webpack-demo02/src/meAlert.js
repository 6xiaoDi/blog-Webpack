export default function meAlert() {
    let button = document.createElement('button');
    button.innerHTML = '按钮1';
    document.body.appendChild(button);
    return button;
}