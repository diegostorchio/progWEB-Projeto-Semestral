window.onload = function() {
    fillDepoCard(0);
}

var index = 0
var depo = [
    ["Bolos saborosos e com uma textura inigualável, equipe atensiosamente e muito competente!!!", "Cristina Almeida"],
    ["Atendimento diferenciado, bolos deliciosos e produtos de alta qualidade!", "Bruna Gabriele"],
    ["Melhores tortas que já experimentei, as sobremesas são as melhores! #top", "Pedro Henrique"],
]

function fillDepoCard(index) {
    console.log(index);

    let content = "";

    content = '<div class="card p-3 ">';
    content += '  <blockquote class="blockquote mb-0 card-body ">';
    content += '        <p>' + depo[index][0] + '</p>';
    content += '        <footer class="blockquote-footer ">';
    content += '            <small class="text-muted ">';
    content += '            <cite title="Título da fonte">' + depo[index][1] + '</cite>';
    content += '        </small>';
    content += '        </footer>';
    content += '    </blockquote>';
    content += '</div>';

    document.getElementById("divDepoCard").innerHTML = content;
}

function back() {
    index--;
    if (index < 0) {
        index = depo.length - 1;
    }
    fillDepoCard(index);
}

function next() {
    index++;
    if (index > depo.length - 1) {
        index = 0;
    }
    fillDepoCard(index);
}