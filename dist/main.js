"use strict";

// Passo 1: Criação do Array - Alunos e notas
var alunos = [{
  nome: "Neymar",
  nota: 9
}, {
  nome: "Messi",
  nota: 5
}, {
  nome: "Pelé",
  nota: 7
}, {
  nome: "CR7",
  nota: 4
}, {
  nome: "Defante",
  nota: 8
}];

// Passo 2: Função para Filtrar Alunos com Nota >= 6
function filtrarAlunosPorNota(alunos) {
  return alunos.filter(function (aluno) {
    return aluno.nota >= 6;
  });
}

// Testando a função
var alunosAprovados = filtrarAlunosPorNota(alunos);

// Exibindo os alunos aprovados
console.log(alunosAprovados);