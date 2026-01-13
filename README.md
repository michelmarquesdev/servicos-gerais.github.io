# Serviços Gerais

Site de anúncio de serviços gerais desenvolvido com React + Vite + Tailwind CSS.

## Tecnologias

- [React](https://react.dev/) - Biblioteca JavaScript para construção de interfaces
- [Vite](https://vitejs.dev/) - Build tool rápido para desenvolvimento web
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS utilitário

## Desenvolvimento

### Instalação

```bash
npm install
```

### Executar em modo desenvolvimento

```bash
npm run dev
```

### Build para produção

```bash
npm run build
```

### Preview do build

```bash
npm run preview
```

## Deploy no GitHub Pages

Este site está configurado para deploy automático no GitHub Pages. Para fazer o deploy:

1. Faça o build do projeto: `npm run build`
2. Os arquivos de produção estarão na pasta `dist/`
3. Configure o GitHub Pages para servir da branch `gh-pages` ou da pasta `dist/` da branch `main`

## Estrutura do Projeto

```
src/
├── components/
│   ├── Header.jsx    # Navegação fixa
│   ├── Hero.jsx      # Seção inicial
│   ├── Services.jsx  # Listagem de serviços
│   ├── Contact.jsx   # Informações de contato
│   └── Footer.jsx    # Rodapé
├── App.jsx           # Componente principal
├── main.jsx          # Ponto de entrada
└── index.css         # Estilos globais (Tailwind)
```

## Personalização

### Dados de Contato

Edite o arquivo `src/components/Contact.jsx` para atualizar:

- Número de telefone
- WhatsApp
- E-mail
- Localização

### Serviços

Edite o arquivo `src/components/Services.jsx` para adicionar, remover ou modificar os serviços listados.

### Cores

As cores do tema podem ser personalizadas em `tailwind.config.js` na seção `theme.extend.colors`.
