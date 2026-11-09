"use strict"; // mode strict (slide 52)

// compteur du nombre de lignes insérées, il sert à remplir la colonne N° (slides 38 et 51)
let lignes = 0;

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
    doInsertRowTable(lignes, nom, prenom, points); // lignes devient le numéro de la ligne
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