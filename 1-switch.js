// Understanding how switch works
// If we don't use a break, all the cases will be executed.

function whichFruit(idFruit){
    let fruit;
    switch(idFruit){
        case 0:
            fruit='banana';
            break;
        case 1:
            fruit='apple';
            break;
        case 2:
            fruit='orange';
        case 3:
            fruit='strawberry'; 
                       
    }
    return fruit;
}

console.log(whichFruit(0)); //output is banana if there is a break
console.log(whichFruit(1));
console.log(whichFruit(2)); //output is strawberry if no break
console.log(whichFruit(3));

