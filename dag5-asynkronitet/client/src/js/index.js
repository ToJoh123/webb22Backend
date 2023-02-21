const button = document.querySelector('button');
const statusCodeH2 = document.querySelector('#statusCode');
const responseBodyH2 = document.querySelector('#responseBody');


// button.addEventListener('click', async () => {
//     // Skickar en GET request till servern, väntar på svaret via "await".
//     const response = await fetch('http://localhost:5050/');
//     // Bearbetar response bodyn. Väntar på svaret via "await".
//     // Vi vet att servern skickade text, så vi använder .text(). Hade det varit JSON, hade vi istället använt .json();
//     const body = await response.text();

//     statusCodeH2.textContent = response.status;
//     responseBodyH2.textContent = body;

//     console.log('Klart!');
// });

button.addEventListener('click',() => {
    console.log('Funktionen börjar!');

    // Vi låter fetchen ske asynkront, som den vanligtvis gör.
    // Däremot så ger vi ytterliggare instruktioner som ska göras när fetchen är klar, via .then().
    // Hela denna kedja är asynkron i relation till resten av funktionen.
    fetch('http://localhost:5050/')
        .then((response) => {
            statusCodeH2.textContent = response.status;
            return response.text();
        })
        .then((body) => {
            responseBodyH2.textContent = body;
        });
    
    console.log('Klart!');
});
