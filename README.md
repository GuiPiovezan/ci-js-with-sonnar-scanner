# Desafio: CI e Qualidade de Código com SonarCloud

Este repositório consolida os conhecimentos sobre **CI (Continuous Integration)** e **Qualidade de Código** com uma pipeline que impede a integração de código sem validações obrigatórias.

## Objetivo do desafio

Garantir que nenhum código seja integrado à branch principal sem antes passar por:

- Testes automatizados
- Análise de qualidade no SonarCloud
- Regras obrigatórias de status checks no GitHub

## Passo a passo do desenvolvimento

### 1) Aplicação

A aplicação é uma calculadora simples em Node.js, localizada em:

- `src/calculator.js`

### 2) Testes

Os testes unitários foram implementados com Jest em:

- `src/calculator.test.js`

Execução local:

```bash
npm ci
npm test
```

### 3) Pipeline de CI (GitHub Actions)

O workflow está em:

- `.github/workflows/ci-js.yml`

A cada Pull Request para `develop`, a pipeline executa:

1. Instalação de dependências (`npm ci`)
2. Execução dos testes unitários (`npm test`)
3. Análise no SonarCloud (via action oficial)

### 4) Quality Gate

O projeto está configurado com SonarCloud usando:

- `sonar-project.properties`

Com o Quality Gate ativo, o código deve atender aos critérios de qualidade definidos no SonarCloud para ser aprovado.

## Regra de Ouro (Status Checks)

Na proteção da branch principal (`main`), configure no GitHub:

1. **Require status checks to pass before merging**
2. Marcar como obrigatórios os checks de:
   - CI (workflow do GitHub Actions)
   - SonarCloud

## Comportamento esperado (Critério de aceite)

Ao abrir o Pull Request, na seção de checks:

- Os checks do workflow e do SonarCloud devem estar verdes (aprovados)
- Cada check obrigatório deve aparecer com a etiqueta **Required**

Isso comprova que o merge está bloqueado caso qualquer validação falhe.
