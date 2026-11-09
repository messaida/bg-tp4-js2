"use strict"; // mode strict (slide 52)

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