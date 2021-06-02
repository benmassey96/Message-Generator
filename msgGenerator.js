//The following are arrays in which the different random values will come from

const countries = ['England', 'Italy', 'France'];
const capitals = ['London', 'Rome', 'Paris'];
const leaders = ['Boris Johnson', 'Sergio Mattarella', 'Emmanuel Macron'];

//Select a random index 
let randomCountry = Math.floor(Math.random() * countries.length);
let randomCapital = Math.floor(Math.random() * capitals.length);
let randomLeader = Math.floor(Math.random() * leaders.length);
let country;
let capital;
let leader;


switch (randomCountry) {
    case 0:
        country = 'England';
        break;
    case 1:
        country = 'Italy';
        break;
    case 2:
        country = 'France';
};

switch (randomCapital) {
    case 0:
        capital = 'London';
        break;
    case 1:
        capital = 'Rome';
        break;
    case 2:
        capital = 'Paris';
        break;
};

switch (randomLeader) {
    case 0:
        leader = 'Boris Johnson';
        break;
    case 1:
        leader = 'Sergio Mattarella';
        break;
    case 2:
        leader = 'Emmanuel Macron';
        break;
}

//Testing arrays print to console
//console.log(countries);
//console.log(capitals);
//console.log(leaders);

//Testing random indices from arrays
//console.log(randomCountry);
console.log(country);
//console.log(randomCapital);
console.log(capital);
//console.log(randomLeader);
console.log(leader);