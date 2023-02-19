import { getTimestamp } from "../helpers/getTimestamp.js";

const body = document.querySelector('body');

export async function synchronousFetch(){
        // Skapar ett nytt <p> element, med en text och lägger in det på sidan.
        const firstP = document.createElement('p');
        firstP.textContent = `[${getTimestamp()}] Skickar request...`;
        body.appendChild(firstP);
    
        /**
         * Här använder vi fetch på ett synkront sätt. Fetch är asynkront, men genom att lägga keywordet "await" innan vi kallar på den, säger vi till JS att vänta på att den blir klar..
         * innan vi går vidare.
         * På det här sättet kan vi göra något asynkront, till något synkront.
        */

        // Jag väntar på att requesten är klar, jag får tillbaka ett respons objekt.
        const response = await fetch('http://localhost:5050/');

        // Lägg märket till att responsen här INTE är ett promise, eftersom vi har väntat på att responsen kommer tillbaka.
        const secondP = document.createElement('p');
        secondP.innerHTML = `[${getTimestamp()}] Min uppgift är att visa dig svaret vi fick av requesten. Eftersom att "await" använts, var jag tvungen att vänta. <br><b> Varsågod: ${response}</b>`;
        body.appendChild(secondP);
    

        /**
         * Den här stackarn var också tvungen att vänta, eftersom att den ligger efter "await".
         * Det här kodstycket är inte beroende "response" variabeln, och skulle egentligen inte behöva vänta.
         * Det hade varit lämpligare att använda oss utav .then() när vi gjorde async anropet, istället för "await"
         */
        const thirdP = document.createElement('p');
        thirdP.innerHTML = `[${getTimestamp()}] Min uppgift var att skriva hej. Eftersom att "await" använts, var jag tvungen att vänta. <br><b> Hej</b>`;
        body.appendChild(thirdP)
}