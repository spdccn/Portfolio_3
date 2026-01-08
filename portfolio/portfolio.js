document.querySelectorAll('.nav-btn').forEach(botao => {
    botao.addEventListener('click', () => {
        const url = botao.getAttribute('data-url');
        window.location.href = url;
    })
})