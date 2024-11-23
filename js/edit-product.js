document.addEventListener("DOMContentLoaded", () => {
  // Verifica autenticação e permissões
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
  if (!loggedInUser || !loggedInUser.role) {
    alert("You must be logged in to access this page.");
    window.location.href = "index.html";
  }

  // Recupera o produto para edição
  const productId = new URLSearchParams(window.location.search).get("id");
  const products = JSON.parse(localStorage.getItem("products")) || [];
  const product = products.find((p) => p.id === parseInt(productId, 10));

  if (!product) {
    alert("Product not found.");
    window.location.href = "dashboard.html";
  }

  // Popula o formulário com os dados do produto
  function populateForm() {
    const fields = [
      "name",
      "shortDescription",
      "fullDescription",
      "brand",
      "category",
      "listPrice",
      "discountPercent",
      "enabled",
      "inStock",
      "length",
      "width",
      "height",
      "weight",
      "cost",
    ];
    fields.forEach((field) => {
      const element = document.getElementById(field);
      if (field === "enabled" || field === "inStock") {
        element.checked = !!product[field];
      } else {
        element.value = product[field] || "";
      }
    });

    // Restringe edição baseado no papel do usuário
    if (loggedInUser.role === "Salesperson") {
      fields.forEach((field) => {
        if (field !== "price") {
          document.getElementById(field).disabled = true;
        }
      });
    }
  }

  // Atualiza campos do produto
  document.getElementById("editProductForm").addEventListener("submit", (event) => {
    event.preventDefault();

    const updatedProduct = { ...product };
    const fields = [
      "name",
      "shortDescription",
      "fullDescription",
      "brand",
      "category",
      "listPrice",
      "discountPercent",
      "enabled",
      "inStock",
      "length",
      "width",
      "height",
      "weight",
      "cost",
    ];
    fields.forEach((field) => {
      const element = document.getElementById(field);
      if (field === "enabled" || field === "inStock") {
        updatedProduct[field] = element.checked;
      } else if (!element.disabled) {
        updatedProduct[field] = element.value;
      }
    });

    const productIndex = products.findIndex((p) => p.id === product.id);
    products[productIndex] = updatedProduct;
    localStorage.setItem("products", JSON.stringify(products));

    alert("Product updated successfully.");
    window.location.href = "dashboard.html";
  });

  // Atualizar detalhes adicionais
  const additionalDetailsContainer = document.getElementById("productDetails");
  product.additionalDetails = product.additionalDetails || [];

  function renderAdditionalDetails() {
    additionalDetailsContainer.innerHTML = "";
    product.additionalDetails.forEach((detail, index) => {
      const detailRow = document.createElement("div");
      detailRow.innerHTML = `
        <input type="text" value="${detail}" data-index="${index}" />
        <button type="button" class="remove-detail" data-index="${index}">Remove</button>
      `;
      additionalDetailsContainer.appendChild(detailRow);
    });
  }

  document.getElementById("addDetailButton").addEventListener("click", () => {
    product.additionalDetails.push("");
    renderAdditionalDetails();
  });

  additionalDetailsContainer.addEventListener("input", (event) => {
    const index = event.target.getAttribute("data-index");
    product.additionalDetails[index] = event.target.value;
  });

  additionalDetailsContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("remove-detail")) {
      const index = event.target.getAttribute("data-index");
      product.additionalDetails.splice(index, 1);
      renderAdditionalDetails();
    }
  });

  // Manipulação de imagens extras
  const mainImageInput = document.getElementById("mainImage");
  const featuredImagesInput = document.getElementById("featuredImages");
  const currentMainImage = document.getElementById("currentMainImage");
  const currentFeaturedImages = document.getElementById("currentFeaturedImages");

  // Atualizar imagens
  if (product.mainImage) {
    currentMainImage.innerHTML = `<img src="${product.mainImage}" alt="Main Image" />`;
  }
  if (product.featuredImages) {
    product.featuredImages.forEach((image) => {
      const imgElement = document.createElement("img");
      imgElement.src = image;
      currentFeaturedImages.appendChild(imgElement);
    });
  }

  // Adiciona a imagem principal
  mainImageInput.addEventListener("change", (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        product.mainImage = reader.result;
        currentMainImage.innerHTML = `<img src="${product.mainImage}" alt="Main Image" />`;
      };
      reader.readAsDataURL(file);
    }
  });

  // Adiciona imagens em destaque
  featuredImagesInput.addEventListener("change", (event) => {
    const files = event.target.files;
    const reader = new FileReader();
    reader.onload = () => {
      product.featuredImages = [...product.featuredImages, reader.result];
      renderFeaturedImages();
    };
    reader.readAsDataURL(files[0]);
  });

  product.featuredImages = product.featuredImages || [];


  function renderFeaturedImages() {
    currentFeaturedImages.innerHTML = "";
    product.featuredImages.forEach((image) => {
      const imgElement = document.createElement("img");
      imgElement.src = image;
      currentFeaturedImages.appendChild(imgElement);
    });
  }

  // Botão de cancelamento
  document.getElementById("cancelButton").addEventListener("click", () => {
    window.location.href = "dashboard.html";
  });

  // Inicializa o formulário
  populateForm();
  renderAdditionalDetails();
  renderFeaturedImages();
});
