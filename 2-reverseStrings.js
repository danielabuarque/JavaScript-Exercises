// Let's do a function to reverse a string

function reverseString(word){
    const arr=word.split("");
    const reversed=arr.reverse();
    const reversedWord=reversed.join("");
    return console.log(reversedWord);
}

reverseString("Daniela");