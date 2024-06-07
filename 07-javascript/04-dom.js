// Exercise #1:
// when the user clicks the 'copy' button, copy the user input to the output area

// IDs from the document used to select input fields
const input_1_id = `userInput1`;
const input_2_id = `userInput2`;

// Creates a callback function to copy text from an input location
// to an output location. This pattern promotes reusability by allowing
// me to not need to individually construct a new callback function for 
// each event.
var copy_text = function(from, to){
    return  function(){
        to.innerText = from.value;
    }
}
// fetch JavaScript objects representing specific elements in the DOM

const copy_button = document.getElementById(`copy`);
const input_1 = document.getElementById(input_1_id);
const output_1 = document.querySelector(`#${input_1_id} ~ .output`);

// add an event listener on the target element

copy_button.addEventListener("click", copy_text(input_1, output_1));


// Exercise #2:
// when the user enters input text, copy the user input to the output area

// fetch JavaScript objects representing specific elements in the DOM

const input_2 = document.getElementById(input_2_id);
const output_2 = document.querySelector(`#${input_2_id} ~ .output`);

// add an event listener on the target element
input_2.addEventListener("input", copy_text(input_2, output_2));



