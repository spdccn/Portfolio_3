document.querySelectorAll('.nav-btn').forEach(botao => {
  botao.addEventListener('click', () => {
    const url = botao.getAttribute('data-url');
    window.location.href = url;
  });
});

const btn = document.getElementById("toggle-cores");

btn.addEventListener("click", () => {
    document.body.classList.toggle("invertido");
});
