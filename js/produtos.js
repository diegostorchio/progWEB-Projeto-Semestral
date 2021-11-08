window.onload = function() {
    fillProductsCard()
}

var products = [
    ["bolocenouravulcao.jpeg", "Bolo de cenoura vulcão", "R$ 35,00 kg"],
    ["chocolateCmorangos.jpeg", "Bolo de chocolate com morango", "R$ 29,99 kg"],
    ["sonhodevalsa.jpeg", "Bolo de sonho de valsa", "R$ 39,99 kg"],
    ["bolobombom.jpeg", "Bolo de bombom de morango", "R$ 29,00 kg"],
    ["bolodeaniver.jpeg", "Bolo dois amores", "R$ 35,99 kg"],
    ["bololimao.jpeg", "Bolo de limão", "R$ 15,99 kg"],
    ["bolopacoca.jpeg", "Bolo de paçoca", "R$ 13,00 kg"],
    ["brownie.jpeg", "Brownie de chocolate com nozes", "R$ 10,99 kg"],
    ["pavechocolate.jpeg", "Pavê de chocolate", "R$ 44,99 kg"]
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
            content += '    <div class="div-produtos-list-produto-preco">' + products[i + j][2] + '</div>';
            content += '    <div class="div-produtos-list-produto-comprar" onclick="buy(' + (i + j) + ')">Comprar</div>';
            content += '</div>';
        }
        content += '</diV>';
    }
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
}