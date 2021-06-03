//The following are arrays in which the different random values will come from
const arrays = {
    'countries' : ['England', 'Italy', 'France', 'Germany', 'Russia', 'Spain', 'The Netherlands', 'Switzerland', 'Hungary'],
    'capitals' : ['London', 'Rome', 'Paris', 'Berlin', 'Moscow', 'Madrid', 'Amsterdam', 'Zurich', 'Budapest'],
    'leaders' : ['Boris Johnson', 'Sergio Mattarella', 'Emmanuel Macron', 'Frank-Walter Steinmeier', 'Vladimir Putin', 'Pedro Sanchez', 'Mark Rutte', 'Guy Parmelin', 'Janos Ader'],
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
        break;
    case 3:
        country = 'Germany';
        break;
    case 4:
        country = 'Russia';
        break;
    case 5:
        country = 'Spain';
        break;
    case 6:
        country = 'The Netherlands';
        break;
    case 7:
        country = 'Switzerland';
        break;
    case 8:
        country = 'Hungary';
        break;
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
    case 3:
        capital = 'Berlin';
        break;
    case 4:
        capital = 'Moscow';
        break;
    case 5:
        capital = 'Madrid';
        break;
    case 6:
        capital = 'Amsterdam';
        break;
    case 7:
        capital = 'Zurich';
        break;
    case 8:
        capital = 'Budapest';
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
    case 3:
        leader = 'Frank-Walter Steinmeier';
        break;
    case 4:
        leader = 'Vladimir Putin';
        break;
    case 5:
        leader = 'Pedro Sanchez';
        break;
    case 6:
        leader = 'Mark Rutte';
        break;
    case 7:
        leader = 'Guy Parmelin';
        break;
    case 8:
        leader = 'Janos Ader';
};

//Calling the function
function randomMsg() { 
    return `${capital} is the capital city of ${country}. The head of state there is ${leader}!`
};

console.log(randomMsg());
//randomMsg();