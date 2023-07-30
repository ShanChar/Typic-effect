// const change = document.querySelector("h1 span");

// const words = ["gay", "a dumbass", "a troll", "not liked by his waifus", "a genius"];
// function shuffleArray(array) {
//     for (let i = array.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         [array[i], array[j]] = [array[j], array[i]];
//     }
//     return array;
// }
// const shuffled_words = shuffleArray(words);

// let word_index = 0;
// let char_index = 0;
// let remove = false;

// const type = () => {
//     const current_word = shuffled_words[word_index];
//     const current_char = current_word.substring(0, char_index);
//     change.textContent = current_char;

//     if(!remove && char_index < current_word.length)
//     {
//         char_index++;
//         setTimeout(type, 100);
//     }

//     else if(remove && char_index >0)
//     {
//         char_index--;
//         setTimeout(type, 75)
//     }

//     else
//     {
//         remove = !remove; 
//         word_index = !remove ? (word_index+1) % shuffled_words.length: word_index;
//         setTimeout(type, 1000);
//     }
// }
// type();



















const words = ["an artist", "an idiot", "a dumbass", "a dude", "not a magician", "not liked by his waifus"];

function shuffle(array) {
    for(let i = array.length - 1; i> 0; i--)
    {
        const j = Math.floor(Math.random() * (i+1));
        [array[i], array[j]] = [array[j], array[i]];
  
    }
    return array;
}
const shuffled_words = shuffle(words);
console.log(shuffled_words);

let char_index = 0;
let word_index = 0;
let remove = false;
const value = document.querySelector("h1 span");

const type = () => {
    const current_word = shuffled_words[word_index];
    const current_char = current_word.substring(0, char_index);
    value.textContent = current_char;

    if(!remove && char_index < current_word.length) {
        char_index++;
        setTimeout(type, 100);
    }

    else if(remove && char_index > 0 ){

        char_index--;
        setTimeout(type, 75)
    }

    else {
        remove = !remove;
        word_index = word_index = !remove ? (word_index+1) % shuffled_words.length: word_index;
        setTimeout(type, 1000);
        
    }
}



type();

