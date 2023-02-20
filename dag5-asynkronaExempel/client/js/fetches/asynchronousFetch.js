import { getTimestamp } from "../helpers/getTimestamp.js";

const log = document.querySelector('#log');

export function asynchronousFetch(){
        // Skapar ett nytt <p> element, med en text och lägger in det på sidan.
        const firstP = document.createElement('p');
        firstP.textContent = `[${getTimestamp()}] Skickar request...`;
        log.appendChild(firstP);
    
        // fetch är en asynkron funktion. Den returnar alltid en promise. Vi anropar den och går vidare.
        const response = fetch('http://localhost:5050/');
    
        // Här säger vi att responsen är klar. Lägg märket till att responsen är en Promise, och inte den faktiska responsen.
        // Detta är eftersom att vi inte väntar på att fetchen ska bli klar, utan vi går direkt vidare.
        const secondP = document.createElement('p');
        secondP.innerHTML = `[${getTimestamp()}] Min uppgift är att visa dig svaret vi fick av requesten. Jag väntade inte på svaret, så jag fick bara ett promise. <br><b>Varsågod: ${response}</b>`;
        log.appendChild(secondP);
    
        // Eftersom att fetchen är asynkron, kommer inte JS att vänta innan den skriver ut detta
        const thirdP = document.createElement('p');
        thirdP.innerHTML = `[${getTimestamp()}] Min uppgift var att skriva hej, Jag väntade inte på svaret: <br><b>Varsågod: Hej</b>`;
        log.appendChild(thirdP)
}