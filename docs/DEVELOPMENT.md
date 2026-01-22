# Guia de Desenvolvimento

## Configuração do Ambiente

### Pré-requisitos

- **Node.js**: Versão 18 ou superior
- **npm**: Versão 9 ou superior (ou yarn)
- **Git**: Para controle de versão
- **Editor**: VS Code recomendado (com extensões TypeScript e ESLint)

### Instalação Inicial

```bash
# Clone o repositório
git clone <repository-url>
cd transaction_builder

# Instale as dependências
npm install
# ou
yarn install
```

### Variáveis de Ambiente

Atualmente não há variáveis de ambiente necessárias. Para futuras integrações:

```bash
# Criar arquivo .env
touch .env

# Adicionar variáveis
VITE_API_URL=http://localhost:3000
VITE_APP_NAME=Transaction Builder
```

## Scripts Disponíveis

### Desenvolvimento

```bash
npm run dev
```

Inicia o servidor de desenvolvimento Vite na porta `5173` (padrão).

**Características**:
- Hot Module Replacement (HMR)
- Recarregamento automático
- Source maps para debugging
- TypeScript checking

### Build de Produção

```bash
npm run build
```

Compila o projeto para produção na pasta `dist/`.

**Processo**:
1. TypeScript compilation (`tsc -b`)
2. Vite build com otimizações
3. Minificação de código
4. Tree shaking
5. Asset optimization

### Preview da Build

```bash
npm run preview
```

Visualiza a build de produção localmente antes do deploy.

### Linting

```bash
npm run lint
```

Executa o ESLint em todo o código do projeto.

**Configuração**: `eslint.config.js`

## Estrutura de Desenvolvimento

### Workflow Recomendado

1. **Criar branch**:
   ```bash
   git checkout -b feature/nova-funcionalidade
   ```

2. **Desenvolver**:
   - Fazer alterações no código
   - Testar localmente (`npm run dev`)
   - Verificar linting (`npm run lint`)

3. **Commit**:
   ```bash
   git add .
   git commit -m "feat: adiciona nova funcionalidade"
   ```

4. **Push e Pull Request**:
   ```bash
   git push origin feature/nova-funcionalidade
   ```

### Convenções de Commit

Seguir [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` Nova funcionalidade
- `fix:` Correção de bug
- `docs:` Documentação
- `style:` Formatação, ponto e vírgula, etc.
- `refactor:` Refatoração de código
- `test:` Testes
- `chore:` Tarefas de manutenção

## Adicionando Novos Componentes

### 1. Criar o Componente

```typescript
// src/components/inputs/NewComponent.tsx
type NewComponentProps = {
  id?: string;
  label?: string;
  // outras props
};

export default function NewComponent({ 
  id, 
  label = 'Default Label',
  ...props 
}: NewComponentProps) {
  return (
    <div className="w-full">
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
      )}
      {/* Implementação do componente */}
    </div>
  );
}
```

### 2. Adicionar Ícone (se necessário)

1. Adicionar SVG em `src/assets/icons/NewComponentIcon.svg`
2. Importar no Sidebar:
   ```typescript
   import NewComponentIcon from '@/assets/icons/NewComponentIcon.svg'
   ```

### 3. Adicionar à Sidebar

```typescript
// src/components/layout/Sidebar.tsx
<DraggableComponent
  id="new-component"
  icon={NewComponentIcon}
  label="New Component"
  alt="New Component"
/>
```

### 4. Registrar no App

```typescript
// src/App.tsx

// Importar
import NewComponent from '@/components/inputs/NewComponent'

// Adicionar ao renderer
const renderComponent = (component: CanvasComponent) => {
  switch (component.type) {
    case 'new-component':
      return <NewComponent key={component.id} id={component.id} />
    // ...
  }
}

// Adicionar ao DragOverlay
<DragOverlay>
  {activeId === 'new-component' && <NewComponent />}
</DragOverlay>
```

## Debugging

### DevTools do Navegador

1. **React DevTools**: Instalar extensão do navegador
2. **Console**: Verificar erros e warnings
3. **Network**: Verificar requisições (quando houver API)

### Debugging TypeScript

```bash
# Verificar tipos sem build
npx tsc --noEmit
```

### Debugging CSS

- Usar DevTools do navegador
- Inspecionar classes Tailwind
- Verificar se classes estão sendo aplicadas

### Logs de Debug

```typescript
// Adicionar logs temporários
console.log('Debug:', { variable1, variable2 })

// Remover antes do commit
```

## Testes

### Estrutura de Testes (Futuro)

```
src/
├── components/
│   └── inputs/
│       ├── TextInput.tsx
│       └── TextInput.test.tsx
└── __tests__/
    └── utils.test.ts
```

### Executar Testes (quando implementado)

```bash
npm test
npm run test:watch
npm run test:coverage
```

## Performance

### Analisar Bundle

```bash
npm run build
npx vite-bundle-visualizer
```

### Otimizações

1. **Code Splitting**: Vite faz automaticamente
2. **Lazy Loading**: Implementar quando necessário
3. **Memoization**: Usar `React.memo` para componentes pesados
4. **Virtual Scrolling**: Para listas grandes

## Troubleshooting

### Erro: "Cannot find module"

**Causa**: Path alias não configurado ou import incorreto

**Solução**:
```typescript
// ✅ Correto
import Component from '@/components/Component'

// ❌ Incorreto
import Component from './components/Component'
```

### Erro: TypeScript errors

**Causa**: Tipos não definidos ou incorretos

**Solução**:
```bash
# Verificar tipos
npx tsc --noEmit

# Corrigir tipos ou adicionar @ts-ignore (não recomendado)
```

### Erro: Tailwind classes não funcionam

**Causa**: Classes não estão no build ou sintaxe incorreta

**Solução**:
- Verificar sintaxe da classe
- Verificar se classe existe no Tailwind
- Rebuild do projeto

### Erro: Drag and drop não funciona

**Causa**: DndContext não envolvendo componentes ou hooks não aplicados

**Solução**:
- Verificar se DndContext envolve toda aplicação
- Verificar se `setNodeRef`, `listeners` e `attributes` estão aplicados
- Verificar IDs dos componentes

## Boas Práticas

### Código

- ✅ Usar TypeScript para type safety
- ✅ Componentes pequenos e focados
- ✅ Props tipadas
- ✅ Nomenclatura clara
- ✅ Comentários quando necessário
- ❌ Evitar `any` types
- ❌ Evitar componentes muito grandes
- ❌ Evitar lógica complexa em componentes

### CSS

- ✅ Usar Tailwind CSS
- ✅ Classes utilitárias
- ✅ Responsive design
- ❌ Evitar CSS inline
- ❌ Evitar estilos globais desnecessários

### Git

- ✅ Commits pequenos e frequentes
- ✅ Mensagens descritivas
- ✅ Branches por feature
- ❌ Commits grandes
- ❌ Mensagens genéricas

## Recursos Úteis

### Documentação

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [@dnd-kit](https://docs.dndkit.com/)

### Ferramentas

- [React DevTools](https://react.dev/learn/react-developer-tools)
- [TypeScript Playground](https://www.typescriptlang.org/play)
- [Tailwind Play](https://play.tailwindcss.com/)

## Próximos Passos

- [ ] Configurar testes unitários (Vitest)
- [ ] Configurar testes E2E (Playwright)
- [ ] Adicionar CI/CD
- [ ] Configurar pre-commit hooks (Husky)
- [ ] Adicionar Storybook para componentes
- [ ] Configurar análise de bundle
