# Correção do Deploy do GitHub Pages

## Problemas Identificados

### 1. Redirecionamento Incorreto no 404.html
- **Problema**: O arquivo `public/404.html` estava redirecionando para `/universe.html` que não existe no Next.js
- **Solução**: Atualizado para redirecionar para `/Quantum-Graph.github.io/` (com basePath correto)

### 2. Problemas de Build com SWC
- **Problema**: O Next.js estava tendo dificuldades para compilar com o SWC no ambiente WSL
- **Solução**: Instalado `@next/swc-linux-x64-gnu` como dependência de desenvolvimento

### 3. Configuração de BasePath
- **Status**: Já estava correta em `next.config.js` com:
  - `basePath: '/Quantum-Graph.github.io'`
  - `assetPrefix: '/Quantum-Graph.github.io'`
  - `output: 'export'` para geração estática

### 4. Memória Insuficiente Durante Build
- **Problema**: Build estava travando por falta de memória ao processar componentes 3D
- **Solução**: Adicionado `NODE_OPTIONS='--max-old-space-size=4096'` no script de build

## Arquivos Modificados

1. **public/404.html**
   - Corrigido redirecionamento para usar basePath correto
   - Atualizado link de fallback para a página principal

2. **package.json**
   - Modificado `build:production` para usar `cross-env` com alocação de memória aumentada
   - Adicionado `@next/swc-linux-x64-gnu` nas devDependencies

3. **.env.production** (criado)
   - Define variáveis de ambiente para produção
   - Inclui `NEXT_PUBLIC_BASE_PATH` para uso no código cliente

## Como o GitHub Pages Funciona com Next.js

1. **Static Export**: Next.js gera arquivos HTML estáticos na pasta `out/`
2. **BasePath**: Necessário para projetos hospedados em subdiretório (não na raiz do domínio)
3. **GitHub Actions**: Automatiza o processo de build e deploy
4. **Arquivo .nojekyll**: Previne que o GitHub Pages processe arquivos com Jekyll

## Estrutura de Deploy

```
GitHub Repository
├── .github/workflows/deploy.yml  # Workflow de CI/CD
├── out/                          # Pasta de saída do build
│   ├── index.html               # Página principal
│   ├── 404.html                 # Página de erro customizada
│   ├── _next/                   # Assets do Next.js
│   └── .nojekyll               # Desabilita processamento Jekyll
└── next.config.js               # Configuração com basePath
```

## Comandos Importantes

```bash
# Build local para teste
npm run build

# Build de produção otimizado
npm run build:production

# Limpar cache e builds anteriores
rm -rf out .next

# Deploy manual (se necessário)
npm run deploy
```

## Verificação

Após o push para a branch `main`, o GitHub Actions irá:
1. Executar o build com as configurações corretas
2. Fazer upload dos artefatos para o GitHub Pages
3. Deploy automático em: https://quantum-graph-ai.github.io/Quantum-Graph.github.io/

## Troubleshooting

### Se o site não carregar:
1. Verifique o status do GitHub Actions
2. Confirme que o GitHub Pages está habilitado nas configurações do repositório
3. Verifique se a pasta `out/` contém `index.html` após o build

### Se os assets não carregarem:
1. Verifique se o basePath está correto no `next.config.js`
2. Confirme que o arquivo `.nojekyll` existe na pasta `out/`
3. Verifique o console do navegador para erros 404

### Se o build falhar localmente:
1. Aumente a memória: `export NODE_OPTIONS='--max-old-space-size=8192'`
2. Limpe o cache: `npm cache clean --force`
3. Reinstale dependências: `rm -rf node_modules && npm install`

## Otimizações de Performance

Para reduzir o tamanho do bundle e melhorar o tempo de build:
1. Use dynamic imports para componentes 3D pesados
2. Otimize modelos 3D e texturas
3. Implemente lazy loading para assets grandes
4. Configure cache headers apropriados

## Monitoramento

- GitHub Actions: https://github.com/quantum-graph-ai/Quantum-Graph.github.io/actions
- Status do Deploy: Verificar na aba "Environments" do repositório
- Site Live: https://quantum-graph-ai.github.io/Quantum-Graph.github.io/