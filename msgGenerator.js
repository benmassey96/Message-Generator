//The following are arrays in which the different random values will come from
const arrays = {
    'countries' : ['England', 'Italy', 'France', 'Germany', 'Russia', 'Spain', 'The Netherlands', 'Switzerland', 'Hungary'],
    'capitals' : ['London', 'Rome', 'Paris', 'Berlin', 'Moscow', 'Madrid', 'Amsterdam', 'Zurich', 'Budapest'],
    'leaders' : ['Boris Johnson', 'Sergio Mattarella', 'Emmanuel Macron', 'Frank-Walter Steinmeier', 'Vladimir Putin', 'Pedro Sanchez', 'Mark Rutte', 'Guy Parmelin', 'Janos Ader'],

    //Select a random index 
    randomSelection(arr){
        return this[arr][Math.floor(Math.random() * arr.length)];
        }
};

function randomMsg() { 
    return `${arrays.randomSelection('capitals')} is the capital city of ${arrays.randomSelection('countries')}. The head of state there is ${arrays.randomSelection('leaders')}!`
};

console.log(randomMsg());