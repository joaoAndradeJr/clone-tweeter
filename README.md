# Boas-vindas ao repositório do exercício CloneTwitter

Aqui você vai encontrar os detalhes de como estruturar o desenvolvimento do seu exercício a partir deste repositório, utilizando uma branch específica e um Pull Request (PR) para colocar seus códigos.

## Termos e acordos

Ao iniciar este exercício, você concorda com as diretrizes do Código de Conduta e do Manual da Pessoa Estudante da Trybe.

## Instruções

1. Faça o clone do repositório;
2. Instale as dependências com o comando `npm install`;
3. Crie uma branch para desenvolver a aplicação;
4. Faça um Pull Request nesse repositório.

# Requisitos

## 1 - Criar as rotas da aplicação

Você deve utilizar o `BrowserRouter` pra criar as rotas da sua aplicação.

> A biblioteca React Router Dom já está instalada.

<details><summary>Você deverá criar uma rota que renderiza o componente <code>Layout</code></summary></br>

  - Esse componente já está criado e pode ser acessado no arquivo `/src/components/layout/index.tsx`;
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

## 2 - Implementar o componente `Layout`

Esse componente será o responsável por renderizar o menu de navegação da aplicação:

- O componente já está criado e pode ser acessado no arquivo `/src/components/layout/index.tsx`;

- O menu de navegação deve possuir dois _links_:
  - Um para a rota `/`;
  - Outro para a rota `/profile/betrybe`;</br>
  - **Dica 👀**: Para o menu de navegação, utilize o componente `NavLink` disponibilizado pela biblioteca React Router.
- Abaixo do menu de navegação, o componente `Layout` deverá renderizar o componente correspondente a sua rota-filha. Para isso, utilize o componente `Outlet`, disponibilizado pela biblioteca React Router.

## 3 - Implementar o componente `Home`

Esse componente será o responsável por renderizar as informações da rota `/`.

<details><summary>Ao acessar a página, todos os <em>tweets</em> deverão ser renderizados:</summary></br>

- As informações dos _tweets_ podem ser obtidas por meio de uma requisição ao _endpoint_ `https://public-apis-dx1f2we3b-felipemuller20.vercel.app/api/tweets`;
- Enquanto a requisição está sendo realizada, uma mensagem deverá aparecer indicando que as informações estão sendo carregadas;

</details>

<details><summary>Cada <em>tweet</em> deverá apresentar:</summary></br>

- O _tweet_ em si (ou seja, a mensagem);
- As informações de quem realizou o _tweet_ (nome, usuário, imagem e foto);
- O usuário deverá ser um _link_ que, quando clicado, redirecionará para a página `/profile/username`. Por exemplo, em um _tweet_ da Trybe, ao clicar em `@betrybe`, a página deverá ser redirecionada para `/profile/betrybe`.

> Dica: Todas as informações podem ser obtidas por meio do retorno da requisição para recuperar os _tweets_.

</details>

## 4 - Implementar o componente `Profile`

<details><summary>O componente <code>Profile</code> será o responsável por renderizar as informações da página <code>/profile/:username</code>. Nessa página você deverá renderizar as informações do perfil selecionado, bem como todos os <em>tweets</em> realizados por esse perfil.</summary></br>

- As informações de todas as pessoas cadastradas no CloneTwitter podem ser acessadas por meio de uma requisição ao _endpoint_ `https://public-apis-dx1f2we3b-felipemuller20.vercel.app/api/twitter-users`:
  - Enquanto a aplicação realiza a requisição, você deverá renderizar uma mensagem indicando que as informações da página estão sendo carregadas.
- Ao acessar a página, a aplicação deverá renderizar as informações do perfil que está na URL. Por exemplo, na rota `/profile/betrybe`, a página deverá renderizar as informações do perfil `@betrybe`:
  - Renderize a imagem da capa (backgroundImage), imagem do perfil, nome, _username_ e todos os _tweets_ criados por esse perfil.

</details>

<details><summary>Dicas:</summary></br>

- Para recuperar as informações da URL, você pode utilizar o _hook_ `useParams`;
- Analise o retorno da API com o _endpoint_ `twitter-users`. Você encontrará uma chave `tweetsId` contendo o `id` de todos os _tweets_ realizados pelo respectivo perfil. Você pode utilizar essa informação em conjunto com a API com o _endpoint_ `/tweets` para renderizar todos os _tweets_ de um determinado perfil.

</details>

## 5 - Estilizar a aplicação

Abuse da sua criatividade para estilizar a aplicação! 🎨
