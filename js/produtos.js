window.onload = function() {
    fillProductsCard()
}

var products = [
    ["bolocenouravulcao.jpeg", "Bolo de cenoura vulcão", "35,00"],
    ["chocolateCmorangos.jpeg", "Bolo de chocolate com morango", "29,99"],
    ["sonhodevalsa.jpeg", "Bolo sonho de valsa", "39,99"],
    ["bolobombom.jpeg", "Bolo bombom de morango", "29,00"],
    ["bolodeaniver.jpeg", "Bolo dois amores", "35,99"],
    ["bololimao.jpeg", "Bolo de limão", "15,99"],
    ["bolopacoca.jpeg", "Bolo de paçoca", "13,00"],
    ["brownie.jpeg", "Brownie de chocolate com nozes", "10,99"],
    ["pavechocolate.jpeg", "Pavê de chocolate", "44,99"]
]

function fillProductsCard() {
    let content = "";
    let productPerLine = 3;

    content += '<div class="div-produtos-titulo ">';
    content += '        <p><b>Produtos</b></p>';
    content += '</div>';

    for (var i = 0; i < products.length; i += productPerLine) {
        content += '<diV class="div-produtos-list">';
        for (var j = 0; j < productPerLine; j++) {
            content += '<div class="div-produtos-list-produto">';
            content += '    <img src="../img/' + products[i + j][0] + '"/>';
            content += '    <div class="div-produtos-list-item-title">';
            content += '        <p>' + products[i + j][1] + '</p>';
            content += '    </div>';
            content += '    <div class="div-produtos-list-produto-preco">R$ ' + products[i + j][2] + '</div>';
            content += '    <div class="div-produtos-list-produto-comprar" onclick="buy(' + (i + j) + ')">Comprar</div>';
            content += '</div>';
        }
        content += '</diV>';
    }
    content += '<div class="div-button-cart" onclick="cart()">';
    content += '    Ir para o carrinho';
    content += '</div>';
    document.getElementById("divProducts").innerHTML = content;
}

function buy(index) {
    let storage = window.localStorage;
    let product = JSON.parse(storage.getItem(index));
    let indexOfQt = 3;

    if (product == null) {
        let newProduct = products[index];
        newProduct.push(1);
        storage.setItem(index, JSON.stringify(newProduct));
    } else {
        product[indexOfQt] = product[indexOfQt] + 1;
        storage.setItem(index, JSON.stringify(product));
    }
    alert("Item " + products[index][1] + " enviado para o carrinho.");
}

function cart() {
    window.location.replace("carrinho.html");
}