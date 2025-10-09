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


document.addEventListener("DOMContentLoaded", () => {
    // Login
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const user = document.getElementById("username").value.trim();
            alert(`Bem-vindo de volta, ${user}!`);
        });
    }

    // Cadastro
    const registerForm = document.getElementById("registerForm");
    if (registerForm) {
        registerForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const newUser = document.getElementById("newUsername").value.trim();
            alert(`Conta criada com sucesso! Bem-vindo, ${newUser}.`);
            window.location.href = "index.html"; // redireciona para login
        });
    }
});
