let accordions = document.getElementsByClassName("accordion");

for (let i = 0; i < accordions.length; i++) {
  accordions[i].addEventListener("click", function () {
    this.classList.toggle("active"); // Ajoute ou supprime la classe 'active' pour changer l'apparence de l'accordéon

    let panel = this.nextElementSibling;

    console.log(panel);
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null; // Ferme l'accordéon si déjà ouvert
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px"; // Ouvre l'accordéon en ajustant la hauteur maximale
    }
  });
}
