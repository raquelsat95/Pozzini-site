# Pozzini Elevated Living

Desenvolva uma landing page/site institucional para a imobiliária Pozzini, seguindo rigorosamente as instruções abaixo:

# Lovable Instruction Block – Site Institucional e Landing Page da Imobiliária Pozzini

## Objetivo

Desenvolver uma landing page/site institucional moderno, premium e responsivo para a imobiliária **Pozzini**, inspirado na estrutura visual de imobiliárias de alto padrão, mas com identidade visual própria.

O objetivo principal é apresentar a Pozzini como uma imobiliária moderna, confiável e profissional e, principalmente, gerar leads através de um formulário de busca de imóveis já presente na HERO.

A página deve transmitir: Credibilidade, Sofisticação, Modernidade, Segurança, Exclusividade, Facilidade para encontrar o imóvel ideal.

A experiência deve ser excelente principalmente em smartphones.

---

# Localização / Arquivos

Antes de implementar: analise a estrutura atual do projeto, identifique framework, rotas, componentes reutilizáveis e tokens de design existentes. Utilize componentes existentes sempre que possível. Crie componentes separados para cada seção importante, evitando colocar tudo em um único arquivo.

Estrutura sugerida: Header, Hero, SearchForm, FeaturedProperties, PropertyCategories, Services, AboutPozzini, CTASection, Testimonials, Footer.

## Não modificar
Não alterar funcionalidades, dependências, autenticação, banco de dados, APIs ou rotas existentes sem necessidade.

---

# Direção visual

Estética: Premium, minimalista, contemporânea, imobiliária de alto padrão, elegante, clean, profissional, visualmente sofisticada. Evitar aparência de template genérico. Bastante espaço em branco, tipografia forte, imagens imobiliárias de alta qualidade, hierarquia visual clara.

### Cores
- Cor principal: preto/grafite ou azul-marinho muito escuro
- Fundo principal: branco/off-white
- Cor de destaque: dourado/champagne ou cor sofisticada compatível com a identidade Pozzini
- Texto principal: grafite/preto
- Texto secundário: cinza
Não utilizar excesso de cores.

---

# HEADER

Desktop: Logo "Pozzini" em destaque. Menu: Comprar, Alugar, Imóveis, Serviços, Sobre nós, Contato. CTA "Encontrar imóvel". Header inicialmente transparente/integrado à Hero; ao rolar, sticky com fundo sólido e sombra sutil.

Mobile: Logo Pozzini, menu hamburger, menu lateral/dropdown elegante, CTA de contato acessível.

---

# HERO — PRIORIDADE MÁXIMA

Imagem grande e sofisticada de imóvel contemporâneo como background ou layout dividido.

Headline: "Encontre o imóvel que combina com o seu momento."
Subheadline: "Na Pozzini, você encontra imóveis selecionados para comprar, alugar e investir com segurança e tranquilidade."

Não usar Lorem Ipsum. Conteúdo em português brasileiro.

## FORMULÁRIO NA HERO (obrigatório)

Desktop: card branco sobreposto na parte inferior da Hero ou integrado, layout horizontal, campos bem espaçados, bordas arredondadas, sombra suave, CTA destacado.

Mobile: layout vertical, campos ocupando quase toda a largura, fácil de preencher com o polegar.

Campos:
1. Finalidade (Comprar / Alugar)
2. Tipo de imóvel (Casa, Apartamento, Cobertura, Terreno, Comercial, Condomínio, Outros)
3. Localização (Cidade, Bairro, Região)
4. Faixa de preço (mínimo, máximo)
5. Quartos (1+, 2+, 3+, 4+)
6. Botão: "Encontrar imóveis"

Ícones discretos quando apropriado. Validação básica dos inputs. Ao clicar em "Encontrar imóveis": se não existir backend ainda, implementar o estado de busca e preparar a estrutura para integração futura (nunca simular integração inexistente). Exibir loading e erro amigável. Logs prefixados: `console.log('[PozziniSearchForm]', ...)`.

---

# IMÓVEIS EM DESTAQUE

Título: "Imóveis em destaque" / Subheadline: "Uma seleção de imóveis escolhidos para você."

Cards com: foto grande, badge "Destaque" quando aplicável, tipo, título, localização, quartos, banheiros, área, preço, botão de detalhes, ícone de favorito.

Usar dados demonstrativos claramente estruturados (nunca inventar como se fossem reais), preparando arquitetura para dados reais.

Grid: 3-4 cards desktop, 2 tablet, 1 por linha ou carousel mobile. Hover suave.

---

# CATEGORIAS

Título: "Encontre o imóvel ideal para você". Categorias: Casas, Apartamentos, Coberturas, Terrenos, Imóveis comerciais, Lançamentos. Imagens grandes clicáveis com overlay, zoom sutil no hover, fade-in ao entrar no viewport.

---

# SERVIÇOS

Título: "Tudo o que você precisa para realizar seu próximo negócio."

Cards: Comprar um imóvel, Alugar um imóvel, Vender seu imóvel, Investir — cada um com ícone, título, descrição, CTA.

---

# SOBRE A POZZINI

Título: "Mais do que imóveis. Construímos relações." Texto institucional destacando experiência, atendimento personalizado, curadoria, transparência, segurança, conhecimento de mercado, relacionamento de longo prazo. Layout dividido (imagem + texto). CTA: "Conheça a Pozzini". Sem Lorem Ipsum.

---

# DIFERENCIAIS

Diferenciais qualitativos apenas (ex: "Atendimento personalizado", "Imóveis selecionados", "Conhecimento de mercado", "Negociação segura"). NÃO inventar estatísticas ("20 anos", "5.000 clientes" etc).

---

# CTA DE CAPTAÇÃO

Título: "Está pensando em vender ou alugar seu imóvel?" Texto: "Fale com a Pozzini e descubra como podemos ajudar a valorizar e apresentar seu imóvel da melhor forma." Botões: "Quero anunciar meu imóvel" e "Falar com um especialista". Alto contraste.

---

# SEGUNDO FORMULÁRIO / CONTATO

Título: "Vamos encontrar a melhor oportunidade para você."
Campos: Nome, WhatsApp, E-mail, Objetivo (Comprar/Alugar/Vender/Investir), Mensagem. Botão: "Quero falar com a Pozzini". Validações: nome, WhatsApp obrigatórios, e-mail válido, objetivo obrigatório. Estados de loading/sucesso/erro. Nunca perder dados preenchidos em caso de erro.

---

# DEPOIMENTOS

Título: "O que nossos clientes dizem". Cards com depoimento, nome, tipo de atendimento. Usar conteúdo demonstrativo estruturado (sem números/afirmações verificáveis falsas) se não houver depoimentos reais.

---

# FOOTER

Colunas: Pozzini (descrição breve), Imóveis (Comprar, Alugar, Imóveis em destaque, Lançamentos), Atendimento (Contato, WhatsApp, Fale conosco), Institucional (Sobre nós, Serviços, Privacidade). Adicionar logo, redes sociais, copyright, política de privacidade, termos de uso.

---

# MICROINTERAÇÕES E EXPERIÊNCIA

Smooth hover transitions, fade-in ao entrar no viewport, transições de 200-300ms, loading/empty/error states, feedback visual em formulários, estados hover/active/disabled em botões. Não exagerar — deve parecer premium, não "animado demais".

---

# RESPONSIVIDADE

Mobile-first. Testar em 375px, 390px, 430px, depois 768px, 1024px, 1280px, 1440px+. Breakpoints Tailwind padrão (sm, md, lg, xl). Sem overflow horizontal, sem textos cortados, imagens com proporções corretas, formulários utilizáveis com uma mão, botões com área de toque adequada, tipografia responsiva.

---

# ACESSIBILIDADE

HTML semântico, labels reais nos inputs, contraste adequado, alt text nas imagens, navegação por teclado, focus states, botões semanticamente corretos, aria-label quando necessário. Não depender apenas de cor para indicar estados.

---

# PERFORMANCE

Imagens otimizadas, lazy loading fora da primeira dobra, evitar bibliotecas desnecessárias, componentes leves, aspect-ratio adequado para evitar layout shift, priorizar carregamento rápido da Hero.

---

# SEO

Title: "Pozzini | Imóveis para Comprar, Alugar e Investir"
Meta description: "Encontre imóveis selecionados para comprar, alugar e investir. Conheça a Pozzini e encontre a oportunidade ideal para você."
Um único H1 na Hero, H2 nas seções principais, hierarquia correta, alt text, URLs semânticas, Open Graph básico quando suportado.

---

# ARQUITETURA

Separar: componentes de apresentação, dados mock/demonstrativos, tipos/interfaces, lógica de busca. Interfaces TypeScript: Property, SearchFilters, LeadFormData, ContactFormData. Evitar `any` desnecessário. Verificar compatibilidade entre interfaces e componentes.

---

# RESTRIÇÕES CRÍTICAS

- Não alterar partes do app não relacionadas a esta tarefa.
- Testar o código antes de publicar; checar consistência de interfaces TypeScript.
- Não deixar Lorem Ipsum na versão final.
- Não inventar dados reais, estatísticas ou avaliações da Pozzini.
- Não criar integrações falsas com CRM, WhatsApp, banco de dados ou APIs — preparar arquitetura para integração futura quando necessário.
- Validar todos os inputs, implementar loading/error states.
- Logs prefixados: `console.log('[ComponentName]', ...)`.
- Não criar overflow horizontal, não usar imagens de baixa qualidade, evitar aparência genérica de template.
- Mobile é prioridade.

Implemente em fases: (1) estrutura base (header, hero, formulário, footer, responsividade inicial), (2) conteúdo (destaques, categorias, serviços, sobre, diferenciais, depoimentos, CTA), (3) interações (busca, validações, favoritos, loading/erro, formulários), (4) polish e testes (responsividade, tipografia, animações, acessibilidade, SEO, performance, console, TypeScript).

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/addcb71a-909f-4c97-b05e-d5db82c011b5).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
