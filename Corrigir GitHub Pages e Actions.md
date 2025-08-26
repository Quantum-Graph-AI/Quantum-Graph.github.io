

# **Diagnóstico e Guia de Implantação para seu Site no GitHub Pages**

Este relatório apresenta uma análise detalhada do problema que impede a exibição correta do seu site hospedado no GitHub Pages, seguido de um guia passo a passo para a correção definitiva e uma recomendação estratégica para modernizar o processo de implantação utilizando GitHub Actions.

## **Seção 1: Diagnosticando a Causa Raiz: A Diferença Crítica Entre Sites de Organização e de Projeto**

A análise do repositório @https://github.com/Quantum-Graph-AI/Quantum-Graph.github.io e da URL de implantação @https://quantum-graph-ai.github.io/Quantum-Graph.github.io/ revela que o problema não reside no código do site, mas sim em uma configuração fundamental relacionada às convenções de nomenclatura do GitHub Pages.

### **1.1. Introdução: Desvendando o Mistério da "Página em Branco"**

A situação descrita — um site corretamente codificado que resulta em uma página em branco ou sem estilo após a implantação — é um sintoma clássico de uma falha na localização de arquivos essenciais, como folhas de estilo (CSS), scripts (JavaScript) e imagens. Isso ocorre devido a uma incompatibilidade entre a estrutura de URL esperada pelo código e a estrutura de URL real fornecida pelo GitHub Pages. A causa principal dessa incompatibilidade é a maneira como o GitHub Pages classifica os sites com base no nome do repositório.

### **1.2. Os Dois Pilares do GitHub Pages: Site de Organização vs. Site de Projeto**

O GitHub Pages distingue dois tipos principais de sites, cada um com regras de nomenclatura e estruturas de URL específicas.1 Compreender essa distinção é crucial para resolver o problema atual.

* **Site de Organização:** Este é o site principal e central de uma organização no GitHub. Para que um repositório seja tratado como um Site de Organização, ele deve seguir uma convenção de nomenclatura estrita: \<nome-da-organizacao\>.github.io. No seu caso, o nome do repositório teria que ser exatamente Quantum-Graph-AI.github.io.2 Quando essa convenção é seguida, o conteúdo do branch principal (geralmente  
  main) é publicado na raiz do subdomínio da organização, resultando em uma URL limpa como https://quantum-graph-ai.github.io/.  
* **Site de Projeto:** Qualquer outro repositório dentro da organização que tenha o GitHub Pages ativado é considerado um Site de Projeto. Esses sites são destinados a projetos individuais, documentação ou demonstrações. O GitHub os publica automaticamente em um subdiretório que corresponde ao nome do repositório. Portanto, um repositório chamado meu-projeto seria acessível em https://quantum-graph-ai.github.io/meu-projeto/.4

No seu caso, como o nome do repositório (Quantum-Graph.github.io) não corresponde exatamente ao nome da organização (Quantum-Graph-AI.github.io), o GitHub o trata corretamente como um Site de Projeto. Consequentemente, ele anexa o nome do repositório à URL base, resultando na URL problemática: https://quantum-graph-ai.github.io/Quantum-Graph.github.io/.

A tabela a seguir resume as principais diferenças.

| Característica | Site de Organização | Site de Projeto |
| :---- | :---- | :---- |
| **Nome do Repositório Exigido** | \<organizacao\>.github.io | Qualquer outro nome (ex: nome-do-projeto) |
| **URL Padrão** | https://\<organizacao\>.github.io/ | https://\<organizacao\>.github.io/\<nome-do-repositorio\>/ |
| **Branch de Origem Típico** | main | main ou gh-pages |
| **Caso de Uso Principal** | Página principal da organização. | Documentação, demos ou sites para projetos específicos. |

A escolha da convenção de nomenclatura não é apenas um detalhe técnico, mas uma decisão arquitetural com implicações significativas. Ao nomear o repositório corretamente como um Site de Organização, é possível estabelecer um domínio base para toda a presença online da organização no GitHub. Se um domínio personalizado (ex: www.sua-organizacao.com) for configurado para o Site de Organização, todos os Sites de Projeto futuros herdarão automaticamente esse domínio como base, sendo publicados em subdiretórios como www.sua-organizacao.com/projeto-a.4 A falha em usar a convenção correta não apenas quebra o site atual, mas também impede o uso futuro desse poderoso recurso de mapeamento de domínio em toda a organização.

### **1.3. O Efeito Cascata: Por Que uma URL com Subdiretório Quebra seu Site**

A consequência técnica de o site ser servido a partir de um subdiretório é a quebra de todos os caminhos de arquivo relativos à raiz. A maioria dos desenvolvedores web escreve links para recursos (assets) assumindo que o site será executado na raiz de um domínio. Por exemplo, um link para uma folha de estilo é comumente escrito como \<link rel="stylesheet" href="/css/styles.css"\>.

O caractere / no início do caminho instrui o navegador a procurar o arquivo a partir da raiz do domínio. Quando um usuário acessa a URL https://quantum-graph-ai.github.io/Quantum-Graph.github.io/, o navegador tenta carregar a folha de estilo de https://quantum-graph-ai.github.io/css/styles.css, o que está incorreto. O arquivo, na verdade, reside em https://quantum-graph-ai.github.io/Quantum-Graph.github.io/css/styles.css.

Essa discrepância resulta em uma cascata de erros 404 (Não Encontrado) para todos os arquivos CSS, JavaScript e imagens, deixando o navegador apenas com o arquivo HTML bruto. O resultado é a "página em branco" ou sem estilo que está sendo observada.8 O sistema do GitHub Pages está, portanto, funcionando exatamente como projetado; o problema surge de uma suposição incorreta sobre como esse sistema opera.

## **Seção 2: Caminho para a Resolução: Um Guia Passo a Passo para Corrigir seu Website**

Existem duas abordagens para resolver esse problema. A primeira é a solução recomendada e definitiva, que alinha o projeto com as melhores práticas da plataforma. A segunda é um paliativo que, embora funcional, é menos robusto e apresentado principalmente para fins educacionais.

### **2.1. A Solução Recomendada: Alinhando-se às Convenções de Site de Organização**

Esta abordagem corrige a causa raiz do problema, garantindo que o site funcione como pretendido e esteja preparado para o crescimento futuro.

* **Passo 1: Renomear o Repositório.** A correção mais limpa e eficaz é renomear o repositório para que ele corresponda à convenção de Site de Organização.  
  1. Navegue até a página principal do repositório Quantum-Graph.github.io.  
  2. Clique na aba "Settings" (Configurações).  
  3. No campo "Repository name", altere o nome de Quantum-Graph.github.io para Quantum-Graph-AI.github.io.  
  4. Clique em "Rename". Isso alinhará o repositório com a convenção oficial para um Site de Organização.2  
* Passo 2: Atualizar seu Clone Local. Após renomear o repositório remoto no GitHub, o seu ambiente de desenvolvimento local precisa ser atualizado para apontar para o novo endereço. Abra o terminal na pasta do seu projeto e execute o seguinte comando:  
  git remote set-url origin https://github.com/Quantum-Graph-AI/Quantum-Graph-AI.github.io.git  
* **Passo 3: Verificar as Configurações do GitHub Pages.** Navegue de volta para Settings e, na barra lateral, clique em "Pages". Verifique se as configurações de "Build and deployment" estão corretas:  
  * **Source:** Deve estar definido como "Deploy from a branch".  
  * **Branch:** Deve ser o seu branch principal (ex: main) e a pasta deve ser /(root).11  
* **Passo 4: Aguardar a Implantação.** O GitHub Pages iniciará automaticamente um novo processo de build e implantação. Pode levar de alguns minutos a até 10 minutos para que as alterações sejam propagadas.13 A URL final e correta para o seu site será:  
  https://quantum-graph-ai.github.io/.  
* **Passo 5: Solução de Problemas Adicionais.** Se o site ainda não aparecer corretamente após 10 minutos, execute as seguintes verificações:  
  * **Limpe o cache do seu navegador:** O navegador pode estar armazenando uma versão antiga da página.10  
  * **Verifique o arquivo index.html:** Certifique-se de que existe um arquivo chamado index.html (tudo em minúsculas) na raiz do seu repositório. O GitHub Pages é sensível a maiúsculas e minúsculas; Index.html ou index.HTML não funcionarão.10

### **2.2. O Caminho Alternativo (Não Recomendado): Adaptando seu Código para uma URL de Site de Projeto**

Esta solução envolve modificar o código do seu site para funcionar com a estrutura de URL de subdiretório. É considerada uma má prática porque torna o código menos portátil e mais difícil de manter, acoplando-o firmemente ao ambiente de implantação específico.

* **Passo 1: Modificar os Caminhos no HTML.** Seria necessário percorrer todos os arquivos HTML e alterar cada link de recurso para incluir o nome do repositório.  
  * **Antes:** \<link rel="stylesheet" href="/css/style.css"\>  
  * **Depois:** \<link rel="stylesheet" href="/Quantum-Graph.github.io/css/style.css"\>  
* **Passo 2: A Solução Programática (para Geradores de Sites Estáticos).** Se o site for construído com um Gerador de Site Estático (SSG) como Jekyll, Hugo ou Next.js, a abordagem correta para lidar com subdiretórios é usar uma variável de configuração. Por exemplo, em um site Jekyll, o arquivo \_config.yml seria modificado para incluir a linha baseurl: "/Quantum-Graph.github.io".16 O SSG usaria essa variável para prefixar automaticamente todos os links gerados, evitando a necessidade de alterações manuais. A própria existência desse tipo de recurso nos SSGs é uma consequência direta da dificuldade e da propensão a erros da abordagem manual, destacando por que a solução recomendada (renomear o repositório) é fundamentalmente superior.

## **Seção 3: Implantação Avançada: Automatizando seu Fluxo de Trabalho com GitHub Actions**

Respondendo à sua pergunta sobre o uso de GitHub Actions, a resposta é um sim definitivo. Não só é possível, como é a abordagem moderna e recomendada para implantar sites no GitHub Pages, oferecendo vantagens significativas sobre o método tradicional.

### **3.1. Por Que Migrar para GitHub Actions? A Vantagem Estratégica**

A mudança do método de implantação clássico ("Deploy from a branch") para GitHub Actions representa uma evolução de um modelo "declarativo" para um "imperativo". Em vez de simplesmente declarar que um branch contém o site, você define imperativamente os passos exatos para construir e implantar, o que oferece:

* **Controle Total:** Você tem controle explícito sobre cada etapa do processo. É possível instalar versões específicas de software (Node.js, Ruby, etc.), executar testes automatizados e usar qualquer gerador de site estático (Hugo, Next.js, Gatsby), não se limitando ao ambiente Jekyll padrão do GitHub Pages.18  
* **Transparência e Depuração:** Cada implantação gera um log detalhado. Se um build falhar, o log mostrará a mensagem de erro exata, eliminando a adivinhação frequentemente associada a falhas no processo de build clássico.20  
* **Automação de CI/CD:** As Actions permitem a criação de um pipeline completo de Integração Contínua e Implantação Contínua (CI/CD). É possível adicionar etapas para verificar a qualidade do código (linting), executar testes de unidade ou realizar varreduras de segurança antes que qualquer código seja implantado no site ao vivo.

### **3.2. Implementando seu Primeiro Fluxo de Trabalho de Implantação**

O processo para configurar a implantação via GitHub Actions é direto.

* **Passo 1: Configurar seu Repositório para Actions.** Navegue até Settings \-\> Pages. Em "Build and deployment", altere a opção "Source" de "Deploy from a branch" para "GitHub Actions".12 Isso informa ao GitHub que ele deve aguardar que um fluxo de trabalho (workflow) forneça os arquivos do site, em vez de publicá-los de um branch.  
* **Passo 2: Criar o Arquivo de Fluxo de Trabalho.** Na raiz do seu repositório, crie uma estrutura de pastas .github/workflows/. Dentro da pasta workflows, crie um novo arquivo chamado deploy.yml.  
* **Passo 3: O Código do Fluxo de Trabalho.** Cole o seguinte código no arquivo deploy.yml. Este é um modelo robusto e padrão para implantar um site estático simples.22  
  YAML  
  \#.github/workflows/deploy.yml  
  name: Deploy Website to GitHub Pages

  on:  
    push:  
      branches: \["main"\] \# Aciona o workflow em pushes para o branch main  
    workflow\_dispatch: \# Permite o acionamento manual na aba Actions

  \# Define as permissões para o GITHUB\_TOKEN  
  permissions:  
    contents: read  
    pages: write  
    id-token: write

  jobs:  
    build:  
      runs-on: ubuntu-latest  
      steps:  
        \- name: Checkout repository  
          uses: actions/checkout@v4

        \# Adicione seus passos de build aqui. Para um site estático complexo,  
        \# você executaria 'npm install' e 'npm run build'.  
        \- name: Build your site  
          run: |  
            echo "Passo de build iria aqui, se necessário."

        \- name: Upload artifact  
          uses: actions/upload-pages-artifact@v3  
          with:  
            \# Esta deve ser a pasta que contém os arquivos finais do seu site (ex: index.html)  
            path: '.' \# Use '.' para o diretório raiz, ou './build' para uma pasta de build

    deploy:  
      needs: build \# Este job depende que o job 'build' seja concluído com sucesso  
      runs-on: ubuntu-latest  
      environment:  
        name: github-pages  
        url: ${{ steps.deployment.outputs.page\_url }}  
      steps:  
        \- name: Deploy to GitHub Pages  
          id: deployment  
          uses: actions/deploy-pages@v4

* **Passo 4: Desconstruindo o Fluxo de Trabalho.**  
  * on: Define os gatilhos. push para automação em cada commit no branch main e workflow\_dispatch para permitir a execução manual.  
  * permissions: Concede as permissões necessárias ao token de autenticação temporário do workflow. contents: read para ler o código, pages: write para publicar no GitHub Pages e id-token: write para autenticação segura.22  
  * jobs: Define os trabalhos a serem executados. A estrutura de dois jobs (build e deploy) é uma prática recomendada para separar as responsabilidades.  
  * steps: Detalha as ações. actions/checkout baixa o código. O passo run é onde comandos de build (como npm run build) seriam executados. actions/upload-pages-artifact empacota o resultado do build (a pasta especificada em path) e o disponibiliza para outros jobs. Finalmente, actions/deploy-pages pega esse pacote (artefato) e o publica no ambiente do GitHub Pages.

### **3.3. Monitorando e Depurando sua Action**

Após fazer o commit do arquivo deploy.yml e enviá-lo para o GitHub, você pode monitorar a execução:

1. Vá para a aba **"Actions"** no seu repositório.  
2. Você verá seu workflow "Deploy Website to GitHub Pages" na lista. Clique nele para ver o histórico de execuções.  
3. Clique em uma execução específica para ver os logs detalhados de cada passo. É aqui que você encontrará qualquer erro de build.20  
4. Na página principal do repositório, a barra lateral direita agora mostrará uma seção **"Deployments"**, onde você pode ver um histórico de implantações bem-sucedidas e acessar a URL do site ao vivo.24

## **Seção 4: Conclusão e Recomendações Estratégicas**

A análise conclui que o problema de exibição do site não é um erro de código, mas sim uma consequência direta de uma configuração de repositório que não está alinhada com as convenções do GitHub Pages para um site de organização.

### **4.1. Resumo dos Achados**

* **Causa Raiz:** O repositório foi nomeado como um Site de Projeto (Quantum-Graph.github.io) em vez do nome exigido para um Site de Organização (Quantum-Graph-AI.github.io). Isso fez com que o site fosse publicado em um subdiretório, quebrando os caminhos para arquivos de CSS e JavaScript.  
* **Solução Principal:** A correção recomendada é renomear o repositório para Quantum-Graph-AI.github.io, o que resolverá o problema de forma definitiva e alinhará o projeto com as melhores práticas da plataforma.

### **4.2. Recomendação Estratégica: Adote CI/CD com GitHub Actions**

É fortemente recomendado adotar o fluxo de trabalho do GitHub Actions apresentado na Seção 3 como o método padrão de implantação para este e futuros projetos. Esta não é apenas uma correção, mas uma modernização do processo de desenvolvimento. A automação via Actions aumentará a confiabilidade, simplificará a depuração de erros de build e fornecerá uma base sólida que pode ser expandida com testes e outras verificações de qualidade. Adotar essa abordagem é investir em uma prática de desenvolvimento web moderna e escalável.

### **4.3. Checklist Final para o Sucesso**

Para implementar a solução completa e recomendada, siga este checklist:

1. \[ \] Renomeie o repositório para Quantum-Graph-AI.github.io.  
2. \[ \] Atualize a URL do remote no seu clone Git local.  
3. \[ \] Navegue para Settings \-\> Pages e mude a fonte de implantação para "GitHub Actions".  
4. \[ \] Crie o arquivo .github/workflows/deploy.yml com o modelo fornecido.  
5. \[ \] Faça o push das alterações para o branch main.  
6. \[ \] Monitore a implantação na aba "Actions" do repositório.  
7. \[ \] Visite a nova e correta URL: https://quantum-graph-ai.github.io/.

#### **Referências citadas**

1. What is GitHub Pages? \- GitHub Docs, acessado em agosto 26, 2025, [https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages)  
2. Quickstart for GitHub Pages \- GitHub Docs, acessado em agosto 26, 2025, [https://docs.github.com/en/pages/quickstart](https://docs.github.com/en/pages/quickstart)  
3. Creating a GitHub Pages site, acessado em agosto 26, 2025, [https://docs.github.com/articles/creating-project-pages-manually](https://docs.github.com/articles/creating-project-pages-manually)  
4. On Github what is the difference between a user/organization site and a project site? \- Reddit, acessado em agosto 26, 2025, [https://www.reddit.com/r/github/comments/tttbso/on\_github\_what\_is\_the\_difference\_between\_a/](https://www.reddit.com/r/github/comments/tttbso/on_github_what_is_the_difference_between_a/)  
5. Confused on how to host a website vs a Project \- github \- Reddit, acessado em agosto 26, 2025, [https://www.reddit.com/r/github/comments/y03jme/confused\_on\_how\_to\_host\_a\_website\_vs\_a\_project/](https://www.reddit.com/r/github/comments/y03jme/confused_on_how_to_host_a_website_vs_a_project/)  
6. GitHub Pages: what is a “project site”? \- Reddit, acessado em agosto 26, 2025, [https://www.reddit.com/r/github/comments/1jh89h0/github\_pages\_what\_is\_a\_project\_site/](https://www.reddit.com/r/github/comments/1jh89h0/github_pages_what_is_a_project_site/)  
7. About custom domains and GitHub Pages, acessado em agosto 26, 2025, [https://docs.github.com/articles/about-supported-custom-domains](https://docs.github.com/articles/about-supported-custom-domains)  
8. Are Your Images Not Displaying in GitHub Pages? Here's the Fix\! \- YouTube, acessado em agosto 26, 2025, [https://www.youtube.com/watch?v=K942H-5MW4w\&pp=0gcJCfwAo7VqN5tD](https://www.youtube.com/watch?v=K942H-5MW4w&pp=0gcJCfwAo7VqN5tD)  
9. Images not displaying in Github Pages? \- Stack Overflow, acessado em agosto 26, 2025, [https://stackoverflow.com/questions/41468951/images-not-displaying-in-github-pages](https://stackoverflow.com/questions/41468951/images-not-displaying-in-github-pages)  
10. Troubleshooting 404 errors for GitHub Pages sites, acessado em agosto 26, 2025, [https://docs.github.com/en/pages/getting-started-with-github-pages/troubleshooting-404-errors-for-github-pages-sites](https://docs.github.com/en/pages/getting-started-with-github-pages/troubleshooting-404-errors-for-github-pages-sites)  
11. My GitHub pages... why aren't they showing? \- Projects \- Codecademy Forums, acessado em agosto 26, 2025, [https://discuss.codecademy.com/t/my-github-pages-why-arent-they-showing/595038](https://discuss.codecademy.com/t/my-github-pages-why-arent-they-showing/595038)  
12. Configuring a publishing source for your GitHub Pages site, acessado em agosto 26, 2025, [https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)  
13. How to fix HTTP 404 on Github Pages? \- Stack Overflow, acessado em agosto 26, 2025, [https://stackoverflow.com/questions/11577147/how-to-fix-http-404-on-github-pages](https://stackoverflow.com/questions/11577147/how-to-fix-http-404-on-github-pages)  
14. GitHub Pages Not Displaying My Website? Here's What You Need to Know, acessado em agosto 26, 2025, [https://muzardemoses.hashnode.dev/github-pages-not-displaying-my-website-heres-what-you-need-to-know](https://muzardemoses.hashnode.dev/github-pages-not-displaying-my-website-heres-what-you-need-to-know)  
15. Troubleshooting 404 errors for GitHub Pages sites \- GitHub Enterprise Server 3.16 Docs, acessado em agosto 26, 2025, [https://docs.github.com/en/enterprise-server@3.16/pages/getting-started-with-github-pages/troubleshooting-404-errors-for-github-pages-sites](https://docs.github.com/en/enterprise-server@3.16/pages/getting-started-with-github-pages/troubleshooting-404-errors-for-github-pages-sites)  
16. what is the difference between user and project repositories? · community · Discussion \#3228 \- GitHub, acessado em agosto 26, 2025, [https://github.com/orgs/community/discussions/3228](https://github.com/orgs/community/discussions/3228)  
17. Setting up the directory structure for a build · community · Discussion \#39667 \- GitHub, acessado em agosto 26, 2025, [https://github.com/orgs/community/discussions/39667](https://github.com/orgs/community/discussions/39667)  
18. GitHub Actions | Jekyll • Simple, blog-aware, static sites, acessado em agosto 26, 2025, [https://jekyllrb.com/docs/continuous-integration/github-actions/](https://jekyllrb.com/docs/continuous-integration/github-actions/)  
19. GitHub Pages action \- GitHub Marketplace, acessado em agosto 26, 2025, [https://github.com/marketplace/actions/github-pages-action](https://github.com/marketplace/actions/github-pages-action)  
20. About Jekyll build errors for GitHub Pages sites, acessado em agosto 26, 2025, [https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/about-jekyll-build-errors-for-github-pages-sites](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/about-jekyll-build-errors-for-github-pages-sites)  
21. Using workflow run logs \- GitHub Docs, acessado em agosto 26, 2025, [https://docs.github.com/en/actions/monitoring-and-troubleshooting-workflows/monitoring-workflows/using-workflow-run-logs](https://docs.github.com/en/actions/monitoring-and-troubleshooting-workflows/monitoring-workflows/using-workflow-run-logs)  
22. Building and deploying a custom site using GitHub Actions and ..., acessado em agosto 26, 2025, [https://til.simonwillison.net/github-actions/github-pages](https://til.simonwillison.net/github-actions/github-pages)  
23. A simple GitHub Action for producing Jekyll build artifacts compatible with GitHub Pages., acessado em agosto 26, 2025, [https://github.com/actions/jekyll-build-pages](https://github.com/actions/jekyll-build-pages)  
24. Viewing deployment activity for your repository \- GitHub Docs, acessado em agosto 26, 2025, [https://docs.github.com/en/repositories/viewing-activity-and-data-for-your-repository/viewing-deployment-activity-for-your-repository](https://docs.github.com/en/repositories/viewing-activity-and-data-for-your-repository/viewing-deployment-activity-for-your-repository)  
25. Viewing deployment history \- GitHub Docs, acessado em agosto 26, 2025, [https://docs.github.com/actions/deployment/managing-your-deployments/viewing-deployment-history](https://docs.github.com/actions/deployment/managing-your-deployments/viewing-deployment-history)