//The following are arrays in which the different random values will come from

const countries = ['England', 'Italy', 'France'];
const capitals = ['London', 'Rome', 'Paris'];
const leaders = ['Boris Johnson', 'Sergio Mattarella', 'Emmanuel Macron'];

let randomCountry = Math.floor(Math.random() * countries.length);
let randomCapital = Math.floor(Math.random() * capitals.length);
let randomLeader = Math.floor(Math.random() * leaders.length);

//Testing arrays print to console
console.log(countries);
console.log(capitals);
console.log(leaders);

//Testing random indecies from arrays
console.log(randomCountry);
console.log(randomCapital);
console.log(randomLeader);