# AGENTS.md — WorkSpeak Bootcamp landing page

## O que é

Landing page estática do método WorkSpeak e da oferta Bootcamp, em português do
Brasil. A entrada principal é o Communication Readiness Map, sem formulário local.

## Arquitetura

Sem framework, build, backend ou dependências novas:

- `index.html`: hero → problema → conhecimento ≠ acesso → método WorkSpeak →
  Communication Readiness Map → Bootcamp → evidências → para quem é → CTA final.
- `styles.css`: design system, variáveis da paleta e responsividade.
- `main.js`: CONFIG, links `[data-config]`, reveal via IntersectionObserver e CTA mobile.

`netlify.toml` publica a raiz (`publish = "."`), sem comando de build.

## Visual

Navy `#0f1e2e` dominante (~70%), Off White `#f4f2ed` para leitura (~20%), Green
`#1f3f3a` para o método (~10%). Amber `#c96f1a` para CTA e marcadores; Gray `#2b2f36`
para texto. Sora nos títulos, Manrope no corpo. Usar linhas, sequências e grids;
evitar gradientes, sombras excessivas, animações decorativas e excesso de cards.

## Convenções

- HTML semântico, headings em ordem lógica e foco visível em links.
- Preservar responsividade, navegação por teclado e prefers-reduced-motion.
- Conteúdo e CTAs devem funcionar sem JavaScript. Reveal é melhoria progressiva.
- SVG inline quando necessário, sem emojis ou fotografia de banco.

## Conteúdo

- Princípio: Evidence Before Confidence.
- Ciclo: observação → hipótese → intervenção → prática → evidência → ajuste.
- Map: triagem por autorrelato; hipótese de trabalho, não diagnóstico de proficiência.
- Não inventar depoimentos, números, resultados, datas ou validação científica.
- Oferta definida: 30 dias, predominantemente assíncrono, squad de 2–3, prática de
  15–25 min/dia, portal, WhatsApp, checkpoint, feedback e Evidence Snapshot.
- Essential R$497; Calibration R$997, experiência assíncrona + 2 Calibragens.
- Sem encontros ao vivo recorrentes obrigatórios ou promessa de fluência.

## Editando dados

`CONFIG.READINESS_MAP_URL` em `main.js` atualiza os links do Map. Sincronizar os
`href` no HTML para o fallback sem JS. Fatos comerciais definidos ficam no HTML;
novos fatos precisam de confirmação da fonte. Não criar data futura de turma.
