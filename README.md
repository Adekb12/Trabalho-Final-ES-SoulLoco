# Trabalho final da disciplina de Engenharia de Software 

>`Grupo: Bruno Henrique, Cauã Marcos e Gabriel Furtado. Turma 10A`

## Visão geral

  - [Descrição](#descrição)
  - [Funcionalidades](#funcionalidades)
  - [Tipos de usuarios](#tipos-de-usuarios)
  - [Tecnologias utilizadas](#tecnologias-utilizadas)
  - [Regras para os Commits](#regras-para-os-commits)
  - [Regras para os Branches](#regras-para-os-branches)

## Descrição

Consiste em um sistema web que permite a realização de pedidos de um determinado restaurante mexicano online.

## Funcionalidades

As principais funcionalidades na visão do cliente são: visualizar o cardápio, realizar o pedido e efetuar o pagamento.
Já na visão do gerente/funcionario, as principais funcionalidades são: adicionar, alterar e excluir produtos, como também visualizar pedidos.

## Tipos de usuarios

Os tipos de usuários previstos são os clientes desse respectivo restaurante, e também quem gerencia e trabalha com o sistema.

## Tecnologias utilizadas 

- JavaScript
- HTML
- CSS
- MySQL

## Regras para os Commits
Deve-se estruturar a mensagem do commit da seguinte forma:

 ~~~
 <tipo>[escopo opcional]: <descrição>

 [corpo opcional]

 [rodapé(s) opcional(is)]
 ~~~

### Tipo
O tipo deve ser algum dos seguintes:

* **build**: Mudanças que afetam o sistema de compilação ou dependências externas 
* **docs**: Mudanças apenas na documentação
* **feat**: Uma novo recurso 
* **fix**: Consertar um erro
* **refactor**: Uma alteração de código que não corrige um bug nem adiciona um recurso
* **style**: Mudanças que não afetam o significado do código (espaço em branco, formatação, falta de ponto e vírgula, etc.)
* **test**: Adicionar ou corrigir testes

### Escopo (Opcional)
O escopo deve ser o nome do pacote npm afetado. A seguir está a lista de escopos suportados:

* **animações**
* **comum**
* **compilador**
* **compilador-cli**
* **essencial**
* **elementos**
* **formulários**
* **http**
* **serviço linguístico**
* **navegador de plataforma**
* **navegador de plataforma dinâmico**
* **servidor de plataforma**
* **plataforma-webworker**
* **plataforma-webworker-dinâmica**
* **roteador**
* **trabalhador de serviço**
* **atualizar**

### Corpo (Opcional)
O corpo deve incluir a motivação para a mudança e compará-la com o comportamento anterior.

### Rodapé (Opcional)
O rodapé deve conter qualquer informação sobre **BREAKING CHANGES** e também é o local para
referenciar as issues do GitHub que este commit **Close**.

**BREAKING CHANGES** contém no rodapé opcional o texto *BREAKING CHANGE:* ou contém o símbolo ! depois do tipo/escopo, introduz uma modificação que quebra a compatibilidade da API. Uma BREAKING CHANGE pode fazer parte de commits de qualquer tipo.

## Regras para os Branches

O modelo será composto por dois branches, o principal e o de features:

- O origin/master é o branch principal que vai sempre refletir o estado do código do projeto em produção;
- Features branches são usados para desenvolver novas funcionalidades para um realease futuro. Esses branches existem enquanto a funcionalidade está sendo desenvolvida, mas acabará quando essa for mesclada de volta ao branch principal 