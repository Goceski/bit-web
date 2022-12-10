// Exercise 1
var coffee = {
    brand: 'Nescafe',
    strength: 'strong',
    milk: 'yes',
    sugar: 'yes'
};

console.log(coffee);


// Exercise 2
var movie = {
    title: '2001: A Space Odyssey',
    genre: 'SF',
    director: 'Stanley Kubrick',
    cast: {
        actor1: 'Keir Dullea as Dr. David Bowman',
        actor2: 'Gary Lockwood as Dr. Frank Poole',
        actor3: 'William Sylvester as Dr. Heywood Floyd',
    }
};

console.log(movie.cast);
console.log(movie);


// Exercise 3
function project(description, language, git, develop) {
    var a = new Object(); // Object() constructor function
    a.description = description;
    a['programming language'] = language;
    a['git repository'] = git;
    a['in development'] = develop;
    a.printRepository = function print() {console.log('Repository:', git);};
    a.printLanguage = function print() {console.log('Programming language:', language);};
    a.prindStatus = function print() {console.log('In development:', develop);};
    return a;
}

var project1 = project('New project', 'javascript', 'https://...', true);
console.log(project1);
project1.printRepository();
project1.printLanguage();
project1.prindStatus();


// Exercise 4
