document.cookie = `longLivingCookie=I'm Immortal!;`;

fetch('http://localhost:5050', {
    credentials: 'include'
});