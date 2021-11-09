window.onload = function() {
    fillCartCards();
}

function fillCartCards() {
    let keys = Object.keys(localStorage);
    let content = "";
    let price = parseFloat(0);

    for (let i = 0; i < keys.length; i++) {
        let product = JSON.parse(window.localStorage.getItem(keys[i]));
        content += '<div class="div-cart-card-root">';
        content += ' <div class="div-cart-img">';
        content += '    <img src="../img/' + product[0] + '" />';
        content += ' </div>';
        content += ' <div class="div-cart-info">';
        content += '    <div class="div-cart-info-title">';
        content += '        <p>' + product[1] + '</p>';
        content += '    </div>';
        content += '    <div class="div-cart-info-content">';
        content += '        <p><b>Quantidade: </b>' + product[3] + '</p>';
        content += '    </div>';
        content += '    <div class="div-cart-info-content">';
        content += '        <p><b>Preço únitario: </b>R$ ' + product[2] + '</p>';
        content += '    </div>';
        content += ' </div>';
        content += '</div>';
        price += parseFloat(product[2].replace(",", ".")) * parseFloat(product[3]);
    }

    if (keys.length > 0) {
        content += '<div class="div-total-root">';
        content += '    <div class="div-total-content">';
        content += '        <p>Total</p>';
        content += '    </div>';
        content += '    <div class="div-total-price">';
        content += '        <p>R$' + price.toFixed(2).toString().replace(".", ",") + '</p>';
        content += '    </div>';
        content += '    <div class="div-cart-buttons">';
        content += '        <div class="div-cart-button-continue" onclick="keepBuying()"/>';
        content += '            Continuar Comprando';
        content += '        </div>';
        content += '        <div class="div-cart-button-finalize" onclick="finalize()"/>';
        content += '            Finalizar';
        content += '        </div>';
        content += '    </div>'
        content += '</div>';

        document.getElementById("divCartRoot").innerHTML = content;
    }
}

function finalize() {
    alert("Compra realizada com sucesso!");
    window.localStorage.clear();
    window.location.replace("../index.html");
}

function keepBuying() {
    window.location.replace("produtos.html");
}