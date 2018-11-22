/* 
// WRITE YOUR JAVASCRIPT BELOW THIS COMMENT 

Your name :     
Date :  
Contact information : 

What does this script do ? 
...

*/

// Your scripting goes here...

//création de la div qui contiendra le graph et l'insert dans le HTML:
let divGraphique1 = document.createElement("div");
let x = document.getElementById("mw-content-text");
let table1 = document.getElementById("table1");
x.insertBefore(divGraphique1,table1);
divGraphique1.setAttribute("id","divTable1");

//récupération des donnees et création d'un tableau:
//source des donnees de table1m
let tbody = table1.getElementsByTagName("tbody");
let tr = tbody[0].getElementsByTagName("tr");
//tableau de donnees:
let donnees=[];
let fonctionTableau=()=>{
    for (i=1;i<tr.length;i++){
        let pays=[];
        let th = tr[i].getElementsByTagName("th");
        let div = th[0].getElementsByTagName("div");
        let number = div[0].innerHTML;
        pays.push(number);
        let td = tr[i].getElementsByTagName("td");
            for (y=0;y<td.length;y++){
                let contenu = td[y].innerHTML;
                pays.push(contenu);
            }
        donnees.push(pays);
    }
}
fonctionTableau();

//creer dimple
let svg = dimple.newSvg("#divTable1", 640, 600);

let data = [];
for (i=0;i<donnees.length;i++){
    for (let y=2002;y<2013;y++){
        let dataDetail = {"Année":y, "Infractions":donnees[i][y-2000], "Pays":donnees[i][1]};
        if(dataDetail.Infractions != ':'){
            data.push(dataDetail);
        }
    }
}

let chart = new dimple.chart(svg, data);
chart.addCategoryAxis("x", "Année");
chart.addMeasureAxis("y", "Infractions");
chart.addSeries("Pays", dimple.plot.line);
chart.addLegend(60, 40, 500, 120, "right");
chart.setBounds('20px', "150px", "80%", "70%"); 
chart.draw();








//////////////////////////////////
//////deuxieme tableau 2//////////
/////------------------//////////



let table2 = document.getElementById('table2');
let divGraphique2 = document.createElement("div");

divGraphique2.id="dimple2";
    
    table2.parentNode.insertBefore(divGraphique2,table2);
    
//récupération des donnees et création d'un tableau:
    //source des donnees de table2
        let tbody2 = table2.getElementsByTagName("tbody");
        let tr2 = tbody2[0].getElementsByTagName("tr");
    //tableau de donnees:
        let donnees2=[];
        let fonctionTableau2=()=>{
            for (i=1;i<tr2.length;i++){ //i=1 ne garde pas les donnees du n° de pays
                let pays=[];
                let th2 = tr2[i].getElementsByTagName("th");
                let div2 = th2[0].getElementsByTagName("div");
                let number2 = div2[0].innerHTML;
                pays.push(number2);
                let td2 = tr2[i].getElementsByTagName("td");
                    for (y=0;y<td2.length;y++){
                        let contenu2 = td2[y].innerHTML;
                        if(contenu2 != ":"){
                            pays.push(contenu2);
                        }
                    }
                donnees2.push(pays);
            }
        }
        fonctionTableau2();
        // console.log(donnees2);
        
//conception du graphique via dimple (attention ajout du script dimple dans l'HTML)
let svg2 = dimple.newSvg('#dimple2', 700, 650);
  
let data2 = [];
for (i=0;i<donnees2.length;i++){
  for (let y=2;y<4;y++){
    let dataContent2 = {"Année":y, "Population":donnees2[i][y], "Pays":donnees2[i][1]};
    if(dataContent2.Année == 2){
      dataContent2.Année = "2007-09";
    }else if (dataContent2.Année == 3){
      dataContent2.Année = "2010-12";
    }
    data2.push(dataContent2);
  }
}

let chart2 = new dimple.chart(svg2, data2);
chart2.addCategoryAxis("x", "Année");
chart2.addMeasureAxis("y", "Population");
chart2.addSeries("Pays", dimple.plot.bar);
chart2.addLegend(80, 10, 500, 120, "right");
chart2.setBounds('50px', "150px", "80%", "70%"); 
chart2.draw();


////////////

//////////   TABLEAU 3  ////////

/////////////////



//trouver et inserer avant h1
let divGraphique3 = document.createElement("div");
let content = document.getElementById("content");
let bodyC = document.getElementById("bodyContent");
content.insertBefore(divGraphique3,bodyC);
divGraphique3.setAttribute("id","divTable3");
//AJAX
let object = {};
let xhr = new XMLHttpRequest;
    //Call the open function, GET-type of request, url, true-asynchronous
    xhr.open('GET', 'https://inside.becode.org/api/v1/data/random.json', true)
    //call the onload 
    xhr.onload = function() 
        {
            //check if the status is 200(means everything is okay)
            if (this.status === 200) {
                    //return server response as an object with JSON.parse
                    object = JSON.parse(this.responseText);
                    
                    //creer dimple3
                    console.log(object[0][1]);
                    let svg3 = dimple.newSvg("#divTable3", 400, 200);
                    let data3 = [];
                    for (i=0;i<object.length;i++){
                        let dataDetail3 = {"x":object[i][0], "y":object[i][1], "Données": "données"};
                        data3.push(dataDetail3);
                    }

                    let chart3 = new dimple.chart(svg3, data3);
                    chart3.addCategoryAxis("x", "x");
                    chart3.addMeasureAxis("y", "y");
                    chart3.addSeries("Données", dimple.plot.line); 
                    chart3.draw();
            }
        }
    //call send
    xhr.send();

/*
// Récupération des tableaux
const table1 = document.getElementById('table1');
const table2 = document.getElementById('table2');

// Création de la div des graphiques
let createGraphic = (nom, cible) => {
    let div = document.createElement('div');
    div.id = nom;
    cible.insertAdjacentElement('beforebegin', div);
    
}
createGraphic('graph1', table1);

// // Insertion du premier graphique
let svg = dimple.newSvg("#graph1", 640, 480);
let data = [
  { "Année":"2002", "Nombre (en milliers)":1012.8, "Pays":"Belgique"},
  { "Année":"2003", "Nombre (en milliers)":1007.8,  "Pays":"Belgique"},
  { "Année":"2004", "Nombre (en milliers)":1013.7,  "Pays":"Belgique"},
  { "Année":"2005", "Nombre (en milliers)":999.4,   "Pays":"Belgique"},
  { "Année":"2006", "Nombre (en milliers)":1022.8,  "Pays":"Belgique"},
  { "Année":"2007", "Nombre (en milliers)":1034.4,  "Pays":"Belgique"},
  { "Année":"2008", "Nombre (en milliers)":1043.6,  "Pays":"Belgique"},
  { "Année":"2009", "Nombre (en milliers)":1067.3,  "Pays":"Belgique"},
  { "Année":"2010", "Nombre (en milliers)":1072.0, "Pays":"Belgique"},
  { "Année":"2011", "Nombre (en milliers)":1111.0, "Pays":"Belgique"},
  { "Année":"2012", "Nombre (en milliers)":1073.8, "Pays":"Belgique"},
  { "Année":"2002", "Nombre (en milliers)":146.9, "Pays":"Bulgarie"},
  { "Année":"2003", "Nombre (en milliers)":143.9, "Pays":"Bulgarie"},
  { "Année":"2004", "Nombre (en milliers)":142.1, "Pays":"Bulgarie"},
  { "Année":"2005", "Nombre (en milliers)":137.8,  "Pays":"Bulgarie"},
  { "Année":"2006", "Nombre (en milliers)":136.4, "Pays":"Bulgarie"},
  { "Année":"2007", "Nombre (en milliers)":134.7, "Pays":"Bulgarie"},
  { "Année":"2008", "Nombre (en milliers)":126.7, "Pays":"Bulgarie"},
  { "Année":"2009", "Nombre (en milliers)":138.1, "Pays":"Bulgarie"},
  { "Année":"2010", "Nombre (en milliers)":147.0, "Pays":"Bulgarie"},
  { "Année":"2011", "Nombre (en milliers)":128.6, "Pays":"Bulgarie"},
  { "Année":"2012", "Nombre (en milliers)":120.6, "Pays":"Bulgarie"},
];
var chart = new dimple.chart(svg, data);
chart.addCategoryAxis("x", "Année");
chart.addMeasureAxis("y", "Nombre (en milliers)");
chart.addSeries("Pays", dimple.plot.line);
chart.addLegend(60, 10, 500, 20, "Belgique");
chart.draw();


///////////////
//////////////
//////////////
//////////////
/////////////
*/
/*
let table = document.querySelectorAll('tbody');  console.log(table);
let table1 = table[0];   console.log(table1);
let tr = table1.querySelectorAll('tr'); console.log(tr);
let td = table1.querySelectorAll('td:nth-child(2)'); console.log(td);
let tableall = table1.querySelectorAll('tr');
let pays = [];


///PAYS

console.log(tableall[1].querySelectorAll('td:nth-child(2)'));
// console.log(tableall[35].querySelectorAll('td:nth-child(2)'));


for (let i = 1; i < 35; i++) {
  pays.push(tr[i].querySelectorAll('td')[0].innerHTML)
} console.log(pays);

console.log(tr[35].querySelectorAll('td')[0].innerHTML);


let année = [];
for (let i = 0; i < 1; i++) {
  année.push(tr[i].innerText); 
} console.log(année);


let nombrebelgique = [];
for (let i = 0; i < 1; i++) {
  nombrebelgique.push(tr[i].innerText);
} console.log(nombrebelgique);

*/