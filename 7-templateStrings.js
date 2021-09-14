// When we want to concatenate something in JavaScript we need to use the symbol +. We can break a String and consider all the empty spaces. If you want to consider the blank spaces we can use template strings.

const sentence="Hello";
console.log(sentence + " Daniela");

const sentence2=`Hello
 Daniela`;
console.log(sentence2)

// Template strings consider the break of lines

console.log(`
1) Eat
2) Pray
3) Love`)