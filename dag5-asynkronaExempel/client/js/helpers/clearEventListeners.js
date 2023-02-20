import { asynchronousFetch } from "../fetches/asynchronousFetch.js";
import { dotThenFetch } from "../fetches/dotThenFetch.js";
import { synchronousFetch } from "../fetches/synchronousFetch.js";

const button = document.querySelector('button')

export function clearEventListeners(){
        // Tar bort eventListeners som eventuellt redan sitter på knappen, så att vi inte har flera samtidigt.
        button.removeEventListener('click', asynchronousFetch);
        button.removeEventListener('click', synchronousFetch);
        button.removeEventListener('click', dotThenFetch);
}