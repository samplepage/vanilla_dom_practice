let topVariable = document.querySelector('#header');
console.log(topVariable);

//2
let headerVariable = document.querySelector('h2');
console.log(headerVariable);

//3
headerVariable.innerText = 'Welcome to Raleigh!!!';

//4
let classArray = document.querySelectorAll('.class');
console.log(classArray);

//5
let oneLi = document.querySelector('li');
oneLi.style.color = '#FA8072';

//6
let allLi = document.querySelectorAll('li');
allLi[1].innerText = 'Jamboree sandwich at the Jambo-ree';

//7
let imgAtt = document.createElement('img');
imgAtt.setAttribute('src', 'IMG_0217.jpg');
document.querySelector('body').appendChild(imgAtt);

//bonus
for (let i = 0; i < allLi.length; i++) {
    allLi[i].style.color = '#B22222';
}

//8
let variableP = document.querySelector('p');

//9 
variableP.remove();
