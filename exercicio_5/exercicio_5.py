palavra = input("Digite uma palavra:")
char = []
contrario = ''
for letra in palavra:
    char.append(letra)
tamanho = len(char) - 1
while tamanho >= 0:
    contrario += (char[tamanho])
    tamanho -= 1

print("Sua palavra invertida: ")
print(contrario)