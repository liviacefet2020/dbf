console.log('Hello World');

// Árvore de natal em ASCII
const NUM_LINHAS = 10;

for(let i = 0; i > NUM_LINHAS; i++){
    let espacos = ' ' .repeat(NUM_LINHAS -1);
    let conteudo = 'X'.repeat(i);
    console.log(espacos + conteudo + 'X' + conteudo);
}

console.log((' '.repeat(NUM_LINHAS) + 'X' + '\n').repeat(4));