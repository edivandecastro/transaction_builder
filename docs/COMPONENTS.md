# Documentação de Componentes

## Componentes de Layout

### Header

**Arquivo**: `src/components/layout/Header.tsx`

**Descrição**: Cabeçalho fixo da aplicação localizado no topo da tela.

**Características**:
- Posição fixa (`fixed top-0`)
- Altura de 40px (`h-10`)
- Z-index alto (50) para ficar acima de outros elementos
- Contém logo e informações do usuário

**Props**: Nenhuma (componente sem props)

**Estrutura**:
```tsx
<header>
  <div>Logo</div>
  <h1>Microservices</h1>
  <div>User Profile</div>
</header>
```

---

### Toolbar

**Arquivo**: `src/components/layout/Toolbar.tsx`

**Descrição**: Barra lateral esquerda fixa contendo ícones de ferramentas.

**Props**:
```typescript
{
  isComponentsSidebarOpen: boolean;
  setIsComponentsSidebarOpen: (open: boolean) => void;
}
```

**Características**:
- Largura de 48px (`w-12`)
- Posição fixa à esquerda
- Contém botão para abrir/fechar sidebar de componentes
- Altura ajustada para não sobrepor header e footer

**Componentes Internos**:
- `BlocksIcon`: Ícone para abrir sidebar

---

### Sidebar

**Arquivo**: `src/components/layout/Sidebar.tsx`

**Descrição**: Painel lateral deslizante com biblioteca de componentes arrastáveis.

**Props**:
```typescript
{
  onClose: () => void;
}
```

**Características**:
- Largura de 288px (`w-72`)
- Posição fixa
- Scroll interno quando conteúdo excede altura
- Busca de componentes
- Grid de componentes organizados por categoria

**Estrutura**:
```
Sidebar
├── Header (título + botão fechar)
├── Search Bar
└── Components List
    ├── Text Inputs Section
    ├── Number Inputs Section
    └── Select Inputs Section
```

**Componentes Internos**:
- `DraggableComponent`: Componente wrapper para itens arrastáveis
- `XIcon`: Ícone de fechar

#### DraggableComponent

**Descrição**: Componente wrapper que torna qualquer item arrastável.

**Props**:
```typescript
{
  id: string;        // ID único do componente
  icon: string;      // Caminho do ícone SVG
  label: string;     // Rótulo exibido
  alt: string;       // Texto alternativo para acessibilidade
}
```

**Hooks Utilizados**:
- `useDraggable`: Hook do @dnd-kit/core para tornar arrastável

**Estados Visuais**:
- `isDragging`: Aplica opacidade reduzida durante arraste

---

### Footer

**Arquivo**: `src/components/layout/Footer.tsx`

**Descrição**: Rodapé fixo da aplicação.

**Características**:
- Posição fixa na parte inferior
- Altura de 48px (`h-12`)
- Z-index alto (50)
- Exibe informações do ambiente (ex: "production")

**Props**: Nenhuma

---

## Componentes de Input

### TextInput

**Arquivo**: `src/components/inputs/TextInput.tsx`

**Descrição**: Componente de input de texto completo com label opcional.

**Props**:
```typescript
{
  id?: string;                    // ID do input
  label?: string;                 // Rótulo do campo (padrão: 'Text Input')
  placeholder?: string;            // Placeholder (padrão: 'Enter text...')
  value?: string;                  // Valor controlado
  onChange?: (value: string) => void; // Callback de mudança
}
```

**Características**:
- Input de texto completo
- Label opcional
- Estilização com Tailwind CSS
- Estados de foco estilizados
- Suporte a controle de estado (controlled component)

**Exemplo de Uso**:
```tsx
<TextInput
  id="username"
  label="Username"
  placeholder="Enter your username"
  value={username}
  onChange={setUsername}
/>
```

**Estados Visuais**:
- Normal: Borda cinza
- Foco: Borda azul com anel de foco
- Hover: Transição suave

---

## Componentes de Ícone

### BlocksIcon

**Arquivo**: `src/components/icons/BlocksIcon.tsx`

**Descrição**: Ícone de blocos usado para abrir a sidebar de componentes.

**Props**:
```typescript
{
  id?: string;
  className?: string;
  onClick?: () => void;
  size?: number;
  title?: string;
}
```

**Características**:
- Ícone SVG animado
- Suporte a interações (onClick)
- Tamanho customizável
- Acessibilidade (title)

---

### XIcon

**Arquivo**: `src/components/icons/XIcon.tsx`

**Descrição**: Ícone de fechar (X) usado em modais e sidebars.

**Props**:
```typescript
{
  size?: number;
  className?: string;
}
```

**Características**:
- Ícone SVG simples
- Tamanho customizável
- Estilização via className

---

### LogoIcon

**Arquivo**: `src/components/icons/LogoIcon.tsx`

**Descrição**: Logo da aplicação.

**Props**: Nenhuma

**Características**:
- SVG inline
- Estilização via Tailwind

---

## Componentes Especiais

### DroppableCanvas

**Arquivo**: `src/App.tsx` (componente interno)

**Descrição**: Área droppable onde componentes podem ser soltos.

**Props**:
```typescript
{
  children: React.ReactNode;
}
```

**Características**:
- Usa `useDroppable` do @dnd-kit/core
- Feedback visual quando item está sobre a área (borda azul)
- ID: `'canvas-drop-zone'`

**Estados Visuais**:
- Normal: Borda cinza (`border-gray-300`)
- Sobre: Borda azul (`border-blue-500`)
- Transição suave entre estados

---

## Padrões de Componentes

### Controlled Components

Todos os componentes de input seguem o padrão de controlled components:

```typescript
// Componente controlado
<TextInput
  value={state}
  onChange={setState}
/>
```

### Component Composition

Componentes são compostos de forma hierárquica:

```tsx
<Sidebar>
  <DraggableComponent />
  <DraggableComponent />
</Sidebar>
```

### Render Props

Alguns componentes usam render props para flexibilidade:

```tsx
<DroppableCanvas>
  {children}
</DroppableCanvas>
```

## Convenções de Nomenclatura

- **Componentes**: PascalCase (`TextInput`, `Sidebar`)
- **Props**: camelCase (`isOpen`, `onClose`)
- **IDs**: kebab-case (`canvas-drop-zone`, `main-tag`)
- **Classes CSS**: Tailwind utility classes

## Tipos TypeScript

Todos os componentes têm tipos definidos para props:

```typescript
type ComponentProps = {
  prop1: string;
  prop2?: number;  // Opcional
  prop3: () => void;
}
```

## Acessibilidade

### Boas Práticas Implementadas

- Uso de elementos semânticos HTML
- Labels associados a inputs
- Textos alternativos em imagens
- Suporte a navegação por teclado (via @dnd-kit)

### Melhorias Necessárias

- Adicionar `aria-label` em botões sem texto
- Implementar `aria-expanded` em sidebars
- Adicionar `role` apropriados
- Melhorar feedback para screen readers

## Testabilidade

### Estrutura Testável

Componentes são testáveis porque:
- Recebem props claramente definidas
- Não dependem de estado global (exceto App)
- Lógica separada da apresentação
- Funções puras onde possível

### Exemplo de Teste

```typescript
import { render, screen } from '@testing-library/react'
import TextInput from '@/components/inputs/TextInput'

test('renders text input with label', () => {
  render(<TextInput label="Username" />)
  expect(screen.getByLabelText('Username')).toBeInTheDocument()
})
```
