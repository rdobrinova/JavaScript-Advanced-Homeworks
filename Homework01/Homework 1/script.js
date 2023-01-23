// Homework 1
// Task 1
// Create an html page with a table and a button.When the button is clicked show results for the first 10 planets from the Star Wars api.The information in the table are:
// Planet Name
// Population
// Climate
// Gravity
// There should be a function that makes the call to the api for the planets(should have URL for a parameter ) There should be a function that prints planets in to the table ** API URL: ** https://swapi.dev/api/planets/?page=1

// Task 2
// After the user clicks the button to get the first 10 planets, a button should be shown below the table that says: NEXT 10. When the button is clicked you should make another call and get the next 10 planets and change the table contents with information about the next 10 planets.After the next 10 planets are shown the button NEXT 10 should disapear and a new button PREVIOUS 10 should appear.The previous button should return the first 10 planets in the table and hide the PREVIOUS 10 button and show the NEXT 10 button.
// ** API URL: ** https://swapi.dev/api/planets/?page=2

function fetchFnc(url) {
    fetch(url).then(function (response) {
        console.log(response);
        let data = response.json();
        return data;
    }).then(function (data) {
        console.log(data);
        createTable(data.results);
    }).catch(function (error) {
        console.log(error);
    });
}


function createTableHeader(table) {
    let array = ["Planet Name", "Population", "Climate", "Gravity"];
    let tr = document.createElement("tr");
    for (let item of array) {
        let th = document.createElement("th");
        tr.appendChild(th).innerText = item;
    }
    table.appendChild(tr);
}



function createTableBody(planets, table) {
    for (let planet of planets) {

        let tr = document.createElement("tr");

        let nameCol = document.createElement("td");
        tr.appendChild(nameCol).innerText = planet.name;

        let populationCol = document.createElement("td");
        tr.appendChild(populationCol).innerText = planet.population;

        let climateCol = document.createElement("td");
        tr.appendChild(climateCol).innerText = planet.climate;

        let gravityCol = document.createElement("td");
        tr.appendChild(gravityCol).innerText = planet.gravity;


        table.appendChild(tr);
    }
}


function createTable(data) {
    let div = document.getElementById("div");
    let table = document.createElement("table");
    table.setAttribute("border", "2");
    div.appendChild(table);

    createTableHeader(table)
    createTableBody(data, table);

}
let pageNumber = 1;
let url = "https://swapi.dev/api/planets/?page=";
let button = document.getElementById("btn")
let prev = document.getElementById("prev");
let next = document.getElementById("next");
let tableWrapper = document.getElementById("div");

button.addEventListener("click", () => {
    fetchFnc(`${url}${pageNumber}`);
    button.style.display = "none";
    next.style.display = "block";
});

next.addEventListener("click", () => {
    tableWrapper.innerHTML = "";
    fetchFnc(`${url}${++pageNumber}`);
    next.style.display = "none";
    prev.style.display = "block";
});

prev.addEventListener("click", () => {
    tableWrapper.innerHTML = "";
    fetchFnc(`${url}${--pageNumber}`);
    next.style.display = "block";
    prev.style.display = "none";
});

