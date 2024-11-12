# Gerador de Números Aleatórios Não Repetidos

Este projeto contém um algoritmo em JavaScript que gera números aleatórios não repetidos dentro de um intervalo especificado (neste caso, de 1 a 60). O algoritmo garante que os números gerados sejam únicos utilizando um Set, uma estrutura de dados que não permite duplicatas.

## Descrição do Algoritmo

O algoritmo utiliza a função Math.random() para gerar números aleatórios, e a função Math.floor() para arredondá-los para inteiros. O objetivo é gerar 6 números inteiros aleatórios entre 1 e 60, sem repetições.

Aqui está o código:


``` js
function gerarAleatorios() {
    var numeros = new Set(); // Set tem notação O(1) para inserção e verificação de existência.

    while (numeros.size < 6) {
        var aleatorio = Math.floor(Math.random() * 60 + 1); // Gera um número aleatório entre 1 e 60.
        numeros.add(aleatorio);  // O Set adiciona apenas números únicos automaticamente.
    }

    return Array.from(numeros);  // Converte o Set para um array para facilitar o uso dos números.
}
```

## Como Funciona:


1. **`Set` para garantir unicidade:** O `Set` é utilizado para armazenar os números aleatórios. Ele garante automaticamente que não haverá números duplicados, já que um `Set` só permite elementos únicos.

2. **Laço `while`:** O laço continua até que o `Set` contenha exatamente 6 números únicos. Cada vez que um número é gerado, ele é tentado inserir no `Set`, que ignora valores repetidos.

3. **Geração de números aleatórios:** A expressão `Math.floor(Math.random() * 60 + 1)` é responsável por gerar números inteiros aleatórios entre 1 e 60.

4. **Conversão para Array:** Após o `Set` conter 6 números únicos, ele é convertido em um array com `Array.from()`, já que um array é uma estrutura de dados mais comum para retornar listas de valores em JavaScript.

## Mudanças em Relação ao Algoritmo Anterior

No algoritmo anterior, um array comum foi utilizado para armazenar os números, e era necessário verificar manualmente se um número gerado já estava presente no array usando o método `includes()`. Essa abordagem tinha algumas desvantagens:

- **Verificação manual de duplicatas:** O método `includes()` tinha que ser usado em cada iteração para verificar se o número já havia sido adicionado ao array. Isso aumenta a complexidade da operação, tornando-a O(n) em cada iteração, onde n é o tamanho do array.

- **Mais iterações desnecessárias:** Devido à verificação de duplicidade manual, números aleatórios repetidos geravam mais operações desnecessárias, fazendo com que o número de gerações fosse maior do que o necessário.

## Otimizações Realizadas

1. **Uso do `Set`:** A principal mudança foi a substituição do array por um `Set`. O `Set` é uma estrutura de dados mais eficiente para este caso, já que possui inserções e verificações de duplicatas com complexidade O(1), enquanto o método `includes()` de um array comum possui complexidade O(n).

1. **Menos verificações:** Como o `Set` garante automaticamente a unicidade dos números, não é mais necessário realizar uma verificação manual de duplicatas, reduzindo o número de operações e simplificando o código.

1. **Eficiência:** Com o `Set`, o algoritmo gera os números em menos iterações do que o algoritmo anterior, já que a verificação de duplicatas agora é instantânea, resultando em melhor performance.


## Comparação de Performance

## Algoritmo Anterior:

- **Armazenamento:** Array
- **Verificação de duplicatas:** `includes()` (O(n))
- **Eficiência:** Geração de números e verificação duplicada, causando mais iterações.

## Algoritmo Atual:
- **Armazenamento:** `Set`
- **Verificação de duplicatas:** Automática, O(1)
- **Eficiência:** Menos iterações e tempo de execução reduzido.

## Uso

Você pode usar a função `gerarAleatorios()` diretamente em seu código JavaScript. Ela retornará um array contendo 6 números únicos gerados aleatoriamente entre 1 e 60:

``` js
let numeros = gerarAleatorios();
console.log(numeros); // Exibe os 6 números aleatórios gerados

```

## Conclusão

Com a substituição do array por um `Set`, o algoritmo foi otimizado para garantir uma melhor performance, eliminando operações desnecessárias de verificação de duplicatas e reduzindo o número de iterações. O resultado é um código mais eficiente, simples e fácil de entender.
