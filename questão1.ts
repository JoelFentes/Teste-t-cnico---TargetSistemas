//Resolução da Questão 1 em Typescript

function fibonacciSequence(n: number): number[] {
  const fibSequence: number[] = [0, 1];
  
  while (true) {
      const nextValue = fibSequence[fibSequence.length - 1] + fibSequence[fibSequence.length - 2];
      if (nextValue > n) break;
      fibSequence.push(nextValue);
  }
  
  return fibSequence;
}

function isFibonacciNumber(number: number): string {
  if (number < 0) {
      return `O número ${number} não pertence à sequência de Fibonacci.`;
  }
  
  const fibSequence = fibonacciSequence(number);
  
  return fibSequence.includes(number) 
      ? `O número ${number} pertence à sequência de Fibonacci.` 
      : `O número ${number} não pertence à sequência de Fibonacci.`;
}

// Exemplo de uso:
const test = 34;
console.log(isFibonacciNumber(test)); 

const test2 = 22;
console.log(isFibonacciNumber(test2));
