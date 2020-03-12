// Margem de erro (input)
/*
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
 */
function abrirTbDescritiva() {
    // Caso amostra
    let nomeVariavel = $('input[name="nomeVariavel"]').val();
    let populacao = $('input[name="dadosInp"]')[0];
    document.getElementById('nomeVariavel').innerHTML = nomeVariavel
    let populacaoArray = populacao.value.split(';');
    let agrupamentos = {};
    for(var i = 0;i < populacaoArray.length;i++) {
        let grupo = populacaoArray[i];
        if (typeof (agrupamentos[grupo]) === 'undefined') {
            agrupamentos[grupo] = 1;
        } else {
            agrupamentos[grupo]++;
        }
    }
    //Frequências tabela/cálculo
    let fRDiscretaN = []
    let fRDiscretaS = []
    let FacDescritiva = 0
    let FacDescritivaPercent = 0
    for ( var aux in agrupamentos) {
        if (typeof acm === 'undefined'){
            var acm = `<tr><td>${aux}</td><td>${agrupamentos[aux]}</td><td>${((agrupamentos[aux]*100)/populacaoArray.length).toFixed(2)}%</td><td>${FacDescritiva = FacDescritiva + agrupamentos[aux]}</td><td>${(FacDescritivaPercent = FacDescritivaPercent + ((agrupamentos[aux]*100)/populacaoArray.length)).toFixed(2)}%</td></tr>`
            fRDiscretaN.push((agrupamentos[aux]*100)/populacaoArray.length)
            fRDiscretaS.push(aux)
        }else{
            var acm = acm + `<tr><td>${aux}</td><td>${agrupamentos[aux]}</td><td>${((agrupamentos[aux]*100)/populacaoArray.length).toFixed(2)}%</td><td>${FacDescritiva = FacDescritiva + agrupamentos[aux]}</td><td>${(FacDescritivaPercent = FacDescritivaPercent + ((agrupamentos[aux]*100)/populacaoArray.length)).toFixed(2)}%</td></tr>`
            document.getElementById('frequencia-descritiva').innerHTML = acm
            fRDiscretaN.push((agrupamentos[aux]*100)/populacaoArray.length)
            fRDiscretaS.push(aux).toString()
        }
        }
    //Cálculo Moda
    var acmModa = 0
    var modaDiscreta = 0
    for(var aux in agrupamentos){
        if(acmModa === agrupamentos[aux]){
            modaDiscreta = "Não Existe"
        }
        if(agrupamentos[aux] > acmModa){
            acmModa = agrupamentos[aux]
            modaDiscreta = aux
        }
    }
    //Cálculo Média
    var acmMedia = 0
    var mediaDiscreta = 0
    for(aux in agrupamentos) {
        acmMedia = acmMedia + (Number(aux) * agrupamentos[aux])
    }
    mediaDiscreta = acmMedia/populacaoArray.length
    document.getElementById('modaDiscreta').innerHTML = modaDiscreta
    document.getElementById('mediaDiscreta').innerHTML = mediaDiscreta.toFixed(2)
    console.log(agrupamentos)
    //Ordenação
/*
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
*/
//Margem de erro
/*
    var ordemVariavel = $('input[name="ordemVariavel"]');
    var tipoVariavel = $('input[name="options"]:checked')[0];

    if (tipoVariavel.id === 'option2') {
        var margemErro = $('#margemErro');

        var n0 = 1/(margemErro * margemErro);
        var n = (populacaoArray.length * n0) / (populacaoArray + n0)
    }

 */
    document.getElementById('tabela-descritiva').style.display='block'
    document.getElementById('medida-separatriz').style.display='block'

    // Gráfico
    var ctx = document.getElementById('myChart');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: fRDiscretaS,
            datasets: [{
                label: nomeVariavel,
                data: fRDiscretaN,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
    // Fim Gráfico
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
