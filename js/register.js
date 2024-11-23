// register.js

// Referências do formulário
const registerForm = document.getElementById("registerForm");

// Verifica se o usuário logado é Admin
function isAdminLoggedIn() {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    return loggedInUser && loggedInUser.role === "admin";
}

// Manipula o evento de envio do formulário
registerForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // Permissão apenas para Admin
    if (!isAdminLoggedIn()) {
        alert("Only administrators can register new users.");
        return;
    }

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const role = document.getElementById("role").value;

    // Validações
    if (password.length < 8) {
        alert("Password must be at least 8 characters long.");
        return;
    }

    if (!role) {
        alert("Please select a role for the user.");
        return;
    }

    // Recupera e atualiza a lista de usuários
    const users = JSON.parse(localStorage.getItem("users")) || [];
    if (users.find((user) => user.email === email)) {
        alert("Email is already registered.");
        return;
    }

    const newUser = { name, email, password, role };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    alert("User registered successfully.");
    window.location.href = "index.html"; // Redireciona para login
});
