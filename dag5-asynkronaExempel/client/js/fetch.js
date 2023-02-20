import { synchronousFetch } from "./fetches/synchronousFetch.js";
import { asynchronousFetch } from "./fetches/asynchronousFetch.js";
import { dotThenFetch } from "./fetches/dotThenFetch.js";
import { clearPage } from "./helpers/clearPage.js";
import { clearEventListeners } from "./helpers/clearEventListeners.js";

// Importerar highlighting paketet.
import hljs from 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/es/highlight.min.js';

const button = document.querySelector('button');
const dropdown = document.querySelector('select');
const codeBlock = document.querySelector('code');

const eventListeners = {
    asynchronousFetch,
    synchronousFetch,
    dotThenFetch
};

button.addEventListener('click', asynchronousFetch);
codeBlock.textContent = asynchronousFetch.toString();
hljs.highlightAll();

dropdown.addEventListener('change', (e) => {
    // Egen funktion som rensar sidan
    clearPage();
    // Egen funktion som tar bort eventuella eventListeners.
    clearEventListeners()

    const selectedValue = e.currentTarget.value;
    button.addEventListener('click', eventListeners[selectedValue]);
    codeBlock.textContent = eventListeners[selectedValue].toString();
    hljs.highlightAll();
    
});
