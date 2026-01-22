# Arquitetura do Transaction Builder

## Visão Geral da Arquitetura

O Transaction Builder é construído seguindo uma arquitetura baseada em componentes React com gerenciamento de estado local e sistema de drag and drop integrado.

## Camadas da Aplicação

### 1. Camada de Apresentação (Presentation Layer)

Responsável pela renderização e interação do usuário.

**Componentes Principais:**
- `App.tsx`: Componente raiz que orquestra toda a aplicação
- `Header.tsx`: Cabeçalho da aplicação
- `Toolbar.tsx`: Barra de ferramentas lateral
- `Sidebar.tsx`: Painel de componentes
- `Footer.tsx`: Rodapé da aplicação

### 2. Camada de Componentes (Component Layer)

Componentes reutilizáveis organizados por categoria.

**Estrutura:**
```
components/
├── layout/      # Componentes estruturais
├── inputs/      # Componentes de formulário
└── icons/       # Componentes de ícones
```

### 3. Camada de Estado (State Layer)

Gerenciamento de estado usando React Hooks.

**Estados Principais:**
- `isComponentsSidebarOpen`: Visibilidade da sidebar
- `canvasComponents`: Lista de componentes no canvas
- `activeId`: ID do componente sendo arrastado

### 4. Camada de Dados (Data Layer)

Estruturas de dados e tipos TypeScript.

**Tipos Principais:**
```typescript
type CanvasComponent = {
  id: string;
  type: string;
  props?: Record<string, unknown>;
}
```

## Padrões de Design

### 1. Component Composition

Componentes são compostos de forma hierárquica:

```
App
├── DndContext
    ├── Header
    ├── MainContent
    │   ├── Toolbar
    │   ├── Sidebar (condicional)
    │   └── Canvas
    │       └── DroppableCanvas
    │           └── ComponentRenderer
    ├── Footer
    └── DragOverlay
```

### 2. Controlled Components

Todos os componentes de input são controlados, recebendo `value` e `onChange` como props.

### 3. Render Props Pattern

O `DroppableCanvas` usa render props para passar children:

```typescript
<DroppableCanvas>
  {children}
</DroppableCanvas>
```

### 4. Factory Pattern

A função `renderComponent` atua como factory para criar componentes baseado no tipo:

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

## Fluxo de Dados

### Unidirectional Data Flow

```
User Action
    ↓
Event Handler
    ↓
State Update
    ↓
Re-render
    ↓
UI Update
```

### Drag and Drop Flow

```
1. User clicks on draggable component
   ↓
2. onDragStart event fires
   ↓
3. activeId state updated
   ↓
4. DragOverlay shows preview
   ↓
5. User drags over canvas
   ↓
6. isOver state updated (visual feedback)
   ↓
7. User drops component
   ↓
8. onDragEnd event fires
   ↓
9. New component added to canvasComponents
   ↓
10. Component rendered on canvas
```

## Gerenciamento de Estado

### Estado Local vs Global

**Estado Local:**
- Visibilidade de modais
- Estados de UI temporários
- Estados de componentes isolados

**Estado Global (App.tsx):**
- Componentes do canvas
- Estado da sidebar
- Componente ativo no drag

### Futuras Melhorias

Para projetos maiores, considerar:
- Context API para estado compartilhado
- Zustand ou Redux para estado complexo
- React Query para dados do servidor

## Performance

### Otimizações Implementadas

1. **Code Splitting**: Vite faz code splitting automático
2. **Tree Shaking**: Dependências não utilizadas são removidas
3. **Font Loading**: `font-display: swap` para carregamento otimizado
4. **CSS Optimization**: Tailwind CSS purga classes não utilizadas

### Otimizações Futuras

- React.memo para componentes pesados
- useMemo para cálculos custosos
- useCallback para funções passadas como props
- Lazy loading de componentes

## Acessibilidade

### Implementações Atuais

- **@dnd-kit/core**: Biblioteca acessível por padrão
- **Semantic HTML**: Uso de elementos semânticos
- **ARIA Labels**: Onde necessário

### Melhorias Necessárias

- Adicionar `aria-label` em todos os botões
- Implementar navegação por teclado completa
- Adicionar foco visível em todos os elementos interativos
- Suporte a screen readers

## Segurança

### Boas Práticas Implementadas

- TypeScript para type safety
- Validação de props
- Sanitização de inputs (quando necessário)

### Considerações Futuras

- Validação de dados de entrada
- Sanitização de HTML renderizado
- Proteção contra XSS
- CSP (Content Security Policy)

## Testabilidade

### Estrutura Testável

- Componentes isolados e reutilizáveis
- Funções puras onde possível
- Separação de lógica e apresentação

### Estratégias de Teste

**Unit Tests:**
- Componentes individuais
- Funções utilitárias
- Hooks customizados

**Integration Tests:**
- Fluxo de drag and drop
- Interação entre componentes
- Gerenciamento de estado

**E2E Tests:**
- Fluxos completos do usuário
- Cenários de uso reais

## Escalabilidade

### Estrutura Escalável

- Organização modular
- Separação de responsabilidades
- Componentes reutilizáveis

### Limitações Atuais

- Estado gerenciado apenas no App.tsx
- Sem persistência de dados
- Sem sistema de plugins

### Melhorias para Escala

1. **State Management**: Context API ou Zustand
2. **Data Persistence**: LocalStorage ou backend
3. **Plugin System**: Sistema de extensões
4. **Component Registry**: Registro dinâmico de componentes
5. **Theming**: Sistema de temas customizáveis

## Manutenibilidade

### Código Limpo

- Nomenclatura clara e consistente
- Componentes pequenos e focados
- Separação de concerns
- Documentação inline

### Refatoração Contínua

- Revisão regular do código
- Remoção de código morto
- Atualização de dependências
- Melhoria de performance
