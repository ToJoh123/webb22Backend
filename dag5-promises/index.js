const promise = new Promise((resolve, reject) => {
    // Skapar ett random nummer mellan 0-1.
    const randomNumber = Math.random();

    // 2 sekunders timeout, sedan körs funktionen inuti.
    setTimeout(() => {
        if (randomNumber > 0.5) {
            // Resolve uppfyller promisen och skickar tillbaka information, i detta fall en array av filmer.
            resolve(['Braveheart', 'Troy', 'Die Hard']);
        } else {
            // Reject throwar ett error, och skickar tillbaka informationen. Detta ska catchas i en .catch() eller catch{}.
            reject('Unable to retrieve movies, sucks to be you');
        }
    }, 2000);
});


function getMovies(){
    return promise;
}

// // Vi kan använda oss av .then, .catch och .finally
getMovies()
    .then(res => console.log(res))
    .catch(error => console.log(error))
    .finally(() => console.log('KLART!'));


// // Eller await, wrappat i try{}.
try{
    const response = await getMovies();
    console.log(response);
} catch(error){
    console.log(error);
} finally{
    console.log('Jag är nu klar, ingen aning om det gick bra eller ej 🤷🏻‍♂️');
}


// Vi kan hantera errors som uppstår, även fast dem inte har att göra med promises eller asynkronitet.
try{
    // "throw" Gör så att ett error uppstår i Javascript
    // "new Error()" skapar ett nytt error objekt, den tar emot ett meddelande som läggs in i error objektet.
    // Error objektet innehåller värdefull info, framförallt call-stacken.
    throw new Error('Ett error uppstod');
} catch(error) {
    console.log(error)
}