//The following are arrays in which the different random values will come from
const arrays = {
    'countries' : ['England', 'Italy', 'France'],
    'capitals' : ['London', 'Rome', 'Paris'],
    'leaders' : ['Boris Johnson', 'Sergio Mattarella', 'Emmanuel Macron'],
};

//Select a random index 
const random = {
    'randomCountry' : Math.floor(Math.random() * arrays['countries'].length),
    'randomCapital' : Math.floor(Math.random() * arrays['countries'].length),
    'randomLeader' : Math.floor(Math.random() * arrays['leaders'].length)
};

//Individuals
let country;
let capital;
let leader;

//Switch statements to define each index
switch (random['randomCountry']) {
    case 0:
        country = 'England';
        break;
    case 1:
        country = 'Italy';
        break;
    case 2:
        country = 'France';
};

switch (random['randomCapital']) {
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

switch (random['randomLeader']) {
    case 0:
        leader = 'Boris Johnson';
        break;
    case 1:
        leader = 'Sergio Mattarella';
        break;
    case 2:
        leader = 'Emmanuel Macron';
        break;
};

//Calling the function
function randomMsg() { 
    return `${capital} is the capital city of ${country}. The head of state there is ${leader}!`
};

console.log(randomMsg());
//randomMsg();