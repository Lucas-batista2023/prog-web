document.addEventListener("DOMContentLoaded", function () {
    // Verifica se o usuário está autenticado e tem permissão adequada
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (!loggedInUser || !["admin", "editor"].includes(loggedInUser.role)) {
        window.location.href = "error.html"; // Redireciona para erro se não for admin ou editor
    }

    // Função para gerar ID único para o produto
    function generateProductId() {
        const products = JSON.parse(localStorage.getItem("products")) || [];
        const maxId = products.length ? Math.max(...products.map(p => p.id)) : 0;
        return maxId + 1;
    }

    // Função para converter imagem para base64
    function convertImageToBase64(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onloadend = function () {
                resolve(reader.result); // Retorna a imagem como base64
            };
            reader.onerror = reject;
            reader.readAsDataURL(file); // Converte a imagem
        });
    }

    // Função para exibir a pré-visualização da imagem principal
    document.getElementById("mainImage").addEventListener("change", function (event) {
        const file = event.target.files[0];
        const preview = document.getElementById("mainImagePreview");

        if (file) {
            convertImageToBase64(file).then(base64Image => {
                preview.innerHTML = `<img src="${base64Image}" alt="Main Image Preview" style="max-width: 300px;">`;
            }).catch(error => {
                console.error("Error displaying main image preview:", error);
            });
        }
    });

    // Função para exibir a pré-visualização das imagens destacadas
    document.getElementById("featuredImages").addEventListener("change", function (event) {
        const files = event.target.files;
        const preview = document.getElementById("featuredImagesPreview");
        preview.innerHTML = ""; // Limpa as prévias anteriores

        Array.from(files).forEach(file => {
            convertImageToBase64(file).then(base64Image => {
                preview.innerHTML += `<img src="${base64Image}" alt="Featured Image Preview" style="max-width: 100px; margin-right: 10px;">`;
            }).catch(error => {
                console.error("Error displaying featured image preview:", error);
            });
        });
    });

    // Evento de clique para adicionar campos de detalhes
    document.getElementById("addDetailBtn").addEventListener("click", function () {
        const detailsContainer = document.getElementById("productDetails");

        // Cria novos campos de entrada para detalhes
        const detailNameInput = document.createElement("input");
        detailNameInput.type = "text";
        detailNameInput.placeholder = "Detail Name";

        const detailValueInput = document.createElement("input");
        detailValueInput.type = "text";
        detailValueInput.placeholder = "Detail Value";

        // Adiciona os campos ao contêiner de detalhes
        detailsContainer.appendChild(detailNameInput);
        detailsContainer.appendChild(detailValueInput);
    });

    // Função para processar o envio do formulário de criação de produto
    document.getElementById("createProductForm").addEventListener("submit", function (event) {
        event.preventDefault(); // Evita o envio padrão do formulário

        // Obter os dados do formulário
        const name = document.getElementById("name").value;
        const shortDescription = document.getElementById("shortDescription").value;
        const fullDescription = document.getElementById("fullDescription").value;
        const brand = document.getElementById("brand").value;
        const category = document.getElementById("category").value;
        const listPrice = parseFloat(document.getElementById("listPrice").value);
        const discountPercent = parseFloat(document.getElementById("discountPercent").value);
        const enabled = document.getElementById("enabled").checked;
        const inStock = document.getElementById("inStock").checked;
        const length = parseFloat(document.getElementById("length").value);
        const width = parseFloat(document.getElementById("width").value);
        const height = parseFloat(document.getElementById("height").value);
        const weight = parseFloat(document.getElementById("weight").value);
        const cost = parseFloat(document.getElementById("cost").value);

        // Verifica se o nome do produto é único
        const products = JSON.parse(localStorage.getItem("products")) || [];
        const productExists = products.some(product => product.name.toLowerCase() === name.toLowerCase());
        if (productExists) {
            alert("A product with this name already exists.");
            return;
        }

        // Processamento de upload de imagens
        const mainImageFile = document.getElementById("mainImage").files[0];
        const featuredImagesFiles = document.getElementById("featuredImages").files;

        if (!mainImageFile) {
            alert("Main image is required.");
            return;
        }

        // Converter as imagens para base64
        Promise.all([ 
            convertImageToBase64(mainImageFile), 
            ...Array.from(featuredImagesFiles).map(file => convertImageToBase64(file)) 
        ]).then(base64Images => {
            // Criando objeto de produto
            const product = {
                id: generateProductId(),
                name: name,
                shortDescription: shortDescription,
                fullDescription: fullDescription,
                brand: brand,
                category: category,
                mainImage: base64Images[0], // A primeira imagem é a principal
                featuredImages: base64Images.slice(1), // O restante são as imagens em destaque
                listPrice: listPrice,
                discountPercent: discountPercent,
                enabled: enabled,
                inStock: inStock,
                createdAt: new Date().toISOString(),  // Adiciona a data de criação
                updatedAt: new Date().toISOString(),  // Adiciona a data de atualização
                length: length,
                width: width,
                height: height,
                weight: weight,
                cost: cost,
                details: []  // Detalhes do produto (se houver)
            };
            

            // Adicionando os detalhes do produto, se houver
            const details = document.querySelectorAll("#productDetails input");
            for (let i = 0; i < details.length; i += 2) {
                const detailName = details[i].value;
                const detailValue = details[i + 1] ? details[i + 1].value : "";
                if (detailName && detailValue) {
                    product.details.push({ name: detailName, value: detailValue });
                }
            }

            // Armazenando o produto no localStorage
            products.push(product);
            localStorage.setItem("products", JSON.stringify(products));

            alert("Product added successfully!");
            window.location.href = "dashboard.html"; // Redireciona para a página do dashboard
        }).catch(error => {
            console.error("Error uploading images:", error);
            alert("Error uploading images.");
        });
    });

});
