// Carrinho 

// aparecer carrinho

let carrinho = document.querySelectorAll('.adc-carrinho');

let produto = [
    {
        id: 1,
        nome: 'Caneca - Exclusiva GirlGamer',
        descricao: 'mugBits',
        preco: 20,
        quantidade: 0
    },
    {
        id: 2,
        nome: 'Camiseta - Exclusiva GirlGamer',
        descricao: 'mulherLogo',
        preco: 40,
        quantidade: 0
    },
    {
        id: 3,
        nome: 'Garrafinha Inox Ellie - The Last of Us',
        descricao: 'garrafinhaEllie',
        preco: 35,
        quantidade: 0
    },
    {
        id: 4,
        nome: 'Bloco de notas - Life is Strange',
        descricao: 'cardenoLIS',
        preco: 20,
        quantidade: 0
    },
    {
        id: 5,
        nome: 'Copo Bucks Aloy - Horizon Zero Dawn',
        descricao: 'hzd',
        preco: 30,
        quantidade: 0
    },
    {
        id: 6,
        nome: 'Bloco de notas - GirlGamer Power',
        descricao: 'caderno',
        preco: 20,
        quantidade: 0
    },
    {
        id: 7,
        nome: 'Caneca - The Legend of Zelda Visuals',
        descricao: 'mugZelda',
        preco: 25,
        quantidade: 0
    },
    {
        id: 8,
        nome: 'Caneca Wild Rift - Lux',
        descricao: 'mugLux',
        preco: 25,
        quantidade: 0
    },
    {
        id: 9,
        nome: 'Camiseta - Metroid Dread',
        descricao: 'metroidShirt',
        preco: 25,
        quantidade: 0
    }
];



for (let i = 0; i < carrinho.length; i++) {
    carrinho[i].addEventListener('click', () => {
        carrinhoNum(produto[i]);
        total(produto[i]);
    })
}



function onloadCarrinhoNum() {
    let numProduto = localStorage.getItem('carrinhoNum');

    // se tiver produtos na localestorage 
    if (numProduto) {
        document.querySelector('.carrinho span').textContent = numProduto;
    }
}


function carrinhoNum(produto) {

    let numProduto = localStorage.getItem('carrinhoNum');
    numProduto = parseInt(numProduto);

    let itemsCarrinho = localStorage.getItem('produtosNoCarrinho')

    if (numProduto) {
        localStorage.setItem('carrinhoNum', numProduto + 1);
        document.querySelector('.carrinho span').textContent = numProduto + 1;

    } else {
        localStorage.setItem('carrinhoNum', 1);
        document.querySelector('.carrinho span').textContent = 1;
    }
    setItems(produto)
}

function setItems(produto) {

    let itemCarrinho = localStorage.getItem('produtoNoCarrinho');
    itemCarrinho = JSON.parse(itemCarrinho);


    // se ja tiver o mesmo produto, incrementa
    if (itemCarrinho != null) {
        if (itemCarrinho[produto.descricao] == undefined) {
            itemCarrinho = {
                ...itemCarrinho,
                [produto.descricao]: produto
            }
        }
        itemCarrinho[produto.descricao].quantidade += 1;
    }

    // primeira vez clicando
    else {
        produto.quantidade = 1;
        itemCarrinho = {
            [produto.descricao]: produto
        };
    }


    // produto.quantidade = 1;
    localStorage.setItem('produtoNoCarrinho', JSON.stringify(itemCarrinho));
}


function total(produto) {
    // console.log('preço do produto é', produto.preco);
    let totalCarrinho = localStorage.getItem('total');

    if (totalCarrinho != null) {

        totalCarrinho = parseInt(totalCarrinho);
        localStorage.setItem('total', totalCarrinho + produto.preco);
    } else {
        localStorage.setItem('total', produto.preco);
    }
}




function aparecerCarrinho() {
    let itemCarrinho = localStorage.getItem('produtoNoCarrinho');
    itemCarrinho = JSON.parse(itemCarrinho);

    let totalCarrinho = localStorage.getItem('total');
    totalCarrinho = parseInt(totalCarrinho);

    let produtoContainer = document.getElementById('containerCarrinho');


    if (itemCarrinho && produtoContainer) {

        produtoContainer.innerHTML = '';
        Object.values(itemCarrinho).map(item => {
            produtoContainer.innerHTML += `
        <ul class="list-group" id="listaCarrinho">
            <li class="list-group-item my-2 py-3">
                <div class="row">
                <!-- coluna da imagem -->
                <div class="col-lg-2 col-md-3 col-sm-4">
                    <img src="../img/imgServico/${item.descricao}.png" class="img-thumbnail">
                </div>
                <!-- coluna da descrição-->
                <!-- align-self-center -->
                <div class="col-lg-7 co l-md-9 col-sm-8 my-auto">
                    <h5 class="fw-bold">${item.nome}</h5>
                    <h5></h5>
                </div>
            <!-- coluna controle valores -->
            <div class="col-lg-3 col-md-4 col-sm-6 ">
               
                <div class="mt-2 text-end p-2">
                    <h6>Valor unidade: R$ ${item.preco},00</h6>
                    <h6>Total: R$ ${item.quantidade * item.preco},00</h6>
                </div> 
                <div class="input-group mb-3 p-3">
                   <span>Quantidade: ${item.quantidade}</span>
                    <button type="button" onclick="apagarProduto(${item.id})" class="btn btn-outline-danger apagar" id="delete">
                        <i class="bi bi-trash" ></i>
                    </button>
                </div>
            </div>
        </div>
    </li>
    `;
        });
        produtoContainer.innerHTML += ` 
        <li class="list-group-item my-2 py-3">
            <div class="text-end fw-bold">
                <p>Valor Total: R$ ${totalCarrinho},00</p>
                <a href="../pages/servicos.html" class="btn btn-primary btn-sm">Continuar Comprando</a>
            </div>
        </li>
    </ul>
        `
    }
}




function apagarProduto(nome) {

    // let produtoNum = localStorage.getItem('carrinhoNum');
    // let carrinhoTotal = localStorage.getItem("total");
    

    let itemsCarrinho = JSON.parse(localStorage.getItem('produtoNoCarrinho'))

    let val = Object.values(itemsCarrinho);

    console.log(val)
    // itemsCarrinho = JSON.parse(itemsCarrinho);
    console.log(val.length);

    let apagar = document.getElementById('listaCarrinho');
    console.log(nome)
  
        for (let i = 0; i<val.length; i++) {

            if (val[i].id == nome) {
                console.log(val[i].id, nome)

                val.splice(i, 1);

                console.log(val)
            }
        }
    console.log(val)
    
    let contador = localStorage.getItem(carrinhoNum);

    localStorage.setItem('carrinhoNum', carrinhoNum - contador);

    localStorage.setItem('produtoNoCarrinho', JSON.stringify(val));
    aparecerCarrinho();
    
      
}


onloadCarrinhoNum();
aparecerCarrinho();


















// Modal style

function mostrarModal() {
    new bootstrap.Modal(document.getElementById('shopModal1')).show();
}

function mostrarModal2() {
    new bootstrap.Modal(document.getElementById('shopModal2')).show();
}

function mostrarModal3() {
    new bootstrap.Modal(document.getElementById('shopModal3')).show();
}

function mostrarModal4() {
    new bootstrap.Modal(document.getElementById('shopModal4')).show();
}

function mostrarModal5() {
    new bootstrap.Modal(document.getElementById('shopModal5')).show();
}

function mostrarModal6() {
    new bootstrap.Modal(document.getElementById('shopModal6')).show();
}

function mostrarModal7() {
    new bootstrap.Modal(document.getElementById('shopModal7')).show();
}

function mostrarModal8() {
    new bootstrap.Modal(document.getElementById('shopModal8')).show();
}

function mostrarModal9() {
    new bootstrap.Modal(document.getElementById('shopModal9')).show();
}

function mostrarModal10() {
    new bootstrap.Modal(document.getElementById('shopModal10')).show();
}

function mostrarModal11() {
    new bootstrap.Modal(document.getElementById('shopModal11')).show();
}

function mostrarModal12() {
    new bootstrap.Modal(document.getElementById('shopModal12')).show();
}


// *************************CAROUSEL*****************************************

$(document).ready(function () {
    $("#lightSlider").lightSlider({
        item: 4,
        auto: true,
        loop: true,
        speed: 1000,
        autoWidth: true,
        thumbItem: 10,
        // currentPagerPosition: 'middle',
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    item: 2,
                    slideMove: 1,
                    slideMargin: 6,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    item: 1,
                    slideMove: 1
                }
            }
        ]
    }
    
    
    );

    // animação da seta
    setInterval(function () { $('#pointer').fadeTo('fast', 0).fadeTo('fast', 1).fadeTo('fast', 0).fadeTo('fast', 1); }, 2500);

});

//array temporario filtrado, filter

$('input[type="checkbox"]').click(function () {
    if ($('input[type="checkbox"]:checked').length > 0) {
        $('.products >div').css({
            display: 'none'
        });
        $('input[type="checkbox"]:checked').each(function () {
            $('.products >div[data-category=' + this.id + ']').css({
                display: 'flex'
            });
        });
    } else {
        $('.products >div').css({
            display: 'flex'
        });

    }
});



