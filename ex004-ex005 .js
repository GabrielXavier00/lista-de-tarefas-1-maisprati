/*
4. Escreva um algoritmo para ler as notas das duas avaliações de um aluno no semestre,
calcular e escrever a média semestral e a seguinte mensagem: ‘PARABÉNS! Você foi
aprovado’, somente se o aluno foi aprovado (considere 6.0 a nota mínima para
aprovação).

5. Acrescente ao exercício acima a mensagem ‘Você foi REPROVADO! Estude mais’ caso a média calculada seja menor que 6,0
*/

let av1 = 10;
let av2 = 5;
let totalAv = (av1 + av2) / 2;

if (totalAv < 6) {
    console.log(`Média das avaliações = ${totalAv}
Você foi REPROVADO! Estude mais
`);
} else {
    console.log(`Média das Avaliações = ${totalAv} 
PARABÉNS! Você foi aprovado!`);
}