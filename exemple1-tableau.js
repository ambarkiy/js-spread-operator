var langages = ['C#', 'T-SQL',];
var newLangage = 'Javascript';
var oldLangage = 'Cobol';

var cvSearchKeyWords = [oldLangage, ...langages, newLangage]

console.log(cvSearchKeyWords); // [ 'Cobol', 'C#', 'T-SQL', 'Javascript' ]