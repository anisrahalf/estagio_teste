// exercício 2: 
let num1 = 0;
let num2 = 1;
let num3 = 0;
let numeroComparado = 20; // insira o número desejado aqui.
    while(numeroComparado > num3){
        num3 = num1 + num2;
        num1 = num2
        num2 = num3
    }
    if(numeroComparado == 0 || numeroComparado == 1) {
        console.log("O número está dentro da sequência de Fibonacci")
    } else if(numeroComparado == num3) {
        console.log("O número está dentro da sequência de Fibonacci")
    } else {
        console.log("O número não está dentro da Sequência de Fibonacci.")
    }
    