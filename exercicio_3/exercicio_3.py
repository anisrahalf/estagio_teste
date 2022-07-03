import json
jsonFile = open('estagio\exercicio_3\dados.json')
dados = json.load(jsonFile)
print(dados)

maior_valor = 0
menor_valor = 0
variavel = 0
media = 0
soma = 0

for dia in dados:
    if(dia['valor']) != 0:
        variavel = dia['valor']

        if (variavel > maior_valor):
            maior_valor = variavel

        if (menor_valor == 0):
            menor_valor = variavel
        elif (variavel < menor_valor):
            menor_valor = variavel
        
        soma += dia['valor']

print('O maior faturamento do mês foi: R$ ' + str(maior_valor))
print('O menor faturamento do mês foi: R$ ' + str(menor_valor))

media = soma / len(dados)
faturamento = ''
for i in dados:
    if(i['valor']) != 0:
        if (i['valor']) > media:
           faturamento += (str(i['dia']) + ' ')
print('Os dias em que o faturamento foram maior que a média: ' + faturamento)