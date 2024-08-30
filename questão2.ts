//Resolução da Questão 2 em Typescript

function verifyLetterA(str:string) {
    let count = 0;

    for (let i of str) {
        if (i === 'a' || i === 'A'){
            count++
        }
    }

    return count > 0 
    ? `A letra 'a' ocorre ${count} vez(es) na string.`
    : "A letra 'a' não foi encontrada na string.";

}

let str = "Alex";
console.log(verifyLetterA(str));