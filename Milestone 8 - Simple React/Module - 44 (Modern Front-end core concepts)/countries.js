const loadCountires = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data =>displayCountries(data))
}

const displayCountries = (countries) =>{
  console.log(countries);
  const addCountriesHTML = countries.map(country => getCountryHTML(country))
  console.log(addCountriesHTML[0]);
  const container = document.getElementById('countries');
  container.innerHTML = addCountriesHTML.join(' ');
}
const getCountryHTML = country =>{
  return `
    <div class ="countries">
       <h2>${country.name.common}</h2>
       <img src="${country.flags.png}">
    </div>
  `
} 
loadCountires();