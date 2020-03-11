
$(document).ready(function () {
    $('#options-group').change(function (ev) {
        var target = ev.target;
        if (target.id === 'option2') {
            $('#margemErro').removeClass('invisible')
        } else {
            $('#margemErro').addClass('invisible')
        }
    })
})

function abrirTbDescritiva() {
    // Caso amostra
    var nomeVariavel = $('input[name="nomeVariavel"]').val();
    var populacao = $('input[name="dadosInp"]')[0];
    document.getElementById('nomeVariavel').innerHTML = nomeVariavel
    var populacaoArray = populacao.value.split(';');
    var agrupamentos = {};
    for(var i = 0;i < populacaoArray.length;i++) {
        var grupo = populacaoArray[i];
        if (typeof (agrupamentos[grupo]) === 'undefined') {
            agrupamentos[grupo] = 1;
        } else {
            agrupamentos[grupo]++;
        }
    }
    var FacDescritiva = 0
    var FacDescritivaPercent = 0
    for ( var aux in agrupamentos) {
        if (typeof acm === 'undefined'){
        var acm = `<tr><td>${aux}</td><td>${agrupamentos[aux]}</td><td>${((agrupamentos[aux]*100)/populacaoArray.length).toFixed(2)}%</td><td>${FacDescritiva = FacDescritiva + agrupamentos[aux]}</td><td>${(FacDescritivaPercent = FacDescritivaPercent + ((agrupamentos[aux]*100)/populacaoArray.length)).toFixed(2)}%</td></tr>`
        }else{
            var acm = acm + `<tr><td>${aux}</td><td>${agrupamentos[aux]}</td><td>${((agrupamentos[aux]*100)/populacaoArray.length).toFixed(2)}%</td><td>${FacDescritiva = FacDescritiva + agrupamentos[aux]}</td><td>${(FacDescritivaPercent = FacDescritivaPercent + ((agrupamentos[aux]*100)/populacaoArray.length)).toFixed(2)}%</td></tr>`
        document.getElementById('frequencia-descritiva').innerHTML = acm
        }
        }
    console.log(agrupamentos)

    for(var chave in agrupamentos) {
        if (chave.length > 0) {
            let novaDiv = document.createElement('div');
            novaDiv.setAttribute('class', 'form-group col-12');

            let novoInput = document.createElement('input');
            novoInput.setAttribute('class', 'form-control')
            novoInput.setAttribute('placeholder', `Por favor digite a ordem do valor ${chave}`);
            novoInput.setAttribute('max', Object.keys(agrupamentos).length);
            novoInput.setAttribute('type', 'number');

            novaDiv.appendChild(novoInput);

            document.getElementById('ordernarInputs').appendChild(novaDiv);
        }
    }

    var ordemVariavel = $('input[name="ordemVariavel"]');
    var tipoVariavel = $('input[name="options"]:checked')[0];

    if (tipoVariavel.id === 'option2') {
        var margemErro = $('#margemErro');

        var n0 = 1/(margemErro * margemErro);
        var n = (populacaoArray.length * n0) / (populacaoArray + n0)
    }
    document.getElementById('tabela-descritiva').style.display='block'
    document.getElementById('medida-separatriz').style.display='block'
}
function separatrizSelect() {
    if(document.getElementById('selectSeparatriz').value =='0'){
        document.getElementById('rg4').style.display='none'
        document.getElementById('rg5').style.display='none'
        document.getElementById('rg10').style.display='none'
        document.getElementById('rg100').style.display='none'
    }
    if(document.getElementById('selectSeparatriz').value =='4'){
        document.getElementById('rg4').style.display='block'
        document.getElementById('rg5').style.display='none'
        document.getElementById('rg10').style.display='none'
        document.getElementById('rg100').style.display='none'
    }
    if(document.getElementById('selectSeparatriz').value =='5'){
        document.getElementById('rg4').style.display='none'
        document.getElementById('rg5').style.display='block'
        document.getElementById('rg10').style.display='none'
        document.getElementById('rg100').style.display='none'
    }
    if (document.getElementById('selectSeparatriz').value =='10'){
        document.getElementById('rg4').style.display='none'
        document.getElementById('rg5').style.display='none'
        document.getElementById('rg10').style.display='block'
        document.getElementById('rg100').style.display='none'
    }
    if (document.getElementById('selectSeparatriz').value =='100'){
        document.getElementById('rg4').style.display='none'
        document.getElementById('rg5').style.display='none'
        document.getElementById('rg10').style.display='none'
        document.getElementById('rg100').style.display='block'
    }
}
