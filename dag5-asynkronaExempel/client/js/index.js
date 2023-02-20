debugger;
const button = document.querySelector('button');

//Demonstrerar event-driven architecture.

console.log('Starting program');

// Lägger till en lysnare efter ett event, och går direkt vidare.
button.addEventListener('click', () => {
    alert('Button was clicked');
});

console.log('Finished program');