# Boas-vindas ao repositório do exercício CloneTwitter

Para realizar o exercício, atente-se a cada passo descrito a seguir e, se tiver qualquer dúvida, nos envie por Slack! #vqv 🚀

Aqui você vai encontrar os detalhes de como estruturar o desenvolvimento do seu exercício a partir deste repositório, utilizando uma branch específica e um Pull Request (PR) para colocar seus códigos.

## Termos e acordos

Ao iniciar este exercício, você concorda com as diretrizes do Código de Conduta e do Manual da Pessoa Estudante da Trybe.

# Requisitos

## 1 - Criar as rotas da aplicação

Você deve utilizar o `BrowserRouter` pra criar as rotas da sua aplicação.

<details><summary>Você deverá criar uma rota que renderiza o componente <code>Layout</code></summary></br>

  - Esse componente já está criado e pode ser acessado no arquivo `/src/components/layout`;
  - Essa rota deverá envolver as rotas que renderizam os componentes `Home` e `Profile`, que serão criadas logo em seguida.

</details>

<details><summary>Cada rota deverá renderizar um componente específico:</summary></br>

  <details><summary> Rota <code>/</code></summary>

  - A rota `/` deve renderizar o componente `Home`, que está no arquivo `/src/pages`.

  </details>

  <details><summary> Rota <code>/profile/:username</code></summary>

  - A rota `/profile/:username` deve renderizar o componente `Profile` que está no arquivo `/src/pages`.

  </details>

  <details><summary> Para qualquer outra rota não mapeada</summary>

  Para qualquer outra rota não mapeada, deve ser renderizado um componente chamado `NotFound`.
  </details><br />

</details><br />


<!-- lista de requisitos?
- requisição pra API na página home
- colocar loading
- renderizar os tweets (mesmo requisito que o da requisição?)
- requisição dupla para duas APIs(?) na página (rota dinâmica?) de perfil
-->