// function capitalize(firstWord, secondWord){
//     firstWord = firstWord.slice(0,1).toUpperCase() + firstWord.slice(1).toLowerCase();
    
//     secondWord = secondWord.slice(0,1).toUpperCase() + secondWord.slice(1).toLowerCase();
    
//     console.log(firstWord, secondWord);
    
//     return [firstWord, secondWord]; }

// const capBtn = document.querySelector('#capMe');

// capBtn.addEventListener('click', capitalize);

const form = document.querySelector('#capitalizer');
const input = document.querySelector('#capitalizeMe');
const result = document.querySelector('#result');

const submission = form.addEventListener('submit', function (e) {
    e.preventDefault(); //prevent redirect
    const name = input.value; //set the input to a variable
    const p = document.createElement('p'); //add a p element to the page
    p.innerText = name; //set the text to the input value from name variable
    result.append(p); //add the input value to the page
    input.value = ''; //reset the input field to blank
})