
import { weather } from "./Weather.js";
import { ui } from "./UI.js";

const input = document.querySelector('.input-group');


// Search event listener
document.addEventListener('DOMContentLoaded', () => {
    weather.get( localStorage.getItem('city') ? localStorage.getItem('city') : 'Tokyo' )
    .then ( data => {
        ui.show(data);
    })
    .catch (err => console.log(err));
});

input.addEventListener('submit', (e) => {
    const inputValue = document.querySelector('.input').value;
    
    weather.get(inputValue)
    .then ( data => {

        ui.clearInput();
        ui.show(data);
        localStorage.setItem('city', inputValue);
    })
    .catch (err => console.log(err)); 

    e.preventDefault();
});