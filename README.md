# Artigos Grão - Frontend

Uma aplicação React TypeScript para gerenciar e exibir artigos, construída com Vite e estilizada com Tailwind CSS.

## Funcionalidades

- 📝 Criação e edição de artigos
- 🏠 Página inicial com listagem de artigos
- 📖 Visualização de detalhes do artigo
- 🏷️ Filtragem por tags
- 📱 Design responsivo para dispositivos móveis
- 🎨 Interface moderna com Tailwind CSS

## Stack Tecnológica

- **React** 19.1.1 - Biblioteca de interface
- **TypeScript** - Tipagem estática
- **Vite** - Ferramenta de build e servidor de desenvolvimento
- **Tailwind CSS** - Estilização
- **React Router DOM** - Navegação
- **Axios** - Cliente HTTP
- **Prisma Client** - ORM para banco de dados
- **Heroicons** - Biblioteca de ícones
- **React Toastify** - Notificações toast

## Pré-requisitos

- Node.js (versão 18 ou superior)
- npm ou yarn como gerenciador de pacotes

## Instalação

1. Clone o repositório:
```bash
git clone <url-do-repositorio>
cd artigos-grao-front
```

2. Instale as dependências:
```bash
npm install
```

## Scripts Disponíveis

### Desenvolvimento
```bash
npm run dev
```
Inicia o servidor de desenvolvimento em `http://localhost:5173` com hot module replacement.

### Build
```bash
npm run build
```
Constrói a aplicação para produção. Os arquivos serão gerados na pasta `dist`.

### Preview
```bash
npm run preview
```
Serve a build de produção localmente para testes.



## Build para Produção

1. Execute o comando de build:
```bash
npm run build
```

2. Os arquivos construídos estarão no diretório `dist`
3. Faça o deploy do conteúdo de `dist` para sua plataforma de hospedagem

## Como Contribuir

1. Faça um fork do repositório
2. Crie uma branch para sua funcionalidade
3. Faça suas alterações
4. Execute o linting: `npm run lint`
5. Construa e teste: `npm run build`
6. Submeta um pull request

## Licença

Este projeto é privado e não está licenciado para uso público.