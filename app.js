// grab DOM elements

// set event listeners


const nameDisplay = document.getElementById('name');
console.log(nameDisplay);

nameDisplay.textContent ='Julie';

const updateBtn = document.getElementById('update-btn');
updateBtn.addEventListener('click', () =>{
    console.log('i am clicking the button');
// grab the input element
const nameInput = document.getElementById('name-input');
// set the display to the value from the input
nameDisplay.textContent = nameInput.value;
});