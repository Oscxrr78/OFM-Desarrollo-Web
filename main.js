// Animación al hacer scroll estilo Porsche
document.addEventListener("scroll", () => {
  const cards = document.querySelectorAll(".card");
  cards.forEach(card => {
    const position = card.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;
    if (position < screenHeight - 100) {
      card.classList.add("visible");
    }
  });
});

// Acción al contratar
document.querySelectorAll(".btn").forEach(btn => {
  btn.addEventListener("click", e => {
    e.preventDefault();
    alert("Gracias por tu interés. Te contactaré pronto para más detalles.");
  });
});

document.querySelectorAll(".btn-contact").forEach(btn => {
  btn.addEventListener("click", () => {
    console.log("Botón de contacto presionado:", btn.textContent);
  });
});
