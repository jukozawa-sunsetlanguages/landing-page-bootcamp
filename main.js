/* =========================================================
   WorkSpeak Bootcamp — comportamento da landing page
   ---------------------------------------------------------
   EDITE AQUI os dados ainda indefinidos.
   Não invente preço, data ou nº de vagas: preencha quando tiver.
   - LINK_CTA / FORM_LINK: link do formulário de inscrição.
   - WHATSAPP_LINK: contato direto com a equipe.
   Deixe o valor como string vazia ("") para manter o texto
   placeholder visível no HTML.
   ========================================================= */
const CONFIG = {
  DATA_INICIO: "",                 // ex.: "03/08/2026"  -> substitui [DATA DE INÍCIO]
  VALOR: "",                       // ex.: "R$497"        -> substitui [VALOR]
  NUMERO_VAGAS: "",                // ex.: "8 vagas"      -> substitui [VAGAS LIMITADAS]
  LINK_CTA: "#inscricao",          // ex.: "https://docs.google.com/forms/d/e/.../viewform"
  FORM_LINK: "",                   // alias opcional do formulário (tem prioridade sobre LINK_CTA se preenchido)
  WHATSAPP_LINK: "#",              // ex.: "https://wa.me/5500000000000"
};

(function () {
  "use strict";

  // ---- Injeta valores do CONFIG nos elementos [data-config] ----
  const formLink = CONFIG.FORM_LINK || CONFIG.LINK_CTA;
  document.querySelectorAll("[data-config]").forEach((el) => {
    const key = el.getAttribute("data-config");

    // Links de ação (CTA / formulário / contato) atualizam o href.
    if (key === "LINK_CTA" || key === "FORM_LINK") {
      if (formLink) el.setAttribute("href", formLink);
      return;
    }
    if (key === "WHATSAPP_LINK") {
      if (CONFIG.WHATSAPP_LINK) el.setAttribute("href", CONFIG.WHATSAPP_LINK);
      return;
    }

    // Demais chaves substituem o texto placeholder apenas se preenchidas.
    const value = CONFIG[key];
    if (value) el.textContent = value;
  });

  // ---- Reveal on scroll ----
  const revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("is-visible"));
  }

  // ---- Sticky CTA (mobile): aparece após sair do hero ----
  const sticky = document.querySelector(".sticky-cta");
  const hero = document.querySelector(".hero");
  if (sticky && hero && "IntersectionObserver" in window) {
    const heroIo = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          sticky.classList.toggle("visible", !entry.isIntersecting);
        });
      },
      { threshold: 0 }
    );
    heroIo.observe(hero);
  }
})();
