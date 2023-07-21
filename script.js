function capitalize(firstWord, secondWord){
    firstWord = firstWord.slice(0,1).toUpperCase() + firstWord.slice(1).toLowerCase();
    
    secondWord = secondWord.slice(0,1).toUpperCase() + secondWord.slice(1).toLowerCase();
    
     
    
    console.log(firstWord, secondWord);
    
    return [firstWord, secondWord]; }

const capBtn = document.querySelector('#capMe');

capBtn.addEventListener('click', capitalize);