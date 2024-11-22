# Calculadora de Limites

Este projeto é uma **Calculadora de Limites** desenvolvida em React, com o objetivo de auxiliar no cálculo de limites de funções matemáticas. A aplicação permite a inserção de expressões matemáticas, cálculo de limites em um ponto e fornece passos detalhados da resolução, ideal para fins educativos e didáticos.

## Funcionalidades

- **Cálculo de Limites:** Resolva limites de funções matemáticas em um ponto específico.
- **Passos Detalhados:** A aplicação exibe os passos da resolução, como substituição, derivação e aplicação de regras específicas.
- **Interface Intuitiva:** A interface é amigável, com componentes bem organizados e responsivos.
- **Feedback de Erros:** Exibe mensagens de erro em casos de entrada inválida ou limitações matemáticas.

## Como Funciona

### Estrutura do Projeto

1. **Frontend em React:** O projeto utiliza Create React App como base, permitindo o rápido desenvolvimento e execução em ambiente local.
2. **Cálculo Matemático:** A lógica principal do cálculo de limites está implementada em um arquivo de utilitários (`limitCalculator.js`). 
3. **Componentes Reutilizáveis:**
   - `CalculatorForm`: Formulário para entrada de dados.
   - `ResultDisplay`: Exibe o resultado e os passos da solução.
   - `Instructions`: Instruções para o uso da calculadora.

### Fluxo de Uso

1. O usuário insere:
   - A expressão matemática.
   - A variável utilizada (ex.: `x`).
   - O valor ao qual a variável está se aproximando (ex.: `2` ou `∞` para infinito).
   - A direção da aproximação (direita, esquerda ou ambos).
2. Ao clicar no botão "Calcular", a aplicação processa os dados e exibe:
   - O resultado do limite.
   - Os passos detalhados utilizados para chegar ao resultado.

## Como Rodar o Projeto

1. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/limit-calculator.git
   cd limit-calculator
   ```
2. Instale as depêndencias:
    ```bash
   npm install
3. Inicialize o servidor de teste:
    ```bash
    npm start
    ```
4. Acesse no navegador: http:localhost:3000

## Funcionalidades a Implementar

1. **Aproximação ao Infinito:**
   - Melhorar o suporte a cálculos quando a variável tende a \( +\infty \) ou \( -\infty \).
   - Identificar termos dominantes em expressões com polinômios ou frações.

2. **Suporte a Funções Mais Complexas:**
   - Funções trigonométricas (ex.: `sin(x)`, `cos(x)`).
   - Logaritmos e exponenciais.

3. **Melhoria na Interface:**
   - Destaque visual para passos da solução.
   - Suporte a entrada de equações mais complexas via editores matemáticos.

4. **Erros e Indeterminações:**
   - Lidar melhor com formas indeterminadas, como \( \frac{\infty}{\infty} \), \( \frac{0}{0} \), etc.

5. **Modo Offline:**
   - Transformar a aplicação em uma Progressive Web App (PWA) para funcionamento offline.

6. **Internacionalização:**
   - Suporte a múltiplos idiomas além do português.

## Contribuição

Sinta-se à vontade para abrir issues ou pull requests caso deseje contribuir com melhorias, correções de bugs ou novas funcionalidades.

