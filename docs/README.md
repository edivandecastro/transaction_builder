# Transaction Builder - Documentação Técnica

## Índice

1. [Visão Geral](#visão-geral)
2. [Arquitetura](#arquitetura)
3. [Tecnologias](#tecnologias)
4. [Estrutura do Projeto](#estrutura-do-projeto)
5. [Componentes](#componentes)
6. [Drag and Drop](#drag-and-drop)
7. [Guia de Desenvolvimento](#guia-de-desenvolvimento)
8. [Configuração](#configuração)

## Visão Geral

O **Transaction Builder** é uma aplicação web moderna construída com React e TypeScript que permite aos usuários construir interfaces de forma visual através de um sistema de drag and drop. A aplicação oferece uma experiência de construção de formulários e transações através de componentes arrastáveis.

### Funcionalidades Principais

- **Interface Visual de Construção**: Sistema drag and drop para adicionar componentes ao canvas
- **Biblioteca de Componentes**: Sidebar com diversos componentes de input disponíveis
- **Canvas Interativo**: Área de trabalho onde os componentes são renderizados
- **Layout Responsivo**: Interface adaptável com sidebars fixas e área de conteúdo dinâmica

## Arquitetura

### Padrão de Arquitetura

A aplicação segue uma arquitetura baseada em componentes React com separação clara de responsabilidades:

```
┌─────────────────────────────────────────┐
│           App.tsx (Root)                │
│  ┌───────────────────────────────────┐  │
│  │      DndContext (Provider)        │  │
│  │  ┌─────────────────────────────┐ │  │
│  │  │   Layout Components          │ │  │
│  │  │  - Header                    │ │  │
│  │  │  - Toolbar                   │ │  │
│  │  │  - Sidebar                   │ │  │
│  │  │  - Footer                    │ │  │
│  │  └─────────────────────────────┘ │  │
│  │  ┌─────────────────────────────┐ │  │
│  │  │   Canvas (Droppable)         │ │  │
│  │  │  - Component Renderer        │ │  │
│  │  └─────────────────────────────┘ │  │
│  └───────────────────────────────────┘  │
└─────────────────────────────────────────┘
```

### Fluxo de Dados

1. **Estado Global**: Gerenciado no componente `App.tsx`
   - `isComponentsSidebarOpen`: Controla visibilidade da sidebar
   - `canvasComponents`: Array de componentes renderizados no canvas
   - `activeId`: ID do componente sendo arrastado

2. **Drag and Drop Flow**:
   ```
   Sidebar Component (Draggable)
        ↓
   User Drags Component
        ↓
   DndContext.onDragStart
        ↓
   User Drops on Canvas
        ↓
   DndContext.onDragEnd
        ↓
   Component Added to State
        ↓
   Component Rendered on Canvas
   ```

## Tecnologias

### Core

- **React 19.2.0**: Biblioteca JavaScript para construção de interfaces
- **TypeScript 5.9.3**: Superset do JavaScript com tipagem estática
- **Vite 7.2.4**: Build tool e dev server de alta performance

### UI & Estilização

- **Tailwind CSS 4.1.18**: Framework CSS utility-first
- **@tailwindcss/vite**: Plugin Vite para Tailwind CSS
- **tw-animate-css 1.4.0**: Animações CSS para Tailwind

### Drag and Drop

- **@dnd-kit/core 6.3.1**: Biblioteca moderna e acessível para drag and drop

### Utilitários

- **clsx 2.1.1**: Utilitário para construção de classes CSS condicionais
- **tailwind-merge 3.4.0**: Merge de classes Tailwind sem conflitos
- **class-variance-authority 0.7.1**: Gerenciamento de variantes de componentes
- **lucide-react 0.562.0**: Biblioteca de ícones
- **motion 12.28.1**: Biblioteca de animações

### Desenvolvimento

- **ESLint 9.39.1**: Linter para JavaScript/TypeScript
- **TypeScript ESLint 8.46.4**: Regras ESLint específicas para TypeScript
- **Autoprefixer 10.4.23**: Adiciona prefixos CSS automaticamente
- **PostCSS 8.5.6**: Ferramenta para transformar CSS

## Estrutura do Projeto

```
transaction_builder/
├── docs/                    # Documentação técnica
├── public/                  # Arquivos estáticos públicos
│   ├── fonts/              # Fontes Poppins
│   └── vite.svg
├── src/
│   ├── assets/             # Assets da aplicação
│   │   └── icons/         # Ícones SVG dos componentes
│   ├── components/         # Componentes React
│   │   ├── icons/         # Componentes de ícones
│   │   ├── inputs/        # Componentes de input
│   │   └── layout/        # Componentes de layout
│   ├── lib/               # Utilitários e helpers
│   ├── App.tsx            # Componente raiz
│   ├── main.tsx           # Ponto de entrada
│   └── index.css          # Estilos globais
├── .gitignore
├── components.json
├── eslint.config.js
├── index.html
├── package.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
└── vite.config.ts
```

### Descrição de Diretórios

- **`src/components/`**: Componentes React reutilizáveis organizados por categoria
- **`src/components/layout/`**: Componentes estruturais (Header, Footer, Sidebar, Toolbar)
- **`src/components/inputs/`**: Componentes de formulário (TextInput, etc.)
- **`src/components/icons/`**: Componentes de ícones customizados
- **`src/assets/icons/`**: Arquivos SVG de ícones
- **`public/fonts/`**: Fontes customizadas (Poppins)

## Componentes

### Componentes de Layout

#### Header
- **Localização**: `src/components/layout/Header.tsx`
- **Função**: Cabeçalho fixo da aplicação
- **Características**:
  - Posição fixa no topo
  - Altura: 40px (h-10)
  - Z-index: 50
  - Contém logo e perfil do usuário

#### Toolbar
- **Localização**: `src/components/layout/Toolbar.tsx`
- **Função**: Barra lateral esquerda com ícones de ferramentas
- **Características**:
  - Largura: 48px (w-12)
  - Posição fixa
  - Contém botão para abrir sidebar de componentes

#### Sidebar
- **Localização**: `src/components/layout/Sidebar.tsx`
- **Função**: Painel lateral com biblioteca de componentes
- **Características**:
  - Largura: 288px (w-72)
  - Posição fixa
  - Scroll interno
  - Busca de componentes
  - Grid de componentes arrastáveis

#### Footer
- **Localização**: `src/components/layout/Footer.tsx`
- **Função**: Rodapé fixo da aplicação
- **Características**:
  - Posição fixa na parte inferior
  - Altura: 48px (h-12)
  - Z-index: 50

### Componentes de Input

#### TextInput
- **Localização**: `src/components/inputs/TextInput.tsx`
- **Props**:
  ```typescript
  {
    id?: string;
    label?: string;
    placeholder?: string;
    value?: string;
    onChange?: (value: string) => void;
  }
  ```
- **Características**:
  - Input de texto completo com label
  - Estilização com Tailwind CSS
  - Suporte a controle de estado

### Componentes de Ícone

#### BlocksIcon
- **Localização**: `src/components/icons/BlocksIcon.tsx`
- **Função**: Ícone de blocos para abrir sidebar

#### XIcon
- **Localização**: `src/components/icons/XIcon.tsx`
- **Função**: Ícone de fechar (X)

#### LogoIcon
- **Localização**: `src/components/icons/LogoIcon.tsx`
- **Função**: Logo da aplicação

## Drag and Drop

### Implementação

O sistema de drag and drop utiliza a biblioteca `@dnd-kit/core` que oferece:

- **Acessibilidade**: Suporte completo a teclado e screen readers
- **Performance**: Otimizado para grandes listas
- **Flexibilidade**: API extensível

### Componentes Draggable

Componentes na sidebar são tornados arrastáveis através do hook `useDraggable`:

```typescript
const { attributes, listeners, setNodeRef, isDragging } = useDraggable({
  id: 'text-input',
})
```

### Área Droppable

O canvas é uma área droppable usando o hook `useDroppable`:

```typescript
const { setNodeRef, isOver } = useDroppable({
  id: 'canvas-drop-zone',
})
```

### Fluxo de Eventos

1. **onDragStart**: Captura o início do arraste
   - Armazena o `activeId` do componente sendo arrastado
   - Ativa o `DragOverlay` para feedback visual

2. **onDragEnd**: Processa o final do arraste
   - Verifica se foi solto na área válida (`canvas-drop-zone`)
   - Cria novo componente com ID único
   - Adiciona ao estado `canvasComponents`
   - Limpa o `activeId`

### Renderização de Componentes

Os componentes são renderizados dinamicamente através da função `renderComponent`:

```typescript
const renderComponent = (component: CanvasComponent) => {
  switch (component.type) {
    case 'text-input':
      return <TextInput key={component.id} id={component.id} />
    default:
      return null
  }
}
```

## Guia de Desenvolvimento

### Pré-requisitos

- Node.js 18+ 
- npm ou yarn
- Git

### Instalação

```bash
# Clone o repositório
git clone <repository-url>

# Instale as dependências
npm install
# ou
yarn install
```

### Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev
# Inicia servidor de desenvolvimento na porta 5173

# Build de produção
npm run build
# Compila o projeto para a pasta dist/

# Preview da build
npm run preview
# Visualiza a build de produção localmente

# Linting
npm run lint
# Executa o ESLint no código
```

### Adicionando Novos Componentes

1. **Criar o componente de input**:
   ```typescript
   // src/components/inputs/NewComponent.tsx
   export default function NewComponent({ id, ...props }) {
     return <div>...</div>
   }
   ```

2. **Adicionar à sidebar**:
   ```typescript
   // src/components/layout/Sidebar.tsx
   <DraggableComponent
     id="new-component"
     icon={NewComponentIcon}
     label="New Component"
     alt="New Component"
   />
   ```

3. **Registrar no renderer**:
   ```typescript
   // src/App.tsx
   const renderComponent = (component: CanvasComponent) => {
     switch (component.type) {
       case 'new-component':
         return <NewComponent key={component.id} id={component.id} />
       // ...
     }
   }
   ```

4. **Adicionar ao DragOverlay**:
   ```typescript
   <DragOverlay>
     {activeId === 'new-component' && <NewComponent />}
   </DragOverlay>
   ```

### Convenções de Código

- **Nomenclatura**: PascalCase para componentes, camelCase para funções
- **Tipos**: Sempre definir tipos TypeScript para props
- **Imports**: Usar alias `@/` para imports absolutos
- **Estilização**: Usar Tailwind CSS, evitar CSS inline quando possível

## Configuração

### Vite

O arquivo `vite.config.ts` configura:

- **Plugins**: React e Tailwind CSS
- **Alias**: `@/` aponta para `./src`
- **Build**: Otimizado para produção

### TypeScript

Três arquivos de configuração:

- **`tsconfig.json`**: Configuração base
- **`tsconfig.app.json`**: Configuração para código da aplicação
- **`tsconfig.node.json`**: Configuração para código Node.js (Vite)

### Tailwind CSS

Configurado via `@tailwindcss/vite` plugin:

- **Fonte padrão**: Poppins (todas as variantes)
- **Tema customizado**: Variáveis CSS para cores e espaçamentos
- **Dark mode**: Suporte via `@custom-variant`

### Fontes

As fontes Poppins estão em `public/fonts/poppins/` e são carregadas via `@font-face` no `index.css`:

- 18 variantes (9 pesos × 2 estilos)
- Pesos: 100 (Thin) até 900 (Black)
- Estilos: Normal e Italic

### ESLint

Configurado com:

- TypeScript ESLint
- React Hooks rules
- React Refresh rules

## Próximos Passos

- [ ] Adicionar mais componentes de input
- [ ] Implementar edição de propriedades dos componentes
- [ ] Adicionar sistema de salvamento/exportação
- [ ] Implementar undo/redo
- [ ] Adicionar testes unitários
- [ ] Melhorar acessibilidade
- [ ] Otimizar performance para grandes quantidades de componentes
