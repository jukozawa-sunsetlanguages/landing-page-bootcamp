# WorkSpeak Bootcamp — Landing page

Landing page pública de venda/aplicação para o **WorkSpeak Bootcamp**: um treino
intensivo de 30 dias de comunicação profissional em inglês sob pressão controlada.

A página posiciona o Bootcamp como treino de performance comunicativa (não "mais um
curso de inglês"), com promessa calibrada e honesta — sem promessa de fluência milagrosa.

## Tecnologias

Site estático, sem framework e sem etapa de build:

- **HTML** semântico (`index.html`)
- **CSS** puro com CSS variables para a paleta (`styles.css`)
- **JavaScript** vanilla, sem dependências (`main.js`) — injeção de dados,
  reveals no scroll (IntersectionObserver) e CTA fixo no mobile
- Fontes **Sora** + **Manrope** via Google Fonts
- Hospedagem **Netlify** (publica a raiz diretamente, ver `netlify.toml`)

## Estrutura

```
index.html     # toda a página (header, hero, método, jornada, FAQ, CTAs, footer)
styles.css     # design system + paleta + responsividade
main.js        # CONFIG editável + interações
netlify.toml   # publish = "." (sem comando de build)
```

## Dados editáveis (placeholders)

Os dados ainda indefinidos **não foram inventados**. Edite o objeto `CONFIG` no topo
de `main.js` para preencher:

- `DATA_INICIO` — data de início da próxima turma
- `VALOR` — investimento
- `NUMERO_VAGAS` — número de vagas
- `LINK_CTA` / `FORM_LINK` — link do formulário de inscrição
- `WHATSAPP_LINK` — contato com a equipe

Enquanto vazios, os placeholders visíveis (ex.: `[DATA DE INÍCIO]`) permanecem no HTML.

## Rodando localmente

Por ser estático, basta servir a pasta. Com o Netlify CLI:

```bash
netlify dev --port 8889
```

Ou qualquer servidor estático (ex.: `npx serve .`).
