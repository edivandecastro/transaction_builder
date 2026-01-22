# Documentação do Sistema Drag and Drop

## Visão Geral

O Transaction Builder utiliza a biblioteca **@dnd-kit/core** para implementar um sistema completo de drag and drop que permite aos usuários arrastar componentes da sidebar para o canvas.

## Por que @dnd-kit?

- ✅ **Acessibilidade**: Suporte completo a teclado e screen readers
- ✅ **Performance**: Otimizado para grandes listas e animações suaves
- ✅ **Flexibilidade**: API extensível e customizável
- ✅ **TypeScript**: Tipagem completa
- ✅ **Moderno**: Construído com as melhores práticas React

## Arquitetura do Sistema

### Componentes Principais

```
DndContext (Provider)
├── Draggable Components (Sidebar)
│   └── useDraggable hook
├── Droppable Area (Canvas)
│   └── useDroppable hook
└── DragOverlay (Preview)
```

## Implementação

### 1. DndContext

O `DndContext` é o provider que envolve toda a aplicação e gerencia os eventos de drag and drop.

**Localização**: `src/App.tsx`

```typescript
<DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
  {/* Aplicação */}
</DndContext>
```

**Event Handlers**:

#### onDragStart

Disparado quando o usuário começa a arrastar um componente.

```typescript
const handleDragStart = (event: DragStartEvent) => {
  setActiveId(event.active.id as string)
}
```

**O que faz**:
- Captura o ID do componente sendo arrastado
- Atualiza o estado `activeId`
- Ativa o `DragOverlay` para mostrar preview

#### onDragEnd

Disparado quando o usuário solta o componente.

```typescript
const handleDragEnd = (event: DragEndEvent) => {
  const { active, over } = event
  
  if (!over) {
    setActiveId(null)
    return
  }

  if (over.id === 'canvas-drop-zone') {
    const componentType = active.id as string
    
    const newComponent: CanvasComponent = {
      id: `component-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      type: componentType,
    }

    setCanvasComponents((prev) => [...prev, newComponent])
  }

  setActiveId(null)
}
```

**O que faz**:
- Verifica se foi solto em área válida
- Cria novo componente com ID único
- Adiciona ao estado `canvasComponents`
- Limpa o `activeId`

### 2. Componentes Draggable

Componentes na sidebar são tornados arrastáveis usando o hook `useDraggable`.

**Localização**: `src/components/layout/Sidebar.tsx`

```typescript
function DraggableComponent({ id, icon, label, alt }: DraggableComponentProps) {
  const { attributes, listeners, setNodeRef, isDragging } = useDraggable({
    id,
  })

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      className={`flex flex-col items-center cursor-grab group ${isDragging ? 'opacity-50' : ''}`}
    >
      {/* Conteúdo */}
    </div>
  )
}
```

**Hooks e Props**:

- **`setNodeRef`**: Ref que deve ser atribuída ao elemento raiz
- **`listeners`**: Event handlers para mouse e touch
- **`attributes`**: Atributos ARIA para acessibilidade
- **`isDragging`**: Boolean indicando se está sendo arrastado

**Uso**:

```tsx
<DraggableComponent
  id="text-input"
  icon={TextInputIcon}
  label="Text Input"
  alt="Text Input"
/>
```

### 3. Área Droppable

O canvas é uma área droppable usando o hook `useDroppable`.

**Localização**: `src/App.tsx`

```typescript
function DroppableCanvas({ children }: { children: React.ReactNode }) {
  const { setNodeRef, isOver } = useDroppable({
    id: 'canvas-drop-zone',
  })

  return (
    <div
      ref={setNodeRef}
      className={`relative bg-white border-2 ${isOver ? 'border-blue-500' : 'border-gray-300'} p-8 min-h-[600px] w-full h-full transition-colors`}
    >
      {children}
    </div>
  )
}
```

**Hooks e Props**:

- **`setNodeRef`**: Ref que deve ser atribuída ao elemento droppable
- **`isOver`**: Boolean indicando se um item está sobre a área

**Feedback Visual**:
- Borda cinza quando não há item sobre
- Borda azul quando item está sobre (`isOver === true`)
- Transição suave entre estados

### 4. DragOverlay

O `DragOverlay` mostra um preview do componente durante o arraste.

**Localização**: `src/App.tsx`

```typescript
<DragOverlay>
  {activeId ? (
    <div className="opacity-50">
      {activeId === 'text-input' && <TextInput />}
    </div>
  ) : null}
</DragOverlay>
```

**Características**:
- Renderiza apenas durante o arraste
- Segue o cursor do mouse
- Opacidade reduzida para feedback visual
- Renderiza o componente real para preview preciso

## Fluxo Completo

### 1. Início do Arraste

```
Usuário clica e segura componente
    ↓
useDraggable listeners capturam evento
    ↓
onDragStart disparado
    ↓
activeId atualizado
    ↓
DragOverlay mostra preview
```

### 2. Durante o Arraste

```
Usuário move mouse
    ↓
DragOverlay segue cursor
    ↓
useDroppable detecta quando sobre canvas
    ↓
isOver = true
    ↓
Borda do canvas muda para azul
```

### 3. Fim do Arraste

```
Usuário solta componente
    ↓
onDragEnd disparado
    ↓
Verifica se over.id === 'canvas-drop-zone'
    ↓
Cria novo componente
    ↓
Adiciona ao canvasComponents
    ↓
Componente renderizado no canvas
    ↓
activeId limpo
    ↓
DragOverlay desaparece
```

## IDs e Identificação

### IDs de Componentes

Cada tipo de componente tem um ID único:

- `'text-input'`: Componente TextInput
- `'email-input'`: Componente Email (futuro)
- `'password-input'`: Componente Password (futuro)

### ID da Área Droppable

- `'canvas-drop-zone'`: Área principal do canvas

### IDs de Componentes no Canvas

Componentes adicionados ao canvas recebem IDs únicos:

```typescript
id: `component-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
```

Formato: `component-1234567890-abc123def`

## Adicionando Novos Componentes Draggable

### Passo 1: Criar o Componente

```typescript
// src/components/inputs/EmailInput.tsx
export default function EmailInput({ id, ...props }) {
  return <input type="email" id={id} {...props} />
}
```

### Passo 2: Adicionar à Sidebar

```typescript
// src/components/layout/Sidebar.tsx
<DraggableComponent
  id="email-input"
  icon={EmailInputIcon}
  label="Email"
  alt="Email Input"
/>
```

### Passo 3: Registrar no Renderer

```typescript
// src/App.tsx
const renderComponent = (component: CanvasComponent) => {
  switch (component.type) {
    case 'email-input':
      return <EmailInput key={component.id} id={component.id} />
    // ...
  }
}
```

### Passo 4: Adicionar ao DragOverlay

```typescript
// src/App.tsx
<DragOverlay>
  {activeId === 'email-input' && <EmailInput />}
</DragOverlay>
```

## Acessibilidade

### Suporte a Teclado

@dnd-kit fornece suporte completo a teclado:

- **Espaço**: Inicia arraste
- **Arrow Keys**: Move item durante arraste
- **Enter/Escape**: Confirma/cancela arraste

### Screen Readers

Atributos ARIA são adicionados automaticamente:

- `role="button"` em elementos draggable
- `aria-grabbed` indica estado de arraste
- `aria-dropeffect` indica efeito do drop

## Performance

### Otimizações

1. **Lazy Rendering**: DragOverlay só renderiza quando necessário
2. **Event Delegation**: @dnd-kit usa event delegation eficiente
3. **Minimal Re-renders**: Apenas componentes afetados re-renderizam

### Boas Práticas

- Manter IDs únicos e consistentes
- Evitar re-renders desnecessários durante arraste
- Usar `isDragging` para otimizar renderização

## Troubleshooting

### Componente não arrasta

**Possíveis causas**:
- `setNodeRef` não atribuído
- `listeners` não aplicados
- Elemento com `pointer-events: none`

**Solução**:
```typescript
<div ref={setNodeRef} {...listeners} {...attributes}>
  {/* Conteúdo */}
</div>
```

### Drop não funciona

**Possíveis causas**:
- ID do droppable não corresponde
- `over` é null
- Handler não verifica `over.id`

**Solução**:
```typescript
if (over && over.id === 'canvas-drop-zone') {
  // Processar drop
}
```

### Preview não aparece

**Possíveis causas**:
- `activeId` não atualizado
- DragOverlay fora do DndContext
- Componente não renderizado no DragOverlay

**Solução**:
```typescript
<DragOverlay>
  {activeId === 'text-input' && <TextInput />}
</DragOverlay>
```

## Extensões Futuras

### Múltiplas Áreas Droppable

```typescript
const { setNodeRef: setCanvasRef } = useDroppable({ id: 'canvas' })
const { setNodeRef: setToolbarRef } = useDroppable({ id: 'toolbar' })
```

### Drag entre Listas

Usar `@dnd-kit/sortable` para reordenar itens.

### Restrições de Drop

```typescript
const { setNodeRef, isOver } = useDroppable({
  id: 'canvas-drop-zone',
  disabled: someCondition, // Desabilitar drop
})
```

### Animações Customizadas

Usar `@dnd-kit/core` com `@dnd-kit/utilities` para animações avançadas.
