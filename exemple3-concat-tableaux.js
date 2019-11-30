//concaténer deux tableaux
var methodeDeDeveloppement = ['TDD', 'BDD'];
var langages = ['C#', 'T-SQL', 'Javascript'];

var searchKeyWords = [...methodeDeDeveloppement, ...langages];

console.log(searchKeyWords);//[ 'TDD', 'BDD', 'C#', 'T-SQL', 'Javascript' ]