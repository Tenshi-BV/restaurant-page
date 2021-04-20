import { main } from './main';
import { menu } from './menu';
import { contact } from './contact';

const content = document.querySelector('div#content');

const header = document.createElement('div');
header.setAttribute('id', 'header');
content.appendChild(header);

const h1 = document.createElement('h1');
h1.textContent = 'The Big Brain restaurant';
h1.setAttribute('id', 'pageTitle');
header.appendChild(h1);

const menuDiv = document.createElement('div');
menuDiv.setAttribute('id', 'menuDiv');
header.appendChild(menuDiv);

const button1 = document.createElement('button');
button1.textContent = 'home';
button1.setAttribute('id', 'home');
menuDiv.appendChild(button1);

const button2 = document.createElement('button');
button2.textContent = 'menu';
button2.setAttribute('id', 'menu');
menuDiv.appendChild(button2);

const button3 = document.createElement('button');
button3.textContent = 'contact';
button3.setAttribute('id', 'contact');
menuDiv.appendChild(button3);

const buttonContent = document.createElement('div');
buttonContent.setAttribute('id', 'buttonContent');
content.appendChild(buttonContent);

button1.addEventListener('click', () => {tabSelect(button1)});
button2.addEventListener('click', () => {tabSelect(button2)});
button3.addEventListener('click', () => {tabSelect(button3)});

main();
let y = button1;
button1.classList.add('selected');

const tabSelect = (x) => {
    buttonContent.removeChild(buttonContent.lastChild);
    y.classList.remove('selected');
    x.classList.add('selected');
    if (x == button1) {
        main();
    } else if (x == button2) {
        menu();
    } else {
        contact();
    }
}

