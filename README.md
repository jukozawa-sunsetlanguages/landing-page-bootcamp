# WorkSpeak Bootcamp — Landing page

Landing page pública do método WorkSpeak e do Bootcamp. O **Communication Readiness
Map** é a entrada principal: triagem estruturada por autorrelato, que produz uma
hipótese de trabalho, não um diagnóstico objetivo de proficiência.

## Tecnologias

Site estático, sem framework, dependências novas ou etapa de build:

- HTML semântico (`index.html`)
- CSS puro com variáveis de paleta (`styles.css`)
- JavaScript vanilla (`main.js`): CONFIG, reveal via IntersectionObserver e CTA mobile
- Fontes Sora + Manrope via Google Fonts
- Netlify publica a raiz diretamente (`netlify.toml`)

## Estrutura

Hero → Problema → Conhecimento ≠ acesso → Método WorkSpeak → Communication
Readiness Map → Bootcamp → Evidências → Para quem é → CTA final.

O método segue observação → hipótese → intervenção → prática → evidência → ajuste,
com o princípio **Evidence Before Confidence**. A seção de evidências descreve
registros do processo, sem atribuir resultados a participantes.

## Oferta atual

30 dias, predominantemente assíncrono, squad de 2–3 participantes e prática diária
de 15–25 minutos. Inclui portal, WhatsApp, checkpoint, feedback e Evidence Snapshot.
Sem encontros ao vivo recorrentes obrigatórios.

- Essential: R$497, experiência assíncrona central.
- Calibration: R$997, mesma experiência + 2 Calibragens (sessões Calibration).

Não há data de turma ou formulário nesta página.

## Configuração

`CONFIG.READINESS_MAP_URL`, no topo de `main.js`, atualiza todos os links
`[data-config="READINESS_MAP_URL"]`. Mantenha seus `href` no HTML sincronizados para
que funcionem também sem JavaScript. Os fatos comerciais definidos estão no HTML.

## Rodando localmente

Sirva a raiz com qualquer servidor estático, por exemplo:

```bash
python -m http.server 8889
```

Não é necessário instalar dependências. Confira desktop e mobile de 375px,
âncoras, CTAs, navegação por teclado e prefers-reduced-motion antes de publicar.
