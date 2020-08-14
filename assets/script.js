console.log('berhasil');
const footerAll = document.querySelectorAll(".footer-content");
console.log(footerAll);

let footerTitle = ['TECHNOLOGY SKILLS', 'PERSONAL SKILLS', 'CREDIT']
let footerContent = [
    `                     
<li>Ionic</li>
<li>Cordova</li>
<li>Capacitor</li>
<li>Rest API</li>
<li>Websockets</li>
<li>Angular</li>
<li>Typescript</li>
<li>HTML5</li>
<li>CSS</li>
<li>SCSS</li>`,
    `
<li>Critical Thinking</li>
<li>Problem Solving</li>
<li>Team Work</li>
<li>Creativity</li>
<li>Prototyping</li>
`,
    `All icons are taken from <a href="https://www.flaticon.com" target="_blank">Flat Icon</a>.
Credit to <a target="_blank" href="https://www.flaticon.com/authors/good-ware">Good Ware</a>,
<a target="_blank" href="https://www.flaticon.com/authors/geotatah">Geotatah</a>,
<a target="_blank" href="https://www.flaticon.com/authors/pause08">Pause08</a>,
<a target="_blank" href="https://www.flaticon.com/authors/tomas-knop">Tomas Knop</a>,
<a target="_blank" href="https://www.flaticon.com/authors/freepik">Freepik</a>,
<a target="_blank" href="https://www.flaticon.com/authors/pixel-perfect">Pixel</a>
<a target="_blank" href="https://www.flaticon.com/authors/icongeek26">icongeek26</a>`]
for (let i = 0; i < footerTitle.length; i++) {
    let createEleTitle;
    let createEleContent;
    createEleTitle = document.createElement('h1');
    createEleTitle.innerHTML = footerTitle[i];


    if (i != 2) {
        createEleContent = document.createElement('ul');
        createEleContent.innerHTML = footerContent[i];
    } else {
        createEleContent = document.createElement('p');
        createEleContent.innerHTML = footerContent[i];
    }
    console.log(createEleContent);
    footerAll[i].appendChild(createEleTitle);
    footerAll[i].appendChild(createEleContent);
}


const getAllH1 = document.querySelectorAll("h1")
console.log(getAllH1);

for (let i = 0; i < getAllH1.length; i++) {
    if (getAllH1[i]['innerText'] == "CONTACT") {
        getAllH1[i]['innerHTML'] = "BIODATA"
        break;
    }
}

const getObjective = document.querySelector(".about-container h1");
getObjective.style.textTransform = 'uppercase';
console.log(getObjective)