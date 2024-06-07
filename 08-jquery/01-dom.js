// Exercise #1:
// When the user clicks the 'copy' button, copy the user input to the output area

$(`#copy`).click(function(){
    $(`#output1`).text($(`#userInput1`).val());
});

// Exercise #2:
// When the user enters input text, copy the user input to the output area

$(`#userInput2`).on(`input`, function(){
    $(`#output2`).text($(`#userInput2`).val());
});