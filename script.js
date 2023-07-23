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
    let name = input.value; //set the input to a variable
    name = name.slice(0,1).toUpperCase() + name.slice(1).toLowerCase();
    const span = document.createElement('span'); //add a p element to the page
    span.innerText = `${name} `; //set the text to the input value from name variable
    result.append(span); //add the input value to the page
    input.value = ''; //reset the input field to blank
})

// const capitalizer = form.addEventListener('submit', function (e) {
//     const name = input.value;
//     name = name.slice(0,1).toUpperCase() + name.slice(1).toLowerCase();
// })  //doesn't work, not sure how to apply slice to the input value