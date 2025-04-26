# 🔍 GitHub User Finder com TailwindCSS & Styled-Components

Este projeto é um buscador de usuários do GitHub feito com **React**, onde você pode visualizar as informações públicas de qualquer usuário, como nome, bio, avatar, blog e seguidores. A mágica está no uso de **TailwindCSS** ✨ e **Styled-Components** 🎨 — e sim, você escolhe qual versão quer ver!

---

## 🚀 Tecnologias Utilizadas

- React + Vite ⚛️
- React Router DOM 🔁
- TailwindCSS 💨
- Styled-Components 💅
- GitHub API 🔗

---

## 📸 Preview

Você digita o nome de um usuário, clica em uma das rotas (Tailwind ou Styled) e... voilá! Os dados aparecem de forma estilosa com o framework que você escolheu.

---

## 🧰 Instalação e Uso

### 1. Clone o projeto

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio

### 2. Instale as dependências
```bash
npm install

### 3. Instale o TailwindCSS
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

### 4. Configure o seu TailwindCSS
Depois disso, edite o tailwind.config.js para incluir os arquivos onde o Tailwind será aplicado:

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

E no seu index.css, delete todo o conteudo e em seguida adicione o seguinte código no topo:

@import "tailwindcss";

### 5. Instale o Styled-Components

npm install styled-components
npm install --save-dev @types/styled-components

### 6. Rode o projeto
npm run dev

📂 Como funciona?

A tela principal (/) permite digitar o nome de um usuário do GitHub.

Depois você pode escolher visualizar os dados em:
    /Tailwind: com estilos utilizando TailwindCSS 💨
    /Styled: com estilos utilizando Styled-Components 💅

As rotas são gerenciadas com React Router.
Os dados são obtidos diretamente da GitHub API.

⚠️ Observações
Caso digite um nome inválido, será exibida uma mensagem de erro.
O botão de "Voltar à Pesquisa" sempre estará lá pra você tentar de novo 😊

📃 Licença
Este projeto é livre para estudos, testes e aperfeiçoamento. Faça bom uso!