// Création de la class Livre et des propriété
class Livre{
    constructor(nom, auteur, image) {
        this.nom = nom;
        this.auteur = auteur;
        this.image = image;
    }

    createLivreElement() {


        const livreElement = document.createElement("div");
        livreElement.classList.add("col-md-3")


        livreElement.innerHTML =`<div class="card " style="width: 15rem;">
      <img src="${this.image}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${this.nom}</h5>
        <p class="card-text">${this.auteur}</p>
        </div>

    </div>`



        return livreElement;
    }
}

export default Livre;

