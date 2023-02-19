import { getTimestamp } from "../helpers/getTimestamp.js";

const log = document.querySelector('#log');

export function dotThenFetch(){
        // Skapar ett nytt <p> element, med en text och lägger in det på sidan.
        const firstP = document.createElement('p');
        firstP.textContent = `[${getTimestamp()}] Status: Skickar request...`;
        log.appendChild(firstP);
    
        /**
         * Fetch är en asynkron funktion. Den returnar alltid en promise. Vi anropar den och går vidare.
         * Det vi gör annorlunda här, är att vi också ger instruktioner om vad som ska hända när fetchen är klar, via .then().
         * Både fetchen, och .then() kommer att ske asynkront i relation till huvudkoden.
         */
        fetch('http://localhost:5050/')
            .then(response => {
                const secondP = document.createElement('p');
                secondP.innerHTML = `[${getTimestamp()}] Min uppgift är att visa dig svaret vi fick av requesten. Jag anropas i en .then() efter att fetchen är klar, så jag har den riktiga responsen. <br><b>Varsågod: ${response}</b>`;
                log.appendChild(secondP);
            })
    
        // Eftersom att fetchen är asynkron, kommer inte JS att vänta innan den skriver ut detta.
        const thirdP = document.createElement('p');
        thirdP.innerHTML = `[${getTimestamp()}] Min uppgift var att skriva hej. Jag behövde inte vänta eftersom det inte finns en "await". <br><b>Varsågod: Hej</b>`;
        log.appendChild(thirdP)
}