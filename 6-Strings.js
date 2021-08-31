const nome="Daniela";

console.log(nome.charAt(4));
console.log(nome.charAt(6));
console.log(nome.substring(1));
console.log(nome.substring(1,4));
console.log(nome.replace("a","u")); //Changing only the first a
console.log(nome.replace(/a/g,"u")); //Changing all a's

// When we want to change just one word or one letter We use variable.replace("old word or old letter","new word or new letter"). But imagine that you want to change more than one occurrence. What should we do on that case? We need to inform the changes will be global. For that we use /g. When we use global representation we don't use double or single quotes. To do that we use variable.replace(/word/g,"u");
// To get all ocurrences, even if it is uppercase or lowercase we use gi instead of g.

const nome2="AAbbaa";
console.log(nome2.replace(/A/gi,"C")); //Considers uppercase and lowercase a

