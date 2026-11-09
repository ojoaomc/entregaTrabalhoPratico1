const dados = {
    "lugares": [
        {
            "id": 1,
            "nome": "Trilhas em BH",
            "descricao": "Veja opções de trilhas em Belo Horizonte.",
            "conteudo": "Belo Horizonte e seu entorno oferecem diversas opções de trilhas com visuais incríveis da Serra do Curral, cachoeiras e vegetação típica do cerrado e mata atlântica. Ideal para quem busca aventura e contato com a natureza.",
            "categoria": "Ecoturismo",
            "destaque": true,
            "data": "2026-05-10",
            "localizacao": "Parque das Mangabeiras / Serra do Curral",
            "imagem_principal": "./assets/img/trilha.png",
            "atracoes": [
                {
                    "id": 101,
                    "nome": "Trilha da Crista",
                    "descricao": "Caminhada topo da serra com vista para a cidade.",
                    "imagem": "./assets/img/trilha.png"
                },
                {
                    "id": 102,
                    "nome": "Parque das Mangabeiras",
                    "descricao": "Reserva ambiental e área verde no pé da serra.",
                    "imagem": "./assets/img/igrejaPampulha.png"
                },
                {
                    "id": 103,
                    "nome": "Mirante do Mangabeiras",
                    "descricao": "Ponto de observação para o pôr do sol.",
                    "imagem": "./assets/img/ccbb.png"
                }
            ]
        },
        {
            "id": 2,
            "nome": "Arquitetura",
            "descricao": "Conheça a arquitetura de Belo Horizonte.",
            "conteudo": "A capital mineira destaca-se pelo Conjunto Arquitetônico da Pampulha, projetado por Oscar Niemeyer e reconhecido como Patrimônio Cultural da Humanidade. Além disso, o centro da cidade abriga belos prédios em estilo Art Déco e Neoclássico.",
            "categoria": "Patrimônio & Arquitetura",
            "destaque": true,
            "data": "2026-05-12",
            "localizacao": "Orla da Lagoa da Pampulha",
            "imagem_principal": "./assets/img/igrejaPampulha.png",
            "atracoes": [
                {
                    "id": 201,
                    "nome": "Igreja da Pampulha",
                    "descricao": "Obra modernista com painéis de Portinari.",
                    "imagem": "./assets/img/igrejaPampulha.png"
                },
                {
                    "id": 202,
                    "nome": "Museu de Arte da Pampulha",
                    "descricao": "Antigo cassino integrado à lagoa.",
                    "imagem": "./assets/img/ccbb.png"
                },
                {
                    "id": 203,
                    "nome": "Casa do Baile",
                    "descricao": "Espaço de referência em arquitetura e urbanismo.",
                    "imagem": "./assets/img/trilha.png"
                }
            ]
        },
        {
            "id": 3,
            "nome": "Cultura",
            "descricao": "Veja as opções de acesso à cultura em Belo Horizonte.",
            "conteudo": "O Circuito Liberdade reúne diversos museus e centros culturais de destaque nacional, como o CCBB BH, o Memorial Minas Gerais Vale e o Museu das Minas e do Metal, oferecendo uma rica programação gratuita de exposições e espetáculos.",
            "categoria": "Cultura & Arte",
            "destaque": true,
            "data": "2026-05-15",
            "localizacao": "Praça da Liberdade - Funcionários",
            "imagem_principal": "./assets/img/ccbb.png",
            "atracoes": [
                {
                    "id": 301,
                    "nome": "CCBB BH",
                    "descricao": "Exposições de arte e espetáculos teatrais.",
                    "imagem": "./assets/img/ccbb.png"
                },
                {
                    "id": 302,
                    "nome": "Memorial Vale",
                    "descricao": "Espaço cultural focado na história mineira.",
                    "imagem": "./assets/img/trilha.png"
                },
                {
                    "id": 303,
                    "nome": "MM Gerdau",
                    "descricao": "Museu das minas e do metal.",
                    "imagem": "./assets/img/igrejaPampulha.png"
                }
            ]
        }
    ]
};

// Renderiza Carrossel e Cards na Home
function renderizarHome() {
    const carrosselInner = document.getElementById("carrossel-itens");
    const carrosselIndicadores = document.getElementById("carrossel-indicadores");
    const containerCards = document.getElementById("lista-cards");

    if (!carrosselInner || !containerCards) return;

    carrosselInner.innerHTML = "";
    if (carrosselIndicadores) carrosselIndicadores.innerHTML = "";
    containerCards.innerHTML = "";

    const destaques = dados.lugares.filter(item => item.destaque);

    destaques.forEach((item, index) => {
        if (carrosselIndicadores) {
            const btnIndicador = document.createElement("button");
            btnIndicador.type = "button";
            btnIndicador.dataset.bsTarget = "#carrosselDestaques";
            btnIndicador.dataset.bsSlideTo = index;
            if (index === 0) btnIndicador.className = "active";
            carrosselIndicadores.appendChild(btnIndicador);
        }

        const itemCarrossel = document.createElement("div");
        itemCarrossel.className = `carousel-item ${index === 0 ? 'active' : ''}`;
        
        itemCarrossel.innerHTML = `
            <a href="detalhe.html?id=${item.id}">
                <img src="${item.imagem_principal}" class="d-block w-100 img-carrossel" alt="${item.nome}">
                <div class="carousel-caption d-none d-md-block bg-dark bg-opacity-75 rounded p-2">
                    <h6 class="fw-bold mb-0 text-white">${item.nome}</h6>
                    <p class="small mb-0 text-white">${item.descricao}</p>
                </div>
            </a>
        `;
        carrosselInner.appendChild(itemCarrossel);
    });

    dados.lugares.forEach(item => {
        const col = document.createElement("div");
        col.className = "col-12 col-sm-6 col-lg-4";

        col.innerHTML = `
            <div class="card h-100 shadow-sm border-0">
                <a href="detalhe.html?id=${item.id}">
                    <img src="${item.imagem_principal}" class="card-img-top img-card" alt="${item.nome}">
                </a>
                <div class="card-body d-flex flex-column">
                    <h6 class="card-title fw-bold">
                        <a href="detalhe.html?id=${item.id}" class="text-decoration-none text-dark">${item.nome}</a>
                    </h6>
                    <p class="card-text text-secondary small flex-grow-1">${item.descricao}</p>
                    <a href="detalhe.html?id=${item.id}" class="btn btn-sm btn-primary mt-auto">Ver detalhes</a>
                </div>
            </div>
        `;
        containerCards.appendChild(col);
    });
}

// Renderiza a página de Detalhes
function renderizarDetalhes() {
    const painelGeral = document.getElementById("info-geral");
    const containerAtracoes = document.getElementById("lista-atracoes");

    if (!painelGeral || !containerAtracoes) return;

    const params = new URLSearchParams(window.location.search);
    const idItem = parseInt(params.get("id"));

    const itemEncontrado = dados.lugares.find(item => item.id === idItem);

    if (itemEncontrado) {
        painelGeral.innerHTML = `
            <div class="col-md-5 mb-3 mb-md-0">
                <img src="${itemEncontrado.imagem_principal}" class="img-fluid rounded shadow-sm w-100 h-100 img-detalhe-capa" alt="${itemEncontrado.nome}">
            </div>
            <div class="col-md-7">
                <div class="bg-body-secondary p-4 rounded shadow-sm h-100 border">
                    <h4 class="fw-bold text-uppercase mb-3">${itemEncontrado.nome}</h4>
                    <ul class="list-unstyled d-flex flex-column gap-2 mb-0">
                        <li><strong>Categoria:</strong> <span class="badge bg-purple">${itemEncontrado.categoria}</span></li>
                        <li><strong>Localização:</strong> ${itemEncontrado.localizacao}</li>
                        <li><strong>Data de Cadastro:</strong> ${itemEncontrado.data}</li>
                        <li><strong>Resumo:</strong> ${itemEncontrado.descricao}</li>
                        <li><strong>Descrição:</strong> ${itemEncontrado.conteudo}</li>
                    </ul>
                </div>
            </div>
        `;

        containerAtracoes.innerHTML = "";
        itemEncontrado.atracoes.forEach(atracao => {
            const col = document.createElement("div");
            col.className = "col-12 col-sm-6 col-md-4";

            col.innerHTML = `
                <div class="card h-100 shadow-sm border-0">
                    <img src="${atracao.imagem}" class="card-img-top img-atracao" alt="${atracao.nome}">
                    <div class="card-body">
                        <h6 class="card-title fw-bold mb-1">${atracao.nome}</h6>
                        <p class="card-text small text-muted mb-0">${atracao.descricao}</p>
                    </div>
                </div>
            `;
            containerAtracoes.appendChild(col);
        });

    } else {
        painelGeral.innerHTML = `
            <div class="col-12 alert alert-warning text-center">
                <h4>Item não encontrado</h4>
                <p>Selecione um item válido a partir da página inicial.</p>
                <a href="index.html" class="btn btn-primary mt-2">Voltar à Home</a>
            </div>
        `;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    renderizarHome();
    renderizarDetalhes();
});