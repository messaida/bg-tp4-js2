"use strict"; // mode strict (slide 52)

// compteur du nombre de lignes insérées, il sert à remplir la colonne N° (slides 38 et 51)
let lignes = 0;

// total des points de toutes les lignes du tableau (slides 38 et 51)
let total_points = 0;

// le tableau d'objets qui contient les personnes (slides 40 et 41)
let persons = [
    { nom: "nom-1", prenom: "prenom-1", points: 5 },
    { nom: "nom-2", prenom: "prenom-2", points: 10 },
    { nom: "nom-3", prenom: "prenom-3", points: 15 }
];

// j'appelle init() : elle remplit le tableau au chargement de la page
init();

// init parcourt persons et appelle doInsert pour chaque personne
function init() {
    // boucle for..of (slide 45)
    for (const person of persons) {
        doInsert(person.nom, person.prenom, person.points); // accès aux propriétés (slide 40)
    }
}

// doInsert compte la ligne puis appelle doInsertRowTable (fonctions : slide 46)
function doInsert(nom, prenom, points) {
    lignes = lignes + 1; // une ligne de plus (slide 42)
    total_points = total_points + points; // j'ajoute les points au total
    doInsertRowTable(lignes, nom, prenom, points); // lignes devient le numéro de la ligne
    update_summary(); // je mets à jour l'espace résumé
}
// met à jour l'espace résumé sous le tableau
function update_summary() {
    // je récupère les paragraphes p1 et p3 par leur id (slides 15 et 61)
    const element_lignes = document.getElementById("p1");
    const element_points = document.getElementById("p3");

    // innerText change le texte affiché (slides 35 et 91), backticks pour mélanger texte et variables (slide 38)
    element_lignes.innerText = `${lignes} ligne(s)`;
    element_points.innerText = `Total point(s)= ${total_points}`;
}

// affiche tout le tableau persons dans la console (slide 34)
function consoleTableau() {
    console.log(persons);
}

// Insère une ligne à la fin du tableau
function doInsertRowTable(num, nom, prenom, points) {
    // je récupère le tableau avec un sélecteur CSS (slide 76 : même principe que querySelectorAll)
    const table = document.querySelector("table");

    // je crée la ligne (tr) avec createElement (slide 104) et je lui donne la classe "row" avec setAttribute (slide 107)
    const row = document.createElement("tr");
    row.setAttribute("class", "row");

    // je crée les 5 colonnes (td)
    const col1 = document.createElement("td");
    const col2 = document.createElement("td");
    const col3 = document.createElement("td");
    const col4 = document.createElement("td");
    const col5 = document.createElement("td");

    // je remplis le contenu des 4 premières colonnes avec innerText (slides 35 et 91)
    col1.innerText = num;
    col2.innerText = nom;
    col3.innerText = prenom;
    col4.innerText = points;

    // la dernière colonne contient une checkbox : un input de type checkbox
    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    col5.append(checkbox);

    // les classes de chaque colonne, pour le style CSS
    col1.setAttribute("class", "col_number");
    col2.setAttribute("class", "col_text");
    col3.setAttribute("class", "col_text");
    col4.setAttribute("class", "col_number");
    col5.setAttribute("class", "col_chkbox");

    // j'ajoute les colonnes à la ligne, puis la ligne au tableau avec append (slide 98)
    row.append(col1, col2, col3, col4, col5);
    table.append(row);
}
// lit le formulaire, ajoute la personne dans le tableau HTML et dans persons
function doNewData() {
    // je récupère les 3 champs de saisie par leur id (slides 15 et 61)
    const elt_nom = document.getElementById("form_nom");
    const elt_prenom = document.getElementById("form_prenom");
    const elt_points = document.getElementById("form_points");

    // value : propriété de l'élément, accessible directement par son nom (slide 93)
    const nom = elt_nom.value;
    const prenom = elt_prenom.value;
    // parseInt convertit le texte en entier (donné dans l'énoncé du TP)
    const points = parseInt(elt_points.value);

    // saisie contrôlée : aucun champ ne doit être vide (condition if : slide 43)
    // Number.isNaN(points) est vrai si les points sont vides (donné dans l'énoncé du TP), || : slide 42
    if (nom === "" || prenom === "" || Number.isNaN(points)) {
        alert("Formulaire incomplet !"); // alert (slides 35 et 116)
    } else {
        // j'insère la ligne dans le tableau HTML
        doInsert(nom, prenom, points);

        // j'ajoute aussi la personne dans le tableau persons (slide 39 : push)
        persons.push({ nom: nom, prenom: prenom, points: points });

        // je vide les champs pour la prochaine saisie
        elt_nom.value = "";
        elt_prenom.value = "";
        elt_points.value = "";
    }
}