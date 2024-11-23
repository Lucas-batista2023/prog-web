document.addEventListener("DOMContentLoaded", function () {
  // Produtos iniciais
  const initialProducts = [
    {
      id: 1,
      image: 'images/gbv-bee-thousand-cover.jpeg',
      name: 'Guided by Voices - Bee Thousand',
      brand: 'Matador Records',
      category: 'CD',
      shortDescription: 'A legendary lo-fi rock album that defined a generation.',
      fullDescription: 'Bee Thousand by Guided by Voices is a masterpiece of lo-fi rock music, showcasing raw and innovative songwriting. Released in 1994, this album has influenced countless indie bands worldwide.',
      listPrice: '$15.99',
      discount: '10%',
      enabled: true,
      inStock: true,
      creationTime: '2023-05-01 14:00:00',
      updateTime: '2023-10-15 09:00:00',
      dimensions: '5.5 x 5.5 x 0.4 inches',
      weight: '0.3 lbs',
      cost: '$12.00',
      details: [
          'Material: Plastic CD case with paper insert',
          'Color: Full-color printed cover',
          'Includes booklet with lyrics and liner notes'
      ]
  },
  {
      id: 2,
      image: 'images/pavment-slanted-and-enchanted-cover.jpeg',
      name: 'Pavement - Slanted and Enchanted',
      brand: 'Domino Recording Co',
      category: 'MP3',
      shortDescription: 'The ultimate indie rock album from the 90s.',
      fullDescription: 'Slanted and Enchanted by Pavement is widely regarded as one of the greatest indie rock albums of all time. With its raw edge and melodic charm, this 1992 release still resonates today.',
      listPrice: '$9.99',
      discount: '20%',
      enabled: true,
      inStock: true,
      creationTime: '2022-08-10 16:30:00',
      updateTime: '2023-09-12 14:00:00',
      dimensions: 'N/A (Digital Download)',
      weight: '0 lbs',
      cost: '$6.00',
      details: [
          'Format: MP3, 320 kbps',
          'Includes 12 tracks',
          'Compatible with all devices'
      ]
  },
  {
      id: 3,
      image: 'images/neutral-milk-hotel-in-the-aeroplane-over-the-sea-tshirt.jpeg',
      name: 'Neutral Milk Hotel T-Shirt',
      brand: 'Merge Records',
      category: 'T-Shirt',
      shortDescription: 'Comfortable and stylish band merch.',
      fullDescription: 'This official Neutral Milk Hotel T-Shirt features artwork from the iconic album *In the Aeroplane Over the Sea*. Perfect for fans of indie and folk rock.',
      listPrice: '$25.00',
      discount: '15%',
      enabled: true,
      inStock: true,
      creationTime: '2024-01-10 11:45:00',
      updateTime: '2024-10-20 18:00:00',
      dimensions: '12 x 8 x 1 inches',
      weight: '0.5 lbs',
      cost: '$18.00',
      details: [
          'Material: 100% cotton',
          'Color: Black with white print',
          'Available in sizes S, M, L, XL'
      ]
  },
  {
      id: 4,
      image: 'images/indie-101-book.jpg',
      name: 'Indie Rock 101',
      brand: 'Music Books',
      category: 'Book',
      shortDescription: 'A comprehensive guide to indie music history.',
      fullDescription: 'Indie Rock 101 provides an in-depth look into the history, key albums, and influential bands that shaped the indie music scene from the 80s to the present.',
      listPrice: '$30.00',
      discount: '5%',
      enabled: true,
      inStock: false,
      creationTime: '2023-03-15 13:00:00',
      updateTime: '2023-10-05 09:30:00',
      dimensions: '9 x 6 x 1.2 inches',
      weight: '1.2 lbs',
      cost: '$20.00',
      details: [
          'Pages: 320',
          'Language: English',
          'Publisher: Music Books Press'
      ]
  },
  {
      id: 5,
      image: 'images/jamc-poster.png',
      name: 'The Jesus and Mary Chain Poster',
      brand: 'Art & Prints',
      category: 'Poster',
      shortDescription: 'A vibrant poster featuring the iconic band.',
      fullDescription: 'This high-quality poster showcases The Jesus and Mary Chain in a bold design, perfect for decorating your room or music studio.',
      listPrice: '$12.99',
      discount: '0%',
      enabled: true,
      inStock: true,
      creationTime: '2023-06-25 15:00:00',
      updateTime: '2023-11-01 10:00:00',
      dimensions: '24 x 36 inches',
      weight: '0.2 lbs',
      cost: '$8.00',
      details: [
          'Material: Premium glossy paper',
          'Color: Full-color print',
          'Ships in a protective tube'
      ]
  },
  {
      id: 6,
      image: 'images/mbv-loveless-cd.jpeg',
      name: 'My Bloody Valentine - Loveless',
      brand: 'Creation Records',
      category: 'CD',
      shortDescription: 'A groundbreaking shoegaze album from the 90s.',
      fullDescription: 'Loveless by My Bloody Valentine is a critically acclaimed shoegaze album that defined the genre with its dreamy soundscapes and innovative production techniques.',
      listPrice: '$16.99',
      discount: '10%',
      enabled: true,
      inStock: true,
      creationTime: '2022-02-20 10:15:00',
      updateTime: '2023-09-18 08:30:00',
      dimensions: '5.5 x 5.5 x 0.4 inches',
      weight: '0.3 lbs',
      cost: '$12.50',
      details: [
          'Material: Plastic CD case with artwork insert',
          'Color: Full-color cover design',
          'Includes lyric booklet'
      ]
  },
  {
      id: 7,
      image: 'images/yo-la-tengo-you-can-hear-heart-beating-as-one-mp3.jpeg',
      name: 'Yo La Tengo - I Can Hear the Heart Beating as One',
      brand: 'Matador Records',
      category: 'MP3',
      shortDescription: 'A critically acclaimed indie rock album.',
      fullDescription: 'This Yo La Tengo album blends dream pop, indie rock, and experimental sounds, making it one of their most beloved releases.',
      listPrice: '$8.99',
      discount: '15%',
      enabled: true,
      inStock: true,
      creationTime: '2023-01-10 12:00:00',
      updateTime: '2023-10-25 14:45:00',
      dimensions: 'N/A (Digital Download)',
      weight: '0 lbs',
      cost: '$6.50',
      details: [
          'Format: MP3, 320 kbps',
          'Includes 15 tracks',
          'Digital booklet included'
      ]
  },
  {
      id: 8,
      image: 'images/sonic-youth-washing-machine-tshirt.jpeg',
      name: 'Sonic Youth T-Shirt',
      brand: 'Geffen Records',
      category: 'T-Shirt',
      shortDescription: 'Official band merch for Sonic Youth fans.',
      fullDescription: 'This T-shirt features the artwork from Sonic Youth\'s *Washing Machine* album. A must-have for alternative rock enthusiasts.',
      listPrice: '$22.00',
      discount: '10%',
      enabled: true,
      inStock: true,
      creationTime: '2024-04-15 10:00:00',
      updateTime: '2024-10-10 17:00:00',
      dimensions: '11 x 9 x 1 inches',
      weight: '0.4 lbs',
      cost: '$15.00',
      details: [
          'Material: 100% organic cotton',
          'Color: Blue with album art print',
          'Available in sizes S, M, L, XL, XXL'
      ]
  },
  {
      id: 9,
      image: 'images/our-band-could-be-your-life-book.jpeg',
      name: 'Our Band Could Be Your Life',
      brand: 'Indie Publishing',
      category: 'Book',
      shortDescription: 'A history of the American indie rock scene.',
      fullDescription: 'This book chronicles the rise of the American indie music scene from the 1980s to the 1990s, featuring bands like Minor Threat, Sonic Youth, and Dinosaur Jr.',
      listPrice: '$18.99',
      discount: '5%',
      enabled: true,
      inStock: true,
      creationTime: '2023-05-01 14:00:00',
      updateTime: '2024-03-12 11:30:00',
      dimensions: '9 x 6 x 1.1 inches',
      weight: '1.1 lbs',
      cost: '$14.50',
      details: [
          'Pages: 336',
          'Language: English',
          'Publisher: Indie Publishing House'
      ]
  },
  {
      id: 10,
      image: 'images/velvet-underground-poster.jpeg',
      name: 'The Velvet Underground Poster',
      brand: 'Classic Prints',
      category: 'Poster',
      shortDescription: 'A vintage-style poster of the iconic band.',
      fullDescription: 'This poster pays homage to The Velvet Underground, featuring a classic photo of the band in a stylish, vintage design.',
      listPrice: '$14.99',
      discount: '0%',
      enabled: true,
      inStock: true,
      creationTime: '2023-08-20 18:00:00',
      updateTime: '2024-10-05 09:00:00',
      dimensions: '24 x 36 inches',
      weight: '0.25 lbs',
      cost: '$10.00',
      details: [
          'Material: High-quality matte paper',
          'Color: Black and white with golden accents',
          'Packaged in a protective tube'
      ]
  }
  ];
  

  // Configurações de paginação
  let currentPage = 1;
  const itemsPerPage = 10;

  // Inicializa produtos no localStorage
  if (!localStorage.getItem("products")) {
    localStorage.setItem("products", JSON.stringify(initialProducts));
  }

  // Verifica se o usuário está autenticado e tem permissões adequadas
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
  if (!loggedInUser) {
    window.location.href = "index.html";  // Redireciona para login se não estiver autenticado
  } else {
    document.getElementById("welcome-message").textContent = `Bem-vindo, ${loggedInUser.name} (${loggedInUser.role})`;
    if (!["admin", "salesperson", "shipper", "editor"].includes(loggedInUser.role)) {
      window.location.href = "error.html";  // Redireciona para página de erro se o usuário não tiver permissão
    }
  }
  
// Função para renderizar produtos na tabela
function renderProducts() {
  const productList = document.getElementById("product-list");
  const products = JSON.parse(localStorage.getItem("products")) || [];
  const search = document.getElementById("search-bar").value.toLowerCase();
  const sortBy = document.getElementById("sortSelect").value; // Usa o valor de sortSelect

  // Filtra os produtos
  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(search) ||
      product.brand.toLowerCase().includes(search) ||
      product.category.toLowerCase().includes(search) ||
      (product.shortDescription && product.shortDescription.toLowerCase().includes(search)) || 
      (product.fullDescription && product.fullDescription.toLowerCase().includes(search))
  );

  // Classifica os produtos
  const sortedProducts = filteredProducts.sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "id") {
      return a.id - b.id;
    } else if (sortBy === "brand") {
      return a.brand.localeCompare(b.brand);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  const start = (currentPage - 1) * itemsPerPage;
  const paginatedProducts = sortedProducts.slice(start, start + itemsPerPage);

  // Atualiza a tabela de produtos
  productList.innerHTML = paginatedProducts
    .map(
      (product) => `
    <tr>
      <td>${product.id}</td>
    <td>
      <img 
        src="${product.image ? product.image : product.mainImage}" 
        alt="${product.name}" 
        style="width: 50px; height: 50px;" />
    </td>
      <td>${product.name}</td>
      <td>${product.brand}</td>
      <td>${product.category}</td>
      <td>
        <button class="view-btn" data-product-id="${product.id}" onclick="viewProduct(${product.id})">View</button>
        <button class="edit-btn" data-product-id="${product.id}" onclick="editProduct(${product.id})">Edit</button>
        <button class="delete-btn" data-product-id="${product.id}" onclick="deleteProduct(${product.id})">Delete</button>
      </td>
    </tr>`
    )
    .join("");

  // Exibe a página atual
  document.getElementById("current-page").textContent = `Page ${currentPage}`;
}

// Adiciona um event listener para o select de ordenação
const sortSelect = document.getElementById("sortSelect");
if (sortSelect) {
  sortSelect.addEventListener("change", renderProducts);  // Chama renderProducts ao mudar o valor do select
}


  // Controle de paginação
  const prevPageButton = document.getElementById("prev-page");
  if (prevPageButton) {
    prevPageButton.addEventListener("click", () => {
      if (currentPage > 1) currentPage--;
      renderProducts();
    });
  }

  const nextPageButton = document.getElementById("next-page");
  if (nextPageButton) {
    nextPageButton.addEventListener("click", () => {
      const products = JSON.parse(localStorage.getItem("products")) || [];
      if (currentPage * itemsPerPage < products.length) currentPage++;
      renderProducts();
    });
  }

  // Pesquisa
  const searchBar = document.getElementById("search-bar");
  if (searchBar) {
    searchBar.addEventListener("input", renderProducts);
  }

  // Logout
  const logoutButton = document.getElementById("logout-button");
  if (logoutButton) {
    logoutButton.addEventListener("click", () => {
      localStorage.removeItem("loggedInUser");
      window.location.href = "index.html";  // Redireciona para a página de login
    });
  }

  // Reset dos produtos
  document.getElementById("reset-products").addEventListener("click", () => {
    localStorage.setItem("products", JSON.stringify(initialProducts));
    renderProducts();
  });

  // Funções globais
  window.viewProduct = function(id) {
    console.log(`Viewing product with ID: ${id}`);
    window.location.href = `view-product.html?id=${id}`;
  }

  window.editProduct = function (id) {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser")); // Recupera o usuário logado do localStorage
    
    if (!loggedInUser || !loggedInUser.role) {
      alert("You must be logged in to edit products.");
      return;
    }
  
    // Verifica se o usuário tem permissão
    if (loggedInUser.role === "admin" || loggedInUser.role === "editor") {
      console.log(`Editing product with ID: ${id}`);
      window.location.href = `edit-product.html?id=${id}`;
    } else {
      alert("You do not have permission to edit products.");
    }
  };
  

  function deleteProduct(id) {
    // Verifica se o usuário está logado e tem permissão para deletar
    if (!loggedInUser || (loggedInUser.role !== "admin" && loggedInUser.role !== "editor")) {
      alert("Only admins or editors can delete products.");
      return;  // Retorna caso o usuário não tenha permissão
    }
  
    // Exibe uma mensagem de confirmação antes de deletar
    const confirmation = confirm("Are you sure you want to delete this product?");
    if (!confirmation) {
      return;  // Retorna sem excluir se o usuário clicar em "Cancelar"
    }
  
    // Obtém a lista de produtos do localStorage
    const products = JSON.parse(localStorage.getItem("products")) || [];
  
    // Filtra os produtos para excluir o produto com o ID fornecido
    const updatedProducts = products.filter((product) => product.id !== id);
  
    // Atualiza o localStorage com a nova lista de produtos sem o excluído
    localStorage.setItem("products", JSON.stringify(updatedProducts));
  
    // Re-renderiza a lista de produtos para refletir a alteração
    renderProducts();
  }
  
    

  // Redefinir a lista de produtos
  const resetButton = document.getElementById("reset-products");
  if (resetButton) {
    resetButton.addEventListener("click", () => {
      localStorage.setItem("products", JSON.stringify(initialProducts));  // Restaura os produtos iniciais
      renderProducts();  // Atualiza a lista de produtos
    });
  }

  // Inicializa a renderização dos produtos
  renderProducts(); 
  

  // Botão "Create Product" - redireciona para a página create-product.html
  const createProductButton = document.getElementById("create-product");
// Adiciona o evento de clique ao botão
createProductButton.addEventListener("click", (event) => {
  // Verifica se o usuário não tem permissão
  if (!loggedInUser || !["admin", "editor"].includes(loggedInUser.role)) {
      event.preventDefault(); // Impede a ação padrão do botão, se necessário
      alert("Você não tem permissão para criar produtos.");
      return;
  }
  
  // Se o usuário tiver permissão, continue com a ação normal
  window.location.href = "create-product.html"; // ou a ação que desejar
});

  // Delegação de eventos para os botões View, Edit, Delete
  document.getElementById("product-list").addEventListener("click", function (event) {
    const target = event.target;
  
    // Verifica se o botão clicado foi "Delete"
    if (target.classList.contains("delete-btn")) {
      const productId = parseInt(target.dataset.productId); // Converte para número
      if (!isNaN(productId)) {
        deleteProduct(productId);
      } else {
        console.error("Invalid product ID:", target.dataset.productId);
      }
    }
  
    // Verifica se o botão clicado foi "View"
    if (target.classList.contains("view-btn")) {
      const productId = parseInt(target.dataset.productId);
      if (!isNaN(productId)) {
        viewProduct(productId);
      }
    }
  
    // Verifica se o botão clicado foi "Edit"
    if (target.classList.contains("edit-btn")) {
      const productId = parseInt(target.dataset.productId);
      if (!isNaN(productId)) {
        editProduct(productId);
      }
    }
  });
  
});

document.addEventListener("DOMContentLoaded", function () {
  // Obtém o usuário logado do armazenamento local
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
  const registerButton = document.getElementById("register-user");

  // Verifica se o usuário está logado e se tem permissão de administrador
  if (loggedInUser && loggedInUser.role === "admin") {
    // Exibe o botão de registro para administradores
    registerButton.style.display = "inline-block";

    // Adiciona o evento de clique para redirecionar para a página de registro
    registerButton.addEventListener("click", function () {
      window.location.href = "register.html"; // Redireciona para a página de registro
    });
  } else {
    // Esconde o botão de registro para usuários não administradores
    registerButton.style.display = "none";
  }
});
