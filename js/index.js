// index.js (Login)

// Criação automática de um Admin se não existir
const defaultAdmin = {
    name: "Admin",
    email: "admin@example.com",
    password: "admin1234",
    role: "admin",
};

// Inicializa o Admin no localStorage
if (!localStorage.getItem("users")) {
    localStorage.setItem("users", JSON.stringify([defaultAdmin]));
}

// Referências do formulário
const loginForm = document.getElementById("login-form");
const errorMessage = document.getElementById("error-message");
const rememberMeCheckbox = document.getElementById("remember-me");

// Verifica se as credenciais estão salvas no localStorage
window.onload = function () {
    const savedEmail = localStorage.getItem("email");
    const savedPassword = localStorage.getItem("password");
    if (savedEmail && savedPassword) {
        document.getElementById("email").value = savedEmail;
        document.getElementById("password").value = savedPassword;
        rememberMeCheckbox.checked = true;
    }
};

// Lógica de login
loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Recupera usuários do localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find((u) => u.email === email);

    if (user && user.password === password) {
        // Login bem-sucedido
        errorMessage.style.display = "none";

        // Lembre-me
        if (rememberMeCheckbox.checked) {
            localStorage.setItem("email", email);
            localStorage.setItem("password", password);
        } else {
            localStorage.removeItem("email");
            localStorage.removeItem("password");
        }

        // Armazena o usuário logado no localStorage
        localStorage.setItem("loggedInUser", JSON.stringify(user));

        // Redireciona ao painel
        if (user.role === "salesperson" || user.role === "admin" || user.role === "shipper" || user.role === "editor") {
            window.location.href = "dashboard.html"; // Exemplo de redirecionamento
        } else {
            alert("Access restricted to Admin only!");
        }
    } else {
        // Credenciais inválidas
        errorMessage.style.display = "block";
    }
});
