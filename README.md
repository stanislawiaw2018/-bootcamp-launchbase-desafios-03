<h1 align="center">

:computer: **DESAFIO 3-1**: Primeiro servidor

</h1>

<h1 align="center">
<img alt="logo LunchBase" src="https://storage.googleapis.com/golden-wind/bootcamp-launchbase/logo.png" width="400px">
</h1>

<h4 align="center"> 
    
A recompensa do estudo é a compreensão.

</h4>

<!-- <h2 align="center" style="color:black"> Layout do Desafio Concluído
<h2>

<h2 align="center">
<img alt="layout demonstrativo" src="style/image/Desafio2-3(index.html).png" width="600px">
</h2>
<h2 align="center">
<img alt="layout demonstrativo" src="style/image/Desafio2-3(content.html).png" width="600px">
</h2> -->

<p align="center">
    <a href="https://www.linkedin.com/in/antonio-stanislaw-dos-santos-47a077106/">
        <img alt="Made by Antonio Stanislaw" src="https://img.shields.io/badge/made%20by-Antonio Stanislaw-%23fc8406">
    </a>
    <a href="LICENSE">
        <img alt="LICENSE" src="https://img.shields.io/badge/license-MIT-%23fc8406">
    </a>
</p>

<h5 align="center">
<p style="color:black">ÍNDICE</p>

[Sobre o desafio](#-Sobre-o-desafio) | [Tecnologias utilizadas](#-Tecnologias-Utilizadas) | [Como baixar o projeto](#-Como-baixar-o-projeto) | [Licença](#-Licença) | [Autor](#-Autor)

</h5>

## 🚀 Sobre o desafio

Desafio feito no Bootcamp launchBase, que consiste na criação de layout de pagina que contenha um menu de links e um favicon e uma devida estilização para a página, com determinados critérios:

- Título da página;
- Grid com 3 colunas e 1 linha onde serão apresentados os cards dos cursos;
- Informações do Card:
    - Logo do curso;
    - Título do curso;
    - Quantidade de módulos dos cursos;
    - Informação se o curso é gratuito ou pago


Nesse desafio foi implementado alguns conceitos não relacionados nos critérios, por exemplo:

- Estrutura semântica do HTML5 (Header, Main, Footer);
- JavaScript
---

## 🛠️ Tecnologias Utilizadas

- HTML5;
- CSS3;
- JavaScript

---
##  📁 Arquivos HTML

- `courses.njk`: Arquivo referente à pagina de conteúdos, deve ser servido na rota raiz.
- `about.njk`: Arquivo referente à pagina de descrição, deve ser servido na rota /about.
- `layout.njk`: Arquivo referente à base comum entre as páginas.
- `not-found.njk`: Arquivo referente à pagina de erro 404, deve ser servido quando for realizada uma requisição à uma página que não existe. Esse arquivo deve ter:

  - Layout.njk como base
  - Ter um texto informativo sobre o erro

  Dica: Para capturar essas requisições, basta adicionar esse trecho após **todas** as rotas no seu `server.js`:

```js
server.use(function(req, res) {
  res.status(404).render("not-found");
});
```

## ⏬ Como baixar o projeto
- É necessário ter o git instalado em sua máquina
- Executar o Seguinte comando no seu **Terminal** ou no **CMD**:

    ```bash
        git clone https://github.com/stanislawiaw2018/bootcamp-launchbase-desafio2-3.git

    ```
---

## 📝 Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## ⌨️ Autor

<img style="border-radius: 50%;" src="https://avatars1.githubusercontent.com/u/54186220?s=460&u=6095908872ed5e96a473f85605949ad1b2efa98f&v=4" width="100px;" alt="Perfil-autor"/><br>
<sub><b>Antonio Stanislaw</b></sub>

:rocket: Exercício resolvido com muita dedicação e esforço por [Antonio Stanislaw](https://www.linkedin.com/in/antonio-stanislaw-dos-santos-47a077106/) :man_technologist:

##### Contatos
[![Gmail Badge](https://img.shields.io/badge/stanislaw.iaw2018@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:stanislaw.iaw2018@gmail.com)](mailto:stanislaw.iaw2018@gmail.com)&nbsp;[![Linkedin Badge](https://img.shields.io/badge/-LinkedIn-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/antonio-stanislaw-dos-santos-47a077106/)](https://www.linkedin.com/in/antonio-stanislaw-dos-santos-47a077106/)
