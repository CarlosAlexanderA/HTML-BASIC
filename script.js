const add7 = num => num+7;

console.log(add7(5))

const multiply = (x,y) => x*y;
console.log(multiply(2,8));

const capitalize = phrase => {
    let lower = phrase.toLowerCase();
    return lower.replace(lower[0],lower[0].toUpperCase())
}

console.log(capitalize("Como funciona Una Cadena"));

const lastLetter = word => word.slice(-1)

console.log(lastLetter("cual es*"))


