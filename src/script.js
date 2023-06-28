/* Création de la fonction */
import Livre from "./Livre";

const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Empêcher le rechargement de la page

    const nomInput = document.querySelector('#nom-input');
    const imageInput = document.querySelector('#image-input');
    const auteurInput = document.querySelector('#auteur-input');

    const nom = nomInput.value;
    const auteur = auteurInput.value;
    const image = imageInput.value;

    const newLivre = new Livre(nom, auteur, image);
    const livreElement = newLivre.createLivreElement();


    const container = document.querySelector('.row');
    container.appendChild(livreElement);

});