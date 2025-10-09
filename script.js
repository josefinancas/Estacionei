document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("loginForm");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value.trim();

        if (username === "" || password === "") {
            alert("Por favor, preencha todos os campos.");
        } else {
            // Exemplo simples (posteriormente será substituído por autenticação real)
            alert(`Bem-vindo, ${username}!`);
            form.reset();
        }
    });
});
