//Header Section 
const header = document.querySelector('header');
const title = header.querySelector('.title');

setTimeout(() => {
    title.classList.add('show-title');
}, 1000);


//Footer Section 
const footer = document.querySelector('footer');
const contactBtn = footer.querySelector('#contact');
const privacyBtn = document.querySelector('#privacy-policy');

contactBtn.addEventListener('click', () => {
    alert('Contattaci qui: esempio@liceojuvarravenaria.it');
});

const message = `Dal sitoweb non viene richiesto alcun consenso sull'utilizzo di dati da parte dell'utente, essendo essi irrilevanti per l'esperienza dell'utente stesso.`;

privacyBtn.addEventListener('click', () => {
    alert(message);
})