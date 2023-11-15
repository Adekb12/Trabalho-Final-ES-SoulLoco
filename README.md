# Trabalho final da disciplina de Engenharia de Software 

>`Grupo: Bruno Henrique, Cauã Marcos e Gabriel Furtado. Turma 10A`

## Visão geral

  - [Descrição](#descrição)
  - [Funcionalidades](#funcionalidades)
  - [Tipos de usuarios](#tipos-de-usuarios)
  - [Tecnologias utilizadas](#tecnologias-utilizadas)
  - [Regras para os Commits](#regras-para-os-commits)
  - [Regras para os Branches](#regras-para-os-branches)
  - [Regras para boas práticas](#regras-para-boas-praticas)

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

## Regras para boas práticas

### Padrão de Notação de Código

**Regra:** Adotar e manter um padrão consistente de notação de código em todo o projeto. Utilizar camelCase para variáveis, PascalCase para nomes de classes, e seguir outras convenções de nomenclatura para garantir consistência e clareza no código.

### Comentários e Documentação

**Regra:** Incluir comentários relevantes quando necessário para explicar trechos complexos ou algoritmos. Evitar comentários redundantes e priorizar um código autoexplicativo.

### Princípios SOLID

**Regra:** Aplicar os princípios SOLID no design de código para promover a coesão e a flexibilidade, principalmente com relação ao princípio da responsabilidade única.

### CLEAN CODE

**Regra:** Seguir as diretrizes do CLEAN CODE, mantendo funções curtas e focadas, evitando duplicação de código, escolhendo nomes descritivos e adotando outras práticas que contribuem para um código claro, legível e de fácil manutenção.

### Testes Unitários

**Regra:** Escrever testes unitários para validar a funcionalidade correta do código. Adotar práticas de Desenvolvimento Orientado a Testes (TDD) quando possível para garantir que o código seja testado desde o início do desenvolvimento.

### Controle de Versão

**Regra:** Utilizar um sistema de controle de versão, como Git, para rastrear mudanças no código. Realizar commits frequentes e significativos, proporcionando um histórico claro e reversível das alterações. Integrar a colaboração e facilitar a gestão do desenvolvimento em equipe.
