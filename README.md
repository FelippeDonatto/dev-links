<h1 align="center"> Dev Links - Rocketseat</h1>

<div align="center"> 
  <img src="https://user-images.githubusercontent.com/7221671/231258954-c02cabd8-c278-4a2e-b95b-a2a4bfe743dd.png"/>
</div>

<h1>Dev Links - Rocketseat</h1>

<p align="center">Desafio da Rocketseat do projeto Dev Links</p>

<h2>Referência</h2>

- [Template Bora Codar](https://www.figma.com/community/file/1187422022288947321/DevLinks)

<h2>Licença</h2>

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

<h2>Instalação</h2>

Instale Dev Links com npm

_Para instalar as dependencias_

```bash
  npm intall
```

_Para rodar o projeto_

```bash
  npm run dev
```

<h2>Tecnologias utilizadas</h2>

_Instalação do Tailwind para Next_

```bash
  npm install -D tailwindcss postcss autoprefixer
```

```bash
  npx tailwindcss init -p
```

_Adicionar ao arquivo tailwind.config.js_

```bash
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    colors: {
      gray: {
        900: '#121214',
        800: '#202024',
        400: '#7c7c8a',
        100: '#e1e1e6'
      },

      white: '#ffffff'
    },
    extend: {
      backgroundImage: {
        app: 'url(/background.png)'
      }
    }
  },
  plugins: []
}


```

_Adicione ao seu CSS global_

```bash
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
```
