## Objetivo rápido

Arquivo de orientação para agentes de codificação: este repositório é uma pequena aplicação web estática — conversor de moedas — composta por HTML, CSS e JavaScript puros. O foco imediato é editar `projetojs.js` mantendo a estrutura DOM definida em `index.html` e preservando as classes CSS em `projeto.css`.

## Visão geral (big picture)

- O app é somente client-side. Não há backend, bundlers ou pipeline de build.
- Arquivos principais:
  - `index.html` — marcação e classes usadas pelo JS/CSS (ex.: select com classe `alterar-moeda`, input com classe `input-moeda`, botão `.Button`).
  - `projetojs.js` — lógica de conversão e event listener (apenas DOM interactions).
  - `projeto.css` — estilos; não renomear classes sem atualizar HTML/JS.
  - `testedomodulo.js` e `anotações.js` — utilitários/observações; `testedomodulo.js` exporta uma função de exemplo (global) e atualmente não é referenciado pelo HTML.

## Convenções e padrões detectáveis

- Seleção DOM: o código usa `document.querySelector` para elementos únicos (ex.: `document.querySelector('.Button')`). Siga esse padrão ao adicionar novos elementos.
- Formatação: saída de valores usa `Intl.NumberFormat` (ex.: formatadores para `pt-BR`, `en-US`, `de-DE`). Preserve essa abordagem para exibição de moeda.
- Script é incluído como `type="module"` em `index.html`. Se adicionar/exportar módulos, mantenha `type="module"` ou atualize a tag do script conforme necessário.

## Pontos importantes / armadilhas observadas

- Entrada: `projetojs.js` lê o valor com `document.querySelector('.input-moeda').value` mas trata o conteúdo como número sem parsear. Trate entradas com parsing robusto (remover símbolos, trocar `,` por `.` e usar `parseFloat`).
- Seleção de moeda: o arquivo atual verifica `if (inputdaMoeda.value == "Dolar")` — isto é um bug (usa o valor do input em vez do select). Use `moedaSelect.value` (select com classe `alterar-moeda`).
- Taxas: os valores `DolarToday` e `EuroToday` são constantes hardcoded. Considere centralizar/parametrizar se for necessário atualizar com frequência.
- Evite renomear classes (por exemplo `.Button`, `.moeda-valor`) porque HTML/CSS/JS dependem delas diretamente.

## Fluxo de trabalho do desenvolvedor (rápido)

- Pré-visualizar localmente: abra `index.html` no navegador ou rode um servidor estático (recomendado) a partir da raiz do projeto. Exemplo (bash/Windows WSL/Python disponível):

```bash
python -m http.server 8000
# abrir http://localhost:8000/index.html
```

- Debug: abrir DevTools do navegador e observar console para erros (por exemplo referência a `undefined` se um seletor mudou de nome).
- Não há testes automatizados ou lint configurados no repositório — mudanças rápidas devem ser verificadas manualmente no navegador.

## Sugestões de PRs pequenas e seguras (exemplos concretos)

- Corrigir parsing do input e bug da seleção de moeda em `projetojs.js`:
  - ler `moedaSelect.value` para decidir entre USD/EUR;
  - normalizar `inputValue` com replace de caracteres e `parseFloat`;
  - manter saída com `Intl.NumberFormat`.
- Extrair as constantes de taxa para o topo do arquivo ou um pequeno objeto `rates` para facilitar atualização.

## Arquivos a consultar quando alterar comportamento

- `index.html` — estrutura DOM e nomes de classes.
- `projetojs.js` — lógica principal (event listener e formatação).
- `projeto.css` — para garantir que mudanças visuais preservem classes.
- `anotações.js` — notas úteis sobre `querySelector` e manipulação DOM (pode conter dicas do autor).

## Quando pedir esclarecimento ao mantenedor

- Se uma mudança exigir renomear classes ou converter o projeto para um bundler, peça instruções — o repositório atual é propositalmente minimal e expecta interações diretas com a DOM estática.

---

Se quiser, aplico uma PR de exemplo que corrige o parsing do input e o bug do select em `projetojs.js`. Indique se prefere que eu: (A) faça mudanças direto no repositório; (B) gere um patch proposto sem aplicar.
a