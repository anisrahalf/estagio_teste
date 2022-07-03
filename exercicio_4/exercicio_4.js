// exercicio 4

let sp = 67836.43;
let rj = 36678.66;
let mg = 29229.88;
let es = 27165.78;
let outros = 19849.53;
let somaGeral = sp + rj + mg + es + outros;
console.log(somaGeral)

function porcentagem(estado, somaGeral) {
    return Math.round(((100*estado)/somaGeral),2)
}

console.log('Porcentagem do faturamento de SP:' + JSON.stringify(porcentagem(sp, somaGeral)) + '%')
console.log('Porcentagem do faturamento de RJ:' + JSON.stringify(porcentagem(rj, somaGeral)) + '%')
console.log('Porcentagem do faturamento de MG:' + JSON.stringify(porcentagem(mg, somaGeral)) + '%')
console.log('Porcentagem do faturamento de ES:' + JSON.stringify(porcentagem(es, somaGeral)) + '%')
console.log('Porcentagem de outros faturamentos:' + JSON.stringify(porcentagem(outros, somaGeral)) + '%')