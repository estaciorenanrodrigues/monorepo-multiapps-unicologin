# Monorepo Nx - Web

Este é um monorepo gerenciado pelo **Nx** que contém aplicações web React e bibliotecas compartilhadas. O projeto utiliza **Vite** como bundler, **TypeScript** para tipagem estática, **Tailwind CSS** para estilização e **React Router** para roteamento.

## 📁 Estrutura do Projeto

```
web/
├── apps/                    # Aplicações executáveis
│   └── login/              # Aplicação de login (porta 4202)
│
├── libs/                    # Bibliotecas compartilhadas
│   ├── apps/               # Aplicações como bibliotecas
│   │   ├── admin/          # Aplicação administrativa
│   │   └── client/         # Aplicação cliente
│   ├── components/         # Componentes React reutilizáveis
│   ├── context/            # Contextos React (ex: autenticação)
│   ├── hooks/              # Custom hooks React
│   ├── services/           # Serviços e APIs
│   └── utils/              # Funções utilitárias
│
├── nx.json                  # Configuração do Nx
├── tsconfig.base.json      # Configuração base do TypeScript
└── package.json            # Dependências do projeto
```

## 🚀 Aplicações (Apps)

### Login (`apps/login`)
Aplicação standalone de autenticação que roda na porta **4202**.

- **Tecnologia**: React + Vite
- **Roteamento**: React Router DOM
- **Estilização**: Tailwind CSS
- **Porta**: 4202

## 📚 Bibliotecas (Libs)

### `@web/admin` (`libs/apps/admin`)
Aplicação administrativa como biblioteca compartilhada.

**Páginas disponíveis:**
- `/customers` - Gerenciamento de clientes
- `/products` - Gerenciamento de produtos
- `/contracts` - Gerenciamento de contratos

### `@web/client` (`libs/apps/client`)
Aplicação cliente como biblioteca compartilhada.

### `@web/components` (`libs/components`)
Componentes React reutilizáveis compartilhados entre as aplicações.

**Componentes:**
- `Login` - Componente de login

### `@web/context` (`libs/context`)
Contextos React para gerenciamento de estado global.

**Contextos:**
- `contextLogin` - Contexto de autenticação/login

### `@web/hooks` (`libs/hooks`)
Custom hooks React reutilizáveis.

**Hooks:**
- `useAuth` - Hook para autenticação

### `@web/services` (`libs/services`)
Serviços e integrações com APIs.

**Serviços:**
- `auth` - Serviço de autenticação

### `@web/utils` (`libs/utils`)
Funções utilitárias e helpers.

## 🛠️ Tecnologias

- **Nx 22.0.2** - Ferramenta de monorepo
- **React 19.2.0** - Biblioteca UI
- **TypeScript 5.9.3** - Tipagem estática
- **Vite 5.4.11** - Bundler e dev server
- **React Router DOM 7.9.5** - Roteamento
- **Tailwind CSS 3.4.0** - Framework CSS
- **Vitest 3.0.0** - Framework de testes

## 📦 Instalação

```bash
npm install
```

## 🎯 Scripts Disponíveis

### Desenvolvimento
```bash
# Executar aplicação de login
npm run dev:login

# Executar aplicação admin
npm run dev:admin

# Executar aplicação client
npm run dev:client
```

### Build
```bash
# Build da aplicação de login
npm run build:login

# Build da aplicação admin
npm run build:admin

# Build da aplicação client
npm run build:client

# Build de todas as aplicações
npm run build:all
```

## 🔧 Configuração de Paths (TypeScript)

O projeto utiliza path aliases configurados no `tsconfig.base.json` para facilitar imports:

```typescript
// Exemplos de imports
import { Login } from '@web/components';
import { useAuth } from '@web/hooks';
import { authService } from '@web/services';
import { MyUtils } from '@web/utils';
import { AdminApp } from '@web/admin';
import { ClientApp } from '@web/client';
```

**Paths disponíveis:**
- `@web/components` → `libs/components/src/index.ts`
- `@web/services` → `libs/services/src/index.ts`
- `@web/hooks` → `libs/hooks/src/index.ts`
- `@web/utils` → `libs/utils/src/index.ts`
- `@web/context` → `libs/context/src/index.ts`
- `@web/admin` → `libs/apps/admin/src/index.ts`
- `@web/client` → `libs/apps/client/src/index.ts`
- `@web/admin/page/customers` → `libs/apps/admin/src/page/customers/index.tsx`
- `@web/admin/page/products` → `libs/apps/admin/src/page/products/index.tsx`
- `@web/admin/page/contracts` → `libs/apps/admin/src/page/contracts/index.tsx`

## 🏗️ Arquitetura

### Monorepo com Nx
Este projeto utiliza a arquitetura de monorepo gerenciada pelo Nx, que oferece:

- **Compartilhamento de código**: Bibliotecas podem ser reutilizadas entre aplicações
- **Build incremental**: Apenas o que mudou é reconstruído
- **Cache inteligente**: Resultados de builds são cacheados
- **Dependency graph**: Visualização de dependências entre projetos

### Estrutura de Bibliotecas
As bibliotecas são organizadas por responsabilidade:

- **apps/** - Aplicações completas como bibliotecas (para reutilização)
- **components/** - Componentes UI reutilizáveis
- **context/** - Estado global e contextos React
- **hooks/** - Lógica reutilizável em forma de hooks
- **services/** - Lógica de negócio e integrações
- **utils/** - Funções auxiliares e helpers

## 📝 Convenções

- Cada biblioteca possui seu próprio `tsconfig.json` e `project.json`
- Componentes devem ser exportados através do `index.ts` da biblioteca
- Aplicações standalone ficam em `apps/`
- Aplicações como bibliotecas ficam em `libs/apps/`

## 🔍 Comandos Nx Úteis

```bash
# Ver gráfico de dependências
nx graph

# Executar um projeto específico
nx serve <nome-do-projeto>

# Build de um projeto específico
nx build <nome-do-projeto>

# Ver detalhes de um projeto
nx show project <nome-do-projeto>

# Executar testes
nx test <nome-do-projeto>
```

## 📄 Licença

MIT

