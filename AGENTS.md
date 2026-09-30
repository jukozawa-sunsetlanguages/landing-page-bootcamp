# AGENTS.md — WorkSpeak Bootcamp landing page

## O que é

Landing page única, estática, de venda/aplicação para o WorkSpeak Bootcamp (treino de
comunicação profissional em inglês sob pressão, 30 dias). Português do Brasil.

## Arquitetura

Sem framework, sem build, sem backend. Três arquivos na raiz:

- `index.html` — única página; todas as seções na ordem do briefing (hero → problema →
  o que resolve → para quem é / não é → método → como funciona → jornada 30 dias →
  o que está incluso → antes/depois → oferta → FAQ → CTA final → footer).
- `styles.css` — design system inteiro. Paleta em CSS variables no `:root`.
- `main.js` — vanilla JS: objeto `CONFIG` (dados editáveis), injeção em `[data-config]`,
  reveal on scroll via IntersectionObserver, sticky CTA mobile.

`netlify.toml` publica a raiz (`publish = "."`), sem `command`.

## Paleta (proporção alvo ~60/25/10/5)

- Midnight Navy `#0f1e2e` — fundos dominantes, hero, autoridade.
- Off White `#f4f2ed` — seções de leitura/explicação (problema, para quem, antes/depois, FAQ).
- Deep Green `#1f3f3a` — método, frameworks, "para quem é", oferta, "incluso".
- Burnt Orange `#c96f1a` — CTAs, evidências ("30 dias", "Performance Room", checkpoints),
  destaques. Usar com moderação.

Classes utilitárias: `.section-navy`, `.section-light`, `.section-green`.
Destaques de evidência: classes `.accent` / `.evidence` / `.evidence-line`.

## Convenções

- Sem dependências novas. Sem etapa de build. Não adicionar frameworks.
- Ícones: SVG inline ou `background-image` SVG data-URI. **Sem emojis** na UI.
- Animar apenas `transform`/`opacity`. Respeitar `prefers-reduced-motion`.
- Acessibilidade: headings em ordem lógica, `:focus-visible` nos CTAs, FAQ com
  `<details>/<summary>` (acessível nativamente), contraste alto.
- Fontes: Sora (display) + Manrope (corpo).

## Regras de conteúdo (importante)

- **Promessa calibrada**: nunca prometer fluência milagrosa. Usar "treino", "processo",
  "pressão controlada", "evidência diária", "presença", "comunicação ativa".
- **Não inventar** data, preço ou nº de vagas — manter em `CONFIG` (main.js) com
  placeholders visíveis até serem preenchidos.

## Editando dados

Topo de `main.js`, objeto `CONFIG`. Strings vazias mantêm o placeholder do HTML.
`LINK_CTA`/`FORM_LINK` atualizam o `href` de todos os botões de inscrição.
