


let lista_lancamentos = [];
function pegarDados(){
    
    console.log(lista_lancamentos)
    let lab_Origem = document.querySelector("#labOrigem").innerHTML;
    let Origem = document.getElementById("cOrigem").value;
    let lab_Destino = document.querySelector("#labDestino").innerHTML;
    let Destino = document.getElementById("cDestino").value;
    let lab_Km_Inicial = document.querySelector("#labKmInicial").innerHTML;
    let Km_Inicial = document.getElementById("cKmInicial").value;
    let lab_Km_Final = document.querySelector("#labKmFinal").innerHTML;
    let km_Final = document.getElementById("cKmFinal").value;
    let lab_Descricao = document.querySelector("#labDescricao").innerHTML;
    let Descricao = document.getElementById("cDescricao").value;
    
    
    lista_lancamentos.push(
        lab_Origem, Origem,
        lab_Destino, Destino,
        lab_Km_Inicial, Km_Inicial,
        lab_Km_Final, km_Final,
        lab_Descricao, Descricao);
    

    var pegaValor = "";
    
    for(indice = 0; indice < lista_lancamentos.length; indice ++){
        pegaValor = pegaValor + lista_lancamentos[indice] + " ";
      
    }
     
    document.getElementById('pOrigem').innerHTML = pegaValor
    document.getElementById("cOrigem").value = "";
    document.getElementById("cDestino").value = "";
    document.getElementById("cKmInicial").value = "";
    document.getElementById("cKmFinal").value = "";
    document.getElementById("cDescricao").value = "";

    

}



// pegarDados();

//let valor = Object.values(num);
//console.log(valorkey);
//console.log(valor);

//var id = console.log(Object.keys(num)[1]);

function criarTabela(conteudo) {
    var tabela = document.createElement("table");
    var thead = document.createElement("thead");
    var tbody = document.createElement("tbody");
    var thd = function (i) {
        return (i == 0) ? "th" : "td";
    };
    for (var i = 0; i < conteudo.length; i++) {
        var tr = document.createElement("tr");
        for (var o = 0; o < conteudo[i].length; o++) {
            var t = document.createElement(thd(i));
            var texto = document.createTextNode(conteudo[i][o]);
            t.appendChild(texto);
            tr.appendChild(t);
        }
        (i == 0) ? thead.appendChild(tr): tbody.appendChild(tr);
    }
    tabela.appendChild(thead);
    tabela.appendChild(tbody);
    
    return tabela;
    
}    

