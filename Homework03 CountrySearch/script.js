// CountrySearch 🌍🌎🌏
// CountrySearch is an application that is meant to search for countries and get data for them in real - time.The application is very simple.It only has one functionality: Search and show the countries in a table

// Requirements
// There should be one search input to input the name or partial name of a country
// There should be a button for search to initiate
// When the button is clicked, a table shows the possible answers
// The table shows:
// Flag
// Name
// Population
// Capital
// Area
// The API for countries is: https://restcountries.com/
// Read the API documentation to figure out how to call for the countries
// Extra requirements
// List language names and currency names in the table as well (only names and divided by, EX: Spanish, English )
// Add loading image while it is getting the data
// Add a filter by name, area, and population in descending order
// Add a filter by name, area, and population in ascending order

function createTableHeader(table) {
    let array = ["Flag", "Name", "Population", "Capital", "Area", "Languages", "Currency"];
    let tr = document.createElement("tr");
    for (let item of array) {
        let th = document.createElement("th");
        tr.appendChild(th).innerText = item;
    }
    table.appendChild(tr);
}


function createTableBody(countries, table) {
    for (let country of countries) {

        let tr = document.createElement("tr");

        let flag = '';
        if (!country.flag) {
            flag = "None"
        } else {
            flag = country.flags.svg;
        }
        let flagCol = document.createElement("td");
        let img = document.createElement("img");
        img.setAttribute("src", flag);
        img.style.width = '60px'
        img.style.height = 'auto'
        img.style.margin = "5px"
        flagCol.appendChild(img);
        tr.appendChild(flagCol);


        let nameCommon = '';
        if (!country.name.common) {
            nameCommon = "None"
        } else {
            nameCommon = country.name.common;
        }

        let nameCol = document.createElement("td");
        tr.appendChild(nameCol).innerText = nameCommon;


        let population = '';
        if (!country.population) {
            population = "None"
        } else {
            population = country.population;
        }
        let populationCol = document.createElement("td");
        tr.appendChild(populationCol).innerText = population;


        let capital = '';
        if (!country.capital) {
            capital = "None"
        } else {
            capital = country.capital;
        }
        let capitalCol = document.createElement("td");
        tr.appendChild(capitalCol).innerText = capital;


        let area = '';
        if (!country.area) {
            area = "None"
        } else {
            area = country.area;
        }
        let areaCol = document.createElement("td");
        tr.appendChild(areaCol).innerText = area;

        let languages = "";
        if (!country.languages) {
            languages = "None"
        } else {
            let languageKeys = Object.values(country.languages);
            for (let i = 0; i < languageKeys.length; i++) {
                i === languageKeys.length - 1 ? languages += languageKeys[i] : languages += languageKeys[i] + ',\r\n';
            }
        }
        let languagesCol = document.createElement("td");
        tr.appendChild(languagesCol).innerText = languages;


        let currencies = '';
        if (!country.currencies) {
            currencies = 'None'
        } else {
            let currencyKeys = Object.values(country.currencies);
            for (let i = 0; i < currencyKeys.length; i++) {
                i === currencyKeys.length - 1 ? currencies += currencyKeys[i].name : currencies += currencyKeys[i].name + ',\r\n';
            }
        }
        let currencyCol = document.createElement("td");
        tr.appendChild(currencyCol).innerText = currencies;


        table.appendChild(tr);
    }
}

function createTable(data) {
    let div = document.getElementById("divTable");
    let table = document.createElement("table");
    table.style.margin = "0 auto";
    table.setAttribute("border", "2");
    div.appendChild(table);

    createTableHeader(table)
    createTableBody(data, table);

}


let navigationService = {
    btnSearch: document.getElementById("btn"),
    userInput: document.getElementById("searchCountry"),


    countryEvents: function () {

        this.btnSearch.addEventListener("click", () => {
            apiService.getCountry(this.userInput.value);
        })
    }
}

let apiService = {
    getCountry: function (name) {
        document.getElementById("divTable").innerHTML = "";
        let countryUrl = `https://restcountries.com/v3.1/name/${name}`;
        let loader = document.getElementById("imgLoader");
        loader.style.display = "block";
        fetch(countryUrl)
            .then(function (response) {
                return response.json();
            }).then(function (data) {
                loader.style.display = "none";
                if (data.length > 0) {
                    let sortedData = restructureData(data);
                    createTable(sortedData);
                } else {
                    document.getElementById("divTable").innerHTML = "<h3>No Results Found!</h3>";
                }
            }).catch(function (error) {
                console.log(error)
            });
    },

}


navigationService.countryEvents();


//SLIDER & DROP-DOWN MENU
let minSlider = document.getElementById("min");
let maxSlider = document.getElementById("max");
let outputMin = document.getElementById("min-value");
let outputMax = document.getElementById("max-value");

outputMin.innerText = minSlider.value;
outputMax.innerHTML = maxSlider.value;

minSlider.oninput = function () {
    outputMin.innerHTML = this.value;
}

maxSlider.oninput = function () {
    outputMax.innerHTML = this.value;
}


function restructureData(data) {
    let userInput = document.getElementById("order").value;
    let minArea = document.getElementById("min-value").innerText;
    let maxArea = document.getElementById("max-value").innerText

    var filteredData = data.filter(item => (item.area > minArea && item.area < maxArea));
    return userInput === "ascending" ? filteredData.sort((a, b) => a.name.common.localeCompare(b.name.common)) :
        userInput === "descending" ? filteredData.sort((a, b) => b.name.common.localeCompare(a.name.common)) : filteredData;
}


