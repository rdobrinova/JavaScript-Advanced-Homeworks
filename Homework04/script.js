//With Async-Await
getBorderingCountries = async countryName => {
    try {
        let response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
        let data;
        if (response.ok) {
            data = await response.json();
        } else {
            throw new Error(`Error ${response.status} - ${response.statusText}`)
        }
        data.forEach(country => {
            console.log(`${country.name.common}'s borders:`)
            country.borders.forEach(borderingCountryCode => getCodeCountries(borderingCountryCode))
        });
    } catch (error) {
        console.log(error);
    }
}

getCodeCountries = async countryCode => {
    try {
        let response = await fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`);
        let data = await response.json();
        data.forEach(country => console.log(country.name.common))
    } catch (error) {
        console.log(error);
    }
}

// getBorderingCountries(prompt("Enter Country:"));

// With Callback
function getBorderingCountriesWithCallback(countryName, callback) {
    fetch(`https://restcountries.com/v3.1/name/${countryName}`)
        .then(res => {
            if (res.ok)
                return res.json()
            throw new Error(`Error ${res.status} - ${res.statusText}`)
        })
        .then(data => {

            data.forEach(country => {
                console.log(`${country.name.common}'s borders:`);


                country.borders.forEach(countryCode => callback(countryCode))
            })
        })
        .catch(err => console.log(err));
}


function getCodeCountriesWithCallback(countryCode) {
    fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`)
        .then(function (response) {
            let data = response.json();
            return data;
        }).then(function (data) {
            data.forEach(country => {
                console.log(country.name.common);
            })
        }).catch(function (error) {
            console.log(error);
        });
}

// getBorderingCountriesWithCallback(prompt("Enter Country:"), getCodeCountriesWithCallback);


//With Promise
function getBorderingCountriesWithPromise(countryName) {
    fetch(`https://restcountries.com/v3.1/name/${countryName}`)
        .then(res => {
            if (res.ok)
                return res.json()
            throw new Error(`Error ${res.status} - ${res.statusText}`)
        })
        .then(data => {

            data.forEach(country => {
                console.log(`${country.name.common}'s borders:`)
                country.borders.forEach(borderingCountryCode =>
                    getCodeCountriesWithPromise(borderingCountryCode)
                        .then(country => console.log(country[0].name.common))
                )
            })
        })
        .catch(err => console.log(err))
}


function getCodeCountriesWithPromise(countryCode) {
    return new Promise((res, rej) => {
        fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`)
            .then(response => response.json())
            .then(data => {
                res(data);
            })
            .catch(err => rej(err))
    })
}

// getBorderingCountriesWithPromise(prompt("Enter Country:"));

