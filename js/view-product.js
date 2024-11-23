// Recupera o ID do produto da URL
const productId = new URLSearchParams(window.location.search).get("id");

// Obtém os produtos do localStorage
const products = JSON.parse(localStorage.getItem("products")) || [];

// Busca o produto correspondente pelo ID
const product = products.find((p) => p.id === parseInt(productId, 10));

if (!product) {
  alert("Product not found.");
  window.location.href = "dashboard.html"; // Redireciona para o dashboard se o produto não existir
} else {
  // Preenche os detalhes do produto nos elementos HTML
  document.getElementById("product-id").textContent = product.id || "N/A";
  document.getElementById("product-name").textContent = product.name || "N/A";
  document.getElementById("short-description").textContent =
    product.shortDescription || "No short description available.";
  document.getElementById("full-description").textContent =
    product.fullDescription || "No detailed description available.";
  document.getElementById("brand").textContent = product.brand || "Unknown";
  document.getElementById("category").textContent =
    product.category || "Uncategorized";
  document.getElementById("list-price").textContent = product.listPrice || "$0.00";
  document.getElementById("discount").textContent = product.discount || "0%";
  document.getElementById("discount").textContent = product.discountPercent ? `${product.discountPercent}%` : "0%";
  document.getElementById("enabled").textContent = product.enabled ? "Yes" : "No";
  document.getElementById("in-stock").textContent = product.inStock ? "Yes" : "No";
  // Exibe a data de criação, dependendo de qual propriedade está disponível
  document.getElementById("creation-time").textContent =
    product.creationTime || product.createdAt || "Unknown";

  // Exibe a data de atualização, dependendo de qual propriedade está disponível
  document.getElementById("update-time").textContent =
    product.updateTime || product.updatedAt || "Unknown";


  // Exibe as dimensões corretamente
  document.getElementById("dimensions").textContent =
    product.length && product.width && product.height
      ? `${product.length} x ${product.width} x ${product.height} inches`
      : "Not specified";
  document.getElementById("weight").textContent =
    product.weight || "Not specified";
  document.getElementById("cost").textContent = product.cost || "$0.00";

  // Atualiza a imagem principal com base na URL especificada no campo 'mainImage' ou 'image'
  const mainImage = document.getElementById("main-image");

  // Lógica para determinar a fonte da imagem
  if (product.mainImage) {
    mainImage.src = product.mainImage; // Usa 'mainImage' se disponível
  } else if (product.image) {
    mainImage.src = product.image; // Caso contrário, usa 'image'
  } else {
    mainImage.src = "assets/images/default.jpg"; // Caminho corrigido para a imagem padrão
  }

  mainImage.alt = product.name || "Product Image";

  // Exibe os detalhes adicionais do produto
  const detailsList = document.getElementById("product-details-list");
  detailsList.innerHTML = ""; // Limpa itens antigos


  if (product.details && product.details.length > 0) {
    product.details.forEach((detail) => {
      const li = document.createElement("li");
      // Verifica se 'detail' é um objeto com 'name' e 'value'
      if (detail.name && detail.value) {
        li.textContent = `${detail.name}: ${detail.value}`;
      } else {
        li.textContent = detail; // Caso seja uma string simples
      }
      detailsList.appendChild(li);
    });
  } else {
    const li = document.createElement("li");
    li.textContent = "No additional details available.";
    detailsList.appendChild(li);
  }

}

// Adiciona funcionalidade ao botão de voltar para o dashboard
document.getElementById("backToDashboard").addEventListener("click", () => {
  window.location.href = "dashboard.html";
});






