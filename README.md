# Boas-vindas ao repositório do exercício CloneTwitter

Aqui você vai encontrar os detalhes de como estruturar o desenvolvimento do seu exercício a partir deste repositório, utilizando uma branch específica e um Pull Request (PR) para colocar seus códigos.

## Termos e acordos

Ao iniciar este exercício, você concorda com as diretrizes do Código de Conduta e do Manual da Pessoa Estudante da Trybe.

## Instruções

1. Faça o clone do repositório;
2. Instale as dependências com o comando `npm install`;
3. Crie uma branch para desenvolver a aplicação;
4. Faça um Pull Request nesse repositório.

⚠️ Ao implementar os requisitos, você irá notar que alguns componentes já estão criados e possuem uma estrutura predefinida. Utilize essa estrutura apenas se quiser visualizar as informações já estilizadas na página. Porém, incentivamos cada grupo a criar sua própria estilização. Nesse caso, você não precisará seguir a estrutura predefinida.

# Requisitos

## 1 - Criar as rotas da aplicação

A aplicação deve possuir três rotas principais:

- Rota `/`: deve renderizar o componente `Home`, que está no arquivo `/src/pages/index.tsx`.
- Rota `/profile/:username`: deve renderizar o componente `Profile` que está no arquivo `/src/pages/index.tsx`.
- Para qualquer outra rota não mapeada, deve ser renderizado um componente chamado `NotFound`.

> Não esqueça de utilizar o componente `BrowserRouter` pra criar as rotas
>
> A biblioteca React Router Dom já está instalada.

## 2 - Implementar o componente `Layout`

Esse componente será o responsável por renderizar o menu de navegação da aplicação. O menu deve ser renderizado em todas as rotas mapeadas.

- O componente já está criado e pode ser acessado no arquivo `/src/components/layout/index.tsx`;
- O menu de navegação deve possuir dois _links_:
  - Um para a rota `/`;
  - Outro para a rota `/profile/betrybe`;
- Além do menu de navegação, o componente `Layout` deverá renderizar o componente correspondente à página atual. Para isso, utilize o componente `Outlet`, disponibilizado pela biblioteca React Router.

> **Dica 👀**: Para o menu de navegação, utilize o componente `NavLink` disponibilizado pela biblioteca React Router.

## 3 - Implementar o componente `Home`

Esse componente será o responsável por renderizar as informações da rota `/`. Ao acessar a página, todos os tweets deverão ser renderizados.

- Para renderizar os _tweets_, você deverá utilizar o componente `Tweet`, que está no arquivo `src/components/tweet/index.tsx`.
- As informações dos _tweets_ podem ser obtidas por meio de uma requisição ao _endpoint_ `https://public-apis-473v4ntrr-felipemuller20.vercel.app/api/tweets`, que devem ser enviadas via _props_ para o componente `Tweet`.
- Enquanto a requisição está sendo realizada, você deve indicar que as informações estão sendo carregadas.
- Cada _tweet_ deverá apresentar o _tweet_ em si (ou seja, a mensagem) e as informações de quem o realizou (nome, _username_ e imagem do perfil);
  - O _username_ deverá ser um _link_ que, quando clicado, redirecionará para a página `/profile/username`. Por exemplo, em um _tweet_ da Trybe, ao clicar em `@betrybe`, a página deverá ser redirecionada para `/profile/betrybe`.

> Dica: Você pode acessar o arquivo `/src/utils/types.ts` e utilizar o tipo `TweetCard` para _tipar_ o retorno da API.

## 4 - Implementar o componente `Profile`

O componente `Profile` será o responsável por renderizar as informações da página `/profile/:username`. Essa página deve renderizar as informações do perfil selecionado, bem como todos os _tweets_ realizados por esse perfil.

- As informações de todas as pessoas cadastradas podem ser acessadas por meio de uma requisição ao _endpoint_ `https://public-apis-473v4ntrr-felipemuller20.vercel.app/api/twitter-users`.
- Enquanto a requisição está sendo realizada, você deve indicar que as informações estão sendo carregadas.
- Ao acessar a página, a aplicação deverá renderizar apenas informações do perfil que está na URL. Por exemplo, na rota `/profile/betrybe`, a página deverá renderizar as informações do perfil `@betrybe`.
- As informações que deverão ser renderizadas são:
  - a imagem da capa (backgroundImage);
  - imagem do perfil;
  - nome;
  - _username_;
  - todos os _tweets_ feitos por esse perfil.
- Para renderizar os _tweets_, você deverá utilizar o componente `Tweet`, que está no arquivo `src/components/tweet/index.tsx`.

> Dicas:
>
> 1. Você pode acessar o arquivo `/src/utils/types.ts` e utilizar o tipo `Users` para _tipar_ o retorno da API.
> 2. Para recuperar as informações da URL, você pode utilizar o _hook_ `useParams`;
> 3. Analise o retorno da API com o _endpoint_ `twitter-users`. Você encontrará uma chave `tweetsId` contendo o `id` de todos os _tweets_ realizados pelo respectivo perfil. Você pode utilizar essa informação em conjunto com a API com o _endpoint_ `/tweets` para renderizar todos os _tweets_ de um determinado perfil.

## Bônus

Explore a sua criatividade para estilizar a aplicação! 🎨

Se você optou por utilizar nossa estrutura de classes, irá notar que alguns elementos do componente `Profile` não estão estilizados como deveriam. As classes já estão definidas no arquivo `profile.css`, você precisará apenas adicioná-las aos elementos correspondentes.
