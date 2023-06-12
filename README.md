<!-- Olá, Tryber!
Esse é apenas um arquivo inicial para o README do seu projeto.
É essencial que você preencha esse documento por conta própria, ok?
Não deixe de usar nossas dicas de escrita de README de projetos, e deixe sua criatividade brilhar!
:warning: IMPORTANTE: você precisa deixar nítido:


- quais arquivos/pastas foram desenvolvidos por você;

- quais arquivos/pastas foram desenvolvidos por outra pessoa estudante;

- quais arquivos/pastas foram desenvolvidos pela Trybe. -->

# Blogs API

## Objetivos:
<section>
- Desenvolver uma API e um banco de dados para a produção de conteúdo para um blog
</br> - Desenvolver endpoints que estarão conectados ao banco de dados seguindo os princípios do REST;
</br> - Desenvolver regra de negócio para que apenas o usuário criador do post possa editá-lo
</br> - Trabalhar o relacionamento entre tabelas do banco de dados

</section>

</br>

## Problemas resolvidos por mim:

>1 - Criado migrations para as tabelas `users`, `categories`, `blog_posts`, `posts_categories`
</br> 2 - Criado modelo `User` em `src/models/User.js` com as propriedades corretas
</br> 3 - Desenvolvido o endpoint POST `/login` (realizar login)
</br> 4 - Desenvolvido o endpoint POST `/user` (criar usuário)
</br> 5 - Desenvolvido o endpoint GET `/user` (lista todos os publicadores do blog)
</br> 6 - Desenvolvido o endpoint GET `/user/:id` (busca um publicador pelo id)
</br> 7 - Desenvolvido modelo `Category` em `src/models/Category.js` com as propriedades corretas
</br> 8 - Desenvolvido o endpoint POST `/categories` (cria uma nova categoria de postagem no blog)
</br> 9 - Desenvolvido o endpoint GET `/categories` (lista postagens de acordo com a categoria escolhida)
</br> 10 - Desenvolvido o modelo `BlogPost` em `src/models/BlogPost.js` com as propriedades e associações corretas
</br> 11 - Desenvolvido o modelo `PostCategory` em `src/models/PostCategory.js` com as propriedades e associações corretas
</br> 12 - Desenvolvido o endpoint POST `/post` (cria uma postagem)
</br> 13 - Desenvolvido o endpoint GET `/post` (lista as postagens)
</br> 14 - Desenvolvido o endpoint GET `/post/:id` (pegar uma postagem pelo id)
</br> 15 - Desenvolvido o endpoint PUT `/post/:id` (editar uma postagem pelo id)
</br> 16 - Desenvolvido o endpoint DELETE `/post/:id` (deletar uma postagem pelo id)
</br> 17 - Desenvolvido o endpoint DELETE `/user/me` (auto deletar-se como publicador)
</br> 18 - Desenvolvido o endpoint GET `/post/search?q=:searchTerm` (buscar um post por termo de pesquisa)


</br>

## Desenvolvido pela Trybe.
- Scripts de testes, docker e pré configuração do package.json


<!-- ## Preview:

 <img src="images/preview.png" width="900px" > -->


