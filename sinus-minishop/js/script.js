// Code here!
//Nr. 1
let hoodieH3Ref = document.querySelector('.hoodie-h3');
hoodieH3Ref.textContent = "Potato";

//Nr. 2
let NavARef = document.querySelector('nav>a:nth-of-type(1)');
NavARef.textContent = "Start";

//Nr. 3
let footerARef = document.querySelector('footer>section>article:nth-of-type(1)>a:nth-of-type(3)');
footerARef.textContent = "Mail Us";

//Nr. 4
let hoodiePRef = document.querySelector('.art-2>p');
hoodiePRef.textContent = "This is a hoodie, red as the dangerous flame of fire. You'll look hot and you'll feel hot!";

//Nr. 5
let btnFireRef = document.querySelector('.art-2>button');
btnFireRef.style.backgroundColor = "#FF3E0E" 

//Nr. 6
let productRef = document.querySelector('.art-3');
productRef.style.backgroundColor = "aqua";

//Nr. 7
let adressRef = document.querySelector('footer>section>article:nth-of-type(2)>p');
adressRef.innerHTML = "Sinus skateboards <br> Halfpipe ave. 123 <br> 1783 58, Venice beach";

//Nr. 8
let pRef = document.querySelectorAll('p');

pRef.forEach( p => {
    p.style.color = "green";
});

//Nr. 9
let btnRef = document.querySelectorAll('button');

btnRef.forEach( btn => {
    btn.textContent = "add to cart"
});

//Nr. 10
NavARef.classList.add('active');

//Nr. 11
let logoImgRef = document.querySelector('header>img');
logoImgRef.classList.remove('logo');

//Nr. 12
let navRef = document.querySelector('nav');

let newA = document.createElement('a');
newA.textContent = "SALE"
newA.style.color = "red"

navRef.appendChild(newA);

//Nr. 13
let mainRef = document.querySelector('main');

let newItem = document.createElement('article');
newItem.classList.add('art-4')
newItem.innerHTML =
    "<figure><img src='img/hoodie-forrest.png' alt='hoodie'></figure> <h2>Sinus Hoodie</h2> <h3>Forest</h3> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus doloremque ducimus enim!</p> <button>buy</button>"

mainRef.appendChild(newItem);


