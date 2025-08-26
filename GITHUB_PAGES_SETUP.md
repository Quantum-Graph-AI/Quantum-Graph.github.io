# Configuração do GitHub Pages - QuantumGraph

## Problema Identificado
Conforme documentação "Correção 3D GitHub Pages_.md", o erro 404 na URL `https://quantum-graph-ai.github.io/Quantum-Graph.github.io/` é devido à configuração incorreta do GitHub Pages.

## Configuração Correta do GitHub Pages

### 1. Acessar Configurações do Repositório
1. Vá para o repositório no GitHub
2. Clique em **Settings** (Configurações)
3. Na barra lateral, clique em **Pages**

### 2. Configurar Source (Origem da Publicação)
**Configuração recomendada:**
- **Source**: Deploy from a branch
- **Branch**: `gh-pages` (será criada automaticamente pelo GitHub Actions)
- **Folder**: `/ (root)`

### 3. Verificar Deployment
Após configurar, o GitHub Pages irá:
1. Processar o conteúdo da branch `gh-pages`
2. Publicar o site em: `https://quantum-graph-ai.github.io/Quantum-Graph.github.io/`
3. Exibir status na seção Actions

## GitHub Actions Workflow
O arquivo `.github/workflows/deploy.yml` automatiza:
- ✅ Build do projeto Next.js
- ✅ Export estático otimizado
- ✅ Deploy automático para branch `gh-pages`
- ✅ Configuração do `.nojekyll`

## Resolução de Problemas Comuns

### 404 Error
- Verifique se a branch `gh-pages` existe após o primeiro deploy
- Confirme que o GitHub Pages está configurado para usar `gh-pages`
- Aguarde alguns minutos para propagação

### Assets 3D e CORS
Conforme documento, todos os assets 3D estão no mesmo repositório para evitar problemas de CORS:
- ✅ Modelos Three.js carregados da mesma origem
- ✅ Texturas e materiais no repositório
- ✅ Sem dependências externas para assets 3D

### Tipos MIME Suportados
GitHub Pages suporta nativamente:
- `.gltf` → `model/gltf+json`
- `.glb` → `model/gltf-binary`
- `.obj` → `model/obj`
- `.mtl` → `model/mtl`
- `.bin` → `application/octet-stream`

## Comandos de Deploy Manual (Opcional)
```bash
# Build local
npm run build:production

# Deploy manual (se necessário)
npm run deploy
```

## Verificação Pós-Deploy
1. Acesse: `https://quantum-graph-ai.github.io/Quantum-Graph.github.io/`
2. Verifique console do browser para erros
3. Teste interação 3D e navegação
4. Confirme carregamento de todos os assets
